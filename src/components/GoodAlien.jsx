import styles from './GoodAlien.module.scss';

import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  hideTextGood,
  addStop,
  removeStop,
  showTextGood,
  changeChosenTextGood,
  removeCatchedAlien,
} from '../slices/aliensSlice';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const GoodAlien = () => {
  const dispatch = useDispatch();

  const goodAlien = useRef();

  const textIsHide = useSelector(
    (state) => state.aliens.entities.alienGood.textIsHide
  );

  const alienIsStopped = useSelector(
    (state) => state.aliens.entities.alienGood.isStopped
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideTextGood());
    }, 5000);
  }, []);

  //goodAlien
  useGSAP(() => {
    const animate = () => {
      const element = goodAlien.current;
      if (element) {
        gsap.to(element, {
          duration: 4,
          x: 'random(0, 250)',
          y: 'random(0, 450)',
          delay: 2,
          ease: 'none',
          onComplete: animate, // Call the function again when the animation completes
        });
      }
    };

    animate();
  });

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const chosenText = useSelector(
    (state) => state.aliens.entities.alienGood.chosenText
  );

  const randomText = useSelector(
    (state) => state.aliens.entities.alienGood.texts
  )[chosenText];

  const text =
    textIsHide === true ? null : (
      <div className={styles.textBG}>
        <span className={styles.textOfAlien}>{randomText}</span>
      </div>
    );

  const alien =
    alienIsStopped === true ? (
      <div className={styles.stoppedAlien}></div>
    ) : (
      <div
        onClick={() => {
          dispatch(removeCatchedAlien());
          dispatch(addStop());
          dispatch(showTextGood());
          dispatch(changeChosenTextGood(getRandomInt(5)));
          setTimeout(() => {
            dispatch(removeStop());
            dispatch(hideTextGood());
          }, 4000);
        }}
        className={styles.goodAlien}></div>
    );

  return (
    <div className={styles.alienWithText} ref={goodAlien}>
      {alien}
      {text}
    </div>
  );
};

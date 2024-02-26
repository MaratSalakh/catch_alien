import styles from './GoodAlien.module.scss';

import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  hideTextGood,
  addStop,
  removeStop,
  showTextGood,
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
          x: 'random(0, 300)',
          y: 'random(0, 500)',
          delay: 2,
          ease: 'none',
          onComplete: animate, // Call the function again when the animation completes
        });
      }
    };

    animate();
  });

  const alien =
    alienIsStopped === true ? (
      <div className={styles.stoppedAlien}></div>
    ) : (
      <div
        onClick={() => {
          dispatch(addStop());
          dispatch(showTextGood());
          setTimeout(() => {
            dispatch(removeStop());
            dispatch(hideTextGood());
          }, 4000);
        }}
        className={styles.goodAlien}></div>
    );

  const text =
    textIsHide === true ? null : <div className={styles.textOfAlien}></div>;

  return (
    <div className={styles.alienWithText} ref={goodAlien}>
      {alien}
      {text}
    </div>
  );
};

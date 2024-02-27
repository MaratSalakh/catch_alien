import styles from './BadAlien.module.scss';

import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  hideTextBad,
  removeBubble,
  addCatchedAlien,
  addBubble,
  showTextBad,
} from '../slices/aliensSlice';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const BadAlien = () => {
  const dispatch = useDispatch();

  const badAlien = useRef();

  const textIsHide = useSelector(
    (state) => state.aliens.entities.alienBad.textIsHide
  );

  const alienIsBubbled = useSelector(
    (state) => state.aliens.entities.alienBad.isBubbled
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideTextBad());
    }, 5000);
  }, []);

  const movementTop = () => {
    gsap.to(badAlien.current, {
      duration: 3,
      x: -150,
      y: -500,
      ease: 'none',
    });
  };

  //badAlien
  useGSAP(() => {
    const animate = () => {
      const tween = gsap.to(badAlien.current, {
        duration: 4,
        x: 'random(-300, 0)',
        y: 'random(0, 450)',
        delay: 1,
        ease: 'none',
        paused: alienIsBubbled,
        onComplete: animate, // Call the function again when the animation completes
      });

      return tween;
    };

    const tween = animate();

    return () => tween.kill();
  });

  const text =
    textIsHide === true ? null : <div className={styles.textOfAlien}></div>;

  const alienForm =
    alienIsBubbled === true ? (
      <div className={styles.bubbledAlien}></div>
    ) : (
      <div
        className={styles.badAlien}
        onClick={() => {
          dispatch(addBubble());
          dispatch(addCatchedAlien());
          movementTop();
          setTimeout(() => {
            dispatch(removeBubble());
            dispatch(showTextBad());
          }, 3000);
          setTimeout(() => {
            dispatch(hideTextBad());
          }, 8000);
        }}></div>
    );

  return (
    <div className={styles.alienWithText} ref={badAlien}>
      {alienForm}
      <div>{text}</div>
    </div>
  );
};

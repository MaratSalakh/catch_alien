import styles from './BadAlien.module.scss';

import { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { addCatchedAlien } from '../slices/aliensSlice';
import { hideTextBad } from '../slices/aliensSlice';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const BadAlien = () => {
  const dispatch = useDispatch();

  const badAlien = useRef();

  setTimeout(() => {
    dispatch(hideTextBad());
  }, 5000);

  //badAlien
  useGSAP(() => {
    const animate = () => {
      const element = badAlien.current;
      if (element) {
        const randomX = Math.random() * 300;
        const randomY = Math.random() * 500;

        gsap.to(element, {
          duration: 4,
          x: randomX,
          y: randomY,
          delay: 2,
          ease: 'none',
          onComplete: animate, // Call the function again when the animation completes
        });
      }
    };

    animate();
  });

  return (
    <div className={styles.alienWithText} ref={badAlien}>
      <div
        className={styles.badAlien}
        onClick={() => dispatch(addCatchedAlien())}></div>
      <div className={styles.textOfAlien}></div>
    </div>
  );
};

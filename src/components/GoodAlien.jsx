import styles from './GoodAlien.module.scss';

import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { hideTextGood } from '../slices/aliensSlice';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const GoodAlien = () => {
  const dispatch = useDispatch();

  const goodAlien = useRef();

  const textIsHide = useSelector(
    (state) => state.aliens.entities.alienGood.textIsHide
  );

  setTimeout(() => {
    dispatch(hideTextGood());
  }, 5000);

  //goodAlien
  useGSAP(() => {
    const animate = () => {
      const element = goodAlien.current;
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

  const text =
    textIsHide === true ? null : <div className={styles.textOfAlien}></div>;
  return (
    <div className={styles.alienWithText} ref={goodAlien}>
      <div className={styles.goodAlien}></div>
      {text}
    </div>
  );
};

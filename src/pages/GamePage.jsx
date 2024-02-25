import { useEffect, useRef } from 'react';

import styles from './GamePage.module.scss';

import { saveTime } from '../slices/timerSlice';
import { addAlien } from '../slices/catchedAliensSlice';

import { useDispatch, useSelector } from 'react-redux';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GamePage = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.timer.value);
  const catchedAliens = useSelector((state) => state.catchedAliens.value);

  const alien = useRef();
  const unit1 = useRef();
  const unit2 = useRef();
  const unit3 = useRef();

  useGSAP(() => {
    const animate = () => {
      const element = alien.current;
      if (element) {
        const randomX = Math.random() * 300;
        const randomY = Math.random() * 500;

        gsap.to(element, {
          duration: 2,
          x: randomX,
          y: randomY,
          ease: 'expo.out',
          onComplete: animate, // Call the function again when the animation completes
        });
      }
    };

    animate();
  });

  useGSAP(() => {
    const animate = () => {
      const element = unit1.current;
      if (element) {
        const randomX = Math.random() * 150;
        const randomY = Math.random() * 50;

        gsap.to(element, {
          duration: 2,
          x: randomX,
          y: randomY,
          ease: 'none',
          onComplete: animate, // Call the function again when the animation completes
        });
      }
    };

    animate();
  });

  useGSAP(() => {
    const animate = () => {
      const element = unit2.current;
      if (element) {
        const randomX = Math.random() * 150;
        const randomY = Math.random() * 50;

        gsap.to(element, {
          duration: 2,
          x: randomX,
          y: randomY,
          ease: 'none',
          onComplete: animate, // Call the function again when the animation completes
        });
      }
    };

    animate();
  });

  useGSAP(() => {
    const animate = () => {
      const element = unit3.current;
      if (element) {
        const randomX = Math.random() * 150;

        gsap.to(element, {
          duration: 2,
          x: randomX,
          ease: 'none',
          onComplete: animate, // Call the function again when the animation completes
        });
      }
    };

    animate();
  });

  useEffect(() => {
    if (time > 29) {
      return;
    }

    const intervalId = setInterval(() => {
      dispatch(saveTime(1));
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className={styles.game}>
      <div>{time}</div>
      <div>{catchedAliens}</div>
      <div
        ref={alien}
        className={styles.alien}
        onClick={() => dispatch(addAlien())}></div>
      <div ref={unit1} className={styles.unit1}></div>
      <div ref={unit2} className={styles.unit2}></div>
      <div ref={unit3} className={styles.unit3}></div>
    </div>
  );
};

export default GamePage;

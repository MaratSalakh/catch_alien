import styles from './SecondInstructionPage.module.scss';

import { useState, useRef, useEffect } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

const SecondInctructionPage = () => {
  const [alienIsStopped, setAlienIsStopped] = useState(false);

  const container = useRef();

  useGSAP(() => {
    gsap.to(container.current, {
      y: '20%', // Move the element   100% of its width to the left
      duration: 0.5, // Duration of the animation
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation each cycle
      ease: 'power1.inOut', // Easing function for smooth animation
    });
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (alienIsStopped === false) {
        setAlienIsStopped(true);
      } else {
        setAlienIsStopped(false);
      }
    }, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <div className={styles.startingPage}>
      <div className={styles.woodenBG}>
        {alienIsStopped === true ? (
          <div className={styles.stoppedAlien}></div>
        ) : (
          <div className={styles.alien}></div>
        )}
        <div ref={container} className={styles.hand}></div>
        <div className={styles.instruction}></div>
        <Link className={styles.startButton} to="/game">
          ПОГНАЛИ
        </Link>
      </div>
    </div>
  );
};

export default SecondInctructionPage;

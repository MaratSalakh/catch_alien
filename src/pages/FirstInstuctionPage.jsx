import { useRef, useEffect, useState } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import styles from './FirstInstructionPage.module.scss';
import { Link } from 'react-router-dom';

const FirstInctructionPage = () => {
  const [alienIsBubbled, setAlienIsBubbled] = useState(false);

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
      if (alienIsBubbled === false) {
        setAlienIsBubbled(true);
      } else {
        setAlienIsBubbled(false);
      }
    }, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <div className={styles.startingPage}>
      <div className={styles.woodenBG}>
        {alienIsBubbled === true ? (
          <div className={styles.bubbledAlien}></div>
        ) : (
          <div className={styles.alien}></div>
        )}
        <div ref={container} className={styles.hand}></div>
        <div className={styles.instruction}></div>
        <Link className={styles.startButton} to="/2">
          ЯСНО
        </Link>
      </div>
    </div>
  );
};

export default FirstInctructionPage;

import styles from './StartingPage.module.scss';

import { useRef } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package
import { Link } from 'react-router-dom';

const StartingPage = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.to(container.current, {
      x: '20%', // Move the element   100% of its width to the left
      duration: 2, // Duration of the animation
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation each cycle
      ease: 'power1.inOut', // Easing function for smooth animation
    });
  });

  return (
    <div className={styles.startingPage}>
      <div
        ref={container}
        className={('alienBubble', styles.alienBubble)}></div>
      <h1 className={styles.greeting}>Поймай пришельца!</h1>
      <Link className={styles.startButton} to="/1">
        НАЧАТЬ
      </Link>
    </div>
  );
};

export default StartingPage;

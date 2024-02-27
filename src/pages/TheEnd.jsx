import { useEffect } from 'react';

import styles from './TheEnd.module.scss';

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const GamePage = () => {
  const time = useSelector((state) => state.timer.value);
  const catchedAliens = useSelector(
    (state) => state.aliens.catchedAliensCounter
  );

  const navigate = useNavigate();

  useEffect(() => {
    const twoSeconds = setTimeout(() => {
      navigate('/results');
    }, 2000);

    return () => clearTimeout(twoSeconds);
  });

  const timerStyle = time < 10 ? `00:0${time}` : `00:${time}`;
  const aliensCounter =
    catchedAliens < 10 ? `0${catchedAliens}/10` : `${catchedAliens}/10`;

  return (
    <div className={styles.game}>
      <div className={styles.catchedAliens}>
        <div className={styles.alienIcon}></div>
        {aliensCounter}
      </div>
      <div className={styles.timer}>
        <div className={styles.timerIcon}></div>
        {timerStyle}
      </div>
      <h1 className={styles.text1}>КОНЕЦ!</h1>
      <h2 className={styles.text2}>Пора узнать результат...</h2>
    </div>
  );
};

export default GamePage;

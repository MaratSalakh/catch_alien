import { useSelector, useDispatch } from 'react-redux';

import styles from './Results.module.scss';

import { Link } from 'react-router-dom';

import { refreshCatchedAlien } from '../slices/aliensSlice';

import { refreshTime } from '../slices/timerSlice';

const Results = () => {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.aliens.catchedAliensCounter);

  let stars;
  let description;

  if (points <= 2) {
    stars = (
      <div className={styles.stars}>
        <div className={styles.star}></div>
      </div>
    );
    description =
      'ТЕПЕРЬ ПОНЯТНО, ПОЧЕМУ ТЕБЯ НЕ ЗОВУТ СПАСАТЬ МИР. ПОПРОБУЕШЬ ЕЩЕ РАЗ?';
  } else if (2 < points <= 4) {
    stars = (
      <div className={styles.stars}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    );
    description =
      'ТЫ, КОНЕЧНО, НЕ СУПЕРГЕРОЙ, НО СВОЁ ДЕЛО ЗНАЕШЬ. ГОРОД ЕЩЕ НЕ СПАСЕН. ПОПРОБУЕШЬ ЕЩЕ РАЗ?';
  } else {
    stars = (
      <div className={styles.stars}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    );
    description = 'ЛУЧШИЙ ИЗ ЛУЧШИХ. НАСТОЯЩИЙ СПАСИТЕЛЬ ЧЕЛОВЕЧЕСТВА';
  }

  return (
    <div className={styles.startingPage}>
      <div className={styles.woodenBG}>
        {stars}
        <h1 className={styles.text}>{`Поймано ${points}/10!`}</h1>
        <span className={styles.text}>{description}</span>
        <Link
          onClick={() => {
            dispatch(refreshCatchedAlien());
            dispatch(refreshTime());
          }}
          className={styles.startButton}
          to="/2">
          ЕЩЕ РАЗ!
        </Link>
        <span className={styles.text}>поделиться</span>
        <div>
          <button className={styles.buttonTelegram}></button>
          <button className={styles.buttonOdnoklassniki}></button>
          <button className={styles.buttonVk}></button>
        </div>
      </div>
    </div>
  );
};

export default Results;

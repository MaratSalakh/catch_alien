import styles from './StartingPage.module.scss';

const StartingPage = () => {
  return (
    <div className={styles.startingPage}>
      <div className={styles.alienBubble}></div>
      <span className={styles.greeting}>Поймай пришельца!</span>
      <button className={styles.startButton}>НАЧАТЬ</button>
    </div>
  );
};

export default StartingPage;

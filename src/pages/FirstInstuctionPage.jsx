import styles from './FirstInstructionPage.module.scss';

const FirstInctructionPage = () => {
  return (
    <div className={styles.startingPage}>
      <div className={styles.woodenBG}>
        <div className={styles.alienBubble}></div>
        <div className={styles.instruction}></div>
        <button className={styles.startButton}>ЯСНО</button>
      </div>
    </div>
  );
};

export default FirstInctructionPage;

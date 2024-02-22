import styles from './SecondInstructionPage.module.scss';

const SecondInctructionPage = () => {
  return (
    <div className={styles.startingPage}>
      <div className={styles.woodenBG}>
        <div className={styles.alienBubble}></div>
        <div className={styles.hand}></div>
        <div className={styles.instruction}></div>
        <button className={styles.startButton}>ПОГНАЛИ</button>
      </div>
    </div>
  );
};

export default SecondInctructionPage;

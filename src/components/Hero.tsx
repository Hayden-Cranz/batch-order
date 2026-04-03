import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.label}>Independent apparel, made on demand</p>
        <h1 className={styles.headline}>
          Nothing ships<br />
          <strong>until it's wanted.</strong>
        </h1>
      </div>
      <div className={styles.right}>
        <p className={styles.body}>
          A marketplace for independent designers and the people who back their work.
          Designs go to production when real demand confirms them — not before.
          No overstock. No waste. No fast fashion.
        </p>
        <div className={styles.ctas}>
          <a href="#makers" className={`${styles.btn} ${styles.filled}`}>I'm a Maker</a>
          <a href="#backers" className={`${styles.btn} ${styles.ghost}`}>I'm a Backer</a>
        </div>
      </div>
    </section>
  );
}

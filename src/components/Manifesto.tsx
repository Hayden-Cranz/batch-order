import styles from './Manifesto.module.css';

export function Manifesto() {
  return (
    <div className={styles.manifesto}>
      <p className={styles.text}>
        Whatever we make<br />
        <strong>is actually being used.</strong>
      </p>
      <a href="#makers" className={styles.btn}>Get started →</a>
    </div>
  );
}

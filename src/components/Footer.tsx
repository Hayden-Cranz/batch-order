import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Batch Order</div>
      <div className={styles.tagline}>We only make what's ordered.</div>
      <div className={styles.copy}>© 2026 Batch Order — Coming Soon</div>
    </footer>
  );
}

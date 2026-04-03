import { Logo } from './Logo';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo size="sm" variant="full" />
      <div className={styles.tagline}>We only make what's ordered.</div>
      <div className={styles.copy}>© 2026 Batch Order</div>
    </footer>
  );
}

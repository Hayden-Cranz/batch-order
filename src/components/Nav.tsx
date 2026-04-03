import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Batch Order</div>
      <ul className={styles.links}>
        <li><a href="#how">How it works</a></li>
        <li><a href="#makers">Makers</a></li>
        <li><a href="#backers">Backers</a></li>
        <li><a href="#mission">Mission</a></li>
      </ul>
    </nav>
  );
}

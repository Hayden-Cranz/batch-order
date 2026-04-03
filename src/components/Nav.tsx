import { useState } from 'react';
import styles from './Nav.module.css';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>Batch Order</div>
        <ul className={styles.links}>
          <li><a href="#how">How it works</a></li>
          <li><a href="#makers">Makers</a></li>
          <li><a href="#backers">Backers</a></li>
          <li><a href="#mission">Mission</a></li>
        </ul>
        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
        </button>
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          <a href="#how"     onClick={() => setOpen(false)}>How it works</a>
          <a href="#makers"  onClick={() => setOpen(false)}>Makers</a>
          <a href="#backers" onClick={() => setOpen(false)}>Backers</a>
          <a href="#mission" onClick={() => setOpen(false)}>Mission</a>
          <div className={styles.mobileCtas}>
            <a href="#makers"  className={`${styles.mobileBtn} ${styles.filled}`} onClick={() => setOpen(false)}>I'm a Maker</a>
            <a href="#backers" className={`${styles.mobileBtn} ${styles.ghost}`}  onClick={() => setOpen(false)}>I'm a Backer</a>
          </div>
        </div>
      )}
    </>
  );
}

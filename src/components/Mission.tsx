import { useReveal } from '../hooks/useReveal';
import styles from './Mission.module.css';

export function Mission() {
  const ref = useReveal();

  return (
    <section
      className={`reveal ${styles.section}`}
      id="mission"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.header}>
        <span className={styles.label}>Our mission</span>
        <div className={styles.rule} />
      </div>
      <p className={styles.quote}>
        The apparel industry makes<br />
        <span>30–40% more than it ever sells.</span><br />
        We fixed the math.
      </p>
      <div className={styles.body}>
        <p>Brands guess at demand, place enormous orders, and when those guesses are wrong — and they often are — the surplus gets discounted, dumped, or destroyed. We built the opposite of that.</p>
        <p>Batch Order is a platform where demand comes first. Every piece made has a person waiting for it. That's not a revolutionary idea. It's just the obvious one that nobody built for independent designers.</p>
      </div>
    </section>
  );
}

import styles from './Ticker.module.css';

const ITEMS = [
  'Zero overstock',
  'Made on demand',
  'Independent designers',
  'Sustainable by design',
  'We only make what\'s ordered',
  'Apparel with intention',
];

export function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

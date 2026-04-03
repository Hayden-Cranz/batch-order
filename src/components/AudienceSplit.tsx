import { SignupForm } from './SignupForm';
import styles from './AudienceSplit.module.css';

const MAKER_PERKS = [
  'Zero upfront production cost',
  'Better economics than print-on-demand',
  'Your own campaign and designer profile',
  'A community that cares about craft',
  'Built for independents, not big brands',
];

const BACKER_PERKS = [
  'Designs you won\'t find anywhere else',
  'Know what\'s being made before it\'s made',
  'Support independent creators directly',
  'Fashion made with intention, not forecasts',
  'First to know when new drops happen',
];

export function AudienceSplit() {
  return (
    <div className={styles.split}>
      <div className={`${styles.panel} ${styles.tinted}`} id="makers">
        <p className={styles.tag}>For Makers</p>
        <h2 className={styles.headline}>Your design.<br />Your terms.<br />Your margin.</h2>
        <p className={styles.body}>
          No printing costs upfront. No boxes of unsold stock. Upload your design, write your story,
          and let demand confirm it before a single shirt gets made.
        </p>
        <ul className={styles.perks}>
          {MAKER_PERKS.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <SignupForm variant="maker" />
      </div>

      <div className={styles.panel} id="backers">
        <p className={styles.tag}>For Backers</p>
        <h2 className={styles.headline}>Back what<br />you actually<br />believe in.</h2>
        <p className={styles.body}>
          Tired of buying the same thing from the same brands? Batch Order surfaces independent
          designers — and your order is what makes their work real.
        </p>
        <ul className={styles.perks}>
          {BACKER_PERKS.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <SignupForm variant="backer" />
      </div>
    </div>
  );
}

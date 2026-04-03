import { useReveal } from '../hooks/useReveal';
import styles from './HowItWorks.module.css';

const STEPS = [
  {
    index: '01 / Makers upload',
    title: 'A designer submits their work',
    body: 'Independent makers upload their apparel designs — tees, hoodies, crewnecks. Each gets its own campaign page with a story, a price, and a batch threshold to hit before anything is produced.',
  },
  {
    index: '02 / Backers commit',
    title: 'Real people place real orders',
    body: 'Backers reserve their piece. No charge until the batch fills. When enough people commit, the campaign closes and goes to production. If it doesn\'t fill, nobody pays a thing.',
  },
  {
    index: '03 / Exactly that many',
    title: 'We produce the exact batch',
    body: 'Production runs for the number ordered. Not one more. Makers get paid. Backers get their piece. Nothing sits in a warehouse. Nothing ends up in a landfill. That\'s the whole model.',
  },
];

export function HowItWorks() {
  const headerRef = useReveal();

  return (
    <section className={styles.section} id="how">
      <div className={`reveal ${styles.header}`} ref={headerRef as React.RefObject<HTMLDivElement>}>
        <span className={styles.label}>How it works</span>
        <div className={styles.rule} />
      </div>
      <div className={styles.steps}>
        {STEPS.map((step, i) => (
          <Step key={i} {...step} delay={i} />
        ))}
      </div>
    </section>
  );
}

function Step({ index, title, body, delay }: { index: string; title: string; body: string; delay: number }) {
  const ref = useReveal();
  return (
    <div
      className={`reveal ${delay === 1 ? 'd1' : delay === 2 ? 'd2' : ''} ${styles.step}`}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <p className={styles.stepIndex}>{index}</p>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepBody}>{body}</p>
    </div>
  );
}

import styles from './Logo.module.css';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  /** 'full' = mark + wordmark, 'mark' = icon only */
  variant?: 'full' | 'mark';
};

export function Logo({ size = 'md', variant = 'full' }: Props) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <LeafMark />
      {variant === 'full' && (
        <span className={styles.wordmark}>Batch Order</span>
      )}
    </div>
  );
}

function LeafMark() {
  return (
    <svg
      className={styles.mark}
      viewBox="0 0 22 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Leaf body — organic, pointed top and bottom, widest at center */}
      <path
        d="M11 28 C5 22 2 16 2 11 C2 5.48 6.03 2 11 2 C15.97 2 20 5.48 20 11 C20 16 17 22 11 28Z"
        fill="#F5A623"
        fillOpacity="0.15"
      />
      <path
        d="M11 28 C5 22 2 16 2 11 C2 5.48 6.03 2 11 2 C15.97 2 20 5.48 20 11 C20 16 17 22 11 28Z"
        stroke="#D4900A"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Midrib — center vein from tip to stem */}
      <path
        d="M11 28 L11 3"
        stroke="#D4900A"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Left vein */}
      <path
        d="M11 14 C8 12 5 11 3 11"
        stroke="#D4900A"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Right vein */}
      <path
        d="M11 14 C14 12 17 11 19 11"
        stroke="#D4900A"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/*
        Leaf rotated ~32° clockwise = falling, blown by wind from upper-left.
        The leaf body is drawn upright then rotated. One side is slightly
        fuller (leeward, wind-blown). Stem curves opposite direction.
      */}

      {/* Leaf body — rotate 32° around center */}
      <g transform="rotate(32 16 16)">
        {/* Leeward (right) side is fuller — asymmetric, windblown */}
        <path
          d="M16 27 C9 21 6 16 6 11.5 C6 6.5 10.5 3 16 3 C21.5 3 26 6.5 26 11.5 C26 16 23 21 16 27Z"
          fill="#F5A623"
          fillOpacity="0.2"
        />
        <path
          d="M16 27 C9 21 6 16 6 11.5 C6 6.5 10.5 3 16 3 C21.5 3 26 6.5 26 11.5 C26 16 23 21 16 27Z"
          stroke="#D4900A"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        {/* Midrib */}
        <path
          d="M16 27 L16 3.5"
          stroke="#D4900A"
          strokeWidth="0.85"
          strokeLinecap="round"
          opacity="0.65"
        />
        {/* Upper lateral veins */}
        <path d="M16 13 C13.5 11.5 10.5 11 8 11"  stroke="#D4900A" strokeWidth="0.65" strokeLinecap="round" opacity="0.38"/>
        <path d="M16 13 C18.5 11.5 21.5 11 24 11"  stroke="#D4900A" strokeWidth="0.65" strokeLinecap="round" opacity="0.38"/>
        {/* Lower lateral veins */}
        <path d="M16 19 C14 17.5 11.5 17 9.5 17"  stroke="#D4900A" strokeWidth="0.55" strokeLinecap="round" opacity="0.25"/>
        <path d="M16 19 C18 17.5 20.5 17 22.5 17"  stroke="#D4900A" strokeWidth="0.55" strokeLinecap="round" opacity="0.25"/>
      </g>

      {/*
        Stem: after rotate(32), the leaf base (16,27) lands at roughly (9, 25.5).
        Curve it rightward — wind blows the stem forward while leaf trails behind.
      */}
      <path
        d="M9.5 25 C10.5 27.5 13 29.5 16 30"
        stroke="#D4900A"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}

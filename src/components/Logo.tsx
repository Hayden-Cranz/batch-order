import styles from './Logo.module.css';

type Props = {
  size?: 'sm' | 'md' | 'lg';
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
      viewBox="0 0 40 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Autumn gradient: bright yellow at base → orange → deep amber at tip */}
        <linearGradient id="leafGradLogo" x1="20" y1="46" x2="20" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F5CC20" />
          <stop offset="50%"  stopColor="#F07820" />
          <stop offset="100%" stopColor="#C84010" />
        </linearGradient>
        <linearGradient id="veinGradLogo" x1="20" y1="46" x2="20" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#7A4000" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#5A1800" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/*
        Broad ovate leaf (like the reference images) tilted 28° clockwise.
        Shape: wide in the middle, pointed tip, tapered base.
        Gradient: yellow base → orange → amber tip (autumn cherry leaf).
      */}
      <g transform="rotate(28 20 28)">
        {/* Leaf outline — broad ovate with pointed tip */}
        <path
          d="M20 5
             C23 6 28 10 31 16
             C34 22 34 30 31 36
             C28 42 24 46 20 47
             C16 46 12 42  9 36
             C6 30  6 22  9 16
             C12 10 17 6 20 5 Z"
          fill="url(#leafGradLogo)"
        />

        {/* Midrib — slightly curved like a real leaf */}
        <path
          d="M20 47 C20 38 19.5 26 20 16 C20.2 11 20 7 20 5"
          stroke="url(#veinGradLogo)"
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
        />

        {/* 3 pairs of lateral veins arching toward the leaf edge */}
        <path d="M20 38 C15 36 11 35  7 35" stroke="url(#veinGradLogo)" strokeWidth="0.8" strokeLinecap="round" fill="none"/>
        <path d="M20 38 C25 36 29 35 33 35" stroke="url(#veinGradLogo)" strokeWidth="0.8" strokeLinecap="round" fill="none"/>

        <path d="M20 28 C15 26 10 24  6 24" stroke="url(#veinGradLogo)" strokeWidth="0.75" strokeLinecap="round" fill="none"/>
        <path d="M20 28 C25 26 30 24 34 24" stroke="url(#veinGradLogo)" strokeWidth="0.75" strokeLinecap="round" fill="none"/>

        <path d="M20 18 C17 16 13 15 10 15" stroke="url(#veinGradLogo)" strokeWidth="0.65" strokeLinecap="round" fill="none" opacity="0.8"/>
        <path d="M20 18 C23 16 27 15 30 15" stroke="url(#veinGradLogo)" strokeWidth="0.65" strokeLinecap="round" fill="none" opacity="0.8"/>
      </g>

      {/* Stem — curves away from leaf direction, suggesting wind movement */}
      <path
        d="M11 46 C10 49 10.5 52 13 54"
        stroke="#C84010"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />
    </svg>
  );
}

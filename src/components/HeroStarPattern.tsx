import styles from "./HeroStarPattern.module.css";

/** 4-pointed star outline (8 vertices: outer at 0/90/180/270°, inner at 45/135/225/315°) */
const STAR_POINTS = "12,2 16,10 24,12 16,14 12,22 8,14 0,12 8,10";

export function HeroStarPattern() {
  return (
    <div className={styles.wrap} aria-hidden>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="heroStarPattern"
            width="48"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points={STAR_POINTS}
              fill="none"
              stroke="rgba(123, 104, 166, 0.28)"
              strokeWidth="0.8"
            />
            <polygon
              points={STAR_POINTS}
              fill="none"
              stroke="rgba(123, 104, 166, 0.28)"
              strokeWidth="0.8"
              transform="translate(24, 48)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroStarPattern)" />
      </svg>
    </div>
  );
}

import styles from "./HexagonAvatar.module.css";

const PROFILE_IMAGE = "/profile.png";

export function HexagonAvatar() {
  return (
    <div className={styles.wrap} role="img" aria-label="Portrait of Esther Joseph">
      <div className={styles.avatarImage}>
        <img src={PROFILE_IMAGE} alt="Esther Joseph" width={160} height={160} />
      </div>
      <svg
        className={styles.circleOutline}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r="49"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

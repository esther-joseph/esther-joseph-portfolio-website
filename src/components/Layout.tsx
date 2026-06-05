import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.layout}>
      <header className={styles.bar}>
        <div className={styles.barInner}>
          <a href="#top" className={styles.wordmark} onClick={closeMenu}>
            <span className={styles.dot} />
            ESTHER&nbsp;JOSEPH
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen ? "true" : "false"}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
          <nav
            id="primary-nav"
            className={`${styles.primaryNav} ${menuOpen ? styles.open : ""}`}
            aria-label="Sections"
          >
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Work</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

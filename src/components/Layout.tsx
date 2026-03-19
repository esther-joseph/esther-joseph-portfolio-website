import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { contact } from "@/data/resume";
import styles from "./Layout.module.css";

export function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setDrawerOpen(true)}
          aria-expanded={drawerOpen ? "true" : "false"}
          aria-controls="drawer"
          aria-label="Open menu"
        >
          <span className={styles.menuIcon} aria-hidden>
            ☰
          </span>
        </button>
        <Link to="/" className={styles.logo} onClick={closeDrawer}>
          Esther Joseph
        </Link>
      </header>

      <div
        id="drawer"
        className={styles.drawer}
        data-open={drawerOpen}
        aria-hidden={drawerOpen ? "false" : "true"}
      >
        <div
          className={styles.drawerBackdrop}
          onClick={closeDrawer}
          aria-hidden
        />
        <aside className={styles.drawerPanel}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            ×
          </button>
          <nav className={styles.drawerNav} aria-label="Main">
            <a
              href="#top"
              className={styles.drawerLink}
              onClick={closeDrawer}
            >
              Home
            </a>
            <a
              href="#experience"
              className={styles.drawerLink}
              onClick={closeDrawer}
            >
              Works
            </a>
            <a
              href="#contact"
              className={styles.drawerLink}
              onClick={closeDrawer}
            >
              Contact
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.drawerLinkExternal}
              onClick={closeDrawer}
            >
              GitHub
            </a>
          </nav>
        </aside>
      </div>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "../css/Toggle.module.css";

export default function ThemeToggle() {
  // 'mounted' state helps avoid hydration mismatches
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect runs only on the client side after hydration
  useEffect(() => setMounted(true), []);

  // Avoids rendering the button on the server to prevent hydration errors
  if (!mounted) return null;

  // Function to handle the theme change
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <label className={styles.switch} htmlFor="togBtn">
        <input type="checkbox" id="togBtn" onChange={toggleTheme} />
        <div className={`${styles.slider} ${styles.round}`}>
          <span className={styles.on}>dark</span>
          <span className={styles.off}>light</span>
        </div>
      </label>
    </>
  );
}

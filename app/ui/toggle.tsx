"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "../css/Toggle.module.css";

export default function ThemeToggle() {
  // 'mounted' state helps avoid hydration mismatches
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect runs only on the client side after hydration TODO:
  useEffect(() => setMounted(true), []);

  // Avoids rendering the button on the server to prevent hydration errors TODO:
  if (!mounted) return null;

  // Function to handle the theme change
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <input
        type="checkbox"
        className={styles.toggle}
        id="tog"
        onChange={toggleTheme}
      />
      <label htmlFor="tog">
        <span className={styles.sw}></span>
        <span className={styles.small}></span>
      </label>
    </>
  );
}

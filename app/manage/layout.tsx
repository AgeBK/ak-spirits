import "../globals.css";
import styles from "@/app/css/manage/ManagePage.module.css";

// manage folder seperate from the default routes (authorised users only)
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}

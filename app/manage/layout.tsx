import "../globals.css";
import styles from "@/app/css/manage/ManageLayout.module.css";
import { Theme } from "../ui/theme";

// manage folder seperate from the default routes (authorised users only)
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Theme
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className={styles.layout}>{children}</main>
        </Theme>
      </body>
    </html>
  );
}

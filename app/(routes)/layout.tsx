import type { Metadata } from "next";
import { Theme } from "../ui/theme";
import Container from "../ui/container";
import "../globals.css";

// import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "AK Spirits - The biggest range at the best prices guaranteed!!",
  description:
    "AK Spirits - All of your fine spirits needs at the best prices guaranteed!! Extensive range of the finest spirits from around the world",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <Container>{children}</Container>
        </Theme>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Collab.ai",
  description:
    "Multiplayer AI rooms where teams share one agent, one conversation, and human-approved file changes.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

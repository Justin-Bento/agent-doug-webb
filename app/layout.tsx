import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Webb",
  description: "Website design developer for a real estate sales person for Douglas J. Webb.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}

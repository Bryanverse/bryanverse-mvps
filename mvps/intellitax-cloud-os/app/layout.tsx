import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IntelliTax Cloud OS",
  description: "AI-operated tax enterprise operating system",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

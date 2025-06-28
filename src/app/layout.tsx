import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirara - Luxury Skincare",
  description: "Nourish your skin with the gentle touch of sakura. Premium body lotion with natural Japanese ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

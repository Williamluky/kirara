import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirara - Luxury Skincare",
  description: "Nourish your skin with the gentle touch of sakura. Premium body lotion with natural Japanese ingredients.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

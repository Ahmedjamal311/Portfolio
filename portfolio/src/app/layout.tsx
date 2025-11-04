import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Portfolio",
  description: "Modern Black & Gold Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
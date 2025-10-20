import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Developer Portfolio", // Changed from "Create Next App"
  description: "A showcase of my work and skills", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Bar - Added to the layout */}
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between">
            <a href="/" className="text-white text-xl font-bold">
              Ahmed Jamal
            </a>
            <div className="space-x-4">
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="/about" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="/contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </nav>
        
        {/* This is where your page content will be injected */}
        {children}
      </body>
    </html>
  );
}
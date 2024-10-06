import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "My Game Tracker In Next",
  description: "A simple game post app with comments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-green-500 font-mono">{children}</body>
    </html>
  );
}

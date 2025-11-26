import { Geist } from "next/font/google";
import "./globals.css";
import AuthProvider from "../components/AuthProvider"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blush Bazaar",
  description: "A Next.js shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
        style={{
          backgroundColor: "#fff",
          color: "black",
          fontFamily: "var(--font-geist-sans)",
          
        }}
      >
        <AuthProvider>
          <Navbar/>
          <main>
            {children}
            </main>
            <Footer/>
            </AuthProvider>
      </body>
    </html>
  );
}

import { Instrument_Sans, Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { Metadata } from "next";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dylan Hoover - Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSans.variable}`}>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Nav />
          <div className="container">{children}</div>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

import StyledComponentsRegistry from "../lib/registry";
import { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/globals.css";

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
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <div className="container">{children}</div>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

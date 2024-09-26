import type { Metadata } from "next";
import "./globals.css";
import PortfolioWrapper from "./_components/layouts/portfolioLayout";

export const metadata: Metadata = {
  title: "Arinzechukwu",
  description: "A web developer's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scrollbar scrollbar-thumb-port/15 scrollbar-track-darkport/45">
        <PortfolioWrapper>{children}</PortfolioWrapper>
      </body>
    </html>
  );
}

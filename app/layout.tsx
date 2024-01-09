import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

const font = Questrial({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Designs by Regis NDIZIHIWE",
  description: "Curated list of design projects by Regis NDIZIHIWE",
  keywords : ["Regis NDIZIHIWE, design, ui, ux, web, graphic, product, designer, developer, kigali, rwanda, africa", "ui designer", "ux designer","regisndizihiwe.me" , "designs.regisndizihiwe.me"],
  icons: ["/favicon.png"],
  openGraph: {
    type: "website",
    url: "https://designs.regisndizihiwe.me",
    title: "Regis's design portifolio",
    description: "Curated list of design projects by Regis NDIZIHIWE",
    siteName: "Regis's design portifolio",
    images: [
      {
        url: "/og-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

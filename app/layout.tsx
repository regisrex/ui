import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Designs by Regis NDIZIHIWE",
  description: "Curated list of design projects by Regis NDIZIHIWE",
  keywords: [
    "Regis NDIZIHIWE, design, ui, ux, web, graphic, product, designer, developer, kigali, rwanda, africa",
    "ui designer",
    "ux designer",
    "regisndizihiwe.me",
    "designs.regisndizihiwe.me",
  ],
  icons: [
    {
      url: "/favicon.png",
    },
  ],
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
    countryName: "Rwanda",
    emails: ["ndizihiweregis06@gmail.com", "hey@regisndizihiwe.me"],
    phoneNumbers: ["+250788927469"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-blue-50/60">{children}</body>
    </html>
  );
}

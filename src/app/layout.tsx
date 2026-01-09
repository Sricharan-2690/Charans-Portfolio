import { Montserrat, Poppins } from "next/font/google";
import type { Metadata } from 'next';
import ClientLayout from '../components/ClientLayout';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'SriCharan - Software Engineer',
  description: 'Portfolio website of SriCharan, a Software Engineer specializing in Web Development and AI/ML',
  metadataBase: new URL('https://sricharans-portfolio.vercel.app'),
  openGraph: {
    title: 'SriCharan - Software Engineer',
    description: 'Portfolio website of SriCharan, a Software Engineer specializing in Web Development and AI/ML',
    url: 'https://sricharans-portfolio.vercel.app/',
    siteName: 'SriCharan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SriCharan Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SriCharan - Software Engineer',
    description: 'Portfolio website of SriCharan, a Software Engineer specializing in Web Development and AI/ML',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="min-h-screen font-sans antialiased bg-gradient-to-b from-[#0A1D37] to-[#1A1A1A] text-[#B0B0B0]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navigation } from './modules';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  weight: '400',
});

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Wingspan Leadership Program',
  description:
    "The Wingspan Leadership Program strives to enhance our students' experience at Cal State LA through meaningful opportunities to cultivate leadership skills, social responsibility, and holistic development of students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${dmSerifDisplay.variable} antialiased`}
    >
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navigation } from './modules';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  weight: '400',
});

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

const description =
  "The Wingspan Leadership Program strives to enhance our students' experience at Cal State LA through meaningful opportunities to cultivate leadership skills, social responsibility, and holistic development of students.";

export const metadata: Metadata = {
  title: 'Wingspan Leadership Program',
  description:
    'The Wingspan Leadership Program at Cal State LA fosters student leadership development through public speaking workshops, leadership conferences, teamwork, and the Social Change Model. Open to all Cal State LA students via the University-Student Union.',
  keywords: [
    'Wingspan Leadership Program',
    'Wingspan',
    'Wingspan CSULA',
    'Wingspanla CSULA',
    'wingspan csula',
    'wingspanla csula',
    'wingspan la',
    'wingspan cal state la',
    'wingspan la leadership',
    'Cal State LA leadership',
    'csula lead',
    'csula leadership',
    'cal state la leadership program',
    'student leadership development',
    'college student leadership programs',
    'public speaking workshops',
    'leadership conference',
    'teamwork and communication skills',
    'social change model',
    'leadership program',
    'the university student union',
    'California State University Los Angeles',
    'student union',
    'csula',
    'cal state la',
    'u-su',
    'usu',
    'student organizations',
    'center for student involvement',
    'events',
    'csi',
    'graffix',
    'college',
    'student',
    'union',
    'cal state los angeles',
    'cal state',
    'los angeles',
    'university student union',
    'ussu',
    'ussu la',
    'ussu los angeles',
    'asi',
    'associated students inc.',
    'csula wingspan',
    'csula wingspanla',
    'cal state la wingspan',
    'cal state la wingspanla',
  ],

  openGraph: {
    title: 'Wingspan Leadership Program',
    description,
    url: 'https://www.wingspanla.org',
    images: [
      {
        url: 'https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/overview-event.webp',
        width: 1200,
        height: 630,
        alt: 'Wingspan Leadership Students at Cal State LA Event',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wingspan Leadership Program',
    description,
    images: [
      'https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/overview-event.webp',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
      <head>
        <meta
          name="google-site-verification"
          content="98QibqO4Cewhv2-IBt3kJvc8WBbPeqaTdmiux1xcP9I"
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

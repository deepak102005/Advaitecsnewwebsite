import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Advaitecs - AI-Powered Learning & Industry-Ready Skills',
  description: 'Transforming education and workforce development through AI-powered technology, hands-on training and industry-focused learning experiences.',
  icons: {
    icon: '/images/logo/advaitecs-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

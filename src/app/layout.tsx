import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';

const poppins = Poppins({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Catcents.io',
  description: 'The base network will be more fun with Catcents.io',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

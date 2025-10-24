import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'The Gambit Playbook',
  description: `Menemukan konsep "Gambit" dari catur.
                Sebuah pengorbanan kecil di awal untuk kemenangan besar di
                akhir. Gue mulai bertanya: "Apa 'pion'
                dalam hidup gue yang bisa gue korbankan sekarang demi masa depan
                yang lebih baik?"`,
  icons: {
    icon: [{ url: '/wanderlife-logo.png' }],
  },
};

export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />

        <Script
          type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        />
      </body>
    </html>
  );
}

'use client';

import { Button } from '@/components/ui/button';
// import dynamic from 'next/dynamic';

// const PdfViewer = dynamic(() => import('./pdf-viewer'), {
//   ssr: false,
// });

export function FinalCTA() {
  return (
    <section
      id="order"
      className="py-16 sm:py-24 px-4 bg-gradient-to-r from-primary to-primary/90"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Siap melihat masa depan cerah?
        </h2>

        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Ayo kita memanfaatkan waktu yang ada saat ini dengan sebaik-baiknya.
          Lo dan gue sama-sama punya masa depan, tapi masa depan seperti apa
          yang bakal kita miliki pasti berbeda. Tergantung apa yang bisa lo
          korbankan hari ini
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="cursor-pointer bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8"
          >
            Dapatkan Sekarang – Rp 49.000
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base bg-transparent"
          >
            Lihat Cuplikan Bab
          </Button>
        </div>

        {/* <PdfViewer /> */}
      </div>
    </section>
  );
}

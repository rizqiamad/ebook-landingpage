import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 px-6 py-16 sm:py-24">
      {/* Elemen dekoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10 lg:items-center">
          {/* Konten kiri */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Strategi Sukses dari Generasi yang Berani Mengorbankan
                Kesenangan
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
                The Gambit Playbook
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Menemukan konsep &apos;&apos;Gambit&apos;&apos; dari catur.
                Sebuah pengorbanan kecil di awal untuk kemenangan besar di
                akhir. Gue mulai bertanya: &apos;&apos;Apa &apos;pion&apos;
                dalam hidup gue yang bisa gue korbankan sekarang demi masa depan
                yang lebih baik?&apos;&apos;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <Link href={'/#order'} scroll={true}>
                <Button
                  size="lg"
                  className="cursor-pointer bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto"
                >
                  Dapatkan Playbook-nya
                </Button>
              </Link>

              <Link href={'/#insight'} scroll={true}>
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent w-full sm:w-auto"
                >
                  Lihat Daftar Isi
                </Button>
              </Link>
            </div>

            <p className="text-sm text-primary-foreground/70 pt-2">
              ✓ Strategi Finansial Realistis • ✓ Mindset Jangka Panjang • ✓
              Panduan dari Pengalaman Nyata
            </p>
          </div>

          {/* Konten kanan - Mockup buku */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80">
              {/* Bayangan buku */}
              <div className="absolute inset-0 bg-black/20 rounded-2xl blur-2xl translate-y-4" />

              {/* Cover buku */}
              <div className="relative w-64 sm:w-72 md:w-80">
                {/* Bayangan buku */}
                <div className="absolute inset-0 bg-black/20 rounded-2xl blur-2xl translate-y-4" />

                {/* Cover buku */}
                <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[3/4] flex items-center justify-center bg-secondary">
                  <img
                    src="/cover.png"
                    alt="The Gambit Playbook Cover"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />

                  {/* Lapisan efek ringan (opsional) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button"
import Link from "next/link"

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
                Ubah Pengetahuan Menjadi Kekuatan
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
                Kuasai Seni Sukses Digital
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Pelajari strategi dan rahasia dari para ahli untuk membangun bisnis digital yang berkembang.
                Panduan lengkap ini akan mengubah cara Anda memandang pertumbuhan dan kesuksesan online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <Link href={"/#order"} scroll={true}>
                <Button
                  size="lg"
                  className="cursor-pointer bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto"
                >
                  Dapatkan Sekarang
                </Button>
              </Link>

              <Link href={"/#insight"} scroll={true}>
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent w-full sm:w-auto"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>

            <p className="text-sm text-primary-foreground/70 pt-2">
              ✓ Unduhan PDF Instan • ✓ Akses Seumur Hidup • ✓ Garansi Uang Kembali
            </p>
          </div>

          {/* Konten kanan - Mockup buku */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80">
              {/* Bayangan buku */}
              <div className="absolute inset-0 bg-black/20 rounded-2xl blur-2xl translate-y-4" />

              {/* Cover buku */}
              <div className="relative bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-center p-8 text-center">
                <div className="space-y-4">
                  <div className="text-6xl">📘</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground">Sukses Digital</h2>
                  <p className="text-sm text-primary-foreground/80">
                    Panduan Lengkap Membangun Kerajaan Online Anda
                  </p>
                  <p className="text-xs text-primary-foreground/60 pt-4">Oleh Anda & Rekan Anda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { useState } from "react"

const PdfModal = dynamic(() => import("./pdf-modal"), {
  ssr: false
})

export function FinalCTA() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <section id="order" className="py-16 sm:py-24 px-4 bg-gradient-to-r from-primary to-primary/90">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Siap Mengubah Bisnis Digital Anda?
        </h2>

        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Bergabunglah bersama ribuan pengusaha yang sudah membuktikan strategi dalam e-book ini.
          Waktunya membawa bisnis Anda ke level berikutnya — mulai hari ini.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="cursor-pointer bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8"
          >
            Dapatkan Sekarang – Rp 449.000
          </Button>
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            variant="outline"
            className="cursor-pointer border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base bg-transparent"
          >
            Lihat Cuplikan Bab
          </Button>
        </div>

        <PdfModal
          show={open}
          onClose={() => setOpen(false)}
          pdfUrl="/dummy.pdf"
        />

        <p className="text-sm text-primary-foreground/80">
          Garansi uang kembali 30 hari • Akses seumur hidup • Unduh instan dalam format PDF
        </p>
      </div>
    </section>
  )
}

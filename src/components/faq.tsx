"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Dalam format apa e-book ini tersedia?",
      answer:
        "E-book ini tersedia dalam format PDF yang bisa dibaca di semua perangkat — komputer, tablet, maupun smartphone. Anda akan langsung mendapatkan akses instan setelah melakukan pembelian.",
    },
    {
      question: "Apakah ada jaminan uang kembali?",
      answer:
        "Ya! Kami memberikan jaminan uang kembali selama 30 hari. Jika Anda tidak puas dengan isi e-book, kami akan mengembalikan uang Anda tanpa pertanyaan.",
    },
    {
      question: "Apakah saya akan mendapatkan pembaruan e-book di masa depan?",
      answer:
        "Tentu! Semua pembaruan dan bab tambahan di masa depan sudah termasuk dalam pembelian Anda tanpa biaya tambahan. Anda akan mendapatkan akses seumur hidup ke versi terbaru.",
    },
    {
      question: "Apakah saya boleh membagikan e-book ini ke tim saya?",
      answer:
        "E-book ini ditujukan untuk penggunaan pribadi. Namun, kami menyediakan lisensi tim dengan harga khusus. Silakan hubungi kami untuk pembelian dalam jumlah banyak.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan e-book ini?",
      answer:
        "Sebagian besar pembaca menyelesaikannya dalam 4–6 jam. Namun, kami menyarankan untuk mempraktikkan strategi di setiap bab agar hasilnya lebih maksimal.",
    },
    {
      question: "Bagaimana jika saya butuh bantuan untuk menerapkan strategi di dalam e-book?",
      answer:
        "Kami menyediakan bonus seperti template, checklist, dan panduan implementasi. Selain itu, tersedia komunitas aktif tempat Anda bisa berdiskusi dan mendapatkan dukungan langsung.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-6 bg-background">
      <div className="mx-auto max-w-3xl">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Semua hal yang perlu Anda ketahui tentang e-book ini
          </p>
        </div>

        {/* Daftar FAQ */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden bg-card hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="cursor-pointer w-full px-6 py-4 flex items-center justify-between hover:bg-muted/40 transition-colors"
              >
                <span className="font-semibold text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border animate-fadeIn">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

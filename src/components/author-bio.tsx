export function AuthorBio() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl p-8 sm:p-12 border border-border">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-5xl">
                👥
              </div>
            </div>

            {/* Bio Content */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Kenali Penulis Anda
              </h3>
              <p className="text-accent font-semibold mb-4">
                Praktisi Bisnis Digital & Strategi Pertumbuhan
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dengan pengalaman gabungan lebih dari 15 tahun di dunia bisnis digital, kami telah membantu ribuan
                pengusaha membangun dan mengembangkan usaha online yang menguntungkan. Strategi kami telah menghasilkan
                lebih dari $50 juta pendapatan kolektif bagi klien dan komunitas kami.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                E-book ini adalah hasil dari seluruh perjalanan, eksperimen, dan pembelajaran kami di lapangan. Kami
                ingin berbagi pengetahuan ini agar Anda bisa mencapai kesuksesan dengan lebih cepat dan terarah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

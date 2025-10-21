export function Benefits() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        {/* Judul */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kenapa Harus Memilih E-Book Ini?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pembaca yang telah mengubah cara mereka membangun dan mengembangkan bisnis digital.
          </p>
        </div>

        {/* Daftar manfaat */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡",
              title: "Strategi yang Bisa Langsung Diterapkan",
              description:
                "Setiap bab berisi langkah-langkah praktis yang bisa langsung Anda gunakan untuk mempercepat hasil.",
            },
            {
              icon: "🎯",
              title: "Teruji dan Terbukti",
              description:
                "Berdasarkan studi kasus nyata dan telah digunakan oleh ribuan pelaku bisnis yang sukses.",
            },
            {
              icon: "📈",
              title: "Pertumbuhan Lebih Cepat",
              description:
                "Percepat kemajuan Anda dengan rahasia dan taktik yang memotong kurva pembelajaran bertahun-tahun.",
            },
            {
              icon: "🔒",
              title: "Akses Seumur Hidup",
              description:
                "Bayar sekali, nikmati akses permanen ke e-book ini beserta semua pembaruan di masa mendatang.",
            },
            {
              icon: "💡",
              title: "Wawasan dari Ahli",
              description:
                "Belajar langsung dari para pemimpin industri dan praktisi terbaik yang membagikan pengalaman nyata mereka.",
            },
            {
              icon: "🚀",
              title: "Bonus Eksklusif",
              description:
                "Termasuk template, checklist, dan alat bantu tambahan untuk memudahkan penerapan strategi Anda.",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

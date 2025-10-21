export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Judul */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Apa Kata Para Pembaca
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Cerita nyata dari para pembaca yang telah merasakan manfaat e-book ini.
          </p>
        </div>

        {/* Testimoni */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              role: "Pengusaha",
              content:
                "E-book ini benar-benar mengubah cara saya memandang bisnis digital. Strateginya sangat praktis, dan hasilnya langsung terlihat. Setelah menerapkan tiga bab pertama, pendapatan saya naik lebih dari 150%.",
              rating: 5,
            },
            {
              name: "Michael Chen",
              role: "Pemasar Digital",
              content:
                "Investasi terbaik yang pernah saya lakukan untuk pengembangan diri. Framework-nya jelas, mudah diterapkan, dan didukung data nyata. Saya bahkan merekomendasikannya ke seluruh rekan kerja saya.",
              rating: 5,
            },
            {
              name: "Emma Rodriguez",
              role: "Kreator Konten",
              content:
                "Akhirnya ada panduan yang tidak hanya teori! Setiap bab dilengkapi contoh nyata dan studi kasus. Setelah menerapkan strategi dari Bab 3, audiens saya bertambah tiga kali lipat.",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                “{testimonial.content}”
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

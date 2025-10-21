export function BookPreview() {
  return (
    <section id="insight" className="py-16 sm:py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Bagian Judul */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Apa yang Akan Anda Pelajari
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Intip isi dari panduan lengkap ini dan temukan wawasan berharga untuk membangun kesuksesan digital Anda.
          </p>
        </div>

        {/* Daftar Bab */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              chapter: "Bab 1",
              title: "Prinsip Dasar",
              description:
                "Pelajari fondasi utama yang digunakan oleh wirausahawan digital sukses untuk membangun bisnis berkelanjutan dari nol.",
            },
            {
              chapter: "Bab 2",
              title: "Strategi Pertumbuhan",
              description:
                "Temukan taktik terbukti untuk mempercepat pertumbuhan dan menjangkau audiens yang tepat dengan efektif.",
            },
            {
              chapter: "Bab 3",
              title: "Kuasai Monetisasi",
              description:
                "Pahami cara mengubah audiens menjadi pelanggan setia dan membangun sumber pendapatan berulang.",
            },
            {
              chapter: "Bab 4",
              title: "Membangun Personal Branding",
              description:
                "Ciptakan citra diri yang kuat untuk menarik peluang baru dan menegaskan otoritas Anda di bidang digital.",
            },
            {
              chapter: "Bab 5",
              title: "Sistem untuk Skalabilitas",
              description:
                "Bangun sistem dan proses efisien agar bisnis Anda bisa berkembang tanpa membuat Anda kewalahan.",
            },
            {
              chapter: "Bab 6",
              title: "Strategi Lanjutan",
              description:
                "Pelajari rahasia dan strategi tingkat lanjut yang digunakan oleh para pelaku terbaik di industri digital.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-xl hover:border-accent transition-all duration-300"
            >
              <p className="text-sm font-semibold text-accent mb-2">{item.chapter}</p>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

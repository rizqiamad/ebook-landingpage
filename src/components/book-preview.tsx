export function BookPreview() {
  return (
    <section id="insight" className="py-16 sm:py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Bagian Judul */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Apa yang Bakal Lo Dapet dari Buku ini
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Intip apa-apa yang bakal lo pelajari dari buku ini
          </p>
        </div>

        {/* Daftar Bab */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              chapter: 'Bab 1',
              title: 'Pikiran Lo, Aset #1 Lo',
              description:
                'Pahami pentingnya mindset untuk masa depan lo yang lebih baik.',
            },
            {
              chapter: 'Bab 2',
              title: 'Seni Mengorbankan Pion',
              description:
                'Pahami bahwa masa depan lu bergantung pada apa yang lo korbankan hari ini.',
            },
            {
              chapter: 'Bab 3',
              title: 'Jalan Sekarang, Sempurna Nanti',
              description:
                'Mulai aja dulu, kalau masih nunggu sempurna kapan jalannya. Justru kesempurnaan datang setelah banyaknya kegagalan',
            },
            {
              chapter: 'Bab 4',
              title: 'Bangung Benteng Anti-Distraksi',
              description:
                'Ciptakan benteng yang dapat menjaga lo dari kejatuhan setelah bangkit',
            },
            {
              chapter: 'Outro',
              title: 'Papan Catur Ini Punya Lo',
              description: 'Penutup',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-xl hover:border-accent transition-all duration-300"
            >
              <p className="text-sm font-semibold text-accent mb-2">
                {item.chapter}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

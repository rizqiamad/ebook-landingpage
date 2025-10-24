export function Benefits() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        {/* Judul */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kenapa Lo Harus Memilih E-Book Ini?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Benefit ini bisa lo rasakan asal ada kemauan diri lo dalam berubah.
            E-book ini akan berguna bagi mereka yang lapar akan aksi nyata dan
            bukan hanya omon-omon belaka
          </p>
        </div>

        {/* Daftar manfaat */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Strategi yang Bisa Langsung Diterapkan',
              description:
                'Setiap bab berisi langkah-langkah praktis yang bisa langsung lo gunakan untuk mempercepat hasil.',
            },
            {
              icon: '🎯',
              title: 'Berdasarkan pengalaman',
              description:
                'Berdasarkan studi kasus nyata dan telah digunakan oleh ribuan pelaku bisnis yang sukses.',
            },
            {
              icon: '🔒',
              title: 'Akses Seumur Hidup',
              description:
                'Bayar sekali, nikmati akses permanen ke e-book ini yang juga bisa langsung lo download.',
            },
            {
              icon: '🚀',
              title: 'Bonus Eksklusif',
              description:
                'Termasuk template, checklist, dan alat bantu tambahan untuk memudahkan penerapan strategi lo.',
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

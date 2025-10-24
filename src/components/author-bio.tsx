export function AuthorBio() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl p-8 sm:p-12 border border-border">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-5xl overflow-hidden">
                <img src="/diko.jpeg" alt="Adiko Trioka" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Kenali Penulis Anda
              </h3>
              <p className="text-accent font-semibold mb-4">
                Praktisi Digital Marketing & Budak Corporate
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {' '}
                Dalam beberapa tahun terakhir, <b>Adiko Trioka</b> menempuh
                perjalanan yang tidak biasa. Bukan lewat bangku kuliah,
                melainkan lewat kerja nyata, eksperimen, dan pembelajaran
                mandiri. Di usia 20 tahun, ketika banyak orang masih mencari
                arah, ia justru sudah menapaki karier pertamanya di dunia
                digital marketing dan terus berjuang untuk meningkatkan nilai
                dirinya setiap hari.{' '}
              </p>{' '}
              <p className="text-muted-foreground leading-relaxed">
                {' '}
                <i>The Gambit Playbook</i> lahir dari perjalanan itu — kumpulan
                strategi, kesalahan, dan pelajaran berharga yang dibangun dari
                pengalaman langsung di lapangan. Buku ini bukan teori kosong,
                tapi panduan praktis untuk siapa pun yang ingin mulai melangkah,
                berani berkorban sedikit hari ini demi masa depan yang lebih
                besar.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

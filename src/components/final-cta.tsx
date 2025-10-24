'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !phone.trim()) {
      setError('Tolong isi semua data agar transaksi bisa dilanjutkan.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Alamat email tidak valid. Tolong periksa kembali.');
      return;
    }

    const phoneRegex = /^[0-9]{9,15}$/;
    if (!phoneRegex.test(phone)) {
      setError(
        'Nomor handphone tidak valid. Gunakan angka tanpa spasi atau simbol.'
      );
      return;
    }

    const body = {
      transaction_details: {
        order_id: uuidv4(),
        gross_amount: 49000,
      },
      customer_details: {
        email,
        phone,
      },
    };

    const res = await fetch('/api/orders', {
      method: 'post',
      body: JSON.stringify(body),
    });

    const data = await res.json();
    window.snap.pay(data.token);
  };

  return (
    <section
      id="order"
      className="py-16 sm:py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground"
    >
      <div className="mx-auto max-w-4xl text-center space-y-10">
        {/* Headline */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Siap Melihat Masa Depan Cerah?
          </h2>

          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Ayo manfaatkan waktu yang lo punya sekarang dengan sebaik-baiknya.
            Lo dan gue sama-sama punya masa depan — tapi masa depan seperti apa
            yang bakal kita miliki, itu tergantung apa yang kita korbanin hari
            ini.
          </p>
        </div>

        {/* Form Pembelian */}
        <section className="w-full max-w-md mx-auto p-6 bg-primary-foreground/10 backdrop-blur-md rounded-2xl shadow-lg space-y-6">
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-semibold text-primary-foreground">
              Informasi Pembeli
            </h3>
            <p className="text-sm text-primary-foreground/70">
              Alamat akses e-book akan dikirimkan melalui email, pastikan
              menggunakan <b>email yang aktif</b>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 flex flex-col">
            {/* Input Email */}
            <div className="space-y-2 text-left">
              <Label htmlFor="email" className="text-primary-foreground/90">
                Alamat Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-black/20 focus:ring-accent"
              />
            </div>

            {/* Input Nomor HP */}
            <div className="space-y-2 text-left">
              <Label htmlFor="phone" className="text-primary-foreground/90">
                Nomor Handphone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="08xxxxxxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-black/20 focus:ring-accent"
              />
            </div>

            {error ? <p className="text-red-600 text-xs">{error}</p> : null}

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4 w-full">
              <Button
                type="submit"
                size="lg"
                className="cursor-pointer sm:w-1/2 bg-accent hover:bg-accent/70 text-accent-foreground font-semibold transition-transform active:scale-[0.98]"
              >
                Beli – Rp 49.000
              </Button>

              <Button
                variant="outline"
                size="lg"
                type="button"
                className="cursor-pointer w-full sm:w-1/2 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-medium transition-transform active:scale-[0.98]"
              >
                Lihat Cuplikan Bab
              </Button>
            </div>
          </form>
        </section>

        {/* Tombol Lihat Cuplikan */}
      </div>
    </section>
  );
}

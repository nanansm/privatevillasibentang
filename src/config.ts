// Satu sumber kebenaran untuk data yang gampang berubah.
// Nilai belum pasti = string kosong / 0 + komentar TODO. Jangan mengarang.

// Domain induk kampungsumberalam.com dibeli klien; Sibentang jalan di subdomain.
export const SITE_URL = "https://sibentang.kampungsumberalam.com";

export const SITE_NAME = "Private Villa Sibentang";
export const TAGLINE_EN = "Sundanese Thermal Escape";

// Nomor WhatsApp Sibentang, dikonfirmasi Nanan 11 Agu 2026 (081112117838).
export const WA_NUMBER = "6281112117838";

/** Bikin link wa.me dari nomor + pesan prefilled. */
export function waUrl(pesan: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
}

// Pencarian Maps pakai nama resmi di Google Business Profile. Sengaja pakai
// bentuk pencarian, bukan place id, karena profilnya belum di-claim.
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sibentang+Wellness+Private+Villa+Garut";

export const IG_URL = "https://www.instagram.com/privatevillasibentang/";

// Agoda + Instagram sudah dites balas 200.
//
// Tautan pendek Traveloka dari klien, 13 Agu 2026. Sudah dites: balas 302 dan
// mendarat di listing "Kampung Sumber Alam Garut Powered by Archipelago"
// (hotel 3000010005938), BUKAN listing "Sibentang Private Villa"
// (3000020008081) yang dipakai sebelumnya. Tautan ini juga membawa kode
// afiliasi AFFILIATENANANPROGRAM83.
export const TRAVELOKA_URL = "https://trv.lk/7f628e23";
export const AGODA_URL =
  "https://www.agoda.com/sibentang-wellness-private-villa/hotel/garut-id.html";

export const ALAMAT = "Jl. Raya Cipanas No. 122, Tarogong Kaler, Garut 44151";

// Rating dibuang atas permintaan klien, dilarang dipakai di materi apa pun.

export const PRICE_FROM_1BR = 3059000;
export const PRICE_FROM_2BR = 4259000;

// BAR weekend, dynamic pricing, sumber sheet internal klien 12 Agu 2026.
export const PRICE_WEEKEND_1BR = 3719000;
export const PRICE_WEEKEND_2BR = 5599000;

// Klausa tambahan jawaban "bisa mobil masuk?", kosong sampai dikonfirmasi.
// [BUTUH DATA: konfirmasi lebar akses internal + parkir per villa]
export const ACCESS_INFO_EXTRA = "";

/** Format rupiah tanpa desimal, mis. formatIDR(1500000) -> "1.500.000". */
export function formatIDR(n: number): string {
  return n.toLocaleString("id-ID");
}

// Gerbang peluncuran (lihat blueprint bagian 6 langkah 8): homepage tetap
// noindex sampai kedua harga terisi DAN klausa akses terjawab.
export const LAUNCH_READY = PRICE_FROM_1BR > 0 && PRICE_FROM_2BR > 0;

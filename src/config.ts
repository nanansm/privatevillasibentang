// Satu sumber kebenaran untuk data yang gampang berubah.
// Nilai belum pasti = string kosong / 0 + komentar TODO. Jangan mengarang.

export const SITE_URL = "https://sibentang.com"; // TODO domain belum final

export const SITE_NAME = "Private Villa Sibentang";
export const TAGLINE_EN = "Sundanese Thermal Escape";

export const WA_NUMBER = ""; // TODO nomor WA khusus Sibentang belum ada

/** Bikin link wa.me dari nomor + pesan prefilled. */
export function waUrl(pesan: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
}

export const MAPS_URL = ""; // TODO link Google Maps belum ada
export const IG_URL = "https://instagram.com/privatevillasibentang";
export const TRAVELOKA_URL = ""; // TODO listing Traveloka belum ada
export const AGODA_URL = ""; // TODO listing Agoda belum ada

export const RATING = {
  value: 4.7,
  count: 93,
};

export const PRICE_FROM_1BR = 0; // TODO harga mulai 1BR belum fix
export const PRICE_FROM_2BR = 0; // TODO harga mulai 2BR belum fix

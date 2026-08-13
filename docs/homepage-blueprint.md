# Cetak Biru Homepage — Private Villa Sibentang

Status: **final, disetujui.** Copy di dokumen ini berstatus final. Worker DILARANG menulis ulang, memperhalus, atau menerjemahkan bebas. Perubahan copy hanya lewat persetujuan Nanan.

---

## 0. Dua catatan yang mengikat

1. **Boleh dibangun sekarang, tapi jangan diluncurkan sebelum dua angka "mulai dari" turun.** Seluruh diagnosis bisnisnya adalah "pertanyaan harga tidak dijawab". Homepage yang menjawab semuanya kecuali harga mengulang dosa kompetitor. Solusi teknis: baris harga dirender bersyarat, disembunyikan selama isinya masih `[BUTUH DATA]`. Gerbang peluncuran ada di langkah 8.
2. **Bahasa default Inggris melemahkan SEO untuk query yang justru jadi dasar diagnosis** ("villa private pool garut", "villa air panas privat" adalah query berbahasa Indonesia). Perintah klien tetap diikuti, tapi mitigasinya wajib: halaman `/id/` paritas penuh, meta ID menembak query itu persis, hreflang benar. `/id/` bukan terjemahan kelas dua.

---

## 1. Arah desain

Titik berat halaman = **register sembilan bunga**: daftar unit bergaya buku tamu berisi ikon bunga + nama + kapasitas + harga "mulai dari" per kategori, dengan kalimat yang mengunci maknanya — ikon di layar adalah plakat di pintu villa, dibuktikan foto `mote-9739`. Elemen tanda tangan = register itu sendiri; tidak ada villa lain di Garut yang punya sembilan nama bunga dengan sembilan lambang vektor, jadi uji tukar-logo dijatuhkan justru di section ini. Seluruh halaman disusun sebagai rangkaian jawaban atas tiga pertanyaan nyata (harga, kontak, akses), karena masalahnya bukan awareness melainkan komunikasi. Air panas privat dibawa lewat foto riak air `mote-9734` sebagai pita penuh, bukan lewat klaim. Unsur Sunda dibawa lewat nama bunga, ornamen yang diulang sebagai irama, dan bahan yang sudah ada di foto (batu ukir, atap alang-alang). Nol tren: nol gradien dekoratif, nol kartu, nol sudut membulat, satu huruf, empat warna.

Dial: VARIANCE 7 (objek disusun, bukan grid kaku) · MOTION 1 (prioritas kecepatan, nol JS) · DENSITY 3.

---

## 2. Sistem token (390 px)

### Huruf — Kumbh Sans, satu-satunya

| Peran | px | weight | line-height | letter-spacing | warna | catatan |
|---|---|---|---|---|---|---|
| Penanda kapital | 12 | 600 | 1.2 | 0.16em | ink `#2A2410`; di bidang gelap `#EFECE8` | uppercase. HARAM olive (4,27 < 4,5 untuk teks kecil) |
| Judul halaman (H1 hero) | 34 | 700 | 1.15 | -0.01em | `#EFECE8` di atas scrim | maksimal 3 baris di 390 |
| Judul section (H2) | 26 | 700 | 1.2 | -0.01em | ink | kalimat berpredikat, bukan label |
| Header grup / pertanyaan (H3) | 17 | 600 | 1.35 | 0 | ink | |
| Isi | 16 | 400 | 1.6 | 0 | ink | maksimal ±34 karakter per baris di 390 |
| Keterangan foto | 13 | 400 | 1.5 | 0.01em | `#837E71` | HANYA info non-esensial (kontras ±3,4) |
| Angka besar | 44 | 700 | 1.0 | -0.02em | olive `#83692C` | tebal besar → 3:1 lolos |
| Harga "mulai" | 20 | 700 | 1.3 | 0 | olive | ≥18,66px tebal → lolos AA large |
| Nama unit | 17 | 600 | 1.3 | 0 | ink | |
| Tombol | 16 | 600 | 1 | 0.02em | sesuai bidang | padding 16px 24px, radius 0 |

### Jarak vertikal
Basis 8px. Antar section **80px**. Header ke isi dalam section 24px. Antar paragraf 16px. Tinggi minimum baris register 56px. Tumpang tindih foto -32px. Padding samping global 24px (`px-6`). Pita foto penuh tepi-ke-tepi tinggi 240px.

### Aturan warna
- `#EFECE8` kertas — latar halaman, teks di bidang gelap, latar tombol di bidang gelap.
- `#CECDB2` sage — HANYA pelat dekor (bidang offset di belakang foto). Nol teks di atasnya, nol teks berwarna sage. Dipakai **persis dua kali** di halaman.
- `#83692C` olive — angka besar, harga mulai, 9 ikon unit, ornamen. Nol teks isi.
- `#4E4117` gelap — bidang booking dan footer, warna scrim hero, tombol utama di bidang kertas.
- `#2A2410` ink — semua teks utama. `#837E71` keterangan non-esensial saja. `#CFCCC5` hairline 1px di kertas; di bidang gelap hairline memakai `#EFECE8` opasitas 25%.
- Satu tema terang, nol dark mode.

---

## 3. Rute dan dua bahasa

**URL final:** `/` = EN (homepage) · `/id/` = ID · `/link` = EN · `/id/link` = ID.

`astro.config.mjs`:
```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'id'],
  routing: { prefixDefaultLocale: false }
},
integrations: [sitemap({
  i18n: { defaultLocale: 'en', locales: { en: 'en-US', id: 'id-ID' } }
})]
```

**Migrasi berkas:** isi `src/pages/en/link.astro` pindah ke `src/pages/link.astro`; isi `src/pages/link.astro` lama pindah ke `src/pages/id/link.astro`; hapus folder `src/pages/en/`. Tambah `public/_redirects` untuk Cloudflare Pages:
```
/en/link  /link  301
/en/*     /:splat  301
```

**Teks dua bahasa:** satu berkas `src/i18n/copy.ts`, `export const copy = { en: {...}, id: {...} }` bertipe. Halaman `index.astro` dan `id/index.astro` merender komponen yang sama dengan prop `lang: 'en' | 'id'`; komponen mengambil `const t = copy[lang]`. Nol duplikasi markup.

**Hreflang** (perbarui `Base.astro`, defaultnya sekarang terbalik): tiap halaman mengeluarkan `hreflang="en"` ke `https://sibentang.kampungsumberalam.com/[path]`, `hreflang="id"` ke `.../id/[path]`, `x-default` ke versi EN. Atribut `<html lang>` mengikuti prop.

**Meta final**
- EN title: `Private Villa Sibentang | Private hot spring pool villas in Garut`
- EN description: `Nine private villas inside Kampung Sumber Alam, Cipanas Garut. Natural hot spring water flows into a private pool in every villa's yard. Book via WhatsApp.`
- ID title: `Private Villa Sibentang | Villa private pool air panas alami di Garut`
- ID description: `Sembilan villa privat di Kampung Sumber Alam, Cipanas Garut. Air panas alami mengalir ke kolam pribadi di tiap halaman villa. Cek tanggal via WhatsApp.`

---

## 4. Peta section

Urutan render: `SiteHeader` (absolute di atas hero) → `HeroSpring` → `NoQueue` → `FlowerRegistry` → `OneGate` → `ThreeAnswers` → `BookingBand` → `SiteFooter`.

### 4.1 SiteHeader.astro
Identitas dan saklar bahasa, nol distraksi. Absolute transparan di atas hero, teks kertas.

```
┌──────────────────────────────────────┐
│ [wordmark.svg w-24]        EN  ID    │ h-14, absolute
└──────────────────────────────────────┘
```
Aset: `wordmark.svg` inline (`?raw`), warna `text-kertas`. Saklar bahasa dua tautan polos; aktif weight 700 + garis bawah, non-aktif weight 400. Nol JS, nol hamburger, nol menu lain.
Kelas kunci: `absolute inset-x-0 top-0 z-10 flex h-14 items-center justify-between px-6 text-kertas`.

### 4.2 HeroSpring.astro
Dalam satu layar menjawab "ini apa": air panas Cipanas yang sama, kolamnya tidak berbagi.

```
┌──────────────────────────────────────┐
│░░░ scrim gelap dari atas ░░░         │
│ SUNDANESE THERMAL ESCAPE             │
│ Cipanas hot water,                   │
│ in a pool you                        │
│ never share.               (H1 34px) │
│ Nine private villas in Garut. Each   │
│ yard has its own natural hot         │
│ spring pool.               (sub 16px)│
│ ┌──────────────────────────────┐     │
│ │        WhatsApp us           │     │ tombol latar kertas, teks gelap
│ └──────────────────────────────┘     │
│ See the nine villas   (tautan garis) │
│                                      │
│   [mote-9761 · kolam terlihat        │
│    di sepertiga bawah, TANPA scrim]  │
└──────────────────────────────────────┘
```
Foto `mote-9761.jpg`, `object-cover object-bottom`, tinggi `min-h-[100dvh]` (BUKAN `h-screen`). Scrim `bg-gradient-to-b from-[#2A2410]/60 via-[#2A2410]/25 to-transparent` berhenti di 55% tinggi; kolam di bawah bersih. Teks blok atas, rata kiri, `pt-24`.

- EN: penanda `SUNDANESE THERMAL ESCAPE` · H1 `Cipanas hot water, in a pool you never share.` · sub `Nine private villas in Garut. Each yard has its own natural hot spring pool.` · tombol `WhatsApp us` · tautan `See the nine villas` (anchor `#villas`)
- ID: `SUNDANESE THERMAL ESCAPE` · `Air panas Cipanas, di kolam yang tidak pernah gantian.` · `Sembilan villa privat di Garut. Tiap halaman punya kolam air panas alami sendiri.` · `Chat WhatsApp` · `Lihat sembilan villanya`

Kelas kunci: section `relative min-h-[100dvh] w-full`; gambar `absolute inset-0 h-full w-full object-cover object-bottom`; konten `relative z-[1] px-6 pt-24`.

### 4.3 NoQueue.astro
Menanam diagnosis resmi (kolam umum penuh, di sini tidak) dan bukti skala kecil lewat angka.

```
┌──────────────────────────────────────┐
│ In Cipanas, people                   │
│ queue to soak. Here,                 │
│ nobody does.              (H2 26px)  │
│ The spring that made Cipanas famous  │
│ flows straight into every yard on    │
│ this land. No shared pool, no        │
│ waiting your turn.        (isi)      │
│                                      │
│  9          2,500        1           │
│  private    m², nine     hot pool    │
│  villas     units only   per yard    │
│ (44px olive)  (label 13px ink 500)   │
├──────────────────────────────────────┤
│ [mote-9734 riak air · full-bleed     │
│  tinggi 240px · object-cover]        │
└──────────────────────────────────────┘
```
Foto `mote-9734.jpg` pita penuh tepi-ke-tepi, tanpa teks, tanpa lapisan. Ini satu-satunya lanskap dan paling menyatu dengan palet; dia menjadi bukti air pengganti foto uap atau berendam yang tidak tersedia.

- EN: H2 `In Cipanas, people queue to soak. Here, nobody does.` · isi `The spring that made Cipanas famous flows straight into every yard on this land. No shared pool, no waiting your turn, no cutting a soak short.` · angka `9 / private villas` · `2,500 / square metres, nine units only` · `1 / hot pool in every yard`
- ID: `Di Cipanas orang antre berendam. Di sini tidak ada yang antre.` · `Sumber panas yang membikin Cipanas terkenal mengalir langsung ke tiap halaman di lahan ini. Tanpa kolam bersama, tanpa menunggu giliran, tanpa berendam terburu-buru.` · `9 / villa privat` · `2.500 / meter persegi untuk sembilan unit` · `1 / kolam air panas per halaman`

Label angka memakai ink 13px weight 500 (bukan `#837E71`, ini info esensial). Kelas kunci: angka `grid grid-cols-3 gap-4`; pita foto keluar container, jadi anak langsung section dengan `w-full h-60 object-cover`, bukan di dalam `px-6`.

### 4.4 FlowerRegistry.astro (`id="villas"`) — SIGNATURE
Menjawab "berapa harganya?" dan memberi sembilan ikon peran informasi: identitas unit, pengelompokan kapasitas, dan tautan fisik ke plakat pintu.

```
┌──────────────────────────────────────┐
│ [ornamen olive 20px]                 │
│ Nine villas carry                    │
│ nine flower names.        (H2)       │
│ The mark beside each name is the     │
│ plaque on that villa's door. Pick    │
│ by size, then by flower.  (isi)      │
│ ──────────────────────────────────── │
│ ONE BEDROOM · SLEEPS 2   (penanda)   │
│ from Rp ______ a night  (20px olive) │
│                                      │
│ [ic] Melati        [ic] Aster        │
│ [ic] Asoka         [ic] Mawar        │
│ ──────────────────────────────────── │
│ TWO BEDROOMS · SLEEPS 4              │
│ from Rp ______ a night               │
│                                      │
│ [ic] Padma         [ic] Seruni       │
│ [ic] Cendana       [ic] Lily         │
│ [ic] Anggrek                         │
│                                      │
│   ┌─────────────┐                    │
│ ┌─┤ mote-9739   │  ← pelat sage di   │
│ │s│ pintu Lily  │    belakang, offset│
│ └─┤             │    -16px kiri-atas │
│   └─────────────┘                    │
│ The door of Lily, plaque and all.    │
│                          (ket 13px)  │
└──────────────────────────────────────┘
```
Sembilan SVG `unit-*.svg` inline via `?raw`, `class="h-10 w-10 text-olive shrink-0"`, disanding nama 17/600 ink. Grid `grid grid-cols-2 gap-x-4 gap-y-4`, tiap sel `flex items-center gap-3`. BUKAN kartu: nol border per item; hairline `border-t border-rule` hanya di atas tiap header grup. Foto `mote-9739.jpg` rasio 4:5, lebar 75% rata kanan, pelat `bg-sage` absolute offset `-left-4 -top-4` berukuran sama, kosong tanpa teks.

Harga hanya dirender kalau field terisi. Selama masih `[BUTUH DATA: harga mulai 1 kamar]` / `[BUTUH DATA: harga mulai 2 kamar]`, barisnya disembunyikan. DILARANG mengarang angka.

- EN: H2 `Nine villas carry nine flower names.` · isi `The mark beside each name is the plaque on that villa's door. Pick by size, then by flower.` · grup `ONE BEDROOM · SLEEPS 2` + `from Rp [BUTUH DATA: harga mulai 1 kamar] a night` · `TWO BEDROOMS · SLEEPS 4` + `from Rp [BUTUH DATA: harga mulai 2 kamar] a night` · keterangan `The door of Lily, plaque and all.`
- ID: `Sembilan villa memakai sembilan nama bunga.` · `Tanda di samping tiap nama adalah plakat di pintu villanya. Pilih ukurannya dulu, baru bunganya.` · `SATU KAMAR · UNTUK 2 ORANG` + `mulai Rp [BUTUH DATA: harga mulai 1 kamar] per malam` · `DUA KAMAR · UNTUK 4 ORANG` + `mulai Rp [BUTUH DATA: harga mulai 2 kamar] per malam` · `Pintu Lily, lengkap dengan plakatnya.`

### 4.5 OneGate.astro
Mengubah "villa" jadi pengalaman yang terasa, menggantikan foto berendam dan uap yang tidak tersedia.

```
┌──────────────────────────────────────┐
│ [mote-9746 paviliun · lebar penuh    │
│  container · crop 4:3]               │
│            ┌──────────────┐          │
│            │ mote-9717    │ tumpang  │
│         ┌──┤ perempuan +  │ -32px,   │
│         │s │ cangkir, 3:4 │ rata     │
│         └──┤ lebar 60%    │ kanan    │
│            └──────────────┘          │
│ Your whole day happens               │
│ inside one gate.          (H2)       │
│ Soak at dawn while the air is still  │
│ cold. Spend the afternoon at the     │
│ open pavilion by the pool. (isi)     │
│ ──────────────────────────────────── │
│ [mote-9758 kolam teratai · 16:9]     │
│ Pitaloka Spa              (H3)       │
│ Bathing rituals run inside the       │
│ estate. Ask us to schedule one       │
│ during your stay.         (isi)      │
└──────────────────────────────────────┘
```
`mote-9746.jpg` crop 4:3; `mote-9717.jpg` rasio 3:4 lebar 60% dengan `relative -mt-8 ml-auto` dan pelat sage offset `-left-3 -top-3` (pemakaian sage kedua sekaligus terakhir); `mote-9758.jpg` 16:9 untuk blok spa. Tumpang tindih masuk ke dalam, JANGAN keluar tepi kanan.

- EN: H2 `Your whole day happens inside one gate.` · isi `Soak at dawn while the air is still cold. Spend the afternoon at the open pavilion by the pool.` · H3 `Pitaloka Spa` · isi `Bathing rituals run inside the estate. Ask us to schedule one during your stay.`
- ID: `Seharianmu berlangsung di balik satu gerbang.` · `Berendam subuh-subuh selagi udara masih dingin. Sorenya pindah ke paviliun terbuka di tepi kolam.` · `Pitaloka Spa` · `Ritual berendamnya berjalan di dalam kawasan. Minta kami jadwalkan selama kamu menginap.`

Kelas kunci: induk `relative`, tumpang tindih `relative -mt-8 ml-auto w-3/5`, nol margin negatif ke kanan.

### 4.6 ThreeAnswers.astro
Jantung strategi: menjawab tiga pertanyaan yang selama ini nol dijawab di kolom komentar.

```
┌──────────────────────────────────────┐
│ The three things everyone            │
│ asks, answered.           (H2)       │
│                                      │
│ How much is one night?    (H3 17px)  │
│ One-bedroom villas start from Rp __, │
│ two-bedroom from Rp __. The exact    │
│ rate depends on the date; ask us     │
│ on WhatsApp.              (isi)      │
│ ──────────────────────────────────── │
│ Where do we book?                    │
│ WhatsApp is fastest; you talk        │
│ straight to our team. We are also    │
│ on Traveloka and Agoda.              │
│ ──────────────────────────────────── │
│ Can a car get in?                    │
│ We sit right on Jl. Raya Cipanas,    │
│ the main road. [BUTUH DATA: lebar    │
│ akses internal + parkir per villa]   │
└──────────────────────────────────────┘
```
Nol foto, murni tipografi, hairline `border-rule` antar pertanyaan. BUKAN accordion — butuh JS dan menyembunyikan jawaban berarti mengulangi dosa kompetitor; jawaban harus terlihat langsung.

- EN: H2 `The three things everyone asks, answered.` · Q1 `How much is one night?` / `One-bedroom villas start from Rp [BUTUH DATA: harga mulai 1 kamar], two-bedroom from Rp [BUTUH DATA: harga mulai 2 kamar]. The exact rate depends on the date; ask us on WhatsApp.` · Q2 `Where do we book?` / `WhatsApp is fastest; you talk straight to our team. We are also listed on Traveloka and Agoda.` · Q3 `Can a car get in?` / `We sit right on Jl. Raya Cipanas, the main road. [BUTUH DATA: konfirmasi lebar akses internal + parkir per villa]`
- ID: `Tiga hal yang paling sering ditanyakan, ini jawabannya.` · `Berapa harga per malam?` / `Villa satu kamar mulai Rp [BUTUH DATA: harga mulai 1 kamar], dua kamar mulai Rp [BUTUH DATA: harga mulai 2 kamar]. Tarif pasti tergantung tanggal; tanyakan lewat WhatsApp.` · `Pesannya lewat mana?` / `WhatsApp paling cepat; kamu langsung terhubung ke tim kami. Kami juga ada di Traveloka dan Agoda.` · `Aksesnya bisa mobil?` / `Lokasi kami persis di Jl. Raya Cipanas, jalan utama. [BUTUH DATA: konfirmasi lebar akses internal + parkir per villa]`

Jawaban Q1 dan Q3 mengikuti aturan bersyarat yang sama: klausa ber-`[BUTUH DATA]` tidak boleh dirender mentah; sembunyikan klausanya sampai datanya terisi.

### 4.7 BookingBand.astro
Menjawab "no kontak rsv nya dong" dengan satu jalur utama.

```
┌──────────────────────────────────────┐
│ (latar gelap #4E4117, teks kertas)   │
│ [ornamen · warna kertas · 20px]      │
│ Send your dates, we                  │
│ reply on WhatsApp.     (H2 kertas)   │
│ ┌──────────────────────────────┐     │
│ │        WhatsApp us           │     │ tombol latar kertas, teks gelap
│ └──────────────────────────────┘     │
│ Prefer an app? Find us on            │
│ Traveloka or Agoda.  (isi, tautan    │
│  garis bawah kertas)                 │
│ ──── hairline kertas/25 ────         │
│ Jl. Raya Cipanas No. 122,            │
│ Tarogong Kaler, Garut 44151          │
│ Open in Google Maps      (tautan)    │
└──────────────────────────────────────┘
```
Tautan WA `https://wa.me/6281112117838?text=` + prefill per bahasa. EN `Hello Sibentang, I would like to ask about villa availability.` ID `Halo Sibentang, mau tanya ketersediaan villa.` URL Traveloka, Agoda, dan Maps diambil dari `src/config.ts`.

- EN: H2 `Send your dates, we reply on WhatsApp.` · tombol `WhatsApp us` · `Prefer an app? Find us on Traveloka or Agoda.` · alamat · `Open in Google Maps`
- ID: `Kirim tanggalmu, kami balas lewat WhatsApp.` · tombol `Chat WhatsApp` · `Lebih nyaman lewat aplikasi? Kami ada di Traveloka dan Agoda.` · alamat · `Buka di Google Maps`

Label CTA konsisten sehalaman: EN selalu `WhatsApp us`, ID selalu `Chat WhatsApp`. Kelas kunci `bg-gelap text-kertas px-6 py-20`, tombol `block w-full bg-kertas text-gelap`, hairline `border-t border-kertas/25`.

### 4.8 SiteFooter.astro
Penutup identitas, mengikuti pola `/link` yang sudah disetujui.

```
┌──────────────────────────────────────┐
│ (lanjut latar gelap, hairline atas)  │
│ SIGNATURE PRIVATE VILLA              │
│        [ornamen]                     │
│ BY KAMPUNG SUMBER ALAM  (penanda)    │
│ Instagram @privatevillasibentang     │
│ Bahasa Indonesia          (tautan)   │
│ © 2026 Private Villa Sibentang       │
└──────────────────────────────────────┘
```
Tautan bahasa: di `/` tertulis `Bahasa Indonesia` menuju `/id/`; di `/id/` tertulis `English` menuju `/`. Baris hak cipta 13px `#EFECE8` opasitas 60%.

---

## 5. Pemakaian sembilan ikon unit

Satu tempat, peran penuh: **FlowerRegistry**. Tiap ikon adalah identitas resmi satu unit dan membawa tiga informasi: unit mana (dipasangkan satu-satu dengan namanya), kelas kapasitas (posisinya di grup satu kamar atau dua kamar), dan tautan fisik ke lapangan (copy menyatakan ikon sama dengan plakat pintu, foto `mote-9739` membuktikannya untuk Lily). Inilah alasan ikon-ikon itu bukan hiasan: hapus ikonnya, halaman kehilangan sistem penamaan produknya.

`Irama.astro` (deretan sembilan ikon dekoratif) sengaja TIDAK dipakai di homepage — di sini ikon harus bekerja, bukan berbaris. Yang jadi irama dekoratif adalah `ornamen.svg`, persis di tiga titik: atas H2 registry (olive), atas H2 booking band (kertas), dan footer.

---

## 6. Urutan kerja worker

1. **Dua bahasa dan rute.** Ubah `astro.config.mjs` sesuai bagian 3, pindahkan berkas link, buat `public/_redirects`.
   Lulus: `astro build` hijau; `/` EN, `/id/` ID, `/id/link` jalan; `curl -I /en/link` mengembalikan 301 ke `/link`.
2. **Token dan copy.** Verifikasi token Tailwind v4 sudah terdaftar (`bg-kertas` dan kawan-kawan), tulis `src/i18n/copy.ts` berisi string bagian 4 PERSIS — nol penulisan ulang, nol "perbaikan" kalimat. `[BUTUH DATA]` disimpan sebagai field kosong berkomentar, harga bersyarat.
   Lulus: diff string terhadap cetak biru identik; `grep -rn 'BUTUH DATA' dist/` mengembalikan 0.
3. **Komponen** berurutan 4.1 sampai 4.8, lalu rakit `index.astro` dan `id/index.astro`.
   Lulus per komponen: cocok dengan wireframe di viewport 390; `document.documentElement.scrollWidth === document.documentElement.clientWidth` di 390.
4. **Gambar.** Semua lewat `astro:assets` `<Image>`, `widths={[390,780,1170]}`, format AVIF dan WebP; hero `loading="eager" fetchpriority="high"` plus `<link rel="preload">`; sisanya `loading="lazy"`; semua punya `width`, `height`, dan `alt` dua bahasa.
   Lulus: transfer hero ≤ 180 KB; foto lain ≤ 100 KB per berkas; total halaman ≤ 900 KB.
5. **Nol JavaScript.** Lulus: `dist/` tidak memuat satu pun `<script>` klien atau bundle JS, di luar JSON-LD.
6. **Gerbang mekanis.** Lulus semua:
   - `grep -rn 'rounded' src/components src/pages src/layouts` → 0
   - `grep -rn 'shadow-' src/` → 0
   - `grep -rn 'gradient' src/` → hanya scrim hero
   - `grep -rniE '#[0-9a-f]{3,8}' src/ | grep -viE 'EFECE8|CECDB2|83692C|4E4117|2A2410|837E71|CFCCC5'` → 0
   - nol karakter em-dash di copy
7. **Kecepatan dan SEO.** Lulus: Lighthouse mobile Performance ≥ 90, LCP < 2,5 detik ter-throttle, CLS < 0,1; HTML dan CSS gzip ≤ 40 KB; title dan description bagian 3 terpasang; JSON-LD `LodgingBusiness` (nama, alamat, geo, telepon, `sameAs` ke IG, Traveloka, Agoda) **TANPA `aggregateRating`**; sitemap memuat kedua locale; hreflang tervalidasi; gambar OG berupa crop 1200×630 dari `mote-9761`.
8. **Gerbang peluncuran.** Lulus: dua angka harga terisi di `copy.ts` DAN `[BUTUH DATA: akses]` terjawab, ATAU ada keputusan tertulis Nanan untuk meluncur tanpa itu. Tanpa salah satunya, deploy hanya pratinjau (`noindex` lewat prop `Base.astro`).

---

## 7. Yang sengaja tidak dibangun

- **Tiga paket journey** (Thermal Reset dan seterusnya) — dilarang klien, belum berwujud.
- **Rating dan jumlah ulasan Google** — klien minta dibuang. JSON-LD juga tanpa `aggregateRating`.
- **Galeri lightbox atau carousel** — butuh JS, bertabrakan dengan prioritas kecepatan; foto terkurasi ketat lebih mahal rasanya daripada tumpukan 24 foto.
- **Halaman per unit** — baru 1 dari 9 unit yang terfoto; 8 halaman kosong sama dengan janji palsu.
- **Sematan iframe Google Maps** — sekitar 0,5 MB JS pihak ketiga; tautan keluar sudah cukup.
- **Mesin pemesanan atau kalender ketersediaan** — jalurnya WhatsApp dan OTA, jangan bikin sistem ketiga.
- **Animasi gulir** — halaman ini menjual ketenangan, dan LCP lebih penting.
- **Section testimoni** — nol kutipan yang boleh dipakai; testimoni karangan sama dengan klaim tanpa dasar.

---

## 8. Tiga jebakan

1. **Refleks Tailwind generik.** Worker akan mengetik `rounded-lg`, `shadow-md`, `hover:scale`, dan kartu putih berbingkai dari kebiasaan, lalu halaman langsung jadi "villa template" yang sudah dua kali ditolak. Penangkal: gerbang grep di langkah 6 bersifat lulus atau gagal, bukan saran; register unit HARUS berupa baris dan hairline grup, bukan grid kartu.
2. **Menambal data bolong dengan karangan.** Godaan terbesarnya mengisi harga "Rp 3,5 jt", menjawab akses dengan "jalan lebar, parkir luas", atau menyelipkan lagi angka rating supaya section terlihat penuh. Semuanya pelanggaran keras. Penangkal: `[BUTUH DATA]` hidup di `copy.ts` sebagai field kosong berkomentar, klausa terkait dirender bersyarat, langkah 6 memastikan tidak bocor ke build, langkah 8 menahan peluncuran.
3. **Copy melembek jadi label.** Terjemahan bebas atau "perapian" akan mengubah `Nine villas carry nine flower names.` jadi "Our Villas" dan `The three things everyone asks, answered.` jadi "FAQ", lalu seluruh strategi menjawab-pertanyaan menguap. Penangkal: copy bagian 4 berstatus final dan dicek diff karakter per karakter di langkah 2.

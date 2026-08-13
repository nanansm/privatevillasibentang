# Pemotretan berikutnya harus menutup 7 lubang aset

Koleksi sekarang 24 foto ter-grading (`src/assets/photos/mote-97xx.jpg`, 2400px, Q88). Semuanya potret 2:3 kecuali satu, dan satu-satunya lanskap itu foto riak air abstrak yang tidak membuktikan apa pun. Akibatnya nyata di kode: homepage cuma punya satu pilihan foto yang benar-benar memperlihatkan villa berikut kolamnya, dan delapan dari sembilan unit tidak punya foto sama sekali.

Daftar di bawah bukan wishlist. Ini yang menghambat halaman sekarang.

## 1. Kolam privat berisi orang, diambil melintang

Kekurangan paling mahal. Seluruh penjualan bertumpu pada kalimat "kolam air panasnya tidak dipakai gantian", tapi tidak ada satu pun foto orang berendam. Foto kolam kosong terbaca seperti katalog properti, bukan pengalaman.

- Orientasi **lanskap**, ini wajib. Foto potret memaksa tinggi 1,5 kali lebar di layar 390px, dan aturan klien melarang memotong foto, jadi lanskap satu-satunya cara menaruh bukti di layar pertama.
- Dua orang, jarak sedang, wajah tidak harus terlihat penuh.
- Air harus terbaca jernih sampai dasar, bukan pantulan langit.

## 2. Uap pagi di permukaan kolam

Pembeda "air panas alami" versus "kolam renang biasa" hanya bisa dibuktikan uap. Ambil sebelum pukul 07.00 saat selisih suhu udara dan air paling besar, latar gelap supaya uapnya kontras.

## 3. Senja dan malam

Nol foto setelah matahari turun. Paket menginap dijual sebagai istirahat dua sampai empat hari, tapi seluruh koleksi memperlihatkan satu waktu yang sama: siang terang. Butuh kolam bercahaya lampu, teras menyala, dan langit biru gelap.

## 4. Delapan unit yang belum pernah difoto

Hanya Lily yang terfoto, lengkap dengan plakat pintunya (`mote-9739`). Melati, Aster, Asoka, Mawar, Padma, Seruni, Cendana, dan Anggrek belum ada. Halaman register sembilan bunga sekarang berdiri di atas sembilan ikon vektor dan satu foto.

Per unit, minimal: plakat pintu, kolam di halamannya, dan satu kamar tidur.

## 5. Kamar mandi

Nol foto. Ini pertanyaan standar calon tamu villa dan sekarang tidak terjawab di mana pun, baik di web maupun di OTA.

## 6. Makanan

Copy paket menyebut *slow dining experience* dan *sunset tea reflection*. Tidak ada satu pun foto makanan atau meja makan yang mendukungnya. Selama kosong, klaim itu berdiri tanpa bukti.

## 7. Aerial

Lahan 2.500 m² untuk sembilan villa adalah angka yang dipakai di halaman, tapi tidak ada foto yang memperlihatkan kawasannya sebagai satu kesatuan. Satu bidikan drone menjelaskan tata letak lebih cepat daripada tiga paragraf.

## Syarat teknis, berlaku untuk semua

- Simpan mentah, jangan crop di kamera. Grading mengikuti resep `grade_e` di `assets-source/grade.py`, dengan white balance titik-putih bergain konstan untuk seluruh set.
- Jalankan `exif_transpose` sebelum apa pun. Banyak file dari sesi sebelumnya tersimpan 6000×4000 padahal aslinya potret.
- Utamakan lanskap untuk kandidat hero, potret untuk detail. Rasio koleksi sekarang timpang ke potret dan itu yang mengunci pilihan tata letak.
- Hindari langit terbakar di belakang subjek. Rolloff highlight bermasker di resep grading hanya menolong sampai batas tertentu.

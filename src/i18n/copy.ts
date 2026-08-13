// Copy homepage v3. Draft & QC (banlist-id, format-dokumen) di
// scratchpad copy-v3-draft.md sebelum ditulis di sini.

export type Lang = "en" | "id";

export const copy = {
  en: {
    meta: {
      title: "Private Villa Sibentang | Hot Spring Pool Villas in Garut",
      description:
        "Nine private villas inside Kampung Sumber Alam, a Sundanese thermal sanctuary village in Cipanas, Garut. Each villa keeps its own natural hot spring pool in the yard. Book via WhatsApp.",
    },
    header: {
      self: "EN",
      other: "ID",
      // Wordmark sendirian tidak memberi tahu orang asing bahwa ini
      // penginapan. Deskriptor ini yang menjawabnya sebelum h1 terbaca.
      descriptor: "Hot spring villas, Garut",
    },
    hero: {
      kicker: "SUNDANESE THERMAL ESCAPE",
      h1: "A hot spring pool you never share.",
      sub: "Nine private villas inside Kampung Sumber Alam Resort, Cipanas, Garut, West Java. Every yard keeps its own thermal pool, fed straight from the spring.",
      villasLink: "See the nine villas",
    },
    noQueue: {
      h2: "In Cipanas, people queue to soak. Here, nobody does.",
      body: "The spring that made Cipanas famous flows into a private pool in every villa's yard. No shared pool, no waiting your turn, no rushing to finish.",
      stats: [
        { number: "9", label: "villas on the estate" },
        { number: "2,500 m²", label: "of land across those nine villas" },
        { number: "1", label: "private hot spring pool per villa" },
      ],
    },
    registry: {
      h2: "Nine villas carry nine flower names.",
      body: "Each door carries its own plaque. Choose the size first, the flower after.",
      group1Label: "One bedroom, sleeps two",
      group2Label: "Two bedrooms, sleeps four",
      priceFromWord: "from Rp",
      priceSuffix: "a night, base rate",
      dynamicNote: "Weekday base rate. Final price depends on date, demand, and availability.",
      caption: "The door of Lily, plaque and all.",
      ctaLabel: "Ask which villa is free on your dates",
      waMessage: "Hello Sibentang, which villa is free on my dates?",
    },
    insideVilla: {
      h2: "You sleep a few steps from your own water.",
      body: "Bedrooms sit beside the yard that holds the pool, with indoor and outdoor living space to spread into. Tell us the group size and we will say which villa fits.",
      captionA: "Inside one of the villas.",
      captionB: "The living space opens straight onto the pool.",
    },
    journeys: {
      h2: "Three journeys, same rituals, different depth.",
      intro:
        "The Thermal Reset Journey comes in three lengths, each carrying someah, the Sundanese warmth behind every ritual. Same soaking, same slow dining, deeper the longer you stay.",
      items: [
        {
          code: "2D1N",
          name: "Thermal Reset",
          desc: "A short soak and slow down for couples who need one weekend to switch off. Private thermal soak ritual, sunset tea reflection, and a slow dining experience close the day.",
          waLabel: "Ask for the 2D1N itinerary",
          waMessage: "Hello Sibentang, I would like the itinerary and rate for the 2D1N Thermal Reset.",
        },
        {
          code: "3D2N",
          name: "Deep Reset",
          desc: "Two nights add a signature spa treatment and a yoga session, so the reset goes past the skin. Built for anniversaries and honeymoons that want a slower rhythm.",
          waLabel: "Ask for the 3D2N itinerary",
          waMessage: "Hello Sibentang, I would like the itinerary and rate for the 3D2N Deep Reset.",
        },
        {
          code: "4D3N",
          name: "Integration Reset",
          desc: "Four days layer in aquatic therapy, a morning nature immersion, and a gentle movement session before a farewell ritual and herbal takeaway send you home. Built for a full emotional recharge, not just a getaway.",
          waLabel: "Ask for the 4D3N itinerary",
          waMessage: "Hello Sibentang, I would like the itinerary and rate for the 4D3N Integration Reset.",
        },
      ],
      waMessage: "Hello Sibentang, I would like the itinerary and rate for a Thermal Reset Journey.",
    },
    oneGate: {
      h2: "Your whole day happens inside one gate.",
      body: "Soak at dawn while the air is still cold. Move to the open pavilion by the pool once the afternoon sets in.",
      spaH3: "Pitaloka Spa",
      spaBody: "Bathing rituals run inside the estate. Ask us to schedule one during your stay.",
    },
    faq: {
      h2: "Four things people ask before they book.",
      items: [
        {
          q: "How much is one night?",
          a: "One-bedroom villas start from Rp 3,059,000, two-bedroom from Rp 4,259,000 on weekdays. That is the base rate; the exact price depends on the date, demand, and availability, so confirm on WhatsApp.",
        },
        {
          q: "Where do we book?",
          a: "WhatsApp is fastest, and you talk straight to our team. We are also listed on Traveloka and Agoda.",
        },
        {
          q: "Where exactly are you?",
          a: "We sit right on Jl. Raya Cipanas, the main road through Cipanas, Garut.",
        },
        {
          q: "What is the Thermal Reset Journey?",
          a: "A three-length retreat package built around private thermal soak rituals, spa, yoga, and slow dining, best for couples retreats, anniversaries, and honeymoons. Message us for the full itinerary and rate.",
        },
      ],
      ctaLabel: "Ask for the exact rate on your dates",
      waMessage: "Hello Sibentang, may I have the exact rate for my dates?",
    },
    booking: {
      h2: "Send your dates, we reply on WhatsApp.",
      cta: "WhatsApp us",
      apps: "Also listed on Traveloka and Agoda.",
      mapsLink: "Open in Google Maps",
      waMessage: "Hello Sibentang, I would like to ask about villa availability.",
      kicker: "SIGNATURE PRIVATE VILLA",
      by: "BY KAMPUNG SUMBER ALAM",
      ig: "Instagram @privatevillasibentang",
      langSwitchLabel: "Bahasa Indonesia",
      langSwitchHref: "/id/",
      copyright: "© 2026 Private Villa Sibentang",
    },
  },
  id: {
    meta: {
      title: "Private Villa Sibentang | Villa Kolam Air Panas di Garut",
      description:
        "Sembilan villa privat di dalam Kampung Sumber Alam, sanctuary thermal khas Sunda di Cipanas, Garut. Tiap villa punya kolam air panas alami sendiri di halamannya. Booking lewat WhatsApp.",
    },
    header: {
      self: "ID",
      other: "EN",
      descriptor: "Villa kolam air panas, Garut",
    },
    hero: {
      kicker: "SUNDANESE THERMAL ESCAPE",
      h1: "Kolam air panas yang tidak dipakai gantian.",
      sub: "Sembilan villa privat di dalam Kampung Sumber Alam Resort, Cipanas, Garut, Jawa Barat. Tiap halaman punya kolam air panasnya sendiri, langsung dari sumbernya.",
      villasLink: "Lihat sembilan villanya",
    },
    noQueue: {
      h2: "Di Cipanas orang antre berendam. Di sini tidak ada yang antre.",
      body: "Sumber panas yang bikin Cipanas terkenal itu mengalir ke kolam pribadi di halaman tiap villa. Tanpa kolam bersama, tanpa antre giliran, tanpa buru-buru biar cepat gantian.",
      stats: [
        { number: "9", label: "villa di satu kawasan" },
        { number: "2.500 m²", label: "lahan untuk sembilan villa itu" },
        { number: "1", label: "kolam air panas privat tiap villa" },
      ],
    },
    registry: {
      h2: "Sembilan villa masing-masing pakai nama bunga.",
      body: "Plakat di pintu jadi penanda tiap villa. Pilih ukurannya dulu, baru bunganya.",
      group1Label: "Satu kamar, untuk dua orang",
      group2Label: "Dua kamar, untuk empat orang",
      priceFromWord: "mulai Rp",
      priceSuffix: "per malam, tarif dasar",
      dynamicNote: "Tarif dasar weekday. Harga aktual tergantung tanggal, permintaan, dan ketersediaan.",
      caption: "Pintu Lily, lengkap dengan plakatnya.",
      ctaLabel: "Tanya villa mana yang kosong di tanggalmu",
      waMessage: "Halo Sibentang, villa mana yang kosong di tanggal saya?",
    },
    insideVilla: {
      h2: "Tidurmu cuma beberapa langkah dari kolammu sendiri.",
      body: "Kamar tidur menghadap halaman tempat kolamnya berada, dengan ruang duduk di dalam dan di luar yang cukup buat menyebar. Kasih tahu jumlah orangnya, kami sebutkan villa mana yang pas.",
      captionA: "Bagian dalam salah satu villa.",
      captionB: "Ruang duduknya terbuka langsung ke kolam.",
    },
    journeys: {
      h2: "Tiga journey, ritual sama, kedalaman beda.",
      intro:
        "Thermal Reset Journey hadir dalam tiga durasi, semuanya bawa someah, keramahan khas Sunda di tiap ritualnya. Aktivitasnya sama, cuma makin dalam kalau kamu menginap makin lama.",
      items: [
        {
          code: "2D1N",
          name: "Thermal Reset",
          desc: "Reset akhir pekan buat pasangan yang cuma butuh dua hari buat rehat total. Private thermal soak ritual, sunset tea reflection, dan slow dining experience menutup harinya.",
          waLabel: "Minta itinerary 2D1N",
          waMessage: "Halo Sibentang, saya mau itinerary dan rate Thermal Reset 2D1N.",
        },
        {
          code: "3D2N",
          name: "Deep Reset",
          desc: "Dua malam nambah signature spa treatment dan yoga session, jadi resetnya bukan cuma di kulit. Cocok buat anniversary dan honeymoon yang mau ritme lebih pelan.",
          waLabel: "Minta itinerary 3D2N",
          waMessage: "Halo Sibentang, saya mau itinerary dan rate Deep Reset 3D2N.",
        },
        {
          code: "4D3N",
          name: "Integration Reset",
          desc: "Empat hari nambah aquatic therapy, morning nature immersion, dan gentle movement session, sebelum ditutup farewell ritual plus herbal takeaway buat dibawa pulang. Ini buat emotional recharge penuh, bukan sekadar liburan.",
          waLabel: "Minta itinerary 4D3N",
          waMessage: "Halo Sibentang, saya mau itinerary dan rate Integration Reset 4D3N.",
        },
      ],
      waMessage: "Halo Sibentang, saya mau tanya itinerary dan rate Thermal Reset Journey.",
    },
    oneGate: {
      h2: "Seharianmu berlangsung di balik satu gerbang.",
      body: "Berendam subuh-subuh selagi udara masih dingin. Sorenya pindah ke paviliun terbuka di tepi kolam.",
      spaH3: "Pitaloka Spa",
      spaBody: "Ritual berendamnya berjalan di dalam kawasan. Minta kami jadwalkan selama kamu menginap.",
    },
    faq: {
      h2: "Empat hal yang paling sering ditanyakan sebelum booking.",
      items: [
        {
          q: "Berapa harga per malam?",
          a: "Villa satu kamar mulai Rp 3.059.000, dua kamar mulai Rp 4.259.000 untuk weekday. Itu tarif dasarnya, harga pastinya tergantung tanggal, permintaan, dan ketersediaan, jadi konfirmasi dulu lewat WhatsApp.",
        },
        {
          q: "Pesannya lewat mana?",
          a: "WhatsApp paling cepat, langsung terhubung ke tim kami. Kami juga terdaftar di Traveloka dan Agoda.",
        },
        {
          q: "Lokasinya persisnya di mana?",
          a: "Lokasi kami persis di Jl. Raya Cipanas, jalan utama Cipanas Garut.",
        },
        {
          q: "Thermal Reset Journey itu apa?",
          a: "Paket retreat tiga durasi isinya private thermal soak ritual, spa, yoga, sampai slow dining, pas buat couples retreat, anniversary, atau honeymoon. Chat kami buat itinerary lengkap dan rate-nya.",
        },
      ],
      ctaLabel: "Tanya harga pasti untuk tanggalmu",
      waMessage: "Halo Sibentang, boleh minta harga pasti untuk tanggal saya?",
    },
    booking: {
      h2: "Kirim tanggalmu, kami balas lewat WhatsApp.",
      cta: "Chat WhatsApp",
      apps: "Juga terdaftar di Traveloka dan Agoda.",
      mapsLink: "Buka di Google Maps",
      waMessage: "Halo Sibentang, mau tanya ketersediaan villa.",
      kicker: "SIGNATURE PRIVATE VILLA",
      by: "BY KAMPUNG SUMBER ALAM",
      ig: "Instagram @privatevillasibentang",
      langSwitchLabel: "English",
      langSwitchHref: "/",
      copyright: "© 2026 Private Villa Sibentang",
    },
  },
} as const;

export type Copy = (typeof copy)["en"];

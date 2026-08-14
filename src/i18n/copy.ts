// Copy homepage v3 (fase plumbing, 14 Agu 2026). Sumber: prototipe
// /Users/nanansomanan/Downloads/Sibentang-Website/index.html.
// Kunci lama (meta, header, noQueue, registry, insideVilla, journeys,
// oneGate, booking) dipertahankan verbatim karena masih dipakai section
// component versi lama (HeroSpring, NoQueue, FlowerRegistry, InsideVilla,
// ThermalJourneys, OneGate, BookingBand, SiteHeader) yang belum diganti.
// Kunci baru (hero ditulis ulang, statement, landasan, moments, cards,
// units, faq diperluas, paket, contact) memetakan section-by-section
// prototipe baru untuk dikonsumsi section component fase berikutnya.
// Draft & QC (banlist-id, format-dokumen) dilakukan sebelum ditulis di sini.

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
    // ===== HERO (prototipe baru: video hero, nav dalam header, tombol
    // Reservasi, dua label di garis bawah h1). Field lama (sub, villasLink)
    // sengaja tidak dibawa; markup lama yang memakainya sudah dilepas di
    // HeroSpring.astro sebagai bagian fase plumbing ini.
    hero: {
      kicker: "Nine Private Villas, Natural Hot Springs",
      h1: "Signature Private Villa with a Sundanese Thermal Escape. Cipanas, Garut.",
      nav: [
        { href: "#landasan", label: "Philosophy" },
        { href: "#momen", label: "Moments" },
        { href: "#tawaran", label: "Offering" },
        { href: "#unit", label: "Villas" },
        { href: "#paket", label: "Packages" },
        { href: "#jawaban", label: "FAQ" },
      ],
      reservasi: "Reserve",
      langSwitchLabel: "Choose language",
      ruleLabels: ["Sundanese Thermal Escape", "by Kampung Sumber Alam"],
      brandAlt: "Sibentang Signature Private Villa",
    },
    // ===== STATEMENT (paragraf word-reveal setelah hero) =====
    statement: {
      p: "True rest only happens when nothing is waited for and nothing has to be chased. That is why we built nine private villas in Cipanas, each keeping its own natural hot spring pool, and welcoming you with someah, the sincere warmth of Sundanese hospitality.",
    },
    // ===== LANDASAN (falsafah induk Kampung Sumber Alam) =====
    landasan: {
      paren: "(philosophy)",
      h2: "Rooted in the philosophy of Kampung Sumber Alam.",
      lead: "Sibentang did not start on its own. It grew out of a philosophy its parent resort has held for years: Kampung Sumber Alam, a Sundanese Thermal Sanctuary Village at the foot of Mount Guntur, where natural hot springs and Sundanese hospitality meet.",
      principles: [
        {
          kicker: "Rest",
          h3: "A place to stop.",
          p: "Distance from the pull of daily demands, room to breathe, with no schedule chasing you.",
        },
        {
          kicker: "Recover",
          h3: "Restored by warmth.",
          p: "Natural hot springs and sincere hospitality work together, restoring the body while settling the mind.",
        },
        {
          kicker: "Rejuvenate",
          h3: "Home with new energy.",
          p: "You leave with a clearer mind, and memories that stay long after the stay ends.",
        },
      ],
      quote:
        '"A sanctuary is not defined by isolation. A sanctuary is a place where people feel comfortable, cared for, and connected."',
      cite: "Kampung Sumber Alam Philosophy",
      close:
        "That philosophy is where Sibentang takes its role. The parent resort provides the setting, a sanctuary village that welcomes you in. Sibentang delivers the experience: a Sundanese Thermal Escape, stepping away from your obligations for a while, never from people, because here you are the one being cared for.",
    },
    // ===== STICKY MOMENTS (Pagi / Sore / Malam) =====
    moments: [
      {
        kicker: "Morning",
        h3: "A slow walk, a slower breakfast.",
        p: "Wake up without an alarm. Walk the garden, then breakfast, the day is left open on purpose.",
        imgAlt: "A footpath winding through the trees",
      },
      {
        kicker: "Afternoon",
        h3: "Sunset Tea Reflection.",
        p: "As the sun goes down, warm tea is brought to where you sit by the pool.",
        imgAlt: "Afternoon tea served at the edge of a private pool",
      },
      {
        kicker: "Night",
        h3: "Soaking as the air turns cold.",
        p: "Cipanas nights run cold, but the pool stays warm, flowing on its own with no machine behind it. Soak for as long as you want.",
        imgAlt: "A private pool framed by stone relief",
      },
    ],
    // ===== CARDS: Room. Experience. Escape. (#tawaran) =====
    cards: {
      paren: "(the offering)",
      h2: "Room. Experience. Escape.",
      lead: "Three things Sibentang delivers: the place you stay, the journey you take, and the state you carry home.",
      items: [
        {
          kicker: "Room",
          h3: "Nine doors, nine flower names.",
          p: "Four One Bedroom villas for two, five Two Bedroom villas for a nuclear family or two couples. Every villa stands with its own natural hot spring pool.",
          imgAlt: "Villa facade with its private pool",
        },
        {
          kicker: "Experience",
          h3: "The Sibentang Thermal Reset Journey.",
          p: "Three journey packages: Thermal Reset 2D1N, Deep Reset 3D2N, Integration Reset 4D3N. A sequence of rituals with a name, an order, and someone running it, from welcome ritual to farewell ritual.",
          imgAlt: "A guest at the bedroom threshold facing the pool",
        },
        {
          kicker: "Escape",
          h3: "The Sundanese Thermal Escape.",
          p: "The state you carry home: your obligations stay in the city, your days are already taken care of, and throughout your stay you are welcomed the Sundanese way, with someah.",
          imgAlt: "Garden and water fountain",
        },
      ],
    },
    // ===== UNITS (#unit, sembilan nama bunga) =====
    units: {
      paren: "(the villas)",
      h2: "Nine doors, nine flower names.",
      p: "Four One Bedroom villas for two. Five Two Bedroom villas for a nuclear family or two couples. Every name comes from a flower, and every flower is drawn into its own villa marker, the same marker that greets you at the door.",
      figureAlt: "The entrance to the Lily villa, with its name plaque",
      figcaption: "Every villa has its own door. This is Lily's.",
      ctaLabel: "Ask which villa is available",
      waMessage: "Hello Sibentang, which villa is free on my dates?",
      oneBedroomLabel: "One Bedroom",
      twoBedroomLabel: "Two Bedroom",
      list: [
        { name: "Melati", type: "oneBedroom", iconAlt: "Jasmine flower icon" },
        { name: "Aster", type: "oneBedroom", iconAlt: "Aster flower icon" },
        { name: "Asoka", type: "oneBedroom", iconAlt: "Asoka flower icon" },
        { name: "Mawar", type: "oneBedroom", iconAlt: "Rose flower icon" },
        { name: "Padma", type: "twoBedroom", iconAlt: "Lotus flower icon" },
        { name: "Seruni", type: "twoBedroom", iconAlt: "Chrysanthemum flower icon" },
        { name: "Cendana", type: "twoBedroom", iconAlt: "Sandalwood flower icon" },
        { name: "Lily", type: "twoBedroom", iconAlt: "Lily flower icon" },
        { name: "Anggrek", type: "twoBedroom", iconAlt: "Orchid flower icon" },
      ],
    },
    // ===== FAQ (#jawaban). ctaLabel/waMessage dipertahankan dari copy lama
    // supaya ThreeAnswers.astro (belum diganti) tetap kompilasi; prototipe
    // baru sendiri tidak punya CTA di dalam section FAQ-nya.
    faq: {
      paren: "(answers)",
      h2: "The questions people ask most.",
      items: [
        {
          q: "What is Sibentang?",
          a: "Cipanas hot springs without sharing a pool: nine private villas, full treatment on site, welcomed the Sundanese way. The brand sits under Kampung Sumber Alam.",
        },
        {
          q: "How much does it cost?",
          a: "Rates follow the date and demand, so we do not post a number that could change tomorrow. Send your dates on WhatsApp and our reply carries the real availability and rate for those dates.",
        },
        {
          q: "What is the Thermal Reset package?",
          a: "A two to four day stay with the hours already planned: welcome ritual, signature spa treatment, yoga, aquatic therapy, a Private Thermal Soak Ritual, Sunset Tea Reflection, slow dining, through to a farewell ritual with a herbal farewell gift.",
        },
        {
          q: "How do we get there?",
          a: "Sibentang sits inside the Kampung Sumber Alam estate in Cipanas, Garut. Ask us about the route and vehicle access on WhatsApp and we will walk you through it.",
        },
      ],
      ctaLabel: "Ask for the exact rate on your dates",
      waMessage: "Hello Sibentang, may I have the exact rate for my dates?",
    },
    // ===== PAKET: Sibentang Thermal Reset Journey (#paket) =====
    paket: {
      paren: "(packages)",
      h2: "The Sibentang Thermal Reset Journey.",
      lead: "Three stay packages with the hours already planned. You choose the length, we take care of the rest.",
      items: [
        {
          numberLabel: "PACKAGE 01",
          name: "Thermal Reset",
          duration: "2 Days · 1 Night",
          tagline: '"A Gentle Escape to Pause, Restore & Reconnect"',
          alur: "Arrive & Slow Down → Release Through Warmth → Restore in Stillness → Reawaken with Nature.",
          signatureMoments: [
            "Private Thermal Soak Ritual",
            "Sunset Tea Reflection",
            "Slow Dining Experience",
          ],
          termasuk: [
            "1 night in a private villa",
            "Welcome ritual and herbal welcome drink",
            "Signature spa treatment",
            "Yoga and aquatic therapy",
            "A private soak in your villa's own pool",
            "Dinner, breakfast, and closure lunch",
            "Herbal farewell gift",
          ],
          cocokUntuk: "Couples getaway · anniversary · urban escape.",
          ctaLabel: "Ask About This Package",
          waMessage:
            "Hello Sibentang, I would like to ask about the Thermal Reset 2D1N package.",
        },
        {
          numberLabel: "PACKAGE 02",
          name: "Deep Reset",
          duration: "3 Days · 2 Nights",
          tagline: '"A Deeper Journey to Pause, Restore & Reconnect"',
          alur:
            "Day 1 Arrive & Release → Day 2 Reconnect & Restore, with the second day as the heart of the journey → Day 3 Integrate & Return Gently.",
          signatureMoments: [
            "Sundanese Cultural Touch, local tea, herbal remedies, and Sundanese comfort dining",
            "Silent nature walk",
            "Lantern and thermal ambiance in the evening",
          ],
          termasuk: [
            "2 nights in a private villa",
            "The full Thermal Reset sequence, in its daily form",
            "Daily thermal soak and daily breakfast",
            "Selected lunch and dinner",
            "Farewell ritual and herbal takeaway",
          ],
          cocokUntuk: "Couples retreat · intimate honeymoon · slow living getaway.",
          ctaLabel: "Ask About This Package",
          waMessage:
            "Hello Sibentang, I would like to ask about the Deep Reset 3D2N package.",
        },
        {
          numberLabel: "PACKAGE 03",
          name: "Integration Reset",
          duration: "4 Days · 3 Nights",
          tagline: '"A Deeper Sanctuary Escape"',
          alur: "Arrive & Release → Reawaken with Nature → Slow Sanctuary Living → Thermal Restoration → Return Gently.",
          signatureMoments: [
            "Thermal Restoration, an evening soak under lantern ambiance",
            "Floating tea ritual by the pool",
            "Slow Sanctuary Living, the loosest rhythm of the three packages",
          ],
          termasuk: [
            "3 nights in a private villa",
            "The full Deep Reset sequence, in its daily form",
            "Daily thermal soak and daily breakfast",
            "Selected lunch and dinner",
            "Farewell ritual and herbal takeaway",
          ],
          cocokUntuk:
            "Couples sanctuary escape · anniversary retreat · mindful mountain retreat.",
          ctaLabel: "Ask About This Package",
          waMessage:
            "Hello Sibentang, I would like to ask about the Integration Reset 4D3N package.",
        },
      ],
      note: "Rates depend on the date and guest count. Ask on WhatsApp and we will send the details for the dates you want.",
    },
    // ===== CONTACT (#reservasi) =====
    contact: {
      paren: "(reservation)",
      h2: "Send your dates, we take care of the rest.",
      p: "Decide on your dates and guest count, whether it is just the stay or one of the Thermal Reset packages too. Everything after that is on us.",
      locationLabel: "Location",
      locationValue: "Kampung Sumber Alam estate, Cipanas, Garut",
      waButtonLabel: "Chat on WhatsApp Now",
      travelokaLabel: "Check dates & rates on Traveloka",
      note: "Our reply carries the real availability and rate for the dates you ask about.",
      igLabel: "Instagram",
      igHandle: "@privatevillasibentang",
      copyright: "© 2026 Sibentang, Sundanese Thermal Escape",
      waMessage: "Hello Sibentang, I would like to ask about dates and rates.",
      footerLogoAlt: "Sibentang Signature Private Villa",
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
      kicker: "Sembilan Private Villa Air Panas Alami",
      h1: "Signature Private Villa with a Sundanese Thermal Escape. Cipanas, Garut.",
      nav: [
        { href: "#landasan", label: "Falsafah" },
        { href: "#momen", label: "Momen" },
        { href: "#tawaran", label: "Tawaran" },
        { href: "#unit", label: "Unit" },
        { href: "#paket", label: "Paket" },
        { href: "#jawaban", label: "Jawaban" },
      ],
      reservasi: "Reservasi",
      langSwitchLabel: "Pilih bahasa",
      ruleLabels: ["Sundanese Thermal Escape", "by Kampung Sumber Alam"],
      brandAlt: "Sibentang Signature Private Villa",
    },
    statement: {
      p: "Kami percaya istirahat baru benar-benar terjadi kalau tidak ada yang harus ditunggu dan tidak ada yang harus dikejar. Karena itu kami menyiapkan sembilan private villa di Cipanas: kolam air panas alaminya milik tiap unit, dan Anda dijamu dengan someah — keramahan Sunda yang tulus.",
    },
    landasan: {
      paren: "(falsafah)",
      h2: "Berangkat dari falsafah Kampung Sumber Alam.",
      lead: "Sibentang tidak lahir sendirian. Ia tumbuh dari falsafah yang sudah lama dipegang induknya — Kampung Sumber Alam, Sundanese Thermal Sanctuary Village di kaki Gunung Guntur, tempat air panas alami dan keramahan Sunda dipertemukan.",
      principles: [
        {
          kicker: "Rest",
          h3: "Ruang untuk berhenti.",
          p: "Memberi jarak dari tuntutan hari-hari — ruang untuk menarik napas, tanpa satu pun jadwal yang mengejar.",
        },
        {
          kicker: "Recover",
          h3: "Pulih oleh kehangatan.",
          p: "Air panas alami dan jamuan yang tulus bekerja bersama, memulihkan badan sekaligus menenangkan pikiran.",
        },
        {
          kicker: "Rejuvenate",
          h3: "Pulang dengan tenaga baru.",
          p: "Kembali dengan pikiran yang lebih terang — dan ingatan yang tinggal lama setelah menginapnya selesai.",
        },
      ],
      quote:
        '"A sanctuary is not defined by isolation. A sanctuary is a place where people feel comfortable, cared for, and connected."',
      cite: "— Falsafah Kampung Sumber Alam",
      close:
        "Dari falsafah itulah Sibentang mengambil perannya. Induk menyediakan tempatnya — sanctuary village yang merangkul. Sibentang menghadirkan pengalamannya: Sundanese Thermal Escape — menjauh sejenak dari urusan, tidak pernah dari orang, sebab di sini Anda justru dirawat.",
    },
    moments: [
      {
        kicker: "Pagi",
        h3: "Jalan pagi, sarapan pelan.",
        p: "Bangun tanpa alarm. Jalan pagi di taman, lalu sarapan — jadwal hari ini memang sengaja dikosongkan.",
        imgAlt: "Jalan setapak di antara pepohonan",
      },
      {
        kicker: "Sore",
        h3: "Sunset Tea Reflection.",
        p: "Menjelang matahari turun, teh hangat diantar ke tempat Anda duduk di tepi kolam.",
        imgAlt: "Teh sore di tepi private pool",
      },
      {
        kicker: "Malam",
        h3: "Berendam saat udara turun dingin.",
        p: "Malam-malam Cipanas dingin; air kolamnya tetap hangat, mengalir sendiri tanpa mesin. Berendamlah selama yang Anda mau.",
        imgAlt: "Private pool dengan relief batu",
      },
    ],
    cards: {
      paren: "(tawaran)",
      h2: "Room. Experience. Escape.",
      lead: "Tiga hal yang Sibentang hadirkan — tempat menginapnya, perjalanannya, dan keadaan yang Anda bawa pulang.",
      items: [
        {
          kicker: "Room",
          h3: "Sembilan pintu, sembilan nama bunga.",
          p: "Empat One Bedroom untuk berdua, lima Two Bedroom untuk keluarga inti atau dua pasangan. Tiap unit berdiri dengan kolam air panas alami miliknya sendiri.",
          imgAlt: "Fasad villa dengan private pool",
        },
        {
          kicker: "Experience",
          h3: "Sibentang Thermal Reset Journey.",
          p: "Tiga paket perjalanan — Thermal Reset 2D1N, Deep Reset 3D2N, Integration Reset 4D3N. Rangkaian rawatan yang ada namanya, ada urutannya, dan ada yang menjalankannya: dari welcome ritual sampai farewell ritual.",
          imgAlt: "Tamu di ambang pintu kamar menghadap kolam",
        },
        {
          kicker: "Escape",
          h3: "Sundanese Thermal Escape.",
          p: "Keadaan yang Anda bawa pulang: urusan tertinggal di kota, hari-hari Anda sudah ada yang mengurus, dan sepanjang menginap Anda dijamu dengan cara Sunda yang someah.",
          imgAlt: "Taman dan pancuran air",
        },
      ],
    },
    units: {
      paren: "(unit)",
      h2: "Sembilan pintu, sembilan nama bunga.",
      p: "Empat One Bedroom untuk berdua. Lima Two Bedroom untuk keluarga inti atau dua pasangan. Tiap nama diambil dari bunga, dan tiap bunga digambar menjadi tanda unitnya sendiri — tanda yang sama menyambut Anda di pintu.",
      figureAlt: "Pintu masuk unit Lily dengan penanda namanya",
      figcaption: "Tiap unit punya pintunya sendiri. Ini pintu Lily.",
      ctaLabel: "Tanyakan ketersediaan unit",
      waMessage: "Halo Sibentang, villa mana yang kosong di tanggal saya?",
      oneBedroomLabel: "One Bedroom",
      twoBedroomLabel: "Two Bedroom",
      list: [
        { name: "Melati", type: "oneBedroom", iconAlt: "Ikon bunga melati" },
        { name: "Aster", type: "oneBedroom", iconAlt: "Ikon bunga aster" },
        { name: "Asoka", type: "oneBedroom", iconAlt: "Ikon bunga asoka" },
        { name: "Mawar", type: "oneBedroom", iconAlt: "Ikon bunga mawar" },
        { name: "Padma", type: "twoBedroom", iconAlt: "Ikon bunga padma" },
        { name: "Seruni", type: "twoBedroom", iconAlt: "Ikon bunga seruni" },
        { name: "Cendana", type: "twoBedroom", iconAlt: "Ikon bunga cendana" },
        { name: "Lily", type: "twoBedroom", iconAlt: "Ikon bunga lily" },
        { name: "Anggrek", type: "twoBedroom", iconAlt: "Ikon bunga anggrek" },
      ],
    },
    faq: {
      paren: "(jawaban)",
      h2: "Yang paling sering ditanyakan.",
      items: [
        {
          q: "Sibentang itu apa?",
          a: "Air panas Cipanas tanpa harus berbagi kolam: sembilan private villa, rawatan lengkap di tempat, dijamu dengan cara Sunda. Brand ini berdiri di bawah Kampung Sumber Alam.",
        },
        {
          q: "Berapa tarifnya?",
          a: "Tarif mengikuti tanggal dan permintaan, sehingga kami tidak memasang angka yang esok bisa berubah. Kirimkan tanggal Anda melalui WhatsApp — balasan kami berisi ketersediaan dan tarif yang benar untuk tanggal tersebut.",
        },
        {
          q: "Paket Thermal Reset itu apa?",
          a: "Perjalanan menginap dua sampai empat hari yang jam-jamnya sudah diatur: welcome ritual, signature spa treatment, yoga, aquatic therapy, Private Thermal Soak Ritual, Sunset Tea Reflection, slow dining, sampai farewell ritual dengan herbal farewell gift.",
        },
        {
          q: "Bagaimana akses jalannya?",
          a: "Sibentang berada di dalam kawasan Kampung Sumber Alam, Cipanas, Garut. Pertanyaan mengenai rute dan kendaraan dapat langsung ditanyakan melalui WhatsApp — kami jelaskan sampai Anda yakin.",
        },
      ],
      ctaLabel: "Tanya harga pasti untuk tanggalmu",
      waMessage: "Halo Sibentang, boleh minta harga pasti untuk tanggal saya?",
    },
    paket: {
      paren: "(paket)",
      h2: "Sibentang Thermal Reset Journey.",
      lead: "Tiga paket menginap yang jam-jamnya sudah diatur. Anda memilih panjangnya; sisanya kami yang menyiapkan.",
      items: [
        {
          numberLabel: "PAKET 01",
          name: "Thermal Reset",
          duration: "2 Hari · 1 Malam",
          tagline: '"A Gentle Escape to Pause, Restore & Reconnect"',
          alur: "Arrive & Slow Down → Release Through Warmth → Restore in Stillness → Reawaken with Nature.",
          signatureMoments: [
            "Private Thermal Soak Ritual",
            "Sunset Tea Reflection",
            "Slow Dining Experience",
          ],
          termasuk: [
            "1 malam di private villa",
            "Welcome ritual & welcome drink herbal",
            "Signature spa treatment",
            "Yoga & aquatic therapy",
            "Berendam privat di kolam unit Anda",
            "Dinner, sarapan & closure lunch",
            "Herbal farewell gift",
          ],
          cocokUntuk: "Couples getaway · anniversary · urban escape.",
          ctaLabel: "Tanya Paket Ini",
          waMessage: "Halo Sibentang, saya ingin menanyakan paket Thermal Reset 2D1N.",
        },
        {
          numberLabel: "PAKET 02",
          name: "Deep Reset",
          duration: "3 Hari · 2 Malam",
          tagline: '"A Deeper Journey to Pause, Restore & Reconnect"',
          alur:
            "Day 1 Arrive & Release → Day 2 Reconnect & Restore, dengan hari kedua sebagai inti perjalanan → Day 3 Integrate & Return Gently.",
          signatureMoments: [
            "Sundanese Cultural Touch — teh lokal, ramuan herbal, comfort dining khas Sunda",
            "Silent nature walk",
            "Lantern & thermal ambiance di malam hari",
          ],
          termasuk: [
            "2 malam di private villa",
            "Seluruh rangkaian Thermal Reset, versi harian",
            "Daily thermal soak & daily breakfast",
            "Selected lunch & dinner",
            "Farewell ritual & herbal takeaway",
          ],
          cocokUntuk: "Couples retreat · intimate honeymoon · slow living getaway.",
          ctaLabel: "Tanya Paket Ini",
          waMessage: "Halo Sibentang, saya ingin menanyakan paket Deep Reset 3D2N.",
        },
        {
          numberLabel: "PAKET 03",
          name: "Integration Reset",
          duration: "4 Hari · 3 Malam",
          tagline: '"A Deeper Sanctuary Escape"',
          alur: "Arrive & Release → Reawaken with Nature → Slow Sanctuary Living → Thermal Restoration → Return Gently.",
          signatureMoments: [
            "Thermal Restoration — berendam sore dengan lantern ambiance",
            "Floating tea ritual di tepi kolam",
            "Slow Sanctuary Living — ritme paling longgar dari ketiga paket",
          ],
          termasuk: [
            "3 malam di private villa",
            "Seluruh rangkaian Deep Reset, versi harian",
            "Daily thermal soak & daily breakfast",
            "Selected lunch & dinner",
            "Farewell ritual & herbal takeaway",
          ],
          cocokUntuk: "Couples sanctuary escape · anniversary retreat · mindful mountain retreat.",
          ctaLabel: "Tanya Paket Ini",
          waMessage: "Halo Sibentang, saya ingin menanyakan paket Integration Reset 4D3N.",
        },
      ],
      note: "Harga menyesuaikan tanggal dan jumlah tamu — tanyakan lewat WhatsApp, kami kirim rinciannya untuk tanggal yang Anda mau.",
    },
    contact: {
      paren: "(reservasi)",
      h2: "Kirimkan tanggal Anda, kami yang mengurus sisanya.",
      p: "Tentukan tanggal dan jumlah tamu — menginap saja, atau sekaligus salah satu paket Thermal Reset. Selebihnya menjadi urusan kami.",
      locationLabel: "Lokasi",
      locationValue: "Kawasan Kampung Sumber Alam, Cipanas, Garut",
      waButtonLabel: "Chat WhatsApp Sekarang",
      travelokaLabel: "Cek tanggal & tarif di Traveloka",
      note: "Balasan kami berisi ketersediaan dan tarif yang benar untuk tanggal yang Anda tanyakan.",
      igLabel: "Instagram",
      igHandle: "@privatevillasibentang",
      copyright: "© 2026 Sibentang — Sundanese Thermal Escape",
      waMessage: "Halo Sibentang, saya ingin menanyakan tanggal dan tarif.",
      footerLogoAlt: "Sibentang Signature Private Villa",
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

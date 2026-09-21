import React, { useState } from 'react';

const INITIAL_PRODUCTS = [
  {
    id: 'zoom-pro',
    name: 'Zoom Pro Meeting',
    category: 'streaming',
    tag: 'Meeting VIP',
    tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    iconBg: 'from-blue-600 to-sky-700',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=120&auto=format&fit=crop&q=80',
    description: 'Meeting online tanpa batas durasi 40 menit, kapasitas 100 peserta, cloud recording, dan audio-video kualitas HD.',
    rating: '4.9',
    soldCount: '310+',
    variants: [
      {
        id: 'zm-pv-14d',
        name: 'Private 14 Hari',
        price: 10000,
        duration: '14 Hari',
        type: 'Private',
        stokHabis: false,
        deskripsi: [
          'Private Akun',
          '100 Peserta',
          'Full Garansi'
        ],
        snk: `✦ 𝗭𝗢𝗢𝗠 𝗣𝗥𝗢 • 𝟭𝟰 𝗛𝗔𝗥𝗜
◈ 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 𝟭𝟬 𝗛𝗮𝗿𝗶

╭─〔 📖 𝗦&𝗞 〕
Harap membaca ketentuan berikut agar akun tetap aman dan garansi tetap berlaku.

╭─〔 🛡 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 〕
◆ Garansi Backfree / Premium Hilang berlaku selama 𝟭𝟬 𝗵𝗮𝗿𝗶 sejak akun diterima.

╭─〔 📌 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 〕
◆ Wajib login segera setelah akun diterima.
◆ Jika muncul verifikasi akun, pilih 𝗦𝗸𝗶𝗽 (𝗟𝗲𝘄𝗮𝘁𝗶).
◆ Maksimal 𝟭𝟬𝟬 𝗽𝗲𝘀𝗲𝗿𝘁𝗮 dalam satu meeting.

╭─〔 🔐 𝗔𝗸𝘀𝗲𝘀 𝗘𝗺𝗮𝗶𝗹 〕
◆ Akses email dan kode verifikasi melalui:
https://sengare.art/check-inbox

╭─〔 🎥 𝗣𝗮𝗻𝗱𝘂𝗮𝗻 〕
◆ Jika diminta verifikasi saat login, pilih 𝗦𝗸𝗶𝗽 (𝗟𝗲𝘄𝗮𝘁𝗶).
◆ 𝗖𝗹𝗼𝘂𝗱 𝗥𝗲𝗰𝗼𝗿𝗱𝗶𝗻𝗴 dapat diakses melalui:
https://zoom.us/recording

◆ Jika menggunakan 𝗟𝗼𝗰𝗮𝗹 𝗥𝗲𝗰𝗼𝗿𝗱𝗶𝗻𝗴, hasil rekaman tersimpan di folder Documents pada perangkat.

╭─〔 ⚠️ 𝗣𝗲𝗻𝘁𝗶𝗻𝗴 〕
◆ Pastikan email dan password yang dimasukkan sudah benar.
◆ Simpan informasi akun dengan baik dan jangan dibagikan kepada pihak lain.

╰─❖ 𝗧𝗲𝗿𝗶𝗺𝗮 𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗹𝗮𝗵 𝗼𝗿𝗱𝗲𝗿 💙
Gunakan akun dengan bijak agar tetap aman dan nyaman digunakan.`
      },
      {
        id: 'zm-pv-7d',
        name: 'Private 7 Hari',
        price: 6000,
        duration: '7 Hari',
        type: 'Private',
        stokHabis: false,
        deskripsi: [
          'Private Akun',
          '100 Peserta',
          'Full Garansi'
        ],
        snk: `✦ 𝗭𝗢𝗢𝗠 𝗣𝗥𝗢 • 𝟳 𝗛𝗔𝗥𝗜
◈ 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 𝟳 𝗛𝗮𝗿𝗶

╭─〔 📖 𝗦&𝗞 〕
Harap membaca ketentuan berikut agar akun tetap aman dan garansi tetap berlaku.

╭─〔 🛡 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 〕
◆ Garansi Backfree / Premium Hilang berlaku selama 𝟭𝟬 𝗵𝗮𝗿𝗶 sejak akun diterima.

╭─〔 📌 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 〕
◆ Wajib login segera setelah akun diterima.
◆ Jika muncul verifikasi akun, pilih 𝗦𝗸𝗶𝗽 (𝗟𝗲𝘄𝗮𝘁𝗶).
◆ Maksimal 𝟭𝟬𝟬 𝗽𝗲𝘀𝗲𝗿𝘁𝗮 dalam satu meeting.

╭─〔 🔐 𝗔𝗸𝘀𝗲𝘀 𝗘𝗺𝗮𝗶𝗹 〕
◆ Akses email dan kode verifikasi melalui:
https://sengare.art/check-inbox

╭─〔 🎥 𝗣𝗮𝗻𝗱𝘂𝗮𝗻 〕
◆ Jika diminta verifikasi saat login, pilih 𝗦𝗸𝗶𝗽 (𝗟𝗲𝘄𝗮𝘁𝗶).
◆ 𝗖𝗹𝗼𝘂𝗱 𝗥𝗲𝗰𝗼𝗿𝗱𝗶𝗻𝗴 dapat diakses melalui:
https://zoom.us/recording

◆ Jika menggunakan 𝗟𝗼𝗰𝗮𝗹 𝗥𝗲𝗰𝗼𝗿𝗱𝗶𝗻𝗴, hasil rekaman tersimpan di folder Documents pada perangkat.

╭─〔 ⚠️ 𝗣𝗲𝗻𝘁𝗶𝗻𝗴 〕
◆ Pastikan email dan password yang dimasukkan sudah benar.
◆ Simpan informasi akun dengan baik dan jangan dibagikan kepada pihak lain.

╰─❖ 𝗧𝗲𝗿𝗶𝗺𝗮 𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗹𝗮𝗵 𝗼𝗿𝗱𝗲𝗿 💙
Gunakan akun dengan bijak agar tetap aman dan nyaman digunakan.`
      }
    ],
    features: ['Kapasitas hingga 100 peserta', 'Bebas meeting tanpa limit 40 menit', 'Akses Cloud & Local Recording']
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro Famhead Designer',
    category: 'desain',
    tag: 'Creator Choice',
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    iconBg: 'from-cyan-600 to-blue-700',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XDt9Bji_VcQQPX46XezBZUT7bTDCo28H4MPMvpnUDQ&s=10',
    description: 'Akses 100+ juta foto, font premium, elemen grafis VIP, serta fitur Magic Eraser dan background remover instan.',
    rating: '5.0',
    soldCount: '1.2k+',
    variants: [
      {
        id: 'cnv-hd-lf',
        name: 'Famhead Lifetime',
        price: 100000,
        duration: 'Lifetime',
        type: 'Education Head',
        stokHabis: false,
        deskripsi: [
          'Famhead | Lifetime',
          'Bisa invite 500 member.',
          'Garansi Login.',
          'Plan Education.',
          'Stok Terbatas.',
          'Buy Now Sekarang.'
        ],
        snk: `▣ 𝗦𝗬𝗔𝗥𝗔𝗧 & 𝗞𝗘𝗧𝗘𝗡𝗧𝗨𝗔𝗡 𝗖𝗔𝗡𝗩𝗔 𝗘𝗗𝗨𝗖𝗔𝗧𝗜𝗢𝗡 (𝗛𝗘𝗔𝗗)
✦ Garansi login max 6 jam setelah pembelian

✦ 𝐊𝐞𝐭𝐞𝐧𝐭𝐮𝐚𝐧 𝐏𝐫𝐨𝐝𝐮𝐤
➤ Gunakan link undangan untuk mengundang member.
➤ Jangan invite melalui email, gunakan metode invite via link.
➤ Pastikan link hanya diberikan kepada member yang benar.
➤ Simpan data akun dengan baik dan gunakan sesuai kebutuhan.

✦ 𝐂𝐚𝐭𝐚𝐭𝐚𝐧 𝐏𝐞𝐧𝐭𝐢𝐧𝐠
➤ Invite melalui email maksimal 10 member.
➤ Invite melalui link lebih praktis dan dapat digunakan untuk lebih banyak member.
➤ Jangan membagikan akses akun kepada pihak lain.

📌 WAJIB DIBACA (CANVA LIFETIME)
➤ Akun dapat digunakan selama masih aktif (hingga terkena KOID/BF), tanpa perlu pindah team.
➤ Jangan mengubah nama team maupun status guru pada profil. Jika diubah, garansi hangus.
➤ Login menggunakan email.
➤ Akun Head dapat mengundang hingga ±500 member.
➤ Invite member dilakukan secara manual (bukan melalui link).
➤ Disarankan menambahkan Email Pemulihan / V2L sebagai antisipasi jika domain dinonaktifkan.
➤ Tidak ada garansi apabila domain dinonaktifkan massal oleh Canva.
➤ Garansi hanya berlaku untuk BF/Pro hilang dalam 6jam setelah pembelian atau 1x replace.
➤ Admin berhak menolak garansi apabila syarat & ketentuan di atas dilanggar.

💌 Terima kasih telah melakukan pemesanan.
Mohon membaca dan mengikuti seluruh ketentuan di atas agar akun dapat digunakan dengan lancar serta garansi tetap berlaku.`
      },
      {
        id: 'cnv-hd-1m',
        name: 'Famhead 1 Bulan',
        price: 7500,
        duration: '1 Bulan',
        type: 'Education Head',
        stokHabis: false,
        deskripsi: [
          'Famhead | 1 Bulan',
          'Bisa invite 100 member.',
          'Fullgaransi',
          'Harga Bisa Naik Kapan saja.',
          'Stok Terbatas.',
          'Buy Now Sekarang.'
        ],
        snk: `✦ 𝗖𝗔𝗡𝗩𝗔 𝗛𝗘𝗔𝗗 • 𝟭 𝗕𝘂𝗹𝗮𝗻
◈ Garansi login maksimal 𝟲 𝗷𝗮𝗺 setelah pembelian.
◈ Password Canva: masuk123

╭─〔 📖 𝗦&𝗞 〕
Harap membaca ketentuan berikut agar akun tetap aman dan garansi tetap berlaku.

╭─〔 🔐 𝗔𝗸𝘀𝗲𝘀 𝗖𝗼𝗱𝗲 〕
◆ Link akses verifikasi:
hotmail.com

╰─❖ 𝗧𝗲𝗿𝗶𝗺𝗮 𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗹𝗮𝗵 𝗼𝗿𝗱𝗲𝗿 💙
Semoga akun dapat digunakan dengan lancar.`
      }
    ],
    features: ['Hapus latar belakang foto 1 klik', 'Ribuan template & font premium', 'Akses Akun Head Invite Member']
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro Advanced AI',
    category: 'ai',
    tag: 'Terlaris',
    tagColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    iconBg: 'from-red-600 to-rose-700',
    image: 'https://images.bisnis.com/posts/2025/09/08/1909198/gemini_1757308941.jpg',
    description: 'Akses Google Gemini Advanced dengan konteks penalaran tinggi dan integrasi ekosistem Google Workspace.',
    rating: '4.9',
    soldCount: '420+',
    variants: [
      {
        id: 'gem-18m',
        name: 'Head 18 Bulan',
        price: 10000,
        duration: '18 Bulan',
        type: 'Invite Head',
        stokHabis: false,
        deskripsi: [
          'Link Rendem via Jio',
          'Akun Buyyer, Tinggal Redeem,',
          'Bisa invite 5 member',
          'Bergaransi 1x24jam',
          'Stok Terbatas.'
        ],
        snk: `✦ 𝗟𝗜𝗡𝗞 𝗥𝗘𝗗𝗘𝗘𝗠 • 𝟭𝟴 𝗕𝗨𝗟𝗔𝗡

╭─〔 📖 𝗜𝗻𝗳𝗼 〕
◆ Link redeem telah diperiksa dulu sebelum dikirim ke stok bot.
◆ Pastikan membaca detail produk sebelum melakukan redeem.
◆ Setelah pembelian dan link berhasil digunakan, tidak dapat dilakukan refund atau replacement.

╭─〔 🚀 𝗖𝗮𝗿𝗮 𝗔𝗸𝘁𝗶𝘃𝗮𝘀𝗶 〕
➊ Pilih akun Google yang ingin diaktifkan melalui Google Chrome.
➋ Buka 𝗧𝗮𝗯 𝗕𝗮𝗿𝘂.
➌ Paste link redeem yang diberikan.
➍ Klik 𝗔𝗸𝘁𝗶𝗳𝗸𝗮𝗻 / Activate.
➎ Selesai — aktivasi dapat dilakukan tanpa menambahkan metode pembayaran.

╭─〔 📌 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 〕
◆ Garansi link error berlaku maksimal 𝟮𝟰 𝗷𝗮𝗺 setelah pembelian.
◆ Link redeem aktif sekitar 𝟯–𝟱 𝗵𝗮𝗿i.
◆ Disarankan segera melakukan redeem agar link tidak expired.
◆ Pastikan proses redeem dilakukan dengan benar sesuai panduan.

╭─〔 ⚠️ 𝗣𝗲𝗻𝘁𝗶𝗻𝗴 〕
◆ Kesalahan redeem akibat kelalaian pengguna tidak termasuk garansi.
◆ Dengan melakukan pembelian, pembeli dianggap telah membaca, memahami, dan menyetujui seluruh S&K yang berlaku.

╰─❖ 𝗧𝗲𝗿𝗶𝗺𝗮 𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗹𝗮𝗵 𝗼𝗿𝗱𝗲𝗿. 💙`
      },
      {
        id: 'gem-1y',
        name: 'Head 1 Tahun',
        price: 35000,
        duration: '12 Bulan',
        type: 'Invite Head',
        stokHabis: false,
        deskripsi: [
          'Aktivasi instan via link resmi',
          'Akses fitur Gemini Advanced 1 Tahun',
          'Full garansi penggantian jika link berkendala'
        ],
        snk: 'Wajib mengaktifkan link maksimal 24 jam setelah pembelian. Garansi berlaku penuh sesuai durasi paket.'
      }
    ],
    features: ['Nikmati kemudahan dengan AI dalam sehari - hari mu', 'Konteks token besar & respon cepat', 'Garansi aktif sesuai durasi']
  },
  {
    id: 'capcut-pro',
    name: 'CapCut Pro Video Editor',
    category: 'desain',
    tag: 'Trending',
    tagColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    iconBg: 'from-violet-600 to-purple-800',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhmgpNacIt-LMzLx-2gmklABTYApW-SUjfgnpDxjw0w&s=10',
    description: 'Edit video tanpa watermark, akses seluruh efek filter VIP, auto caption cerdas, dan ekspor kualitas tinggi 4K 60FPS.',
    rating: '4.9',
    soldCount: '750+',
    variants: [
      {
        id: 'cp-pv-7d',
        name: 'Private 7 Hari',
        price: 7500,
        duration: '7 Hari',
        type: 'Private',
        stokHabis: false,
        deskripsi: [
          'Akun Private',
          'Bergaransi 6day',
          'Stok terbatas',
          'Bisa naik kapan saja',
          'Buy now sekarang'
        ],
        snk: `✦ 𝗖𝗔𝗣𝗖𝗨𝗧 𝗣𝗥𝗢 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 • 𝟳 𝗗𝗔𝗬
◈ 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 𝟲 𝗗𝗮𝘆

╭─〔 📖 𝗦&𝗞 〕
Harap membaca ketentuan berikut sebelum login agar akun tetap aman dan garansi tetap berlaku.

╭─〔 🔐 𝗖𝗮𝗿𝗮 𝗟𝗼𝗴𝗶𝗻 〕
➊ Sebelum login, wajib hapus aplikasi CapCut yang lama.
➋ Install dan gunakan CapCut versi terbaru.
➌ Login hanya menggunakan email yang diberikan.
➍ Jika login melalui PC, gunakan fitur Scan QR.

╭─〔 📌 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 〕
◆ Garansi berlaku apabila akun mengalami Backfree (BF).
◆ Garansi juga berlaku apabila status Pro hilang atau kembali menjadi Free sebelum masa aktif berakhir.
◆ Garansi tidak berlaku apabila kendala disebabkan oleh kesalahan pengguna, seperti akun disable, limit login, atau share akun kepada pihak lain.

╰─❖ 𝗧𝗲𝗿𝗶𝗺𝗮 𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗹𝗮𝗵 𝗼𝗿𝗱𝗲𝗿💙
Selamat berkarya dan semoga pengalaman anda menggunakan CapCut Pro semakin maksimal. ✨`
      },
      {
        id: 'cp-pv-30d',
        name: 'Private 30 Hari',
        price: 30000,
        duration: '30 Hari',
        type: 'Private',
        stokHabis: false,
        deskripsi: [
          'Akun Private & Bergaransi',
          'Durasi Langsung 1 Bulan',
          'Stok terbatas',
          'Full Garansi',
          'Harga bisa naik kapan saja',
          'Buy now sekarang'
        ],
        snk: `✦ 𝗖𝗔𝗣𝗖𝗨𝗧 𝗣𝗥𝗢 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 • 𝟭 𝗕𝗨𝗟𝗔𝗡

╭─〔 📖 𝗦&𝗞 〕
Harap membaca ketentuan berikut sebelum login agar akun tetap aman dan garansi tetap berlaku.

╭─〔 🔐 𝗖𝗮𝗿𝗮 𝗟𝗼𝗴𝗶𝗻 〕
➊ Sebelum login, wajib hapus aplikasi CapCut yang lama.
➋ Gunakan CapCut versi terbaru.
➌ Login hanya menggunakan email yang diberikan.
➍ Jika login melalui PC, gunakan fitur Scan QR.

╭─〔 📌 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 〕
◆ Masa aktif 𝟮𝟴–𝟯𝟬 𝗵𝗮𝗿𝗶 dihitung sebagai 𝟭 𝗯𝘂𝗹𝗮𝗻, mengikuti sistem penyedia.
◆ Garansi berlaku apabila akun mengalami Backfree (BF).
◆ Garansi juga berlaku apabila status Pro hilang atau kembali menjadi Free sebelum masa aktif berakhir.
◆ Garansi tidak berlaku apabila kendala disebabkan oleh kesalahan pengguna, seperti akun disable, limit login, atau share akun kepada pihak lain.
◆ Jika mengalami kendala, segera hubungi Admin.

╰─❖ 𝗧𝗲𝗿𝗶𝗺𝗮 𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗹𝗮𝗵 𝗼𝗿𝗱𝗲𝗿 💙
Selamat berkarya dan semoga pengalaman anda menggunakan CapCut Pro semakin maksimal. ✨`
      }
    ],
    features: ['Ekspor 4K 60FPS tanpa watermark', 'Semua transisi & efek VIP terbuka', 'Bisa login HP & PC']
  },
  {
    id: 'spotify',
    name: 'Spotify Premium Individual',
    category: 'musik',
    tag: 'Populer',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    iconBg: 'from-emerald-600 to-green-700',
    image: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=120&auto=format&fit=crop&q=80',
    description: 'Bebas dengarkan jutaan lagu offline tanpa jeda iklan. Kualitas audio highest 320kbps.',
    rating: '4.8',
    soldCount: '980+',
    variants: [
      {
        id: 'sp-ind-1m',
        name: '1 Bulan Plan Baru/Perpanjang',
        price: 15000,
        duration: '1 Bulan',
        type: 'Individual',
        stokHabis: false,
        deskripsi: ['Bisa akun lama atau baru', 'Bebas skip lagu sepuasnya', 'Download offline aktif'],
        snk: 'Akun tidak boleh melanggar ketentuan region Spotify Family/Individual selama aktif.'
      },
      {
        id: 'sp-ind-3m',
        name: '3 Bulan Plan Invite',
        price: 38000,
        duration: '3 Bulan',
        type: 'Family Invite',
        stokHabis: false,
        deskripsi: ['Sistem invite link resmi', 'Garansi replace 3 bulan', 'Bisa pakai akun pribadi'],
        snk: 'Akun tidak boleh pernah pindah Family Plan dalam kurun waktu 12 bulan terakhir.'
      },
      {
        id: 'sp-ind-1y',
        name: '1 Tahun Full Garansi',
        price: 135000,
        duration: '12 Bulan',
        type: 'Private',
        stokHabis: true,
        deskripsi: ['Akun private eksklusif', 'Full garansi durasi 365 hari'],
        snk: 'Dilarang mengganti alamat email atau data billing bawaan profil.'
      },
    ],
    features: ['Bebas skip lagu sepuasnya', 'Download & dengarkan offline', 'Bisa akun lama atau baru']
  },
  {
    id: 'youtube',
    name: 'YouTube Premium & Music',
    category: 'streaming',
    tag: 'Hemat',
    tagColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    iconBg: 'from-red-600 to-red-800',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&auto=format&fit=crop&q=80',
    description: 'Nonton video bebas iklan, putar di latar belakang, dan gratis akses YouTube Music Premium.',
    rating: '4.9',
    soldCount: '820+',
    variants: [
      {
        id: 'yt-fam-1m',
        name: '1 Bulan Invite Family',
        price: 12000,
        duration: '1 Bulan',
        type: 'Invite',
        stokHabis: false,
        deskripsi: ['Invite via email Google kamu', 'Bebas iklan di seluruh device', 'Termasuk YouTube Music'],
        snk: 'Email Google belum mencapai batas maksimal ganti keluarga (maks 1x per tahun).'
      },
      {
        id: 'yt-fam-3m',
        name: '3 Bulan Invite Family',
        price: 32000,
        duration: '3 Bulan',
        type: 'Invite',
        stokHabis: false,
        deskripsi: ['Hemat 3 bulan langsung', 'Garansi invite ulang jika kendala'],
        snk: 'Wajib menerima undangan keluarga dalam kurun waktu maksimal 2x24 jam.'
      },
      {
        id: 'yt-ind-1m',
        name: '1 Bulan Individual Tanpa Invite',
        price: 25000,
        duration: '1 Bulan',
        type: 'Individual',
        stokHabis: false,
        deskripsi: ['Akun baru siap pakai', 'Akses penuh tanpa ikatan grup keluarga'],
        snk: 'Garansi berlaku selama data login tidak diubah secara sepihak.'
      },
    ],
    features: ['Tanpa gangguan iklan sama sekali', 'Putar di latar belakang & layar mati', 'Termasuk YouTube Music Premium']
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus (GPT-4o)',
    category: 'ai',
    tag: 'Hot Item',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    iconBg: 'from-emerald-700 to-teal-800',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=120&auto=format&fit=crop&q=80',
    description: 'Akses model tercerdas GPT-4o, DALL-E 3 image generator, browsing internet, dan upload dokumen file.',
    rating: '4.9',
    soldCount: '630+',
    variants: [
      {
        id: 'gpt-sh-1m',
        name: '1 Bulan Sharing Akun',
        price: 45000,
        duration: '1 Bulan',
        type: 'Sharing',
        stokHabis: false,
        deskripsi: ['1 Akun dibagi beberapa pengguna', 'Akses GPT-4o & DALL-E 3', 'Hemat biaya langganan'],
        snk: 'Dilarang keras mengubah password akun atau menghapus chat history pengguna lain.'
      },
      {
        id: 'gpt-pv-1m',
        name: '1 Bulan Private Akun Baru',
        price: 299000,
        duration: '1 Bulan',
        type: 'Private',
        stokHabis: false,
        deskripsi: ['Akun privat eksklusif 1 user', 'Bebas ubah password', 'Riwayat chat 100% aman'],
        snk: 'Garansi replace akun berlaku penuh selama 30 hari sesuai ketentuan OpenAI.'
      },
    ],
    features: ['Akses prioritas tanpa limit antrean', 'Generate gambar DALL-E 3', 'Analisis file spreadsheet & PDF']
  }
];

const INITIAL_ORDERS = [
  {
    id: 'YOG-849102',
    productName: 'Zoom Pro Meeting (Private 14 Hari)',
    variantId: 'zm-pv-14d',
    price: 10800,
    paymentMethod: 'QRIS Realtime',
    whatsapp: '081234567890',
    email: 'alex.buyer@gmail.com',
    status: 'MENUNGGU BAYAR',
    createdAt: '2026-09-21 20:30',
    accountDetails: {
      emailLogin: 'zoom.pro01@sengare.art',
      passwordLogin: 'ZoomPass#14D',
      profilePin: 'Akses inbox: https://sengare.art/check-inbox'
    }
  },
  {
    id: 'YOG-291048',
    productName: 'Canva Pro Famhead Designer (Famhead Lifetime)',
    variantId: 'cnv-hd-lf',
    price: 100800,
    paymentMethod: 'BCA Virtual Account',
    whatsapp: '085799201923',
    email: 'customer.design@gmail.com',
    status: 'MENUNGGU BAYAR',
    createdAt: '2026-09-21 20:35',
    accountDetails: {
      emailLogin: 'canva.head01@premiumzone.net',
      passwordLogin: 'masuk123',
      profilePin: 'Akses hotmail.com untuk verifikasi'
    }
  }
];

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const [adminPinInput, setAdminPinInput] = useState('');
  const [adminPinError, setAdminPinError] = useState('');
  const [adminActiveTab, setAdminActiveTab] = useState('orders');

  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [adminPhone, setAdminPhone] = useState('6281234567890');
  const [customQrisUrl, setCustomQrisUrl] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeTab, setActiveTab] = useState('deskripsi');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('qris');

  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showTrackingModal, setShowTrackingModal] = useState(false);
  const [trackQuery, setTrackQuery] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [copiedItem, setCopiedItem] = useState('');

  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdCat, setNewProdCat] = useState('streaming');
  const [newProdTag, setNewProdTag] = useState('Populer');
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdImg, setNewProdImg] = useState('');
  const [newProdVariantName, setNewProdVariantName] = useState('1 Bulan Sharing');
  const [newProdVariantPrice, setNewProdVariantPrice] = useState(25000);
  const [newProdVariantType, setNewProdVariantType] = useState('Sharing');
  const [newProdFeatures, setNewProdFeatures] = useState('Akses Legal & Resmi, Garansi Replace, Support 24 Jam');

  const formatRupiah = (val) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  const handleOpenCheckout = (product) => {
    setActiveProduct(product);
    setSelectedVariant(product.variants[0]);
    setActiveTab('deskripsi');
    setSelectedPayment('qris');
  };

  const calculateTotal = () => {
    if (!selectedVariant) return 0;
    const fee = selectedPayment === 'qris' ? 800 : 1500;
    return selectedVariant.price + fee;
  };

  const handleProcessOrder = (e) => {
    e.preventDefault();
    if (!customerPhone || !customerEmail) {
      alert('Mohon isi Nomor WhatsApp dan Email dengan benar untuk pengiriman akun!');
      return;
    }

    if (selectedVariant && selectedVariant.stokHabis) {
      alert('Mohon maaf, varian paket ini sedang habis.');
      return;
    }

    const randomId = 'YOG-' + Math.floor(100000 + Math.random() * 900000);
    const fee = selectedPayment === 'qris' ? 800 : 1500;
    const grandTotal = selectedVariant.price + fee;

    const newOrder = {
      id: randomId,
      productName: activeProduct.name + ' (' + selectedVariant.name + ')',
      variantId: selectedVariant.id,
      price: grandTotal,
      paymentMethod: selectedPayment === 'qris' ? 'QRIS Realtime' : selectedPayment.toUpperCase() + ' Virtual Account',
      whatsapp: customerPhone,
      email: customerEmail,
      status: 'MENUNGGU BAYAR',
      createdAt: 'Baru saja',
      accountDetails: {
        emailLogin: 'yogs.' + activeProduct.id + Math.floor(100 + Math.random() * 900) + '@premiumzone.net',
        passwordLogin: 'YogsStore#' + Math.floor(1000 + Math.random() * 9000),
        profilePin: selectedVariant.type === 'Private' ? 'Private Account (Full Akses)' : 'Profil ' + Math.floor(1 + Math.random() * 4) + ' (PIN: ' + Math.floor(1000 + Math.random() * 9000) + ')'
      }
    };

    setOrders([newOrder, ...orders]);
    setCurrentInvoice(newOrder);
    setActiveProduct(null);
    setShowInvoiceModal(true);
  };

  const handleSimulatePaymentSuccess = (invoiceId) => {
    setOrders(prev => prev.map(ord => ord.id === invoiceId ? { ...ord, status: 'SUKSES' } : ord));
    if (currentInvoice && currentInvoice.id === invoiceId) {
      setCurrentInvoice(prev => ({ ...prev, status: 'SUKSES' }));
    }
    if (trackingResult && trackingResult.id === invoiceId) {
      setTrackingResult(prev => ({ ...prev, status: 'SUKSES' }));
    }
  };

  const handleSearchTracking = (e) => {
    e.preventDefault();
    const query = trackQuery.trim().toLowerCase();
    const found = orders.find(o => o.id.toLowerCase() === query || o.whatsapp.includes(query));
    if (found) {
      setTrackingResult(found);
    } else {
      alert('Pesanan tidak ditemukan. Pastikan Nomor Invoice (misal: YOG-849102) atau WhatsApp sudah sesuai.');
    }
  };

  const handleVerifyAdminPin = (e) => {
    e.preventDefault();
    if (adminPinInput === '020320') {
      setIsAdminMode(true);
      setShowAdminLoginModal(false);
      setAdminPinInput('');
      setAdminPinError('');
    } else {
      setAdminPinError('PIN Admin Salah!');
    }
  };

  const handleUpdatePrice = (productId, variantId, newPrice) => {
    const parsed = parseInt(newPrice) || 0;
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          variants: p.variants.map(v => v.id === variantId ? { ...v, price: parsed } : v)
        };
      }
      return p;
    }));
  };

  const handleToggleStock = (productId, variantId, currentStatus) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          variants: p.variants.map(v => v.id === variantId ? { ...v, stokHabis: !currentStatus } : v)
        };
      }
      return p;
    }));
  };

  const handleUpdateAccountDetails = (orderId, field, value) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        return {
          ...o,
          accountDetails: {
            ...o.accountDetails,
            [field]: value
          }
        };
      }
      return o;
    }));
  };

  const handleAddNewProductSubmit = (e) => {
    e.preventDefault();
    if (!newProdName) {
      alert('Nama produk wajib diisi');
      return;
    }

    const newProd = {
      id: 'custom-' + Date.now(),
      name: newProdName,
      category: newProdCat,
      tag: newProdTag || 'Populer',
      tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      iconBg: 'from-purple-600 to-indigo-700',
      image: newProdImg || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
      description: newProdDesc || 'Langganan akun digital premium bergaransi resmi dan support cepat.',
      rating: '5.0',
      soldCount: '10+',
      variants: [
        {
          id: 'var-' + Date.now(),
          name: newProdVariantName,
          price: parseInt(newProdVariantPrice) || 25000,
          duration: '1 Bulan',
          type: newProdVariantType,
          stokHabis: false,
          deskripsi: ['Akses akun resmi bergaransi', 'Support kendala 24 jam'],
          snk: 'Gunakan akun sesuai kapasitas varian yang dipilih.'
        }
      ],
      features: newProdFeatures.split(',').map(f => f.trim())
    };

    setProducts([newProd, ...products]);
    setShowAddProductModal(false);
    setNewProdName('');
    setNewProdDesc('');
    setNewProdImg('');
    alert('Produk baru berhasil ditambahkan ke etalase!');
  };

  const totalOmset = orders.filter(o => o.status === 'SUKSES').reduce((acc, curr) => acc + curr.price, 0);
  const totalSuccessCount = orders.filter(o => o.status === 'SUKSES').length;
  const totalPendingCount = orders.filter(o => o.status === 'MENUNGGU BAYAR').length;
  const filteredProducts = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0b0d14] text-slate-100 font-sans antialiased pb-20 selection:bg-purple-600 selection:text-white">
      <div className="bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-slate-900 border-b border-purple-800/40 px-4 py-2.5 text-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-purple-200">Server & QRIS Otomatis Aktif 24 Jam Nonstop</span>
          </div>
          <div className="flex items-center space-x-4">
            {isAdminMode ? (
              <div className="flex items-center space-x-2">
                <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                  Mode: Owner/Admin Aktif
                </span>
                <button
                  onClick={() => setIsAdminMode(false)}
                  className="text-slate-300 hover:text-white underline font-semibold transition"
                >
                  Keluar Mode Admin
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAdminLoginModal(true)}
                className="bg-purple-950/60 hover:bg-purple-800/60 text-purple-200 px-2.5 py-1 rounded border border-purple-500/30 font-medium transition"
              >
                Login Admin Toko
              </button>
            )}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 bg-[#0d101a]/95 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setIsAdminMode(false)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/25 border border-purple-400/30">
              <span className="text-xl font-black text-white tracking-tighter">Y</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-black text-lg text-white tracking-wider">YOGS</span>
                <span className="font-black text-lg text-purple-400 tracking-wider">STORE</span>
              </div>
              <p className="text-[10px] text-slate-400 -mt-1 font-medium">Pusat Akun Premium & Legal</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setShowTrackingModal(true)}
              className="bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center space-x-1.5"
            >
              <span>Cek Pesanan</span>
            </button>

            {isAdminMode && (
              <button
                onClick={() => setIsAdminMode(!isAdminMode)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/30"
              >
                {isAdminMode ? 'Dashboard Admin' : 'Lihat Toko'}
              </button>
            )}
          </div>
        </div>
      </header>

      {isAdminMode ? (
        <section className="max-w-6xl mx-auto px-4 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <h1 className="text-2xl font-black text-white">Dashboard Kontrol Admin</h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">Kelola transaksi pesanan, atur harga paket, stok ketersediaan, dan ganti akun digital pembeli.</p>
            </div>
            <button
              onClick={() => setIsAdminMode(false)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2 rounded-lg font-bold border border-slate-700 self-start md:self-auto"
            >
              Pratinjau Web Toko
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
              <span className="text-xs font-semibold text-slate-400 block mb-1">Total Omzet Sukses</span>
              <span className="text-xl font-black text-emerald-400">{formatRupiah(totalOmset)}</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
              <span className="text-xs font-semibold text-slate-400 block mb-1">Pesanan Selesai</span>
              <span className="text-xl font-black text-purple-400">{totalSuccessCount} Pesanan</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
              <span className="text-xs font-semibold text-slate-400 block mb-1">Menunggu Pembayaran</span>
              <span className="text-xl font-black text-amber-400">{totalPendingCount} Pesanan</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
              <span className="text-xs font-semibold text-slate-400 block mb-1">Total Aplikasi Aktif</span>
              <span className="text-xl font-black text-blue-400">{products.length} Layanan</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3 mb-6">
            <button
              onClick={() => setAdminActiveTab('orders')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${adminActiveTab === 'orders' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              Kelola Pesanan Masuk ({orders.length})
            </button>
            <button
              onClick={() => setAdminActiveTab('prices')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${adminActiveTab === 'prices' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              Atur Harga, Varian & Stok
            </button>
            <button
              onClick={() => setAdminActiveTab('settings')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${adminActiveTab === 'settings' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              Pengaturan Nomor WA & Toko
            </button>
          </div>

          {adminActiveTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-slate-300">Daftar Transaksi Pembeli</h3>
                <span className="text-xs text-slate-500">Total {orders.length} transaksi tercatat</span>
              </div>
              {orders.map((ord) => (
                <div key={ord.id} className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono font-black text-purple-400 text-base">{ord.id}</span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${ord.status === 'SUKSES' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                        {ord.status}
                      </span>
                      <span className="text-xs text-slate-500">{ord.createdAt}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-black text-slate-100 mr-2">{formatRupiah(ord.price)}</span>
                      {ord.status === 'MENUNGGU BAYAR' && (
                        <button
                          onClick={() => handleSimulatePaymentSuccess(ord.id)}
                          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-lg font-bold transition"
                        >
                          Setujui Lunas
                        </button>
                      )}
                      <a
                        href={`https://wa.me/${ord.whatsapp.replace(/^0/, '62')}?text=Halo%20kak%2C%20pesanan%20${ord.id}%20di%20Yogs%20Store%20telah%20kami%20terima.`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-slate-800 hover:bg-slate-700 text-purple-300 text-xs px-3 py-1.5 rounded-lg font-semibold border border-slate-700"
                      >
                        Chat WA Pembeli
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs">
                    <div>
                      <p className="text-slate-400">Produk: <strong className="text-slate-200">{ord.productName}</strong></p>
                      <p className="text-slate-400 mt-1">WhatsApp: <span className="text-slate-200 font-mono">{ord.whatsapp}</span></p>
                      <p className="text-slate-400 mt-1">Email: <span className="text-slate-200">{ord.email}</span></p>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                      <p className="text-[11px] font-bold text-slate-400">Kredensial Login Akun (Bisa Diedit Admin):</p>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={ord.accountDetails.emailLogin}
                          onChange={(e) => handleUpdateAccountDetails(ord.id, 'emailLogin', e.target.value)}
                          className="bg-slate-900 border border-slate-800 text-purple-200 px-2 py-1 rounded text-xs"
                          placeholder="Email Login"
                        />
                        <input
                          type="text"
                          value={ord.accountDetails.passwordLogin}
                          onChange={(e) => handleUpdateAccountDetails(ord.id, 'passwordLogin', e.target.value)}
                          className="bg-slate-900 border border-slate-800 text-purple-200 px-2 py-1 rounded text-xs"
                          placeholder="Password"
                        />
                      </div>
                      <input
                        type="text"
                        value={ord.accountDetails.profilePin}
                        onChange={(e) => handleUpdateAccountDetails(ord.id, 'profilePin', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 text-purple-200 px-2 py-1 rounded text-xs"
                        placeholder="PIN Profil / Link Akses Verifikasi"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {adminActiveTab === 'prices' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <div>
                  <h3 className="text-sm font-bold text-white">Kelola Produk, Harga & Ketersediaan Stok</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Ubah nominal harga dan tandai stok habis. Perubahan langsung aktif di katalog toko.</p>
                </div>
                <button
                  onClick={() => setShowAddProductModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-purple-600/30 transition flex items-center justify-center space-x-1.5"
                >
                  <span>+ Tambah Produk Baru</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((p) => (
                  <div key={p.id} className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-3">
                    <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover border border-slate-700" />
                      <div>
                        <h4 className="font-bold text-white text-sm">{p.name}</h4>
                        <span className="text-[10px] text-purple-400 uppercase font-mono">{p.category}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {p.variants.map((v) => (
                        <div key={v.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 text-xs gap-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-300 font-medium">{v.name}</span>
                            {v.stokHabis && (
                              <span className="text-[9px] bg-rose-500/20 text-rose-400 border border-rose-500/30 px-1.5 py-0.5 rounded font-bold">
                                Habis
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-3">
                            <label className="flex items-center space-x-1 text-[11px] text-slate-400 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={v.stokHabis || false}
                                onChange={() => handleToggleStock(p.id, v.id, v.stokHabis)}
                                className="rounded text-rose-500 bg-slate-900 border-slate-700"
                              />
                              <span className={v.stokHabis ? "text-rose-400 font-bold" : ""}>Stok Habis</span>
                            </label>
                            <div className="flex items-center space-x-1">
                              <span className="text-slate-500 text-xs font-bold">Rp</span>
                              <input
                                type="number"
                                value={v.price}
                                onChange={(e) => handleUpdatePrice(p.id, v.id, e.target.value)}
                                className="w-24 bg-slate-900 border border-slate-700 text-right px-2 py-1 rounded text-white font-mono font-bold focus:border-purple-500 focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {adminActiveTab === 'settings' && (
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl max-w-xl space-y-4 text-xs">
              <h3 className="text-sm font-bold text-white mb-2">Pengaturan Umum Toko</h3>
              <div>
                <label className="block text-slate-400 font-medium mb-1">Nomor WhatsApp Admin (Untuk Komunikasi & Order CS):</label>
                <input
                  type="text"
                  value={adminPhone}
                  onChange={(e) => setAdminPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 px-3 py-2 rounded-xl text-white font-mono"
                  placeholder="6281234567890"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-medium mb-1">Link URL Gambar Barcode QRIS Toko Kamu (Opsional):</label>
                <input
                  type="text"
                  value={customQrisUrl}
                  onChange={(e) => setCustomQrisUrl(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 px-3 py-2 rounded-xl text-white font-mono"
                  placeholder="https://i.ibb.co/.../qris-kamu.png"
                />
                <p className="text-[11px] text-slate-500 mt-1">Upload foto QRIS di situs gratis seperti postimages.org atau imgbb.com, lalu tempel direct link-nya di sini.</p>
              </div>
              <button
                onClick={() => alert('Pengaturan toko berhasil disimpan!')}
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2 rounded-xl transition"
              >
                Simpan Perubahan
              </button>
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="relative overflow-hidden pt-12 pb-14 border-b border-slate-800/60">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/15 via-transparent to-transparent pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
              <div className="inline-flex items-center space-x-2 bg-purple-950/60 border border-purple-500/30 px-3 py-1.5 rounded-full text-purple-300 text-xs font-semibold mb-4">
                <span>Garansi Akun 100% Replace & Anti On-Hold</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
                Nikmati Hiburan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Premium Murah & Legal</span>
              </h1>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
                Pusat langganan Zoom Pro, Canva Pro, Gemini AI, CapCut Pro tanpa ribet. Akun dikirim instan langsung setelah pembayaran otomatis QRIS.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {[
                  { id: 'all', label: 'Semua Produk' },
                  { id: 'streaming', label: 'Streaming & Meeting' },
                  { id: 'musik', label: 'Musik' },
                  { id: 'desain', label: 'Desain & Editing' },
                  { id: 'ai', label: 'Tools AI' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${selectedCategory === tab.id ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <main className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => {
                const cheapest = Math.min(...p.variants.map(v => v.price));
                return (
                  <div
                    key={p.id}
                    className="bg-gradient-to-b from-slate-900 to-slate-900/60 rounded-3xl border border-slate-800/80 hover:border-purple-500/50 p-6 flex flex-col justify-between transition group shadow-xl hover:shadow-purple-500/10"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <img src={p.image} alt={p.name} className="w-14 h-14 rounded-2xl object-cover shadow-md border border-slate-800" />
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${p.tagColor}`}>
                          {p.tag}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-lg text-white group-hover:text-purple-400 transition">{p.name}</h3>
                      <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">{p.description}</p>
                      
                      <div className="my-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                        {p.features.map((f, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                            <span className="text-purple-400 font-bold">✓</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase font-semibold">Mulai Dari</span>
                        <span className="text-lg font-black text-purple-400">{formatRupiah(cheapest)}</span>
                      </div>
                      <button
                        onClick={() => handleOpenCheckout(p)}
                        className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-lg shadow-purple-600/30 active:scale-95"
                      >
                        Beli Sekarang
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <section className="mt-16 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-black text-white text-center mb-6">Kenapa Belanja di Yogs Store?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-3 border border-purple-500/20">⚡</div>
                  <h4 className="font-bold text-sm text-white mb-1">Pengiriman Otomatis</h4>
                  <p className="text-xs text-slate-400">Akun dikirim langsung di layar dan via WhatsApp setelah pembayaran terdeteksi.</p>
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-3 border border-purple-500/20">🛡️</div>
                  <h4 className="font-bold text-sm text-white mb-1">Full Garansi Durasi</h4>
                  <p className="text-xs text-slate-400">Ada kendala atau hold? Tim kami siap mengganti akun baru tanpa biaya tambahan.</p>
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-3 border border-purple-500/20">💳</div>
                  <h4 className="font-bold text-sm text-white mb-1">Semua Pembayaran</h4>
                  <p className="text-xs text-slate-400">Dukung QRIS (BCA, DANA, GoPay, OVO, ShopeePay) serta Virtual Account.</p>
                </div>
              </div>
            </section>
          </main>
        </>
      )}

      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-purple-500/30 w-full max-w-lg rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="font-black text-white text-base">+ Tambah Produk Baru</h3>
              <button onClick={() => setShowAddProductModal(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>
            <form onSubmit={handleAddNewProductSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Nama Layanan / Aplikasi:</label>
                <input
                  type="text"
                  required
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  placeholder="Contoh: Disney+ Hotstar VIP"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Kategori:</label>
                  <select
                    value={newProdCat}
                    onChange={(e) => setNewProdCat(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  >
                    <option value="streaming">Streaming & Meeting</option>
                    <option value="musik">Musik</option>
                    <option value="desain">Desain & Editing</option>
                    <option value="ai">Tools AI</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Badge Tag:</label>
                  <input
                    type="text"
                    value={newProdTag}
                    onChange={(e) => setNewProdTag(e.target.value)}
                    placeholder="Contoh: Promo / Populer"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Link URL Foto / Logo Produk:</label>
                <input
                  type="text"
                  value={newProdImg}
                  onChange={(e) => setNewProdImg(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Deskripsi Singkat:</label>
                <textarea
                  value={newProdDesc}
                  onChange={(e) => setNewProdDesc(e.target.value)}
                  placeholder="Keterangan keunggulan akun..."
                  rows={2}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-slate-300 block">Varian Paket Awal:</span>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={newProdVariantName}
                    onChange={(e) => setNewProdVariantName(e.target.value)}
                    placeholder="Nama Varian"
                    className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-white"
                  />
                  <input
                    type="number"
                    value={newProdVariantPrice}
                    onChange={(e) => setNewProdVariantPrice(e.target.value)}
                    placeholder="Harga Rp"
                    className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-white"
                  />
                  <select
                    value={newProdVariantType}
                    onChange={(e) => setNewProdVariantType(e.target.value)}
                    className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-white"
                  >
                    <option value="Sharing">Sharing</option>
                    <option value="Private">Private</option>
                    <option value="Invite">Invite</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Fitur Utama (Pisahkan tanda koma):</label>
                <input
                  type="text"
                  value={newProdFeatures}
                  onChange={(e) => setNewProdFeatures(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition mt-2 text-sm"
              >
                Simpan & Munculkan di Toko
              </button>
            </form>
          </div>
        </div>
      )}

      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#111422] border border-purple-500/30 w-full max-w-lg rounded-3xl p-6 shadow-2xl my-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center space-x-3">
                <img src={activeProduct.image} alt={activeProduct.name} className="w-10 h-10 rounded-xl object-cover" />
                <div>
                  <h3 className="font-extrabold text-white text-base">{activeProduct.name}</h3>
                  <span className="text-[11px] text-purple-400 font-medium">Checkout Pemesanan</span>
                </div>
              </div>
              <button onClick={() => setActiveProduct(null)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>

            <form onSubmit={handleProcessOrder} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-2">1. Pilih Variasi Paket:</label>
                <div className="flex flex-wrap gap-2">
                  {activeProduct.variants.map((v) => {
                    const isSelected = selectedVariant?.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition border flex items-center space-x-1.5 ${
                          isSelected
                            ? 'bg-[#00a8cc] border-[#00a8cc] text-white shadow-md shadow-cyan-500/30'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        <span>{v.name}</span>
                        {v.stokHabis && (
                          <span className="text-[9px] bg-rose-500 text-white px-1.5 py-0.5 rounded-full font-semibold">
                            Habis
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-b border-slate-800">
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setActiveTab('deskripsi')}
                    className={`w-1/2 py-2.5 text-center text-xs font-bold tracking-wider transition border-b-2 ${
                      activeTab === 'deskripsi'
                        ? 'border-[#00a8cc] text-[#00a8cc]'
                        : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    DESKRIPSI
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('snk')}
                    className={`w-1/2 py-2.5 text-center text-xs font-bold tracking-wider transition border-b-2 ${
                      activeTab === 'snk'
                        ? 'border-[#00a8cc] text-[#00a8cc]'
                        : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    S & K
                  </button>
                </div>
              </div>

              <div className="p-3 bg-slate-950/70 rounded-2xl border border-slate-800/80 max-h-48 overflow-y-auto">
                {activeTab === 'deskripsi' ? (
                  <ul className="space-y-1.5 text-slate-300">
                    {Array.isArray(selectedVariant?.deskripsi) ? (
                      selectedVariant.deskripsi.map((poin, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-[#00a8cc] font-bold">・</span>
                          <span>{poin}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-slate-400">{selectedVariant?.deskripsi || 'Tidak ada deskripsi rincian khusus.'}</li>
                    )}
                  </ul>
                ) : (
                  <div className="whitespace-pre-line text-slate-300 text-[11px] leading-relaxed">
                    {selectedVariant?.snk || 'Tidak ada syarat & ketentuan khusus untuk varian ini.'}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1.5">2. Data Pengiriman Akun:</label>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Nomor WhatsApp (Contoh: 08123456789)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white placeholder-slate-600 focus:border-purple-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Alamat Email (Untuk Bukti Invoice)"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white placeholder-slate-600 focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1.5">3. Metode Pembayaran:</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'qris', name: 'QRIS Otomatis', badge: 'Semua E-Wallet/Bank' },
                    { id: 'bca', name: 'BCA Virtual Account', badge: 'BCA Only' },
                  ].map((pay) => (
                    <div
                      key={pay.id}
                      onClick={() => setSelectedPayment(pay.id)}
                      className={`p-2.5 rounded-xl border cursor-pointer transition ${selectedPayment === pay.id ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                    >
                      <span className="font-bold block text-slate-200">{pay.name}</span>
                      <span className="text-[10px] text-slate-500">{pay.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Harga Paket</span>
                  <span>{formatRupiah(selectedVariant?.price || 0)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Biaya Layanan/Sistem</span>
                  <span>{formatRupiah(selectedPayment === 'qris' ? 800 : 1500)}</span>
                </div>
                <div className="flex justify-between font-black text-white text-sm pt-1 border-t border-slate-800">
                  <span>Total Pembayaran</span>
                  <span className="text-[#00a8cc]">{formatRupiah(calculateTotal())}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={selectedVariant?.stokHabis}
                className={`w-full font-black py-3 rounded-xl transition text-sm ${
                  selectedVariant?.stokHabis
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed opacity-60'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30'
                }`}
              >
                {selectedVariant?.stokHabis ? 'Stok Varian Habis' : 'Lanjut Pembayaran →'}
              </button>
            </form>
          </div>
        </div>
      )}

      {showInvoiceModal && currentInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#111422] border border-purple-500/30 w-full max-w-md rounded-3xl p-6 shadow-2xl text-center my-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="font-mono font-bold text-xs text-purple-400">INVOICE #{currentInvoice.id}</span>
              <button onClick={() => setShowInvoiceModal(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>

            {currentInvoice.status === 'SUKSES' ? (
              <div className="space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black border border-emerald-500/30">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Pembayaran Sukses!</h3>
                  <p className="text-xs text-slate-400 mt-1">Akun digital kamu sudah siap dan aktif.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left space-y-2.5 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">EMAIL AKUN:</span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-purple-300">{currentInvoice.accountDetails.emailLogin}</span>
                      <button onClick={() => handleCopy(currentInvoice.accountDetails.emailLogin, 'email')} className="text-slate-400 hover:text-white">
                        {copiedItem === 'email' ? 'Disalin!' : 'Salin'}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">PASSWORD:</span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-purple-300">{currentInvoice.accountDetails.passwordLogin}</span>
                      <button onClick={() => handleCopy(currentInvoice.accountDetails.passwordLogin, 'pass')} className="text-slate-400 hover:text-white">
                        {copiedItem === 'pass' ? 'Disalin!' : 'Salin'}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">PROFIL / LINK VERIFIKASI:</span>
                    <span className="font-medium text-slate-200">{currentInvoice.accountDetails.profilePin}</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500">Detail ini juga telah dikirimkan ke WhatsApp {currentInvoice.whatsapp}. Simpan informasi ini dengan baik!</p>
              </div>
            ) : (
              <div className="space-y-4">
                <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Menunggu Pembayaran
                </span>
                <h3 className="text-xl font-black text-white">{formatRupiah(currentInvoice.price)}</h3>
                <p className="text-xs text-slate-400">Scan QRIS menggunakan BCA Mobile, GoPay, DANA, OVO, atau ShopeePay.</p>

                <div className="bg-white p-4 rounded-2xl inline-block shadow-lg mx-auto">
                  {customQrisUrl ? (
                    <img src={customQrisUrl} alt="QRIS Toko" className="w-48 h-48 object-contain mx-auto" />
                  ) : (
                    <div className="w-44 h-44 bg-slate-100 flex flex-col items-center justify-center text-slate-900 border-2 border-dashed border-slate-300 rounded-xl p-2">
                      <span className="font-black text-xl tracking-wider">QRIS</span>
                      <span className="text-[10px] text-slate-500 mt-1">YOGS STORE RESMI</span>
                      <div className="w-24 h-24 bg-slate-900 rounded-lg mt-2 flex items-center justify-center text-white text-xs font-mono">
                        [QR CODE]
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-left text-xs space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>Produk</span>
                    <span className="text-slate-200 font-semibold">{currentInvoice.productName}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Metode</span>
                    <span className="text-slate-200">{currentInvoice.paymentMethod}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleSimulatePaymentSuccess(currentInvoice.id)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs transition"
                >
                  Simulasikan Pembayaran Berhasil (Uji Coba)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showTrackingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="font-bold text-white text-sm">Lacak Status Pesanan</h3>
              <button onClick={() => { setShowTrackingModal(false); setTrackingResult(null); }} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>
            <form onSubmit={handleSearchTracking} className="flex gap-2 mb-4">
              <input
                type="text"
                required
                placeholder="No Invoice (YOG-xxx) / Nomor WA"
                value={trackQuery}
                onChange={(e) => setTrackQuery(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
              <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white text-xs px-4 py-2 rounded-xl font-bold">
                Cari
              </button>
            </form>

            {trackingResult && (
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs space-y-2">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="font-mono font-bold text-purple-400">{trackingResult.id}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${trackingResult.status === 'SUKSES' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'}`}>
                    {trackingResult.status}
                  </span>
                </div>
                <p className="text-slate-300">Produk: <strong>{trackingResult.productName}</strong></p>
                {trackingResult.status === 'SUKSES' ? (
                  <div className="pt-2 border-t border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
                    <p>Email: {trackingResult.accountDetails.emailLogin}</p>
                    <p>Pass: {trackingResult.accountDetails.passwordLogin}</p>
                    <p className="text-purple-400">{trackingResult.accountDetails.profilePin}</p>
                  </div>
                ) : (
                  <p className="text-amber-400 text-[11px]">Silakan selesaikan pembayaran sesuai instruksi QRIS.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {showAdminLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-purple-500/40 w-full max-w-sm rounded-3xl p-6 shadow-2xl text-center">
            <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold mb-3 border border-purple-500/30">
              🔒
            </div>
            <h3 className="font-extrabold text-white text-base">Login Admin Toko</h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">Masukkan 6-digit PIN Admin untuk mengelola pesanan & produk.</p>
            <form onSubmit={handleVerifyAdminPin} className="space-y-3">
              <input
                type="password"
                maxLength={6}
                autoFocus
                placeholder="Masukkan 6 Digit PIN"
                value={adminPinInput}
                onChange={(e) => setAdminPinInput(e.target.value)}
                className="w-full text-center tracking-widest font-mono text-lg bg-slate-950 border border-slate-800 rounded-xl py-2.5 text-white focus:border-purple-500 focus:outline-none"
              />
              {adminPinError && <p className="text-rose-400 text-xs">{adminPinError}</p>}
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAdminLoginModal(false)}
                  className="w-1/2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl text-xs"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-2.5 rounded-xl text-xs"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <a
        href={`https://wa.me/${adminPhone}?text=Halo%20Admin%20Yogs%20Store%2C%20mau%20tanya%20paket%20langganan`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 rounded-full shadow-2xl shadow-emerald-500/30 flex items-center space-x-2 font-bold text-xs transition transform hover:scale-105"
      >
        <span className="text-base font-black">💬</span>
        <span className="hidden sm:inline">WhatsApp CS</span>
      </a>
    </div>
  );
}

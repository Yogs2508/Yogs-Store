import React, { useState, useEffect } from 'react';

const INITIAL_PRODUCTS = [
  {
    id: 'zoom-pro',
    name: 'Zoom Pro Meeting',
    category: 'streaming',
    tag: 'VIP ACCESS',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    image: 'https://www.google.com/imgres?q=zoom&imgurl=https%3A%2F%2Fimg.utdstc.com%2Ficon%2F422%2Ff9e%2F422f9e2c29e37fba78323869f7ab8207e8562a5d0ae8ae5a36dab2593dbacab1%3A600&imgrefurl=https%3A%2F%2Fzoom.id.uptodown.com%2Fmac&docid=Qz3prSwlg6cEEM&tbnid=RaLdM6xXjI25SM&vet=12ahUKEwihmsTTiYWXAxW5kOEIHQgvBYcQnPAOegQISxAA..i&w=600&h=600&hcb=2&ved=2ahUKEwihmsTTiYWXAxW5kOEIHQgvBYcQnPAOegQISxAA',
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
    features: ['Kapasitas hingga 100 peserta', 'Bebas meeting tanpa batas durasi', 'Akses Cloud & Local Recording']
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro Famhead Designer',
    category: 'desain',
    tag: 'BEST VALUE',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
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
    tag: 'HOT AI',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
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
◆ Link redeem aktif sekitar 𝟯–𝟱 𝗵𝗮𝗿𝗶.
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
    features: ['Kemudahan AI dalam rutinitas kerja', 'Konteks token besar & penalaran cepat', 'Garansi aktif sesuai durasi']
  },
  {
    id: 'capcut-pro',
    name: 'CapCut Pro Video Editor',
    category: 'desain',
    tag: 'TRENDING',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
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
    tag: 'POPULAR',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
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
    id: 'chatgpt',
    name: 'ChatGPT Plus (GPT-4o)',
    category: 'ai',
    tag: 'PRO TIER',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
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
    features: ['Akses prioritas tanpa antrean', 'Generate gambar DALL-E 3', 'Analisis file spreadsheet & data']
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
    createdAt: '2026-09-23 20:30',
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
    createdAt: '2026-09-23 20:35',
    accountDetails: {
      emailLogin: 'canva.head01@premiumzone.net',
      passwordLogin: 'masuk123',
      profilePin: 'Akses hotmail.com untuk verifikasi'
    }
  }
];

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorTrailing, setCursorTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    let animationFrameId;
    const followCursor = () => {
      setCursorTrailing((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.18,
        y: prev.y + (cursorPos.y - prev.y) * 0.18
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(followCursor);

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorPos]);

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
  const [newProdTag, setNewProdTag] = useState('NEW');
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdImg, setNewProdImg] = useState('');
  const [newProdVariantName, setNewProdVariantName] = useState('1 Bulan Access');
  const [newProdVariantPrice, setNewProdVariantPrice] = useState(25000);
  const [newProdVariantType, setNewProdVariantType] = useState('Private');
  const [newProdFeatures, setNewProdFeatures] = useState('Legal & Resmi, Garansi Replace, Instant Setup');

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
      alert('Mohon isi Nomor WhatsApp dan Email dengan benar!');
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
        passwordLogin: 'YogsPass#' + Math.floor(1000 + Math.random() * 9000),
        profilePin: selectedVariant.type === 'Private' ? 'Private Account (Full Access)' : 'Profil ' + Math.floor(1 + Math.random() * 4) + ' (PIN: ' + Math.floor(1000 + Math.random() * 9000) + ')'
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
      alert('Pesanan tidak ditemukan. Periksa kembali invoice atau nomor WhatsApp.');
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
      tag: newProdTag || 'NEW',
      tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      image: newProdImg || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
      description: newProdDesc || 'Akses premium legal dan resmi dengan setup instan dan full garansi.',
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
          deskripsi: ['Akses akun resmi bergaransi', 'Support teknis 24 jam'],
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
    alert('Produk baru berhasil ditambahkan!');
  };

  const totalOmset = orders.filter(o => o.status === 'SUKSES').reduce((acc, curr) => acc + curr.price, 0);
  const totalSuccessCount = orders.filter(o => o.status === 'SUKSES').length;
  const totalPendingCount = orders.filter(o => o.status === 'MENUNGGU BAYAR').length;
  const filteredProducts = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans antialiased pb-20 selection:bg-amber-500 selection:text-black">
      {/* Cyber Gold Cursor Ring & Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-amber-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#f59e0b] hidden md:block"
        style={{ transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)` }}
      />
      <div
        className={`fixed top-0 left-0 rounded-full border border-amber-500/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 hidden md:block ${
          isHovered ? 'w-11 h-11 bg-amber-400/10 scale-125 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]' : 'w-7 h-7'
        }`}
        style={{ transform: `translate3d(${cursorTrailing.x - (isHovered ? 22 : 14)}px, ${cursorTrailing.y - (isHovered ? 22 : 14)}px, 0)` }}
      />

      {/* Top Ticker Gold Bar */}
      <div className="bg-[#0e0e12] border-b border-amber-500/20 text-[11px] py-2 px-4 text-zinc-400">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fbbf24]"></span>
            <span className="text-zinc-300 font-mono tracking-wider uppercase">System Operational • Automated Delivery 24/7</span>
          </div>
          <div>
            {isAdminMode ? (
              <button onClick={() => setIsAdminMode(false)} className="text-amber-400 hover:underline font-bold font-mono">
                [ EXIT ADMIN ]
              </button>
            ) : (
              <button onClick={() => setShowAdminLoginModal(true)} className="text-zinc-400 hover:text-amber-400 transition font-mono">
                Admin Console
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Header Ala Akademi Crypto */}
      <header className="sticky top-0 z-30 bg-[#070709]/80 backdrop-blur-xl border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setIsAdminMode(false)}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.35)] text-black font-black text-lg">
              Y
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white">YOGS<span className="text-amber-400 font-mono">.ID</span></span>
              <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest -mt-1">Premium Digital Terminal</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowTrackingModal(true)}
              className="px-4 py-2 text-xs font-bold text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 hover:text-white border border-zinc-800 rounded-full transition font-mono tracking-wider"
            >
              TRACK ORDER
            </button>
            {isAdminMode && (
              <button
                onClick={() => setIsAdminMode(!isAdminMode)}
                className="px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)] transition font-mono"
              >
                DASHBOARD
              </button>
            )}
          </div>
        </div>
      </header>

      {isAdminMode ? (
        <section className="max-w-6xl mx-auto px-4 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
            <div>
              <h1 className="text-2xl font-black text-white tracking-wide">ADMIN CONSOLE</h1>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-mono">Terminal pengelolaan pesanan, harga, dan ketersediaan slot akun.</p>
            </div>
            <button
              onClick={() => setIsAdminMode(false)}
              className="bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs px-4 py-2 rounded-xl font-bold font-mono self-start md:self-auto"
            >
              Lihat Toko
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div className="bg-[#0f0f13] border border-zinc-800/80 p-5 rounded-2xl">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Total Omzet</span>
              <span className="text-xl font-black text-amber-400 font-mono">{formatRupiah(totalOmset)}</span>
            </div>
            <div className="bg-[#0f0f13] border border-zinc-800/80 p-5 rounded-2xl">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Pesanan Sukses</span>
              <span className="text-xl font-black text-white font-mono">{totalSuccessCount} Transaksi</span>
            </div>
            <div className="bg-[#0f0f13] border border-zinc-800/80 p-5 rounded-2xl">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Menunggu Bayar</span>
              <span className="text-xl font-black text-amber-500 font-mono">{totalPendingCount} Transaksi</span>
            </div>
            <div className="bg-[#0f0f13] border border-zinc-800/80 p-5 rounded-2xl">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Produk Aktif</span>
              <span className="text-xl font-black text-zinc-200 font-mono">{products.length} Item</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-zinc-800 pb-3 mb-6">
            <button
              onClick={() => setAdminActiveTab('orders')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition ${adminActiveTab === 'orders' ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'}`}
            >
              PESANAN MASUK ({orders.length})
            </button>
            <button
              onClick={() => setAdminActiveTab('prices')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition ${adminActiveTab === 'prices' ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'}`}
            >
              HARGA & STOK
            </button>
            <button
              onClick={() => setAdminActiveTab('settings')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition ${adminActiveTab === 'settings' ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'}`}
            >
              PENGATURAN TOKO
            </button>
          </div>

          {adminActiveTab === 'orders' && (
            <div className="space-y-4">
              {orders.map((ord) => (
                <div key={ord.id} className="bg-[#0f0f13] border border-zinc-800/80 rounded-2xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800/80 pb-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono font-black text-amber-400 text-base">{ord.id}</span>
                      <span className={`text-[10px] font-black font-mono px-2.5 py-0.5 rounded-full ${ord.status === 'SUKSES' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'}`}>
                        {ord.status}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">{ord.createdAt}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-black text-white mr-2 font-mono">{formatRupiah(ord.price)}</span>
                      {ord.status === 'MENUNGGU BAYAR' && (
                        <button
                          onClick={() => handleSimulatePaymentSuccess(ord.id)}
                          className="bg-amber-400 hover:bg-amber-300 text-black text-xs px-3 py-1.5 rounded-lg font-bold font-mono transition"
                        >
                          Setujui Lunas
                        </button>
                      )}
                      <a
                        href={`https://wa.me/${ord.whatsapp.replace(/^0/, '62')}?text=Halo%20kak%2C%20pesanan%20${ord.id}%20di%20Yogs%20Store%20telah%20kami%20terima.`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-3 py-1.5 rounded-lg font-semibold border border-zinc-700 font-mono"
                      >
                        Chat Pembeli
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs">
                    <div>
                      <p className="text-zinc-400">Produk: <strong className="text-zinc-200">{ord.productName}</strong></p>
                      <p className="text-zinc-400 mt-1">WhatsApp: <span className="text-zinc-200 font-mono">{ord.whatsapp}</span></p>
                      <p className="text-zinc-400 mt-1">Email: <span className="text-zinc-200">{ord.email}</span></p>
                    </div>
                    <div className="bg-[#070709] p-3.5 rounded-xl border border-zinc-800 space-y-2">
                      <p className="text-[11px] font-bold text-amber-400 font-mono uppercase tracking-wider">Kredensial Akun:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={ord.accountDetails.emailLogin}
                          onChange={(e) => handleUpdateAccountDetails(ord.id, 'emailLogin', e.target.value)}
                          className="bg-zinc-900 border border-zinc-800 text-zinc-200 px-2 py-1 rounded text-xs font-mono focus:border-amber-400 focus:outline-none"
                          placeholder="Email Login"
                        />
                        <input
                          type="text"
                          value={ord.accountDetails.passwordLogin}
                          onChange={(e) => handleUpdateAccountDetails(ord.id, 'passwordLogin', e.target.value)}
                          className="bg-zinc-900 border border-zinc-800 text-zinc-200 px-2 py-1 rounded text-xs font-mono focus:border-amber-400 focus:outline-none"
                          placeholder="Password"
                        />
                      </div>
                      <input
                        type="text"
                        value={ord.accountDetails.profilePin}
                        onChange={(e) => handleUpdateAccountDetails(ord.id, 'profilePin', e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 px-2 py-1 rounded text-xs font-mono focus:border-amber-400 focus:outline-none"
                        placeholder="PIN Profil / Link Verifikasi"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {adminActiveTab === 'prices' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0f0f13] p-5 rounded-2xl border border-zinc-800">
                <div>
                  <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Katalog Produk & Penyesuaian Harga</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">Ubah nominal dan tandai status ketersediaan inventaris secara langsung.</p>
                </div>
                <button
                  onClick={() => setShowAddProductModal(true)}
                  className="bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold font-mono px-4 py-2.5 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.3)] transition"
                >
                  + Tambah Produk
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((p) => (
                  <div key={p.id} className="bg-[#0f0f13] border border-zinc-800/80 p-5 rounded-2xl space-y-3">
                    <div className="flex items-center space-x-3 border-b border-zinc-800/80 pb-3">
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover border border-zinc-700" />
                      <div>
                        <h4 className="font-bold text-white text-sm">{p.name}</h4>
                        <span className="text-[10px] text-amber-400 font-mono uppercase tracking-wider">{p.category}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {p.variants.map((v) => (
                        <div key={v.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#070709] p-2.5 rounded-xl border border-zinc-800 text-xs gap-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-zinc-300 font-medium">{v.name}</span>
                            {v.stokHabis && (
                              <span className="text-[9px] bg-rose-500/20 text-rose-400 border border-rose-500/30 px-1.5 py-0.5 rounded font-bold font-mono">
                                HABIS
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-3">
                            <label className="flex items-center space-x-1 text-[11px] text-zinc-400 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={v.stokHabis || false}
                                onChange={() => handleToggleStock(p.id, v.id, v.stokHabis)}
                                className="rounded text-amber-500 bg-zinc-900 border-zinc-700 focus:ring-0"
                              />
                              <span className={v.stokHabis ? "text-rose-400 font-bold" : ""}>Tandai Habis</span>
                            </label>
                            <div className="flex items-center space-x-1">
                              <span className="text-zinc-500 text-xs font-bold font-mono">Rp</span>
                              <input
                                type="number"
                                value={v.price}
                                onChange={(e) => handleUpdatePrice(p.id, v.id, e.target.value)}
                                className="w-24 bg-zinc-900 border border-zinc-700 text-right px-2 py-1 rounded text-white font-mono font-bold focus:border-amber-400 focus:outline-none"
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
            <div className="bg-[#0f0f13] border border-zinc-800 p-6 rounded-2xl max-w-xl space-y-4 text-xs">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2">Konfigurasi Pengaturan Toko</h3>
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Nomor WhatsApp Admin CS:</label>
                <input
                  type="text"
                  value={adminPhone}
                  onChange={(e) => setAdminPhone(e.target.value)}
                  className="w-full bg-[#070709] border border-zinc-800 px-3 py-2 rounded-xl text-white font-mono focus:border-amber-400 focus:outline-none"
                  placeholder="6281234567890"
                />
              </div>
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Link URL Barcode QRIS Toko (Opsional):</label>
                <input
                  type="text"
                  value={customQrisUrl}
                  onChange={(e) => setCustomQrisUrl(e.target.value)}
                  className="w-full bg-[#070709] border border-zinc-800 px-3 py-2 rounded-xl text-white font-mono focus:border-amber-400 focus:outline-none"
                  placeholder="https://i.ibb.co/.../qris.png"
                />
              </div>
              <button
                onClick={() => alert('Pengaturan toko berhasil disimpan!')}
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold font-mono px-4 py-2.5 rounded-xl transition shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                SIMPAN PERUBAHAN
              </button>
            </div>
          )}
        </section>
      ) : (
        <>
          {/* Hero Section Akademi Crypto Vibe */}
          <section className="relative pt-20 pb-16 text-center px-4 overflow-hidden">
            {/* Radial Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

            <div className="max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-6 tracking-wide">
                <span>✦ THE NEXT GENERATION DIGITAL MEMBERSHIP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase">
                Akses Tool <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Premium Digital</span> Tanpa Batas
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
                Langganan Zoom Pro, Canva Pro Famhead, Gemini Advanced AI, dan CapCut dengan jaminan garansi penuh dan pengiriman kredensial akun instan.
              </p>

              {/* Kategori Tab Pill Modern */}
              <div className="flex flex-wrap justify-center gap-2 mt-10">
                {[
                  { id: 'all', label: 'SEMUA AKSES' },
                  { id: 'streaming', label: 'STREAMING & MEETING' },
                  { id: 'desain', label: 'DESAIN & KREATIF' },
                  { id: 'ai', label: 'ARTIFICIAL INTELLIGENCE' },
                  { id: 'musik', label: 'MUSIK' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition ${
                      selectedCategory === tab.id
                        ? 'bg-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                        : 'bg-[#0f0f13] text-zinc-400 hover:text-white border border-zinc-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Grid Katalog Produk */}
          <main className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => {
                const cheapest = Math.min(...p.variants.map((v) => v.price));
                return (
                  <div
                    key={p.id}
                    className="bg-[#0e0e12] rounded-3xl border border-zinc-800/80 hover:border-amber-500/60 p-6 flex flex-col justify-between transition duration-300 group hover:shadow-[0_0_30px_rgba(245,158,11,0.12)] relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <img src={p.image} alt={p.name} className="w-14 h-14 rounded-2xl object-cover border border-zinc-800 shadow-md" />
                        <span className={`text-[10px] font-mono font-black px-2.5 py-1 rounded-full border tracking-wider ${p.tagColor}`}>
                          {p.tag}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-base text-white group-hover:text-amber-400 transition">
                        {p.name}
                      </h3>
                      <p className="text-zinc-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>

                      <div className="my-4 pt-4 border-t border-zinc-800/80 space-y-2">
                        {p.features.map((f, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-[11px] text-zinc-300">
                            <span className="text-amber-400 font-bold">◆</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase font-mono tracking-wider font-semibold">Harga Mulai</span>
                        <span className="text-base font-black text-amber-400 font-mono">{formatRupiah(cheapest)}</span>
                      </div>
                      <button
                        onClick={() => handleOpenCheckout(p)}
                        className="bg-amber-400 hover:bg-amber-300 text-black font-black text-xs px-4 py-2.5 rounded-full font-mono transition shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95"
                      >
                        BELI SEKARANG
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature Cards Modern */}
            <section className="mt-16 bg-[#0e0e12] border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-base font-black font-mono text-white text-center uppercase tracking-widest mb-6">STANDAR KEUNGGULAN YOGS STORE</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold mb-3 border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                    ⚡
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Instant Fulfillment</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Kredensial dan instruksi akses langsung terbuka di layar sesaat setelah transaksi QRIS dikonfirmasi.</p>
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold mb-3 border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                    🛡️
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Guaranteed Duration</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Proteksi garansi replace aktif penuh selama durasi langganan tanpa biaya tambahan.</p>
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold mb-3 border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                    💳
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Real-time QRIS</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Mendukung seluruh platform perbankan mobile dan dompet digital nasional dengan verifikasi instan.</p>
                </div>
              </div>
            </section>
          </main>
        </>
      )}

      {/* Modal Tambah Produk */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0e0e12] border border-amber-500/30 w-full max-w-lg rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <h3 className="font-black text-white text-base font-mono uppercase tracking-wider">+ Tambah Produk Baru</h3>
              <button onClick={() => setShowAddProductModal(false)} className="text-zinc-400 hover:text-white font-bold">✕</button>
            </div>
            <form onSubmit={handleAddNewProductSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Nama Layanan / Aplikasi:</label>
                <input
                  type="text"
                  required
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  placeholder="Contoh: Disney+ Hotstar VIP"
                  className="w-full bg-[#070709] border border-zinc-800 rounded-xl px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-zinc-400 font-semibold mb-1">Kategori:</label>
                  <select
                    value={newProdCat}
                    onChange={(e) => setNewProdCat(e.target.value)}
                    className="w-full bg-[#070709] border border-zinc-800 rounded-xl px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="streaming">Streaming & Meeting</option>
                    <option value="musik">Musik</option>
                    <option value="desain">Desain & Kreatif</option>
                    <option value="ai">Tools AI</option>
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-400 font-semibold mb-1">Badge Tag:</label>
                  <input
                    type="text"
                    value={newProdTag}
                    onChange={(e) => setNewProdTag(e.target.value)}
                    placeholder="Contoh: VIP / NEW"
                    className="w-full bg-[#070709] border border-zinc-800 rounded-xl px-3 py-2 text-white focus:border-amber-400 focus:outline-none font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Link URL Foto Logo:</label>
                <input
                  type="text"
                  value={newProdImg}
                  onChange={(e) => setNewProdImg(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-[#070709] border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Deskripsi Singkat:</label>
                <textarea
                  value={newProdDesc}
                  onChange={(e) => setNewProdDesc(e.target.value)}
                  placeholder="Keterangan keunggulan akun..."
                  rows={2}
                  className="w-full bg-[#070709] border border-zinc-800 rounded-xl px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="p-3 bg-[#070709] rounded-xl border border-zinc-800 space-y-2">
                <span className="font-bold text-amber-400 font-mono block">Varian Awal:</span>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={newProdVariantName}
                    onChange={(e) => setNewProdVariantName(e.target.value)}
                    placeholder="Nama Varian"
                    className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-white"
                  />
                  <input
                    type="number"
                    value={newProdVariantPrice}
                    onChange={(e) => setNewProdVariantPrice(e.target.value)}
                    placeholder="Harga Rp"
                    className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-white font-mono"
                  />
                  <select
                    value={newProdVariantType}
                    onChange={(e) => setNewProdVariantType(e.target.value)}
                    className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-white"
                  >
                    <option value="Private">Private</option>
                    <option value="Sharing">Sharing</option>
                    <option value="Invite">Invite</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Fitur Utama (Pisahkan tanda koma):</label>
                <input
                  type="text"
                  value={newProdFeatures}
                  onChange={(e) => setNewProdFeatures(e.target.value)}
                  className="w-full bg-[#070709] border border-zinc-800 rounded-xl px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold font-mono py-3 rounded-xl transition mt-2 text-sm shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                SIMPAN & TAMPILKAN
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Checkout Pop-Up */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#0e0e12] border border-amber-500/40 w-full max-w-lg rounded-3xl p-6 shadow-2xl my-auto">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <div className="flex items-center space-x-3">
                <img src={activeProduct.image} alt={activeProduct.name} className="w-10 h-10 rounded-xl object-cover border border-zinc-800" />
                <div>
                  <h3 className="font-extrabold text-white text-base">{activeProduct.name}</h3>
                  <span className="text-[11px] text-amber-400 font-mono">ORDER CHECKOUT</span>
                </div>
              </div>
              <button onClick={() => setActiveProduct(null)} className="text-zinc-400 hover:text-white font-bold">✕</button>
            </div>

            <form onSubmit={handleProcessOrder} className="space-y-4 text-xs">
              {/* Pilihan Variasi */}
              <div>
                <label className="block text-zinc-300 font-bold mb-2 font-mono uppercase">1. Pilih Paket Variasi:</label>
                <div className="flex flex-wrap gap-2">
                  {activeProduct.variants.map((v) => {
                    const isSelected = selectedVariant?.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`px-4 py-2 rounded-full text-xs font-bold font-mono transition border flex items-center space-x-1.5 ${
                          isSelected
                            ? 'bg-amber-400 border-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                            : 'bg-[#070709] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <span>{v.name}</span>
                        {v.stokHabis && (
                          <span className="text-[9px] bg-rose-500/20 text-rose-400 border border-rose-500/30 px-1.5 py-0.5 rounded-full font-semibold">
                            Habis
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Deskripsi & S&K */}
              <div className="border-b border-zinc-800">
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setActiveTab('deskripsi')}
                    className={`w-1/2 py-2 text-center text-xs font-bold font-mono tracking-wider transition border-b-2 ${
                      activeTab === 'deskripsi'
                        ? 'border-amber-400 text-amber-400'
                        : 'border-transparent text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    DESKRIPSI
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('snk')}
                    className={`w-1/2 py-2 text-center text-xs font-bold font-mono tracking-wider transition border-b-2 ${
                      activeTab === 'snk'
                        ? 'border-amber-400 text-amber-400'
                        : 'border-transparent text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    S & K
                  </button>
                </div>
              </div>

              {/* Isi Konten Tab */}
              <div className="p-3.5 bg-[#070709] rounded-2xl border border-zinc-800 max-h-48 overflow-y-auto">
                {activeTab === 'deskripsi' ? (
                  <ul className="space-y-1.5 text-zinc-300">
                    {Array.isArray(selectedVariant?.deskripsi) ? (
                      selectedVariant.deskripsi.map((poin, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-amber-400 font-bold">◆</span>
                          <span>{poin}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-zinc-400">{selectedVariant?.deskripsi || 'Tidak ada rincian khusus.'}</li>
                    )}
                  </ul>
                ) : (
                  <div className="whitespace-pre-line text-zinc-300 text-[11px] leading-relaxed">
                    {selectedVariant?.snk || 'Tidak ada syarat & ketentuan khusus untuk varian ini.'}
                  </div>
                )}
              </div>

              {/* Form WhatsApp & Email */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1.5 font-mono uppercase">2. Kontak Penerima Akun:</label>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Nomor WhatsApp (Contoh: 08123456789)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-[#070709] border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:border-amber-400 focus:outline-none font-mono"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Alamat Email (Untuk Bukti Invoice)"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-[#070709] border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Metode Bayar */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1.5 font-mono uppercase">3. Metode Pembayaran:</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'qris', name: 'QRIS Realtime', badge: 'All Bank / E-Wallet' },
                    { id: 'bca', name: 'BCA Virtual Account', badge: 'BCA Only' },
                  ].map((pay) => (
                    <div
                      key={pay.id}
                      onClick={() => setSelectedPayment(pay.id)}
                      className={`p-2.5 rounded-xl border cursor-pointer transition ${
                        selectedPayment === pay.id
                          ? 'bg-amber-400/10 border-amber-400 text-amber-300'
                          : 'bg-[#070709] border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <span className="font-bold block text-zinc-200">{pay.name}</span>
                      <span className="text-[10px] text-zinc-500 font-mono">{pay.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Bayar */}
              <div className="bg-[#070709] p-3.5 rounded-2xl border border-zinc-800 space-y-1">
                <div className="flex justify-between text-zinc-400 font-mono">
                  <span>Harga Paket</span>
                  <span>{formatRupiah(selectedVariant?.price || 0)}</span>
                </div>
                <div className="flex justify-between text-zinc-400 font-mono">
                  <span>Biaya Layanan</span>
                  <span>{formatRupiah(selectedPayment === 'qris' ? 800 : 1500)}</span>
                </div>
                <div className="flex justify-between font-black text-white text-sm pt-1 border-t border-zinc-800 font-mono">
                  <span>Total Pembayaran</span>
                  <span className="text-amber-400">{formatRupiah(calculateTotal())}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={selectedVariant?.stokHabis}
                className={`w-full font-black py-3 rounded-xl transition text-sm font-mono tracking-wider ${
                  selectedVariant?.stokHabis
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    : 'bg-amber-400 hover:bg-amber-300 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                }`}
              >
                {selectedVariant?.stokHabis ? 'STOK VARIAN HABIS' : 'LANJUT KE PEMBAYARAN →'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Invoice QRIS */}
      {showInvoiceModal && currentInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#0e0e12] border border-amber-500/40 w-full max-w-md rounded-3xl p-6 shadow-2xl text-center my-auto">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <span className="font-mono font-bold text-xs text-amber-400">INVOICE #{currentInvoice.id}</span>
              <button onClick={() => setShowInvoiceModal(false)} className="text-zinc-400 hover:text-white font-bold">✕</button>
            </div>

            {currentInvoice.status === 'SUKSES' ? (
              <div className="space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black border border-emerald-500/30">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-black text-white font-mono uppercase">Pembayaran Berhasil!</h3>
                  <p className="text-xs text-zinc-400 mt-1">Kredensial akun digital aktif dan siap digunakan.</p>
                </div>

                <div className="bg-[#070709] p-4 rounded-2xl border border-zinc-800 text-left space-y-2.5 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px] font-mono">EMAIL AKUN:</span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-amber-400">{currentInvoice.accountDetails.emailLogin}</span>
                      <button onClick={() => handleCopy(currentInvoice.accountDetails.emailLogin, 'email')} className="text-zinc-400 hover:text-white font-mono">
                        {copiedItem === 'email' ? 'Disalin!' : 'Salin'}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] font-mono">PASSWORD:</span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-amber-400">{currentInvoice.accountDetails.passwordLogin}</span>
                      <button onClick={() => handleCopy(currentInvoice.accountDetails.passwordLogin, 'pass')} className="text-zinc-400 hover:text-white font-mono">
                        {copiedItem === 'pass' ? 'Disalin!' : 'Salin'}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] font-mono">PROFIL / LINK AKSES:</span>
                    <span className="font-medium text-zinc-200 font-mono">{currentInvoice.accountDetails.profilePin}</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500">Detail akun ini juga telah dikirimkan ke WhatsApp {currentInvoice.whatsapp}.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 font-mono">
                  WAITING PAYMENT
                </span>
                <h3 className="text-2xl font-black text-white font-mono">{formatRupiah(currentInvoice.price)}</h3>
                <p className="text-xs text-zinc-400">Scan QRIS menggunakan BCA Mobile, GoPay, DANA, OVO, atau ShopeePay.</p>

                <div className="bg-white p-3 rounded-2xl inline-block shadow-lg mx-auto">
                  {customQrisUrl ? (
                    <img src={customQrisUrl} alt="QRIS Toko" className="w-48 h-48 object-contain mx-auto" />
                  ) : (
                    <div className="w-44 h-44 bg-zinc-100 flex flex-col items-center justify-center text-zinc-900 border-2 border-dashed border-zinc-300 rounded-xl p-2">
                      <span className="font-black text-xl tracking-wider font-mono">QRIS</span>
                      <span className="text-[10px] text-zinc-500 mt-1 font-mono">YOGS STORE RESMI</span>
                      <div className="w-24 h-24 bg-zinc-950 rounded-lg mt-2 flex items-center justify-center text-white text-xs font-mono">
                        [QR CODE]
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-[#070709] p-3 rounded-xl border border-zinc-800 text-left text-xs space-y-1 font-mono">
                  <div className="flex justify-between text-zinc-400">
                    <span>Produk</span>
                    <span className="text-zinc-200 font-semibold">{currentInvoice.productName}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Metode</span>
                    <span className="text-zinc-200">{currentInvoice.paymentMethod}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleSimulatePaymentSuccess(currentInvoice.id)}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold font-mono py-2.5 rounded-xl text-xs transition shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                >
                  Simulasikan Pembayaran Berhasil
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Lacak Pesanan */}
      {showTrackingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0e0e12] border border-zinc-800 w-full max-w-md rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <h3 className="font-bold text-white text-sm font-mono tracking-wider">LACAK STATUS TRANSAKSI</h3>
              <button onClick={() => { setShowTrackingModal(false); setTrackingResult(null); }} className="text-zinc-400 hover:text-white font-bold">✕</button>
            </div>
            <form onSubmit={handleSearchTracking} className="flex gap-2 mb-4">
              <input
                type="text"
                required
                placeholder="Invoice (YOG-xxx) / No WhatsApp"
                value={trackQuery}
                onChange={(e) => setTrackQuery(e.target.value)}
                className="flex-1 bg-[#070709] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white font-mono focus:border-amber-400 focus:outline-none"
              />
              <button type="submit" className="bg-amber-400 hover:bg-amber-300 text-black text-xs px-4 py-2 rounded-xl font-bold font-mono transition">
                Cari
              </button>
            </form>

            {trackingResult && (
              <div className="bg-[#070709] p-4 rounded-2xl border border-zinc-800 text-xs space-y-2">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span className="font-mono font-bold text-amber-400">{trackingResult.id}</span>
                  <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full ${trackingResult.status === 'SUKSES' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'}`}>
                    {trackingResult.status}
                  </span>
                </div>
                <p className="text-zinc-300">Produk: <strong>{trackingResult.productName}</strong></p>
                {trackingResult.status === 'SUKSES' ? (
                  <div className="pt-2 border-t border-zinc-800 font-mono text-[11px] space-y-1 text-zinc-300">
                    <p>Email: {trackingResult.accountDetails.emailLogin}</p>
                    <p>Pass: {trackingResult.accountDetails.passwordLogin}</p>
                    <p className="text-amber-400">{trackingResult.accountDetails.profilePin}</p>
                  </div>
                ) : (
                  <p className="text-amber-400 text-[11px] font-mono">Selesaikan pembayaran sesuai rincian QRIS.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Login Admin */}
      {showAdminLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0e0e12] border border-amber-500/40 w-full max-w-sm rounded-3xl p-6 shadow-2xl text-center">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold mb-3 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              🔒
            </div>
            <h3 className="font-extrabold text-white text-base font-mono uppercase tracking-wider">Admin Console</h3>
            <p className="text-xs text-zinc-400 mt-1 mb-4 font-mono">Masukkan 6-digit Security PIN</p>
            <form onSubmit={handleVerifyAdminPin} className="space-y-3">
              <input
                type="password"
                maxLength={6}
                autoFocus
                placeholder="Masukkan 6 Digit PIN"
                value={adminPinInput}
                onChange={(e) => setAdminPinInput(e.target.value)}
                className="w-full text-center tracking-widest font-mono text-lg bg-[#070709] border border-zinc-800 rounded-xl py-2.5 text-white focus:border-amber-400 focus:outline-none"
              />
              {adminPinError && <p className="text-rose-400 text-xs font-mono">{adminPinError}</p>}
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAdminLoginModal(false)}
                  className="w-1/2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold font-mono py-2.5 rounded-xl text-xs transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-amber-400 hover:bg-amber-300 text-black font-bold font-mono py-2.5 rounded-xl text-xs shadow-[0_0_15px_rgba(245,158,11,0.3)] transition"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp CS */}
      <a
        href={`https://wa.me/${adminPhone}?text=Halo%20Admin%20Yogs%20Store%2C%20mau%20tanya%20paket%20langganan`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-black p-3.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center space-x-2 font-bold text-xs transition transform hover:scale-105 font-mono"
      >
        <span className="text-base font-black">💬</span>
        <span className="hidden sm:inline">WhatsApp CS</span>
      </a>
    </div>
  );
}

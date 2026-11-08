import React, { useState, useEffect } from 'react';

// URL Logo Toko dari Google Drive kamu
const STORE_LOGO_URL = 'https://lh3.googleusercontent.com/d/1KHWsqxCJXnNU4BjHUID05nAU7nPZTTtP';

// URL Foto Kamu untuk Hero Section dari Google Drive
const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/d/1vu-8Z0Qf2Ynyqb51wO8eiWVB0X3lzOQ2';

const INITIAL_PRODUCTS = [
  {
    id: 'zoom-pro',
    name: 'Zoom Pro Meeting',
    category: 'streaming',
    tag: 'MOST POPULAR',
    tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    icon: '🎥',
    image: 'https://cdn.iconscout.com/icon/free/png-512/free-zoom-logo-icon-download-in-svg-png-gif-file-formats--meeting-video-communication-social-media-pack-logos-icons-1175200.png',
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
        deskripsi: ['Private Akun', '100 Peserta', 'Full Garansi'],
        snk: `✦ 𝗭𝗢𝗢𝗠 𝗣𝗥𝗢 • 𝟭𝟰 𝗛𝗔𝗥𝗜
◈ 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 𝟭𝟬 𝗛𝗮𝗿𝗶

╭─〔 📖 𝗦&𝗞 〕
Harap membaca ketentuan berikut agar akun tetap aman dan garansi tetap berlaku.

╭─〔 🛡 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 〕
◆ Garansi Backfree / Premium Hilang berlaku selama 𝟭𝟬 𝗵𝗮𝗿𝗶 sejak akun diterima.

╭─〔 📌 𝗞𝗲𝘁𝗲𝗻𝘁𝘂𝗮𝗻 〕
◆ Wajib login segera setelah akun diterima.
◆ Jika muncul verifikasi akun, pilih Skip (Lewati).
◆ Maksimal 100 peserta dalam satu meeting.

╭─〔 🔐 𝗔𝗸𝘀𝗲𝘀 𝗘𝗺𝗮𝗶𝗹 〕
◆ Akses email dan kode verifikasi melalui:
https://sengare.art/check-inbox

╰─❖ 𝗧𝗲𝗿𝗶𝗺𝗮 𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗹𝗮𝗵 𝗼𝗿𝗱𝗲𝗿 💙`
      },
      {
        id: 'zm-pv-7d',
        name: 'Private 7 Hari',
        price: 6000,
        duration: '7 Hari',
        type: 'Private',
        stokHabis: false,
        deskripsi: ['Private Akun', '100 Peserta', 'Full Garansi'],
        snk: `✦ 𝗭𝗢𝗢𝗠 𝗣𝗥𝗢 • 𝟳 𝗛𝗔𝗥𝗜
◈ 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 𝟳 𝗛𝗮𝗿𝗶

╭─〔 📖 𝗦&𝗞 〕
Harap membaca ketentuan berikut agar akun tetap aman dan garansi tetap berlaku.

╭─〔 🛡 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 〕
◆ Garansi Backfree / Premium Hilang berlaku selama 7 hari sejak akun diterima.
◆ Akses email verifikasi melalui: https://sengare.art/check-inbox

╰─❖ 𝗧𝗲𝗿𝗶𝗺𝗮 𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗹𝗮𝗵 𝗼𝗿𝗱𝗲𝗿 💙`
      }
    ],
    features: ['Kapasitas hingga 100 peserta', 'Bebas meeting tanpa batas durasi', 'Akses Cloud & Local Recording']
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro Famhead Designer',
    category: 'desain',
    tag: 'CREATOR CHOICE',
    tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    icon: '🎨',
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
        deskripsi: ['Famhead | Lifetime', 'Bisa invite 500 member.', 'Garansi Login.', 'Plan Education.', 'Stok Terbatas.'],
        snk: `▣ 𝗦𝗬𝗔𝗥𝗔𝗧 & 𝗞𝗘𝗧𝗘𝗡𝗧𝗨𝗔𝗡 𝗖𝗔𝗡𝗩𝗔 𝗘𝗗𝗨𝗖𝗔𝗧𝗜𝗢𝗡 (𝗛𝗘𝗔𝗗)
✦ Garansi login max 6 jam setelah pembelian

✦ Ketentuan Produk:
➤ Gunakan link undangan untuk mengundang member.
➤ Jangan invite melalui email, gunakan metode invite via link.
➤ Akun Head dapat mengundang hingga ±500 member.

💌 Terima kasih telah melakukan pemesanan.`
      },
      {
        id: 'cnv-hd-1m',
        name: 'Famhead 1 Bulan',
        price: 7500,
        duration: '1 Bulan',
        type: 'Education Head',
        stokHabis: false,
        deskripsi: ['Famhead | 1 Bulan', 'Bisa invite 100 member.', 'Fullgaransi', 'Stok Terbatas.'],
        snk: `✦ 𝗖𝗔𝗡𝗩𝗔 𝗛𝗘𝗔𝗗 • 𝟭 𝗕𝘂𝗹𝗮𝗻
◈ Garansi login maksimal 6 jam setelah pembelian.
◈ Password Canva: masuk123
◈ Akses verifikasi: hotmail.com`
      }
    ],
    features: ['Hapus latar belakang foto 1 klik', 'Ribuan template & font premium', 'Akses Akun Head Invite Member']
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro Advanced AI',
    category: 'ai',
    tag: 'AI POWERED',
    tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    icon: '✨',
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
        deskripsi: ['Link Redeem via Jio', 'Akun Buyer, Tinggal Redeem', 'Bisa invite 5 member', 'Bergaransi 1x24jam'],
        snk: `✦ 𝗟𝗜𝗡𝗞 𝗥𝗘𝗗𝗘𝗘𝗠 • 𝟭𝟴 𝗕𝗨𝗟𝗔𝗡
◆ Link redeem telah diperiksa sebelum dikirim.
◆ Garansi link error berlaku maksimal 24 jam setelah pembelian.
◆ Aktivasi tanpa menambahkan metode pembayaran.`
      },
      {
        id: 'gem-1y',
        name: 'Head 1 Tahun',
        price: 35000,
        duration: '12 Bulan',
        type: 'Invite Head',
        stokHabis: false,
        deskripsi: ['Aktivasi instan via link resmi', 'Fitur Gemini Advanced 1 Tahun', 'Full garansi durasi paket'],
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
    tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    icon: '✂️',
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
        deskripsi: ['Akun Private', 'Bergaransi 6 Day', 'Stok terbatas', 'Bisa login HP & PC'],
        snk: `✦ 𝗖𝗔𝗣𝗖𝗨𝗧 𝗣𝗥𝗢 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 • 𝟳 𝗗𝗔𝗬
◈ Garansi 6 Day
➊ Install CapCut versi terbaru.
➋ Login hanya menggunakan email yang diberikan.
➌ Jika login PC, gunakan fitur Scan QR.`
      },
      {
        id: 'cp-pv-30d',
        name: 'Private 30 Hari',
        price: 30000,
        duration: '30 Hari',
        type: 'Private',
        stokHabis: false,
        deskripsi: ['Akun Private & Bergaransi', 'Durasi Langsung 1 Bulan', 'Stok terbatas', 'Full Garansi'],
        snk: `✦ 𝗖𝗔𝗣𝗖𝗨𝗧 𝗣𝗥𝗢 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 • 𝟭 𝗕𝗨𝗟𝗔𝗡
◆ Masa aktif 28–30 hari mengikuti sistem penyedia.
◆ Garansi berlaku apabila akun mengalami Backfree (BF).
◆ Segera hubungi admin jika ada kendala.`
      }
    ],
    features: ['Ekspor 4K 60FPS tanpa watermark', 'Semua transisi & efek VIP terbuka', 'Bisa login HP & PC']
  },
  {
    id: 'spotify',
    name: 'Spotify Premium Individual',
    category: 'musik',
    tag: 'POPULAR',
    tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    icon: '🎵',
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
      }
    ],
    features: ['Bebas skip lagu sepuasnya', 'Download & dengarkan offline', 'Bisa akun lama atau baru']
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus (GPT-4o)',
    category: 'ai',
    tag: 'EXCLUSIVE',
    tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    icon: '⚡',
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
        snk: 'Dilarang keras mengubah password akun atau menghapus riwayat obrolan pengguna lain.'
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
      }
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
    createdAt: 'Baru saja',
    accountDetails: {
      emailLogin: 'zoom.pro01@sengare.art',
      passwordLogin: 'ZoomPass#14D',
      profilePin: 'Akses inbox: https://sengare.art/check-inbox'
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
  const [newProdTag, setNewProdTag] = useState('NEW');
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdImg, setNewProdImg] = useState('');
  const [newProdVariantName, setNewProdVariantName] = useState('1 Bulan Access');
  const [newProdVariantPrice, setNewProdVariantPrice] = useState(25000);
  const [newProdVariantType, setNewProdVariantType] = useState('Private');
  const [newProdFeatures, setNewProdFeatures] = useState('Legal & Resmi, Garansi Replace, Instant Setup');

  useEffect(() => {
    const existingFavicon = document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
      existingFavicon.href = STORE_LOGO_URL;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = STORE_LOGO_URL;
      document.head.appendChild(newFavicon);
    }
  }, []);

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
      tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
      icon: '🔥',
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
    <div className="min-h-screen bg-[#090707] text-[#e8e6e3] font-sans antialiased pb-24 selection:bg-orange-600 selection:text-white relative overflow-x-hidden">
      {/* Background Radial Glow ala The Social Voice Academy */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-orange-600/25 via-amber-700/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-[800px] -left-40 w-[500px] h-[500px] bg-orange-600/15 blur-[150px] pointer-events-none rounded-full" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#090707]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setIsAdminMode(false)}>
            <img
              src={STORE_LOGO_URL}
              alt="Logo"
              className="w-9 h-9 rounded-full object-cover border border-orange-500/40 shadow-[0_0_15px_rgba(234,88,12,0.3)]"
            />
            <div>
              <span className="text-base font-extrabold tracking-tight text-white block leading-none">
                YOGS STORE
              </span>
              <span className="text-[10px] text-orange-400 font-semibold tracking-wider uppercase">
                Digital Platform
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-medium text-zinc-400">
            <a href="#katalog" className="hover:text-white transition">Katalog</a>
            <a href="#keunggulan" className="hover:text-white transition">Keunggulan</a>
            <a href="#garansi" className="hover:text-white transition">Garansi</a>
            <button onClick={() => setShowTrackingModal(true)} className="hover:text-orange-400 transition">
              Cek Pesanan
            </button>
          </div>

          <div className="flex items-center space-x-3">
            {isAdminMode ? (
              <button
                onClick={() => setIsAdminMode(false)}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-4 py-2 rounded-full transition shadow-[0_0_20px_rgba(234,88,12,0.4)]"
              >
                Kembali ke Toko
              </button>
            ) : (
              <button
                onClick={() => setShowAdminLoginModal(true)}
                className="text-xs text-zinc-400 hover:text-white transition px-3 py-1.5"
              >
                Log In
              </button>
            )}

            <button
              onClick={() => {
                const el = document.getElementById('katalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs px-4 py-2 rounded-full transition shadow-[0_0_20px_rgba(249,115,22,0.35)]"
            >
              Order Now
            </button>
          </div>
        </div>
      </header>

      {isAdminMode ? (
        <section className="max-w-6xl mx-auto px-5 pt-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <h1 className="text-2xl font-black text-white">DASHBOARD ADMIN</h1>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">Kelola transaksi pesanan, atur harga paket, stok ketersediaan, dan update akun pembeli.</p>
            </div>
            <button
              onClick={() => setIsAdminMode(false)}
              className="bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs px-4 py-2 rounded-xl font-bold self-start md:self-auto"
            >
              Lihat Toko
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div className="bg-[#120e0e] border border-white/5 p-5 rounded-2xl">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Total Omzet Sukses</span>
              <span className="text-xl font-black text-orange-400">{formatRupiah(totalOmset)}</span>
            </div>
            <div className="bg-[#120e0e] border border-white/5 p-5 rounded-2xl">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Pesanan Sukses</span>
              <span className="text-xl font-black text-white">{totalSuccessCount} Transaksi</span>
            </div>
            <div className="bg-[#120e0e] border border-white/5 p-5 rounded-2xl">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Menunggu Bayar</span>
              <span className="text-xl font-black text-amber-500">{totalPendingCount} Transaksi</span>
            </div>
            <div className="bg-[#120e0e] border border-white/5 p-5 rounded-2xl">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Produk Aktif</span>
              <span className="text-xl font-black text-zinc-200">{products.length} Item</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3 mb-6">
            <button
              onClick={() => setAdminActiveTab('orders')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${adminActiveTab === 'orders' ? 'bg-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.3)]' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'}`}
            >
              Pesanan Masuk ({orders.length})
            </button>
            <button
              onClick={() => setAdminActiveTab('prices')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${adminActiveTab === 'prices' ? 'bg-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.3)]' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'}`}
            >
              Atur Harga & Stok
            </button>
            <button
              onClick={() => setAdminActiveTab('settings')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${adminActiveTab === 'settings' ? 'bg-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.3)]' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'}`}
            >
              Pengaturan Toko
            </button>
          </div>

          {adminActiveTab === 'orders' && (
            <div className="space-y-4">
              {orders.map((ord) => (
                <div key={ord.id} className="bg-[#120e0e] border border-white/10 rounded-2xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono font-black text-orange-400 text-base">{ord.id}</span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${ord.status === 'SUKSES' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'}`}>
                        {ord.status}
                      </span>
                      <span className="text-xs text-zinc-500">{ord.createdAt}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-black text-white mr-2">{formatRupiah(ord.price)}</span>
                      {ord.status === 'MENUNGGU BAYAR' && (
                        <button
                          onClick={() => handleSimulatePaymentSuccess(ord.id)}
                          className="bg-orange-600 hover:bg-orange-500 text-white text-xs px-3 py-1.5 rounded-lg font-bold transition"
                        >
                          Setujui Lunas
                        </button>
                      )}
                      <a
                        href={`https://wa.me/${ord.whatsapp.replace(/^0/, '62')}?text=Halo%20kak%2C%20pesanan%20${ord.id}%20di%20Yogs%20Store%20telah%20kami%20terima.`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-3 py-1.5 rounded-lg font-semibold border border-zinc-700"
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
                    <div className="bg-[#090707] p-3.5 rounded-xl border border-white/5 space-y-2">
                      <p className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">Kredensial Akun:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={ord.accountDetails.emailLogin}
                          onChange={(e) => handleUpdateAccountDetails(ord.id, 'emailLogin', e.target.value)}
                          className="bg-zinc-900 border border-white/10 text-zinc-200 px-2 py-1 rounded text-xs focus:border-orange-500 focus:outline-none"
                          placeholder="Email Login"
                        />
                        <input
                          type="text"
                          value={ord.accountDetails.passwordLogin}
                          onChange={(e) => handleUpdateAccountDetails(ord.id, 'passwordLogin', e.target.value)}
                          className="bg-zinc-900 border border-white/10 text-zinc-200 px-2 py-1 rounded text-xs focus:border-orange-500 focus:outline-none"
                          placeholder="Password"
                        />
                      </div>
                      <input
                        type="text"
                        value={ord.accountDetails.profilePin}
                        onChange={(e) => handleUpdateAccountDetails(ord.id, 'profilePin', e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 text-zinc-200 px-2 py-1 rounded text-xs focus:border-orange-500 focus:outline-none"
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#120e0e] p-5 rounded-2xl border border-white/10">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Katalog Produk & Penyesuaian Harga</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">Ubah nominal dan tandai status ketersediaan inventaris secara langsung.</p>
                </div>
                <button
                  onClick={() => setShowAddProductModal(true)}
                  className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-[0_0_15px_rgba(234,88,12,0.3)] transition"
                >
                  + Tambah Produk
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((p) => (
                  <div key={p.id} className="bg-[#120e0e] border border-white/10 p-5 rounded-2xl space-y-3">
                    <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover border border-zinc-800" />
                      <div>
                        <h4 className="font-bold text-white text-sm">{p.name}</h4>
                        <span className="text-[10px] text-orange-400 uppercase font-mono">{p.category}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {p.variants.map((v) => (
                        <div key={v.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#090707] p-2.5 rounded-xl border border-white/5 text-xs gap-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-zinc-300 font-medium">{v.name}</span>
                            {v.stokHabis && (
                              <span className="text-[9px] bg-rose-500/20 text-rose-400 border border-rose-500/30 px-1.5 py-0.5 rounded font-bold">
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
                                className="rounded text-orange-500 bg-zinc-900 border-zinc-700"
                              />
                              <span className={v.stokHabis ? "text-rose-400 font-bold" : ""}>Tandai Habis</span>
                            </label>
                            <div className="flex items-center space-x-1">
                              <span className="text-zinc-500 text-xs font-bold">Rp</span>
                              <input
                                type="number"
                                value={v.price}
                                onChange={(e) => handleUpdatePrice(p.id, v.id, e.target.value)}
                                className="w-24 bg-zinc-900 border border-zinc-700 text-right px-2 py-1 rounded text-white font-mono font-bold focus:border-orange-500 focus:outline-none"
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
            <div className="bg-[#120e0e] border border-white/10 p-6 rounded-2xl max-w-xl space-y-4 text-xs">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Konfigurasi Pengaturan Toko</h3>
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Nomor WhatsApp Admin CS:</label>
                <input
                  type="text"
                  value={adminPhone}
                  onChange={(e) => setAdminPhone(e.target.value)}
                  className="w-full bg-[#090707] border border-white/10 px-3 py-2 rounded-xl text-white font-mono focus:border-orange-500 focus:outline-none"
                  placeholder="6281234567890"
                />
              </div>
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Link URL Barcode QRIS Toko (Opsional):</label>
                <input
                  type="text"
                  value={customQrisUrl}
                  onChange={(e) => setCustomQrisUrl(e.target.value)}
                  className="w-full bg-[#090707] border border-white/10 px-3 py-2 rounded-xl text-white font-mono focus:border-orange-500 focus:outline-none"
                  placeholder="https://i.ibb.co/.../qris.png"
                />
              </div>
              <button
                onClick={() => alert('Pengaturan toko berhasil disimpan!')}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-4 py-2.5 rounded-xl transition shadow-[0_0_15px_rgba(234,88,12,0.3)]"
              >
                SIMPAN PERUBAHAN
              </button>
            </div>
          )}
        </section>
      ) : (
        <>
          {/* Hero Section Style "The Social Voice Academy" */}
          <section className="relative pt-16 pb-16 px-5 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Kolom Kiri: Teks & Action */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[11px] font-bold text-orange-400 tracking-widest uppercase">
                  CREATE. GROW. MONETIZE.
                </span>
                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                  Your All-in-One <br />
                  Content & Creative <br />
                  <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                    Platform
                  </span>
                </h1>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-lg leading-relaxed">
                  Yogs Store memberikan kreator, profesional, dan tim bisnis akses mudah ke berbagai alat digital premium bergaransi resmi untuk menunjang produktivitas harianmu.
                </p>

                {/* Tombol Aksi Kapsul Oranye */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById('katalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs px-5 py-3 rounded-full transition shadow-[0_0_25px_rgba(249,115,22,0.4)] group"
                  >
                    <span>Mulai Berlangganan</span>
                    <span className="w-5 h-5 rounded-full bg-white text-orange-600 flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition">
                      →
                    </span>
                  </button>

                  <button
                    onClick={() => setShowTrackingModal(true)}
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-zinc-300 hover:text-white transition px-4 py-3"
                  >
                    <span className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-[10px] text-orange-400">
                      ▶
                    </span>
                    <span>Cek Status Pesanan</span>
                  </button>
                </div>

                {/* Social Proof Avatars */}
                <div className="flex items-center space-x-3 pt-2">
                  <div className="flex -space-x-2">
                    <img className="w-7 h-7 rounded-full border-2 border-[#090707] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80" alt="Avatar" />
                    <img className="w-7 h-7 rounded-full border-2 border-[#090707] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80" alt="Avatar" />
                    <img className="w-7 h-7 rounded-full border-2 border-[#090707] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80" alt="Avatar" />
                    <img className="w-7 h-7 rounded-full border-2 border-[#090707] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80" alt="Avatar" />
                  </div>
                  <span className="text-[11px] text-zinc-400">
                    Join <strong className="text-white">1,500+ kreator</strong> yang telah berlangganan
                  </span>
                </div>
              </div>

              {/* Kolom Kanan: Visual Card Glow Menggunakan Foto Kamu */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-2 shadow-[0_0_50px_rgba(249,115,22,0.15)]">
                  <img
                    src={HERO_IMAGE_URL}
                    alt="Hero Visual"
                    className="w-full h-80 sm:h-96 object-cover rounded-2xl filter brightness-95 contrast-105"
                  />

                  {/* Floating Metric 1 */}
                  <div className="absolute top-6 right-6 bg-[#160f0f]/90 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-2xl text-right shadow-xl">
                    <span className="text-base font-black text-orange-400 block font-mono">+100%</span>
                    <span className="text-[9px] text-zinc-400 block uppercase font-medium">Garansi Durasi</span>
                  </div>

                  {/* Floating Metric 2 */}
                  <div className="absolute bottom-6 right-6 bg-[#160f0f]/90 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl text-right shadow-xl">
                    <span className="text-xl font-black text-white block font-mono">⚡ 24/7</span>
                    <span className="text-[10px] text-orange-400 block font-semibold">Instant Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted Metric Banner */}
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-2xl font-black text-white block">1.5K+</span>
                <span className="text-[11px] text-zinc-400 uppercase font-medium">Pelanggan Aktif</span>
              </div>
              <div>
                <span className="text-2xl font-black text-orange-400 block">100%</span>
                <span className="text-[11px] text-zinc-400 uppercase font-medium">Garansi Replace</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white block">&lt; 1 Menit</span>
                <span className="text-[11px] text-zinc-400 uppercase font-medium">Proses Otomatis</span>
              </div>
              <div>
                <span className="text-2xl font-black text-amber-400 block">5.0 ★</span>
                <span className="text-[11px] text-zinc-400 uppercase font-medium">Rating Layanan</span>
              </div>
            </div>
          </section>

          {/* Katalog Produk Ala Section Kartu di Gambar */}
          <main id="katalog" className="max-w-6xl mx-auto px-5 py-12">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-[11px] font-bold text-orange-400 tracking-widest uppercase">
                EVERYTHING YOU NEED, ALL IN ONE PLACE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Pilih Akun Premium Terbaikmu
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Akses alat desain, kecerdasan buatan, meeting online, dan hiburan dengan harga hemat dan garansi resmi.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {[
                  { id: 'all', label: 'Semua Produk' },
                  { id: 'streaming', label: 'Streaming & Meeting' },
                  { id: 'desain', label: 'Desain & Kreatif' },
                  { id: 'ai', label: 'AI Tools' },
                  { id: 'musik', label: 'Musik' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                      selectedCategory === tab.id
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                        : 'bg-[#151010] text-zinc-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Kartu Produk */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => {
                const cheapest = Math.min(...p.variants.map((v) => v.price));
                return (
                  <div
                    key={p.id}
                    className="bg-[#120e0e] rounded-3xl border border-white/5 hover:border-orange-500/40 p-6 flex flex-col justify-between transition duration-300 group hover:shadow-[0_0_30px_rgba(234,88,12,0.12)] relative"
                  >
                    <div>
                      {/* Baris Atas Kartu */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center p-2">
                          <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                        </div>
                        <span className={`text-[10px] font-bold px-3 py-1 rounded-full border tracking-wide uppercase ${p.tagColor}`}>
                          {p.tag}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-base text-white group-hover:text-orange-400 transition">
                        {p.name}
                      </h3>
                      <p className="text-zinc-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>

                      {/* Fitur Produk */}
                      <div className="my-5 pt-4 border-t border-white/5 space-y-2">
                        {p.features.map((f, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-[11px] text-zinc-300">
                            <span className="text-orange-400 font-bold">✓</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Kartu & Tombol Beli */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase font-medium">Mulai Dari</span>
                        <span className="text-lg font-black text-orange-400 font-mono">{formatRupiah(cheapest)}</span>
                      </div>
                      <button
                        onClick={() => handleOpenCheckout(p)}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs px-4 py-2.5 rounded-full transition shadow-[0_0_15px_rgba(249,115,22,0.3)] active:scale-95"
                      >
                        Beli Sekarang →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Testimonial / Quote Box */}
            <div id="garansi" className="mt-16 bg-gradient-to-r from-orange-950/20 via-[#151010] to-[#151010] border border-orange-500/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-3xl font-serif text-orange-500 leading-none">“</span>
                <p className="text-zinc-300 text-xs sm:text-sm italic -mt-2 max-w-xl">
                  Semua transaksi di Yogs Store dilengkapi jaminan garansi penggantian akun baru secara penuh apabila terjadi kendala selama masa aktif langganan.
                </p>
                <span className="text-[11px] text-orange-400 font-bold block pt-1">— Tim Pelayanan & Garansi Yogs Store</span>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('katalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-5 py-3 rounded-full transition shadow-lg shadow-orange-500/20 whitespace-nowrap"
              >
                Pilih Paket Sekarang
              </button>
            </div>
          </main>
        </>
      )}

      {/* Modal Tambah Produk (Admin) */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#120e0e] border border-orange-500/30 w-full max-w-lg rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <h3 className="font-black text-white text-base uppercase tracking-wider">+ Tambah Produk Baru</h3>
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
                  className="w-full bg-[#090707] border border-white/10 rounded-xl px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-zinc-400 font-semibold mb-1">Kategori:</label>
                  <select
                    value={newProdCat}
                    onChange={(e) => setNewProdCat(e.target.value)}
                    className="w-full bg-[#090707] border border-white/10 rounded-xl px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
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
                    className="w-full bg-[#090707] border border-white/10 rounded-xl px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
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
                  className="w-full bg-[#090707] border border-white/10 rounded-xl px-3 py-2 text-white font-mono focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-zinc-400 font-semibold mb-1">Deskripsi Singkat:</label>
                <textarea
                  value={newProdDesc}
                  onChange={(e) => setNewProdDesc(e.target.value)}
                  placeholder="Keterangan keunggulan akun..."
                  rows={2}
                  className="w-full bg-[#090707] border border-white/10 rounded-xl px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="p-3 bg-[#090707] rounded-xl border border-white/10 space-y-2">
                <span className="font-bold text-orange-400 block">Varian Awal:</span>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={newProdVariantName}
                    onChange={(e) => setNewProdVariantName(e.target.value)}
                    placeholder="Nama Varian"
                    className="bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white"
                  />
                  <input
                    type="number"
                    value={newProdVariantPrice}
                    onChange={(e) => setNewProdVariantPrice(e.target.value)}
                    placeholder="Harga Rp"
                    className="bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white font-mono"
                  />
                  <select
                    value={newProdVariantType}
                    onChange={(e) => setNewProdVariantType(e.target.value)}
                    className="bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white"
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
                  className="w-full bg-[#090707] border border-white/10 rounded-xl px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3 rounded-full transition mt-2 text-sm shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              >
                Simpan & Munculkan di Toko
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Checkout Pemesanan */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#120e0e] border border-orange-500/40 w-full max-w-lg rounded-3xl p-6 shadow-2xl my-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center space-x-3">
                <img src={activeProduct.image} alt={activeProduct.name} className="w-10 h-10 rounded-xl object-contain border border-white/10 p-1 bg-white/5" />
                <div>
                  <h3 className="font-extrabold text-white text-base">{activeProduct.name}</h3>
                  <span className="text-[11px] text-orange-400 font-medium">Checkout Pemesanan</span>
                </div>
              </div>
              <button onClick={() => setActiveProduct(null)} className="text-zinc-400 hover:text-white font-bold">✕</button>
            </div>

            <form onSubmit={handleProcessOrder} className="space-y-4 text-xs">
              {/* Pilihan Variasi */}
              <div>
                <label className="block text-zinc-300 font-bold mb-2 uppercase">1. Pilih Paket Variasi:</label>
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
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 border-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.35)]'
                            : 'bg-[#090707] border-white/10 text-zinc-300 hover:border-zinc-700'
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
              <div className="border-b border-white/10">
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setActiveTab('deskripsi')}
                    className={`w-1/2 py-2 text-center text-xs font-bold tracking-wider transition border-b-2 ${
                      activeTab === 'deskripsi'
                        ? 'border-orange-500 text-orange-400'
                        : 'border-transparent text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    DESKRIPSI
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('snk')}
                    className={`w-1/2 py-2 text-center text-xs font-bold tracking-wider transition border-b-2 ${
                      activeTab === 'snk'
                        ? 'border-orange-500 text-orange-400'
                        : 'border-transparent text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    S & K
                  </button>
                </div>
              </div>

              {/* Isi Konten Tab */}
              <div className="p-3.5 bg-[#090707] rounded-2xl border border-white/10 max-h-48 overflow-y-auto">
                {activeTab === 'deskripsi' ? (
                  <ul className="space-y-1.5 text-zinc-300">
                    {Array.isArray(selectedVariant?.deskripsi) ? (
                      selectedVariant.deskripsi.map((poin, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-orange-400 font-bold">・</span>
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
                <label className="block text-zinc-300 font-semibold mb-1.5 uppercase">2. Kontak Penerima Akun:</label>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Nomor WhatsApp (Contoh: 08123456789)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-[#090707] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-orange-500 focus:outline-none font-mono"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Alamat Email (Untuk Bukti Invoice)"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-[#090707] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Metode Bayar */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1.5 uppercase">3. Metode Pembayaran:</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'qris', name: 'QRIS Realtime', badge: 'Semua Bank & E-Wallet' },
                    { id: 'bca', name: 'BCA Virtual Account', badge: 'BCA Only' },
                  ].map((pay) => (
                    <div
                      key={pay.id}
                      onClick={() => setSelectedPayment(pay.id)}
                      className={`p-2.5 rounded-xl border cursor-pointer transition ${
                        selectedPayment === pay.id
                          ? 'bg-orange-500/10 border-orange-500 text-orange-300'
                          : 'bg-[#090707] border-white/10 text-zinc-400'
                      }`}
                    >
                      <span className="font-bold block text-zinc-200">{pay.name}</span>
                      <span className="text-[10px] text-zinc-500">{pay.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rincian Total */}
              <div className="bg-[#090707] p-3.5 rounded-2xl border border-white/10 space-y-1">
                <div className="flex justify-between text-zinc-400 font-mono">
                  <span>Harga Paket</span>
                  <span>{formatRupiah(selectedVariant?.price || 0)}</span>
                </div>
                <div className="flex justify-between text-zinc-400 font-mono">
                  <span>Biaya Layanan</span>
                  <span>{formatRupiah(selectedPayment === 'qris' ? 800 : 1500)}</span>
                </div>
                <div className="flex justify-between font-black text-white text-sm pt-1 border-t border-white/10 font-mono">
                  <span>Total Pembayaran</span>
                  <span className="text-orange-400">{formatRupiah(calculateTotal())}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={selectedVariant?.stokHabis}
                className={`w-full font-black py-3 rounded-full transition text-sm tracking-wide ${
                  selectedVariant?.stokHabis
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                }`}
              >
                {selectedVariant?.stokHabis ? 'Stok Varian Habis' : 'Lanjut ke Pembayaran →'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Invoice QRIS */}
      {showInvoiceModal && currentInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#120e0e] border border-orange-500/40 w-full max-w-md rounded-3xl p-6 shadow-2xl text-center my-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="font-mono font-bold text-xs text-orange-400">INVOICE #{currentInvoice.id}</span>
              <button onClick={() => setShowInvoiceModal(false)} className="text-zinc-400 hover:text-white font-bold">✕</button>
            </div>

            {currentInvoice.status === 'SUKSES' ? (
              <div className="space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black border border-emerald-500/30">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-black text-white uppercase">Pembayaran Berhasil!</h3>
                  <p className="text-xs text-zinc-400 mt-1">Kredensial akun digital aktif dan siap digunakan.</p>
                </div>

                <div className="bg-[#090707] p-4 rounded-2xl border border-white/10 text-left space-y-2.5 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px] font-mono">EMAIL AKUN:</span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-orange-400">{currentInvoice.accountDetails.emailLogin}</span>
                      <button onClick={() => handleCopy(currentInvoice.accountDetails.emailLogin, 'email')} className="text-zinc-400 hover:text-white font-mono">
                        {copiedItem === 'email' ? 'Disalin!' : 'Salin'}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] font-mono">PASSWORD:</span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-orange-400">{currentInvoice.accountDetails.passwordLogin}</span>
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
                <span className="text-xs text-orange-400 font-semibold bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
                  Menunggu Pembayaran
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

                <div className="bg-[#090707] p-3 rounded-xl border border-white/10 text-left text-xs space-y-1 font-mono">
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
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-2.5 rounded-full text-xs transition shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                >
                  Simulasikan Pembayaran Berhasil (Uji Coba)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Lacak Pesanan */}
      {showTrackingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#120e0e] border border-white/10 w-full max-w-md rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <h3 className="font-bold text-white text-sm tracking-wider">LACAK STATUS TRANSAKSI</h3>
              <button onClick={() => { setShowTrackingModal(false); setTrackingResult(null); }} className="text-zinc-400 hover:text-white font-bold">✕</button>
            </div>
            <form onSubmit={handleSearchTracking} className="flex gap-2 mb-4">
              <input
                type="text"
                required
                placeholder="Invoice (YOG-xxx) / No WhatsApp"
                value={trackQuery}
                onChange={(e) => setTrackQuery(e.target.value)}
                className="flex-1 bg-[#090707] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono focus:border-orange-500 focus:outline-none"
              />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-4 py-2 rounded-xl font-bold transition">
                Cari
              </button>
            </form>

            {trackingResult && (
              <div className="bg-[#090707] p-4 rounded-2xl border border-white/10 text-xs space-y-2">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="font-mono font-bold text-orange-400">{trackingResult.id}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${trackingResult.status === 'SUKSES' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'}`}>
                    {trackingResult.status}
                  </span>
                </div>
                <p className="text-zinc-300">Produk: <strong>{trackingResult.productName}</strong></p>
                {trackingResult.status === 'SUKSES' ? (
                  <div className="pt-2 border-t border-white/10 font-mono text-[11px] space-y-1 text-zinc-300">
                    <p>Email: {trackingResult.accountDetails.emailLogin}</p>
                    <p>Pass: {trackingResult.accountDetails.passwordLogin}</p>
                    <p className="text-orange-400">{trackingResult.accountDetails.profilePin}</p>
                  </div>
                ) : (
                  <p className="text-amber-400 text-[11px]">Selesaikan pembayaran sesuai rincian QRIS.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Login Admin */}
      {showAdminLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#120e0e] border border-orange-500/40 w-full max-w-sm rounded-3xl p-6 shadow-2xl text-center">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold mb-3 border border-orange-500/30">
              🔒
            </div>
            <h3 className="font-extrabold text-white text-base uppercase tracking-wider">Admin Console</h3>
            <p className="text-xs text-zinc-400 mt-1 mb-4 font-mono">Masukkan 6-digit Security PIN</p>
            <form onSubmit={handleVerifyAdminPin} className="space-y-3">
              <input
                type="password"
                maxLength={6}
                autoFocus
                placeholder="Masukkan 6 Digit PIN"
                value={adminPinInput}
                onChange={(e) => setAdminPinInput(e.target.value)}
                className="w-full text-center tracking-widest font-mono text-lg bg-[#090707] border border-white/10 rounded-xl py-2.5 text-white focus:border-orange-500 focus:outline-none"
              />
              {adminPinError && <p className="text-rose-400 text-xs font-mono">{adminPinError}</p>}
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAdminLoginModal(false)}
                  className="w-1/2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold py-2.5 rounded-xl text-xs transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 rounded-xl text-xs shadow-[0_0_15px_rgba(234,88,12,0.3)] transition"
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
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white p-3.5 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.5)] flex items-center space-x-2 font-bold text-xs transition transform hover:scale-105"
      >
        <span className="text-base font-black">💬</span>
        <span className="hidden sm:inline">WhatsApp CS</span>
      </a>
    </div>
  );
}

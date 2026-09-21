import React, { useState } from 'react';

const INITIAL_PRODUCTS = [
  {
    id: 'Gemini Pro',
    name: 'Gemini Pro',
    category: 'AI',
    tag: 'Terlaris',
    tagColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    iconBg: 'from-red-600 to-rose-700',
    image: 'https://images.bisnis.com/posts/2025/09/08/1909198/gemini_1757308941.jpg',
    description: 'AI Gemini Pro',
    rating: '4.9',
    soldCount: '0',
    variants: [
      { id: 'nf-sh-1m', name: '18 Bulan ', price: 25000, duration: '18 Bulan', type: 'Private' },
      { id: 'nf-sh-3m', name: '1 Tahun', price: 20000, duration: '1 Tahun', type: 'Private' },
      { id: 'nf-pv-1m', name: '3 Bulan ', price: 13000, duration: '3 Bulan', type: 'Private' },
    ],
    features: ['Nikmati kemudahan dengan AI dalam sehari - hari mu']
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
      { id: 'sp-ind-1m', name: '1 Bulan Plan Baru/Perpanjang', price: 15000, duration: '1 Bulan', type: 'Individual' },
      { id: 'sp-ind-3m', name: '3 Bulan Plan Invite', price: 38000, duration: '3 Bulan', type: 'Family Invite' },
      { id: 'sp-ind-1y', name: '1 Tahun Full Garansi', price: 135000, duration: '12 Bulan', type: 'Private' },
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
      { id: 'yt-fam-1m', name: '1 Bulan Invite Family', price: 12000, duration: '1 Bulan', type: 'Invite' },
      { id: 'yt-fam-3m', name: '3 Bulan Invite Family', price: 32000, duration: '3 Bulan', type: 'Invite' },
      { id: 'yt-ind-1m', name: '1 Bulan Individual Tanpa Invite', price: 25000, duration: '1 Bulan', type: 'Individual' },
    ],
    features: ['Tanpa gangguan iklan sama sekali', 'Putar di latar belakang & layar mati', 'Termasuk YouTube Music Premium']
  },
  {
    id: 'canva',
    name: 'Canva Pro Designer',
    category: 'desain',
    tag: 'Creator Choice',
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    iconBg: 'from-cyan-600 to-blue-700',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=120&auto=format&fit=crop&q=80',
    description: 'Akses 100+ juta foto, video, font premium, dan fitur Magic Eraser / Background Remover instan.',
    rating: '5.0',
    soldCount: '1.2k+',
    variants: [
      { id: 'cnv-tm-1m', name: '1 Bulan Team Designer', price: 12000, duration: '1 Bulan', type: 'Invite Team' },
      { id: 'cnv-tm-1y', name: '1 Tahun Garansi Penuh', price: 35000, duration: '1 Tahun', type: 'Member Invite' },
      { id: 'cnv-edu-lf', name: 'Lifetime Edu/Designer Plan', price: 55000, duration: 'Permanen', type: 'Lifelong' },
    ],
    features: ['Hapus latar belakang foto 1 klik', 'Ribuan template & font premium', 'Bisa pakai email pribadi kamu']
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
      { id: 'gpt-sh-1m', name: '1 Bulan Sharing Akun', price: 45000, duration: '1 Bulan', type: 'Sharing' },
      { id: 'gpt-pv-1m', name: '1 Bulan Private Akun Baru', price: 299000, duration: '1 Bulan', type: 'Private' },
    ],
    features: ['Akses prioritas tanpa limit antrean', 'Generate gambar DALL-E 3', 'Analisis file spreadsheet & PDF']
  },
  {
    id: 'capcut',
    name: 'CapCut Pro Video Editor',
    category: 'desain',
    tag: 'Trending',
    tagColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    iconBg: 'from-violet-600 to-purple-800',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=120&auto=format&fit=crop&q=80',
    description: 'Edit video profesional tanpa watermark, efek filter pro, auto caption cerdas, dan cloud storage.',
    rating: '4.8',
    soldCount: '750+',
    variants: [
      { id: 'cp-sh-1m', name: '1 Bulan Sharing Device', price: 18000, duration: '1 Bulan', type: 'Sharing' },
      { id: 'cp-pv-1y', name: '1 Tahun Full Garansi', price: 125000, duration: '1 Tahun', type: 'Private' },
    ],
    features: ['Bebas ekspor 4K 60FPS tanpa watermark', 'Semua transisi & efek VIP terbuka', 'Bisa di HP (Android/iOS) & PC']
  }
];

const INITIAL_ORDERS = [
  {
    id: 'YOG-849102',
    productName: 'Netflix Premium 4K (1 Bulan Sharing (1 Profil))',
    variantId: 'nf-sh-1m',
    price: 28800,
    paymentMethod: 'QRIS Realtime',
    whatsapp: '081234567890',
    email: 'alex.buyer@gmail.com',
    status: 'MENUNGGU BAYAR',
    createdAt: '2026-09-20 18:32',
    accountDetails: {
      emailLogin: 'netf-vip-092@premiumzone.net',
      passwordLogin: 'YogsPass#9920',
      profilePin: 'Profil 2 (PIN: 8821)'
    }
  },
  {
    id: 'YOG-291048',
    productName: 'Spotify Premium Family/Indiv (3 Bulan Plan Invite)',
    variantId: 'sp-ind-3m',
    price: 38800,
    paymentMethod: 'BCA Virtual Account',
    whatsapp: '085799201923',
    email: 'customer.spo@gmail.com',
    status: 'MENUNGGU BAYAR',
    createdAt: '2026-09-20 23:45',
    accountDetails: {
      emailLogin: 'spotify-family-yogs91@mail.com',
      passwordLogin: 'SpoSecure#4412',
      profilePin: 'Invite Link dikirim via WA'
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

    const randomId = 'YOG-' + Math.floor(100000 + Math.random() * 900000);
    const fee = selectedPayment === 'qris' ? 800 : 1500;
    const grandTotal = selectedVariant.price + fee;

    const newOrder = {
      id: randomId,
      productName: `${activeProduct.name} (${selectedVariant.name})`,
      variantId: selectedVariant.id,
      price: grandTotal,
      paymentMethod: selectedPayment === 'qris' ? 'QRIS Realtime' : selectedPayment.toUpperCase() + ' Virtual Account',
      whatsapp: customerPhone,
      email: customerEmail,
      status: 'MENUNGGU BAYAR',
      createdAt: 'Baru saja',
      accountDetails: {
        emailLogin: `yogs.${activeProduct.id}${Math.floor(100 + Math.random() * 900)}@premiumzone.net`,
        passwordLogin: `YogsStore#${Math.floor(1000 + Math.random() * 9000)}`,
        profilePin: selectedVariant.type === 'Private' ? 'Private Account (Full Akses)' : `Profil ${Math.floor(1 + Math.random() * 4)} (PIN: ${Math.floor(1000 + Math.random() * 9000)})`
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
          type: newProdVariantType
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
              <p className="text-slate-400 text-xs sm:text-sm mt-1">Kelola transaksi pesanan, atur harga paket, dan ganti akun digital pembeli.</p>
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
              Atur Harga & Varian Produk
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
                        placeholder="PIN Profil / Catatan Tambahan"
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
                  <h3 className="text-sm font-bold text-white">Kelola Produk & Harga Jual</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Ubah nominal harga langsung di sini, harga di etalase akan langsung ter-update.</p>
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
                        <div key={v.id} className="flex items-center justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 text-xs">
                          <span className="text-slate-300 font-medium">{v.name}</span>
                          <div className="flex items-center space-x-1.5">
                            <span className="text-slate-500 text-xs font-bold">Rp</span>
                            <input
                              type="number"
                              value={v.price}
                              onChange={(e) => handleUpdatePrice(p.id, v.id, e.target.value)}
                              className="w-24 bg-slate-900 border border-slate-700 text-right px-2 py-1 rounded text-white font-mono font-bold focus:border-purple-500 focus:outline-none"
                            />
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
                Pusat langganan Netflix, Spotify, Canva Pro, YouTube tanpa ribet. Akun dikirim instan langsung setelah pembayaran otomatis QRIS.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {[
                  { id: 'all', label: 'Semua Produk' },
                  { id: 'streaming', label: 'Streaming Video' },
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
                    <option value="streaming">Streaming Video</option>
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
                <label className="block text-slate-400 font-semibold mb-1.5">1. Pilih Paket & Durasi:</label>
                <div className="space-y-1.5">
                  {activeProduct.variants.map((v) => (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${selectedVariant?.id === v.id ? 'bg-purple-600/20 border-purple-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                    >
                      <div>
                        <span className="font-bold block text-slate-200">{v.name}</span>
                        <span className="text-[10px] text-purple-300 uppercase font-mono">{v.type}</span>
                      </div>
                      <span className="font-black text-purple-400 text-sm">{formatRupiah(v.price)}</span>
                    </div>
                  ))}
                </div>
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
                  <span className="text-purple-400">{formatRupiah(calculateTotal())}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black py-3 rounded-xl transition shadow-lg shadow-purple-600/30 text-sm"
              >
                Lanjut Pembayaran →
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
                    <span className="text-slate-500 block text-[10px]">PROFIL / PIN:</span>
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
                placeholder="Default PIN: 123456"
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

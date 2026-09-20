import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  Search,
  Flame,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  ChevronRight,
  ArrowLeft,
  X,
  CreditCard,
  QrCode,
  Smartphone,
  ExternalLink,
  MessageCircle,
  Headphones,
  Film,
  Bot,
  Palette,
  TrendingUp,
  Receipt,
  HelpCircle,
  Star,
  RefreshCw,
  ShoppingBag,
  Info,
  Check,
  Lock,
  LayoutDashboard,
  DollarSign,
  Package,
  Settings,
  LogOut,
  Eye,
  Edit3
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', name: 'Semua Kategori', icon: Sparkles },
  { id: 'streaming', name: 'Streaming Film & TV', icon: Film },
  { id: 'music', name: 'Musik & Audio', icon: Headphones },
  { id: 'creative', name: 'Desain & Editing', icon: Palette },
  { id: 'ai', name: 'AI & Produktivitas', icon: Bot },
];

const INITIAL_PRODUCTS = [
  {
    id: 'netflix',
    name: 'Netflix Premium 4K',
    category: 'streaming',
    tag: 'Terlaris',
    tagColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    iconBg: 'from-red-600 to-rose-700',
    description: 'Nonton ribuan film & series resolusi Ultra HD 4K tanpa iklan dengan audio Dolby Atmos.',
    rating: '4.9',
    soldCount: '2.4k+',
    variants: [
      { id: 'n-sh-1m', name: '1 Bulan Sharing (1 Profil)', price: 28000, duration: '1 Bulan', type: 'Sharing' },
      { id: 'n-sh-3m', name: '3 Bulan Sharing (1 Profil)', price: 79000, duration: '3 Bulan', type: 'Sharing' },
      { id: 'n-pv-1m', name: '1 Bulan Private (5 Profil)', price: 155000, duration: '1 Bulan', type: 'Private' },
    ],
    features: ['Kualitas 4K Ultra HD + HDR', 'Bisa di HP, Laptop, & Smart TV', 'Garansi Replace Selama Aktif', 'Bebas Kunci Profil Sendiri (PIN)']
  },
  {
    id: 'spotify',
    name: 'Spotify Premium Family/Indiv',
    category: 'music',
    tag: 'Populer',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    iconBg: 'from-emerald-600 to-green-700',
    description: 'Dengarkan puluhan juta lagu dan podcast favorit sepuasnya tanpa gangguan jeda iklan.',
    rating: '4.9',
    soldCount: '1.9k+',
    variants: [
      { id: 's-in-1m', name: '1 Bulan Plan Invite', price: 15000, duration: '1 Bulan', type: 'Invite' },
      { id: 's-in-3m', name: '3 Bulan Plan Invite', price: 38000, duration: '3 Bulan', type: 'Invite' },
      { id: 's-in-1y', name: '1 Tahun Individual Private', price: 145000, duration: '1 Tahun', type: 'Individual' },
    ],
    features: ['Download Lagu Offline Bebas Kuota', 'Lewati Lagu Tanpa Batas (Unlimited Skips)', 'Audio High Fidelity 320kbps', 'Garansi Perpanjangan Akun']
  },
  {
    id: 'youtube',
    name: 'YouTube Premium + Music',
    category: 'music',
    tag: 'Rekomendasi',
    tagColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    iconBg: 'from-rose-600 to-red-700',
    description: 'Bebas iklan di semua video YouTube, putar di latar belakang, plus akses YouTube Music.',
    rating: '4.8',
    soldCount: '1.5k+',
    variants: [
      { id: 'yt-fam-1m', name: '1 Bulan Family Invite', price: 12000, duration: '1 Bulan', type: 'Invite' },
      { id: 'yt-fam-3m', name: '3 Bulan Family Invite', price: 32000, duration: '3 Bulan', type: 'Invite' },
      { id: 'yt-ind-1y', name: '1 Tahun Individual Garansi', price: 110000, duration: '1 Tahun', type: 'Individual' },
    ],
    features: ['Putar di Background / Layar Mati', 'Akses Penuh YouTube Music Premium', 'Bebas Download Video Offline', 'Bisa Pakai Email Pribadi']
  },
  {
    id: 'canva',
    name: 'Canva Pro Edu / Lifetime Team',
    category: 'creative',
    tag: 'Murah Meriah',
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    iconBg: 'from-cyan-500 to-blue-600',
    description: 'Buka 100+ juta foto, template, font pro, serta fitur Magic Studio AI tanpa watermark.',
    rating: '5.0',
    soldCount: '3.1k+',
    variants: [
      { id: 'c-ed-1y', name: '1 Tahun Canva Pro Edu', price: 19000, duration: '1 Tahun', type: 'Edu' },
      { id: 'c-tm-lt', name: 'Lifetime Canva Pro Brand Kit', price: 49000, duration: 'Permanen', type: 'Team' },
    ],
    features: ['Hapus Background Foto 1 Klik', 'Akses Semua Template & Elemen Premium', 'Akses Magic Studio AI Tools', 'Cukup Berikan Alamat Email']
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus GPT-4o',
    category: 'ai',
    tag: 'Hot AI',
    tagColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    iconBg: 'from-teal-600 to-emerald-700',
    description: 'Akses model AI tercanggih GPT-4o, DALL·E 3 Image Generator, fitur suara & data analysis.',
    rating: '4.9',
    soldCount: '890+',
    variants: [
      { id: 'cg-sh-1m', name: '1 Bulan Sharing (3 User)', price: 65000, duration: '1 Bulan', type: 'Sharing' },
      { id: 'cg-pv-1m', name: '1 Bulan Private Full Akses', price: 299000, duration: '1 Bulan', type: 'Private' },
    ],
    features: ['Akses GPT-4o Terbaru Tanpa Limit Ketat', 'Bikin Gambar dengan DALL·E 3', 'Analisis Dokumen PDF & Coding', 'Kecepatan Respon Prioritas Tinggi']
  },
  {
    id: 'capcut',
    name: 'CapCut Pro Desktop & HP',
    category: 'creative',
    tag: 'Trending',
    tagColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    iconBg: 'from-indigo-600 to-purple-700',
    description: 'Buka ratusan efek VIP, filter sinematik, text-to-speech AI, dan hapus background otomatis.',
    rating: '4.9',
    soldCount: '1.2k+',
    variants: [
      { id: 'cp-sh-1m', name: '1 Bulan Sharing VIP', price: 22000, duration: '1 Bulan', type: 'Sharing' },
      { id: 'cp-pv-1y', name: '1 Tahun Private VIP', price: 180000, duration: '1 Tahun', type: 'Private' },
    ],
    features: ['Auto Captions Bahasa Indonesia', 'Penghilang Noise Audio Pintar', 'Semua Efek & Filter VIP Terbuka', 'Export 4K 60FPS Bitrate Tinggi']
  }
];

const PAYMENT_METHODS = [
  { id: 'qris', name: 'QRIS Realtime (Semua E-Wallet & M-Banking)', type: 'QRIS', fee: 800, popular: true },
  { id: 'bca_va', name: 'BCA Virtual Account', type: 'VA', fee: 1500, popular: false },
  { id: 'mandiri_va', name: 'Mandiri Virtual Account', type: 'VA', fee: 1500, popular: false },
  { id: 'dana', name: 'DANA E-Wallet Transfer', type: 'E-Wallet', fee: 1000, popular: false },
];

const FAQS = [
  {
    q: 'Apakah akun yang dijual bergaransi penuh?',
    a: 'Ya, seluruh produk di Yogs Store bergaransi replace 100%. Jika akun mengalami masalah (on-hold/logout) selama masa aktif langganan, kami ganti akun baru secara cuma-cuma.'
  },
  {
    q: 'Berapa lama proses pengiriman akun setelah bayar?',
    a: 'Setelah pembayaran via QRIS atau VA terverifikasi, sistem langsung mengirimkan kredensial login atau link invite secara otomatis ke nomor WhatsApp kamu dalam 1-5 menit.'
  },
  {
    q: 'Apa perbedaan varian Akun Sharing dan Private?',
    a: 'Varian Sharing digunakan bersama pembeli lain dengan slot profil dan PIN terpisah (sangat hemat). Varian Private adalah 1 akun penuh milik kamu sendiri dan bisa login di banyak perangkat.'
  },
  {
    q: 'Apakah bisa perpanjang di akun yang sama?',
    a: 'Untuk Spotify, Canva, dan YouTube bisa diperpanjang di akun atau email pribadi yang sama tanpa kehilangan playlist atau karya desain kamu.'
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('store');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const [adminPin, setAdminPin] = useState('');
  const [adminPinError, setAdminPinError] = useState('');
  const [adminActiveTab, setAdminActiveTab] = useState('orders');

  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const [storeConfig, setStoreConfig] = useState({
    storeName: 'Yogs Store',
    adminWhatsapp: '6281234567890',
    tagline: 'Pusat Langganan Akun Digital Murah & Legal',
    noticeText: 'PROMO SPESIAL: Garansi Replace 100% & Pengiriman Otomatis 24 Jam via WhatsApp!'
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [activeStep, setActiveStep] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({ whatsapp: '', email: '', note: '' });
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHODS[0]);
  const [formErrors, setFormErrors] = useState({});

  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [trackQuery, setTrackQuery] = useState('');
  const [trackResult, setTrackResult] = useState(null);
  const [copiedText, setCopiedText] = useState(null);
  const [paymentTimer, setPaymentTimer] = useState(899);

  const [orderHistory, setOrderHistory] = useState([
    {
      invoiceId: 'YOG-849102',
      productName: 'Netflix Premium 4K',
      variantName: '1 Bulan Sharing (1 Profil)',
      price: 28000,
      fee: 800,
      total: 28800,
      status: 'SUCCESS',
      createdAt: '2026-09-20 18:32',
      whatsapp: '081234567890',
      email: 'alex.buyer@gmail.com',
      credentials: {
        emailLogin: 'netf-vip-092@premiumzone.net',
        passwordLogin: 'YogsPass#9920',
        profilNo: 'Profil 2 (PIN: 8821)'
      }
    },
    {
      invoiceId: 'YOG-291048',
      productName: 'Spotify Premium Family/Indiv',
      variantName: '3 Bulan Plan Invite',
      price: 38000,
      fee: 800,
      total: 38800,
      status: 'WAITING_PAYMENT',
      createdAt: '2026-09-20 23:45',
      whatsapp: '085799201923',
      email: 'customer.spo@gmail.com',
      credentials: {
        emailLogin: 'spotify-family-yogs91@mail.com',
        passwordLogin: 'SpoSecure#4412',
        profilNo: 'Invite Link dikirim via WA'
      }
    }
  ]);

  useEffect(() => {
    let interval = null;
    if (showInvoiceModal && paymentTimer > 0 && currentInvoice?.status === 'WAITING_PAYMENT') {
      interval = setInterval(() => {
        setPaymentTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showInvoiceModal, paymentTimer, currentInvoice]);

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(val);
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(prod => {
      const matchCat = selectedCategory === 'all' || prod.category === selectedCategory;
      const matchSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const totalRevenue = useMemo(() => {
    return orderHistory
      .filter(o => o.status === 'SUCCESS')
      .reduce((sum, o) => sum + o.total, 0);
  }, [orderHistory]);

  const pendingOrdersCount = useMemo(() => {
    return orderHistory.filter(o => o.status === 'WAITING_PAYMENT').length;
  }, [orderHistory]);

  const successOrdersCount = useMemo(() => {
    return orderHistory.filter(o => o.status === 'SUCCESS').length;
  }, [orderHistory]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPin === '123456') {
      setIsAdminLoggedIn(true);
      setShowAdminLoginModal(false);
      setCurrentView('admin');
      setAdminPin('');
      setAdminPinError('');
    } else {
      setAdminPinError('PIN Admin salah! Gunakan PIN default: 123456');
    }
  };

  const handleUpdateOrderStatus = (invoiceId, newStatus) => {
    setOrderHistory(prev => prev.map(item => {
      if (item.invoiceId === invoiceId) {
        return { ...item, status: newStatus };
      }
      return item;
    }));
  };

  const handleUpdateCredentials = (invoiceId, field, value) => {
    setOrderHistory(prev => prev.map(item => {
      if (item.invoiceId === invoiceId) {
        return {
          ...item,
          credentials: {
            ...item.credentials,
            [field]: value
          }
        };
      }
      return item;
    }));
  };

  const handleUpdateVariantPrice = (productId, variantId, newPrice) => {
    const numPrice = parseInt(newPrice, 10) || 0;
    setProducts(prev => prev.map(prod => {
      if (prod.id === productId) {
        return {
          ...prod,
          variants: prod.variants.map(v => v.id === variantId ? { ...v, price: numPrice } : v)
        };
      }
      return prod;
    }));
  };

  const openCheckout = (prod) => {
    setSelectedProduct(prod);
    setSelectedVariant(prod.variants[0]);
    setActiveStep(1);
    setFormErrors({});
  };

  const handleStepNext = () => {
    if (activeStep === 1) {
      if (!selectedVariant) {
        setFormErrors({ variant: 'Harap pilih salah satu varian paket.' });
        return;
      }
      setFormErrors({});
      setActiveStep(2);
    } else if (activeStep === 2) {
      const errors = {};
      if (!customerInfo.whatsapp || customerInfo.whatsapp.length < 9) {
        errors.whatsapp = 'Nomor WhatsApp valid wajib diisi (minimal 9 digit)';
      }
      if (!customerInfo.email || !customerInfo.email.includes('@')) {
        errors.email = 'Alamat email aktif wajib diisi';
      }
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      setFormErrors({});
      setActiveStep(3);
    }
  };

  const handleCreateOrder = () => {
    const randNum = Math.floor(100000 + Math.random() * 900000);
    const invoiceId = `YOG-${randNum}`;
    const totalAmount = selectedVariant.price + selectedPayment.fee;

    const newInvoice = {
      invoiceId,
      productName: selectedProduct.name,
      variantName: selectedVariant.name,
      price: selectedVariant.price,
      fee: selectedPayment.fee,
      total: totalAmount,
      status: 'WAITING_PAYMENT',
      paymentMethod: selectedPayment.name,
      paymentType: selectedPayment.type,
      whatsapp: customerInfo.whatsapp,
      email: customerInfo.email,
      createdAt: new Date().toLocaleString('id-ID'),
      credentials: {
        emailLogin: `${selectedProduct.id}-vip${randNum.toString().slice(0, 3)}@yogsstore-acc.com`,
        passwordLogin: `YogsKey#${randNum.toString().slice(-4)}`,
        profilNo: 'Profil 1 (PIN: 1290)'
      }
    };

    setOrderHistory([newInvoice, ...orderHistory]);
    setCurrentInvoice(newInvoice);
    setPaymentTimer(900);
    setSelectedProduct(null);
    setShowInvoiceModal(true);
  };

  const handleSimulatePaymentSuccess = () => {
    if (!currentInvoice) return;
    const updated = { ...currentInvoice, status: 'SUCCESS' };
    setCurrentInvoice(updated);
    setOrderHistory(prev => prev.map(inv => inv.invoiceId === updated.invoiceId ? updated : inv));
  };

  const handleTrackSearch = (e) => {
    e.preventDefault();
    const query = trackQuery.trim().toLowerCase();
    if (!query) return;

    const found = orderHistory.find(
      ord => ord.invoiceId.toLowerCase() === query || ord.whatsapp.includes(query)
    );
    setTrackResult(found || 'NOT_FOUND');
  };

  return (
    <div className="min-h-screen bg-[#0d0f17] text-slate-100 font-sans selection:bg-purple-600 selection:text-white relative">
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* TOP BAR / MODE SWITCHER BANNER */}
      <div className="bg-[#121528] border-b border-purple-500/20 px-4 py-1.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-slate-300 hidden sm:inline">Status Server: <b>Aktif 24 Jam</b></span>
          <span className="text-purple-300 font-medium">| {storeConfig.noticeText}</span>
        </div>

        <div className="flex items-center gap-2">
          {isAdminLoggedIn ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentView(currentView === 'store' ? 'admin' : 'store')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold transition-colors cursor-pointer"
              >
                {currentView === 'store' ? <LayoutDashboard className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{currentView === 'store' ? 'Buka Dashboard Admin' : 'Lihat Toko (Pembeli)'}</span>
              </button>
              <button
                onClick={() => {
                  setIsAdminLoggedIn(false);
                  setCurrentView('store');
                }}
                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 transition-colors cursor-pointer"
                title="Keluar Admin"
              >
                <LogOut className="w-3 h-3" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAdminLoginModal(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <Lock className="w-3 h-3 text-purple-400" />
              <span>Login Admin Toko</span>
            </button>
          )}
        </div>
      </div>

      {/* RENDER VIEW: STOREFRONT OR ADMIN DASHBOARD */}
      {currentView === 'admin' && isAdminLoggedIn ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-300 text-[11px] font-bold">
                  PORTAL OWNER
                </span>
                <span className="text-slate-400 text-xs">• Yogs Store Management</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">Dashboard Kontrol Admin</h1>
              <p className="text-xs text-slate-400">Kelola transaksi pesanan, atur harga paket, dan ganti akun digital pembeli.</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentView('store')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-purple-400" />
                <span>Pratinjau Web Toko</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-2xl bg-[#141727] border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Total Omzet Sukses</span>
                <span className="text-lg font-black text-white">{formatRupiah(totalRevenue)}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#141727] border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Pesanan Selesai</span>
                <span className="text-lg font-black text-white">{successOrdersCount} Pesanan</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#141727] border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Menunggu Pembayaran</span>
                <span className="text-lg font-black text-white">{pendingOrdersCount} Pesanan</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#141727] border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Total Aplikasi Aktif</span>
                <span className="text-lg font-black text-white">{products.length} Layanan</span>
              </div>
            </div>
          </div>

          {/* Admin Navigation Tabs */}
          <div className="flex items-center gap-2 mt-8 border-b border-white/10 pb-3">
            <button
              onClick={() => setAdminActiveTab('orders')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                adminActiveTab === 'orders'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white bg-white/5'
              }`}
            >
              <Receipt className="w-4 h-4" />
              <span>Kelola Pesanan Masuk ({orderHistory.length})</span>
            </button>

            <button
              onClick={() => setAdminActiveTab('products')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                adminActiveTab === 'products'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white bg-white/5'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Atur Harga & Varian Produk</span>
            </button>

            <button
              onClick={() => setAdminActiveTab('settings')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                adminActiveTab === 'settings'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white bg-white/5'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Pengaturan Nomor WA & Toko</span>
            </button>
          </div>

          {/* TAB 1: KELOLA PESANAN */}
          {adminActiveTab === 'orders' && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Daftar Transaksi Pembeli</h3>
                <span className="text-xs text-slate-400">Total {orderHistory.length} transaksi tercatat</span>
              </div>

              <div className="space-y-3">
                {orderHistory.map(order => (
                  <div key={order.invoiceId} className="p-4 sm:p-5 rounded-2xl bg-[#141727] border border-white/10 hover:border-purple-500/30 transition-all space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-sm text-purple-300">{order.invoiceId}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          order.status === 'SUCCESS' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}>
                          {order.status === 'SUCCESS' ? 'LUNAS (SELESAI)' : 'MENUNGGU BAYAR'}
                        </span>
                        <span className="text-slate-400 text-xs hidden sm:inline">{order.createdAt}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{formatRupiah(order.total)}</span>
                        {order.status !== 'SUCCESS' ? (
                          <button
                            onClick={() => handleUpdateOrderStatus(order.invoiceId, 'SUCCESS')}
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold cursor-pointer shadow-md"
                          >
                            Setujui Lunas ✓
                          </button>
                        ) : (
                          <button
                            onClick={() => handleUpdateOrderStatus(order.invoiceId, 'WAITING_PAYMENT')}
                            className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 text-xs font-medium cursor-pointer"
                          >
                            Tandai Pending
                          </button>
                        )}
                        <a
                          href={`https://wa.me/${order.whatsapp.replace(/\D/g, '')}?text=Halo%2C%20Admin%20Yogs%20Store%20disini.%20Pesanan%20${order.invoiceId}%20(${order.productName})%20sudah%20aktif.%20Akun%3A%20${encodeURIComponent(order.credentials?.emailLogin || '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Chat WA Pembeli</span>
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1 text-slate-300">
                        <p><b className="text-slate-400">Produk:</b> {order.productName} ({order.variantName})</p>
                        <p><b className="text-slate-400">WhatsApp:</b> {order.whatsapp}</p>
                        <p><b className="text-slate-400">Email:</b> {order.email}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
                        <span className="text-[11px] font-bold text-purple-300 block">Kredensial Login Akun (Bisa Diedit Admin):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={order.credentials?.emailLogin || ''}
                            onChange={(e) => handleUpdateCredentials(order.invoiceId, 'emailLogin', e.target.value)}
                            placeholder="Email Akun"
                            className="px-2.5 py-1.5 bg-[#171a2c] border border-white/10 rounded-lg text-xs text-white"
                          />
                          <input
                            type="text"
                            value={order.credentials?.passwordLogin || ''}
                            onChange={(e) => handleUpdateCredentials(order.invoiceId, 'passwordLogin', e.target.value)}
                            placeholder="Password Akun"
                            className="px-2.5 py-1.5 bg-[#171a2c] border border-white/10 rounded-lg text-xs text-white"
                          />
                        </div>
                        <input
                          type="text"
                          value={order.credentials?.profilNo || ''}
                          onChange={(e) => handleUpdateCredentials(order.invoiceId, 'profilNo', e.target.value)}
                          placeholder="No Profil / PIN / Catatan Aktivasi"
                          className="w-full px-2.5 py-1.5 bg-[#171a2c] border border-white/10 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: ATUR HARGA PRODUK */}
          {adminActiveTab === 'products' && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-base">Atur Harga & Varian Langganan</h3>
                  <p className="text-xs text-slate-400">Perubahan harga langsung diterapkan secara langsung ke katalog toko.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {products.map(prod => (
                  <div key={prod.id} className="p-5 rounded-2xl bg-[#141727] border border-white/10 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${prod.iconBg} flex items-center justify-center font-bold text-white text-sm`}>
                          {prod.name.charAt(0)}
                        </div>
                        <span className="font-bold text-white text-sm">{prod.name}</span>
                      </div>
                      <span className="text-xs text-purple-400 font-semibold">{prod.variants.length} Varian</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {prod.variants.map(v => (
                        <div key={v.id} className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                          <span className="text-xs font-bold text-slate-200 block truncate">{v.name}</span>
                          <span className="text-[10px] text-purple-300 block">{v.duration} • {v.type}</span>
                          <div className="flex items-center gap-1.5 pt-1">
                            <span className="text-xs text-slate-400">Rp</span>
                            <input
                              type="number"
                              value={v.price}
                              onChange={(e) => handleUpdateVariantPrice(prod.id, v.id, e.target.value)}
                              className="w-full px-2 py-1 bg-[#1a1e33] border border-white/15 rounded-lg text-xs font-bold text-white focus:outline-none focus:border-purple-500"
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

          {/* TAB 3: PENGATURAN TOKO */}
          {adminActiveTab === 'settings' && (
            <div className="mt-6 max-w-xl space-y-4">
              <div className="p-5 rounded-2xl bg-[#141727] border border-white/10 space-y-4">
                <h3 className="font-bold text-white text-sm border-b border-white/5 pb-2">Konfigurasi Toko & WhatsApp Admin</h3>
                
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Nama Toko:</label>
                  <input
                    type="text"
                    value={storeConfig.storeName}
                    onChange={(e) => setStoreConfig({ ...storeConfig, storeName: e.target.value })}
                    className="w-full px-3 py-2 bg-[#1a1e33] border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">Nomor WhatsApp Admin (Pakai awalan 62):</label>
                  <input
                    type="text"
                    value={storeConfig.adminWhatsapp}
                    onChange={(e) => setStoreConfig({ ...storeConfig, adminWhatsapp: e.target.value })}
                    className="w-full px-3 py-2 bg-[#1a1e33] border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">Teks Pengumuman Header:</label>
                  <input
                    type="text"
                    value={storeConfig.noticeText}
                    onChange={(e) => setStoreConfig({ ...storeConfig, noticeText: e.target.value })}
                    className="w-full px-3 py-2 bg-[#1a1e33] border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>

                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                  Semua perubahan otomatis tersimpan di sesi browser kamu secara langsung.
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Main Navbar */}
          <header className="border-b border-white/5 bg-[#0f121d]/80 backdrop-blur-md sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/25 border border-purple-400/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black tracking-tight flex items-center gap-1.5">
                    <span className="text-white">YOGS</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-bold">STORE</span>
                  </div>
                  <p className="text-[10px] text-purple-300/70 -mt-1 font-medium tracking-wide uppercase">Toko Langganan Premium</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => {
                    setShowTrackModal(true);
                    setTrackResult(null);
                    setTrackQuery('');
                  }}
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all hover:border-purple-500/50 cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5 text-purple-400" />
                  <span>Cek Pesanan</span>
                </button>

                <a
                  href={`https://wa.me/${storeConfig.adminWhatsapp}?text=Halo%20Admin%20Yogs%20Store%2C%20saya%20mau%20tanya%20paket%20langganan`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-600/30 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Hubungi CS</span>
                </a>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="rounded-3xl p-6 sm:p-10 relative overflow-hidden bg-gradient-to-br from-[#161a2c] via-[#121422] to-[#0c0e18] border border-white/10 shadow-2xl">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-2xl relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Aktivasi Kilat & Otomatis 24 Jam
                </div>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.15]">
                  Nikmati Hiburan <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
                    Premium Murah & Legal
                  </span>
                </h1>
                <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                  Pusat langganan Netflix, Spotify, Canva Pro, YouTube, hingga ChatGPT dengan harga hemat kantong, full garansi, & instant delivery ke WhatsApp kamu.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium">
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% Full Garansi</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>Kirim 1-5 Menit</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <QrCode className="w-4 h-4 text-cyan-400" />
                    <span>QRIS Semua E-Wallet</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Search & Categories Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {CATEGORIES.map(cat => {
                  const Icon = cat.icon;
                  const active = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                        active
                          ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                          : 'bg-[#151827] text-slate-400 border-white/5 hover:bg-[#1c2035] hover:text-white'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="relative min-w-[280px]">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari Netflix, Spotify, Canva..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#151827] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Daftar Aplikasi Populer</span>
                <span className="text-xs font-normal text-slate-400">({filteredProducts.length} Produk)</span>
              </h2>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center bg-[#131623] rounded-2xl border border-white/5">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-300 font-semibold">Produk tidak ditemukan</p>
                <p className="text-xs text-slate-500 mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map(prod => {
                  const lowestPrice = Math.min(...prod.variants.map(v => v.price));
                  return (
                    <div
                      key={prod.id}
                      className="group bg-[#141726] hover:bg-[#181c2e] rounded-2xl border border-white/10 hover:border-purple-500/40 p-5 transition-all duration-200 flex flex-col justify-between shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-600/5 group-hover:bg-purple-600/10 rounded-full blur-2xl transition-all" />

                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${prod.tagColor}`}>
                            {prod.tag}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span className="font-semibold text-slate-200">{prod.rating}</span>
                            <span>• Terjual {prod.soldCount}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3.5 mb-3">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${prod.iconBg} flex items-center justify-center font-black text-xl text-white shadow-inner border border-white/10`}>
                            {prod.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-base leading-tight group-hover:text-purple-300 transition-colors">
                              {prod.name}
                            </h3>
                            <span className="text-[11px] text-purple-400 font-medium">Garansi Penggantian Baru</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                          {prod.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {prod.variants.map(v => (
                            <span key={v.id} className="text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded-md border border-white/5">
                              {v.duration}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium">Mulai dari</span>
                          <span className="text-base font-extrabold text-white">
                            {formatRupiah(lowestPrice)}
                          </span>
                        </div>

                        <button
                          onClick={() => openCheckout(prod)}
                          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all shadow-md shadow-purple-600/30 flex items-center gap-1.5 cursor-pointer group-hover:scale-[1.02]"
                        >
                          <span>Beli Sekarang</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>

          {/* Value Propositions */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-[#121524] rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="text-center max-w-xl mx-auto mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Kenapa Belanja di Yogs Store?</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">Belanja aplikasi langganan tanpa was-was on-hold atau penipuan.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-[#161a2d] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Proses Super Cepat</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Detail login atau link invite langsung dikirim ke WhatsApp Anda hanya beberapa menit setelah bayar.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#161a2d] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">100% Bergaransi Resmi</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Akun bermasalah atau on-hold saat dipakai? CS kami ganti akun baru tanpa ribet dan gratis.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#161a2d] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">CS Siaga Ramah</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Tersedia customer service aktif di WhatsApp untuk memandu pengguna awam dari awal hingga aktif.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            <h3 className="text-xl font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-purple-400" />
              <span>Pertanyaan Sering Diajukan (FAQ)</span>
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#141726] border border-white/5">
                  <p className="text-sm font-semibold text-white mb-1.5 flex items-start gap-2">
                    <span className="text-purple-400 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </p>
                  <p className="text-xs text-slate-400 pl-5 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ADMIN LOGIN MODAL */}
      {showAdminLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#121524] w-full max-w-sm rounded-3xl border border-purple-500/30 shadow-2xl p-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-400" />
                <span className="font-bold text-white text-sm">Autentikasi Admin Yogs</span>
              </div>
              <button
                onClick={() => setShowAdminLoginModal(false)}
                className="w-7 h-7 rounded-full bg-white/5 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAdminLogin} className="mt-4 space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">
                  Masukkan PIN Keamanan Admin:
                </label>
                <input
                  type="password"
                  placeholder="PIN Default: 123456"
                  value={adminPin}
                  onChange={(e) => setAdminPin(e.target.value)}
                  autoFocus
                  className="w-full px-3.5 py-2.5 bg-[#181c2f] border border-white/15 rounded-xl text-center text-sm font-bold tracking-widest text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
                {adminPinError && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {adminPinError}
                  </p>
                )}
                <span className="text-[10px] text-slate-500 mt-1.5 block text-center">
                  *PIN bawaan owner adalah <b>123456</b>
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 cursor-pointer transition-colors"
              >
                Masuk ke Dashboard
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#121525] w-full max-w-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#15192c]">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedProduct.iconBg} flex items-center justify-center font-bold text-white shadow-md`}>
                  {selectedProduct.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base leading-tight">
                    Order {selectedProduct.name}
                  </h3>
                  <p className="text-[11px] text-purple-400 font-medium">Garansi Resmi & Pengiriman Cepat</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Stepper indicator */}
            <div className="px-5 pt-4 pb-2 bg-[#121525] flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeStep >= 1 ? 'bg-purple-600 text-white' : 'bg-white/10 text-slate-400'}`}>
                  1
                </div>
                <span className={`text-xs font-semibold ${activeStep === 1 ? 'text-white' : 'text-slate-400'}`}>Pilih Paket</span>
              </div>

              <div className="h-0.5 w-8 sm:w-16 bg-white/10" />

              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeStep >= 2 ? 'bg-purple-600 text-white' : 'bg-white/10 text-slate-400'}`}>
                  2
                </div>
                <span className={`text-xs font-semibold ${activeStep === 2 ? 'text-white' : 'text-slate-400'}`}>Data Kontak</span>
              </div>

              <div className="h-0.5 w-8 sm:w-16 bg-white/10" />

              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeStep >= 3 ? 'bg-purple-600 text-white' : 'bg-white/10 text-slate-400'}`}>
                  3
                </div>
                <span className={`text-xs font-semibold ${activeStep === 3 ? 'text-white' : 'text-slate-400'}`}>Pembayaran</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 flex-1">
              {/* STEP 1: PILIH VARIAN */}
              {activeStep === 1 && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-300 block">Pilih Durasi & Jenis Akun:</span>
                  <div className="space-y-2">
                    {selectedProduct.variants.map((v) => {
                      const isSelected = selectedVariant?.id === v.id;
                      return (
                        <div
                          key={v.id}
                          onClick={() => setSelectedVariant(v)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-purple-600/15 border-purple-500 shadow-md shadow-purple-600/10'
                              : 'bg-[#161a2e] border-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-purple-500 bg-purple-600 text-white' : 'border-slate-500'}`}>
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">{v.name}</p>
                              <p className="text-[11px] text-purple-300">Durasi: {v.duration} • Tipe: {v.type}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-sm font-extrabold text-white">{formatRupiah(v.price)}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
                    <span className="text-[11px] font-bold text-purple-300 block">Fitur Paket Ini:</span>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* STEP 2: DATA PEMBELI */}
              {activeStep === 2 && (
                <div className="space-y-3.5">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Detail akun / link undangan akan otomatis dikirim ke nomor WhatsApp dan email di bawah ini.</span>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Nomor WhatsApp Aktif <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Contoh: 081234567890"
                      value={customerInfo.whatsapp}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                    {formErrors.whatsapp && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.whatsapp}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Alamat Email Aktif <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Contoh: namaanda@gmail.com"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Catatan Pesanan (Opsional):
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Tolong kirimkan secepatnya min"
                      value={customerInfo.note}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, note: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: METODE PEMBAYARAN */}
              {activeStep === 3 && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-300 block">Pilih Pembayaran Otomatis:</span>
                  <div className="space-y-2">
                    {PAYMENT_METHODS.map((pm) => {
                      const isSelected = selectedPayment.id === pm.id;
                      return (
                        <div
                          key={pm.id}
                          onClick={() => setSelectedPayment(pm)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-purple-600/15 border-purple-500 shadow-md'
                              : 'bg-[#161a2e] border-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-purple-500 bg-purple-600 text-white' : 'border-slate-500'}`}>
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white">{pm.name}</span>
                                {pm.popular && (
                                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">
                                    Instant 1 Detik
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-slate-400">Biaya transaksi: {formatRupiah(pm.fee)}</span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-bold text-purple-300">
                              {formatRupiah(selectedVariant.price + pm.fee)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Ringkasan Biaya */}
                  <div className="mt-4 p-4 rounded-2xl bg-[#171b30] border border-white/5 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Harga Paket ({selectedVariant.name}):</span>
                      <span className="text-slate-200">{formatRupiah(selectedVariant.price)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Biaya Layanan ({selectedPayment.type}):</span>
                      <span className="text-slate-200">{formatRupiah(selectedPayment.fee)}</span>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-white text-sm">
                      <span>Total Pembayaran:</span>
                      <span className="text-purple-400 font-extrabold">{formatRupiah(selectedVariant.price + selectedPayment.fee)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 bg-[#15192c] border-t border-white/10 flex items-center justify-between">
              {activeStep > 1 ? (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali</span>
                </button>
              ) : (
                <div />
              )}

              {activeStep < 3 ? (
                <button
                  onClick={handleStepNext}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-600/30 cursor-pointer"
                >
                  <span>Lanjutkan</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleCreateOrder}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/40 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Bayar Sekarang ({formatRupiah(selectedVariant.price + selectedPayment.fee)})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* INVOICE MODAL */}
      {showInvoiceModal && currentInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#121524] w-full max-w-lg rounded-3xl border border-purple-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#15192c]">
              <div>
                <span className="text-[11px] font-bold text-purple-400">INVOICE PEMBAYARAN</span>
                <h3 className="font-mono font-bold text-white text-base">{currentInvoice.invoiceId}</h3>
              </div>
              <button
                onClick={() => setShowInvoiceModal(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 flex-1">
              {currentInvoice.status === 'WAITING_PAYMENT' ? (
                <div className="space-y-4 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5 animate-pulse" />
                    <span>Sisa Waktu Pembayaran: {formatTimer(paymentTimer)}</span>
                  </div>

                  {/* QRIS Display */}
                  <div className="p-5 bg-white rounded-3xl max-w-[240px] mx-auto shadow-xl text-black">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="font-black text-xs tracking-wider">QRIS</span>
                      <span className="text-[10px] text-slate-500 font-semibold">Yogs Store</span>
                    </div>

                    <div className="my-3 p-2 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center">
                      <div className="grid grid-cols-6 gap-1 p-2 bg-white rounded-lg">
                        {Array.from({ length: 36 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-xs ${
                              (i % 2 === 0 && i % 3 !== 1) || i === 0 || i === 5 || i === 30 || i === 35
                                ? 'bg-slate-900'
                                : 'bg-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[9px] text-slate-500 mt-2 font-mono">NMID: ID1029384910293</span>
                    </div>

                    <p className="text-[10px] text-slate-600 font-medium">
                      Scan pakai GoPay, OVO, DANA, BCA, ShopeePay, atau Livin
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161a2e] border border-white/5 text-left text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Tagihan:</span>
                      <span className="font-black text-base text-purple-300">{formatRupiah(currentInvoice.total)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Metode:</span>
                      <span className="font-semibold text-white">{currentInvoice.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">WhatsApp:</span>
                      <span className="text-white">{currentInvoice.whatsapp}</span>
                    </div>
                  </div>

                  {/* Simulation Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleSimulatePaymentSuccess}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Simulasikan Pembayaran Berhasil (Uji Coba Sistem)</span>
                    </button>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      *Klik tombol di atas untuk melihat alur ketika QRIS selesai dibayar.
                    </span>
                  </div>
                </div>
              ) : (
                /* INVOICE SUCCESS DISPLAY */
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="font-bold text-white text-base">Pembayaran Berhasil Diterima!</h4>
                    <p className="text-xs text-emerald-300">
                      Pesanan telah aktif dan kredensial akun digital kamu siap digunakan di bawah ini:
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161a2e] border border-purple-500/30 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <span className="text-xs font-bold text-purple-300">Detail Akun & Kredensial:</span>
                      <span className="text-[10px] bg-purple-600/20 text-purple-300 px-2 py-0.5 rounded font-medium">Garansi Aktif</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                        <div>
                          <span className="text-[10px] text-slate-400 block">Email / Akun Login:</span>
                          <span className="font-mono font-bold text-white">{currentInvoice.credentials.emailLogin}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(currentInvoice.credentials.emailLogin, 'email')}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] flex items-center gap-1 cursor-pointer"
                        >
                          {copiedText === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedText === 'email' ? 'Tersalin' : 'Salin'}</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                        <div>
                          <span className="text-[10px] text-slate-400 block">Password Akun:</span>
                          <span className="font-mono font-bold text-white">{currentInvoice.credentials.passwordLogin}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(currentInvoice.credentials.passwordLogin, 'pass')}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] flex items-center gap-1 cursor-pointer"
                        >
                          {copiedText === 'pass' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedText === 'pass' ? 'Tersalin' : 'Salin'}</span>
                        </button>
                      </div>

                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-[10px] text-slate-400 block">Aturan Penggunaan & Profil:</span>
                        <span className="font-medium text-emerald-300 text-xs">{currentInvoice.credentials.profilNo}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${storeConfig.adminWhatsapp}?text=Halo%20Admin%20Yogs%20Store%2C%20saya%20sudah%20bayar%20invoice%20${currentInvoice.invoiceId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Konfirmasi Tambahan ke Admin WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TRACKING MODAL */}
      {showTrackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#121524] w-full max-w-md rounded-3xl border border-white/10 shadow-2xl p-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-purple-400" />
                <span className="font-bold text-white text-sm">Cek Status Pesanan</span>
              </div>
              <button
                onClick={() => setShowTrackModal(false)}
                className="w-7 h-7 rounded-full bg-white/5 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleTrackSearch} className="mt-4 space-y-3">
              <div>
                <label className="text-xs text-slate-300 block mb-1">
                  Masukkan No. Invoice atau WhatsApp:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Contoh: YOG-849102 atau 0812..."
                    value={trackQuery}
                    onChange={(e) => setTrackQuery(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Cari
                  </button>
                </div>
              </div>
            </form>

            {trackResult === 'NOT_FOUND' && (
              <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 text-center">
                Pesanan tidak ditemukan. Pastikan nomor invoice atau nomor WhatsApp sudah benar.
              </div>
            )}

            {trackResult && trackResult !== 'NOT_FOUND' && (
              <div className="mt-4 p-4 rounded-2xl bg-[#161a2e] border border-purple-500/30 space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="font-mono font-bold text-white">{trackResult.invoiceId}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${trackResult.status === 'SUCCESS' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {trackResult.status === 'SUCCESS' ? 'SUKSES AKTIF' : 'MENUNGGU BAYAR'}
                  </span>
                </div>
                <p className="text-slate-300"><b className="text-slate-400">Produk:</b> {trackResult.productName}</p>
                <p className="text-slate-300"><b className="text-slate-400">Varian:</b> {trackResult.variantName}</p>
                <p className="text-slate-300"><b className="text-slate-400">Total:</b> {formatRupiah(trackResult.total)}</p>

                {trackResult.status === 'SUCCESS' && (
                  <div className="mt-3 p-3 rounded-xl bg-black/40 space-y-1">
                    <span className="text-[10px] text-purple-300 font-bold block">Detail Akun:</span>
                    <p className="font-mono text-xs text-white">User: {trackResult.credentials?.emailLogin}</p>
                    <p className="font-mono text-xs text-white">Pass: {trackResult.credentials?.passwordLogin}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating WA Support Button */}
      <a
        href={`https://wa.me/${storeConfig.adminWhatsapp}?text=Halo%20Admin%20Yogs%20Store%2C%20bisa%20bantu%20order%20paket%20langganan%3F`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 rounded-full shadow-xl shadow-emerald-500/30 flex items-center gap-2 group transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs font-bold max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
          Chat Admin WA
        </span>
      </a>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 bg-[#0c0e18] py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
              Y
            </div>
            <span className="font-semibold text-slate-300">Yogs Store</span>
            <span>— Platform Toko Langganan Digital & Voucher Otomatis</span>
          </div>
          <div>
            © 2026 Yogs Store. All rights reserved. Dilengkapi Enkripsi SSL 256-bit.
          </div>
        </div>
      </footer>
    </div>
  );
}

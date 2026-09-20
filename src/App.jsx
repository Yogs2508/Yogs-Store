// ... existing code ...
const INITIAL_PRODUCTS = [
  {
    id: 'netflix',
    name: 'Netflix Premium 4K',
    category: 'streaming',
    tag: 'Terlaris',
    tagColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    iconBg: 'from-red-600 to-rose-700',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=120&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=120&auto=format&fit=crop&q=80',
    description: 'Dengarkan puluhan juta lagu dan podcast favorit sepuasnya tanpa gangguan jeda iklan.',
    rating: '4.9',
    soldCount: '1.9k+',
// ... existing code ...
  const [adminPin, setAdminPin] = useState('');
  const [adminPinError, setAdminPinError] = useState('');
  const [adminActiveTab, setAdminActiveTab] = useState('orders');

  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProductForm, setNewProductForm] = useState({
    name: '',
    category: 'streaming',
    tag: 'Baru',
    image: '',
    description: '',
    price: 25000,
    duration: '1 Bulan',
    type: 'Sharing'
  });

  const [storeConfig, setStoreConfig] = useState({
    storeName: 'Yogs Store',
    adminWhatsapp: '6281234567890',
    tagline: 'Pusat Langganan Akun Digital Murah & Legal',
    noticeText: 'PROMO SPESIAL: Garansi Replace 100% & Pengiriman Otomatis 24 Jam via WhatsApp!',
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021126570011ID.GO.QRIS01189360099801234567895204581253033605802ID5910YOGS STORE6013JAKARTA SELATAN62070703A01630454E1'
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
        };
      }
      return prod;
    }));
  };

  const handleUpdateProductImage = (productId, newImageUrl) => {
    setProducts(prev => prev.map(prod => {
      if (prod.id === productId) {
        return { ...prod, image: newImageUrl };
      }
      return prod;
    }));
  };

  const handleAddNewProduct = (e) => {
    e.preventDefault();
    if (!newProductForm.name) return;

    const newId = newProductForm.name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now().toString().slice(-4);
    const createdProduct = {
      id: newId,
      name: newProductForm.name,
      category: newProductForm.category,
      tag: newProductForm.tag || 'Populer',
      tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      iconBg: 'from-purple-600 to-indigo-700',
      image: newProductForm.image || '',
      description: newProductForm.description || 'Layanan langganan premium garansi resmi.',
      rating: '5.0',
      soldCount: '100+',
      variants: [
        {
          id: `${newId}-var-1`,
          name: `${newProductForm.duration} (${newProductForm.type})`,
          price: parseInt(newProductForm.price, 10) || 20000,
          duration: newProductForm.duration,
          type: newProductForm.type
        }
      ],
      features: ['100% Full Garansi', 'Proses Cepat via WhatsApp', 'Akses Langsung Tanpa Ribet']
    };

    setProducts([createdProduct, ...products]);
    setShowAddProductModal(false);
    setNewProductForm({
      name: '',
      category: 'streaming',
      tag: 'Baru',
      image: '',
      description: '',
      price: 25000,
      duration: '1 Bulan',
      type: 'Sharing'
    });
  };

  const openCheckout = (prod) => {
// ... existing code ...
          {/* TAB 2: ATUR HARGA PRODUK */}
          {adminActiveTab === 'products' && (
            <div className="mt-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-white/5">
                <div>
                  <h3 className="font-bold text-white text-base">Atur Harga & Varian Langganan</h3>
                  <p className="text-xs text-slate-400">Perubahan harga langsung diterapkan secara langsung ke katalog toko.</p>
                </div>
                <button
                  onClick={() => setShowAddProductModal(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                >
                  <Package className="w-4 h-4" />
                  <span>+ Tambah Produk Baru</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">

                <div>
                  <label className="text-xs text-slate-300 block mb-1">Nomor WhatsApp Admin (Awalan 62, contoh: 6281234567890):</label>
                  <input
                    type="text"
                    value={storeConfig.adminWhatsapp}
                    onChange={(e) => setStoreConfig({ ...storeConfig, adminWhatsapp: e.target.value })}
                    className="w-full px-3 py-2 bg-[#1a1e33] border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">Link URL Gambar Barcode QRIS Toko Kamu:</label>
                  <input
                    type="text"
                    placeholder="Tempel link gambar QRIS (.png / .jpg)"
                    value={storeConfig.qrisImage}
                    onChange={(e) => setStoreConfig({ ...storeConfig, qrisImage: e.target.value })}
                    className="w-full px-3 py-2 bg-[#1a1e33] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    *Bisa upload foto barcode QRIS (dari DANA Bisnis, BCA, GoPay Merchant, dll.) ke imgur.com atau postimages.org, lalu tempel link gambarnya di sini.
                  </span>
                </div>

                {storeConfig.qrisImage && (
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                    <img src={storeConfig.qrisImage} alt="Preview QRIS" className="w-14 h-14 object-contain rounded-lg bg-white p-1" />
                    <div>
                      <span className="text-xs font-bold text-white block">Pratinjau QRIS Toko</span>
                      <span className="text-[11px] text-emerald-400">Barcode ini yang akan di-scan oleh pembeli.</span>
                    </div>
                  </div>
                )}

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
                  Perubahan nomor WA dan gambar QRIS akan langsung aktif di layar checkout pembeli.
                </div>
              </div>
            </div>
          )}
              {currentInvoice.status === 'WAITING_PAYMENT' ? (
                <div className="space-y-4 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5 animate-pulse" />
                    <span>Sisa Waktu Pembayaran: {formatTimer(paymentTimer)}</span>
                  </div>

                  {/* QRIS Display Asli / Nyata */}
                  <div className="p-5 bg-white rounded-3xl max-w-[260px] mx-auto shadow-2xl text-black border border-slate-300">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="font-black text-xs tracking-wider text-rose-600">QRIS</span>
                      <span className="text-[10px] text-slate-600 font-bold">{storeConfig.storeName}</span>
                    </div>

                    <div className="my-3 p-2 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center">
                      <img
                        src={storeConfig.qrisImage}
                        alt="QRIS Barcode"
                        className="w-48 h-48 object-contain rounded-lg"
                      />
                      <span className="text-[9px] text-slate-500 mt-2 font-mono font-bold">NMID: ID1029384910293</span>
                    </div>

                    <p className="text-[10px] text-slate-600 font-medium leading-tight">
                      Scan pakai GoPay, OVO, DANA, BCA Mobile, ShopeePay, atau Livin Mandiri
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
                      <span className="text-slate-400">WhatsApp Pembeli:</span>
                      <span className="text-white">{currentInvoice.whatsapp}</span>
                    </div>
                  </div>

                  {/* WhatsApp Konfirmasi & Simulasi */}
                  <div className="pt-2 space-y-2">
                    <a
                      href={`https://wa.me/${storeConfig.adminWhatsapp}?text=Halo%20Admin%2C%20saya%20sudah%20transfer%20via%20QRIS%20untuk%20Invoice%20${currentInvoice.invoiceId}%20sebesar%20${encodeURIComponent(formatRupiah(currentInvoice.total))}.%20Mohon%20segera%20diproses.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Kirim Bukti Transfer ke Admin WA</span>
                    </a>

                    <button
                      onClick={handleSimulatePaymentSuccess}
                      className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-medium text-[11px] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>(Admin) Simulasikan Auto-Verifikasi Lunas</span>
                    </button>
                  </div>
                </div>
              ) : (
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${prod.iconBg} flex items-center justify-center font-black text-xl text-white shadow-inner border border-white/10`}>
                              {prod.name.charAt(0)}
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-white text-base leading-tight group-hover:text-purple-300 transition-colors">
                              {prod.name}
                            </h3>
                            <span className="text-[11px] text-purple-400 font-medium">Garansi Penggantian Baru</span>
                          </div>
                        </div>
// ... existing code ...
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#15192c]">
              <div className="flex items-center gap-3">
                {selectedProduct.image ? (
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-10 h-10 rounded-xl object-cover border border-white/10 shadow-md" />
                ) : (
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedProduct.iconBg} flex items-center justify-center font-bold text-white shadow-md`}>
                    {selectedProduct.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base leading-tight">
                    Order {selectedProduct.name}
                  </h3>
// ... existing code ...
      {/* ADMIN LOGIN MODAL */}
      {showAdminLoginModal && (
// ... existing code ...
      )}

      {/* MODAL TAMBAH PRODUK BARU */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#121524] w-full max-w-md rounded-3xl border border-purple-500/30 shadow-2xl p-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-purple-400" />
                <span className="font-bold text-white text-sm">Tambah Produk Digital Baru</span>
              </div>
              <button
                onClick={() => setShowAddProductModal(false)}
                className="w-7 h-7 rounded-full bg-white/5 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddNewProduct} className="mt-4 space-y-3">
              <div>
                <label className="text-xs text-slate-300 block mb-1">Nama Layanan / Aplikasi:</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Disney+ Hotstar VIP"
                  value={newProductForm.name}
                  onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Kategori:</label>
                  <select
                    value={newProductForm.category}
                    onChange={(e) => setNewProductForm({ ...newProductForm, category: e.target.value })}
                    className="w-full px-3 py-2 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white"
                  >
                    <option value="streaming">Streaming Film</option>
                    <option value="music">Musik & Audio</option>
                    <option value="creative">Desain & Editing</option>
                    <option value="ai">AI & Produktivitas</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Badge Tag:</label>
                  <input
                    type="text"
                    placeholder="Contoh: Terlaris / Promo"
                    value={newProductForm.tag}
                    onChange={(e) => setNewProductForm({ ...newProductForm, tag: e.target.value })}
                    className="w-full px-3 py-2 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Link URL Gambar/Logo (Opsional):</label>
                <input
                  type="url"
                  placeholder="Contoh: https://example.com/disney.png"
                  value={newProductForm.image}
                  onChange={(e) => setNewProductForm({ ...newProductForm, image: e.target.value })}
                  className="w-full px-3 py-2 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Deskripsi Singkat:</label>
                <input
                  type="text"
                  placeholder="Nonton film Marvel, Pixar & Disney kualitas Ultra HD..."
                  value={newProductForm.description}
                  onChange={(e) => setNewProductForm({ ...newProductForm, description: e.target.value })}
                  className="w-full px-3 py-2 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Harga (Rp):</label>
                  <input
                    type="number"
                    required
                    placeholder="25000"
                    value={newProductForm.price}
                    onChange={(e) => setNewProductForm({ ...newProductForm, price: e.target.value })}
                    className="w-full px-3 py-2 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Durasi:</label>
                  <input
                    type="text"
                    placeholder="1 Bulan"
                    value={newProductForm.duration}
                    onChange={(e) => setNewProductForm({ ...newProductForm, duration: e.target.value })}
                    className="w-full px-3 py-2 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Tipe:</label>
                  <input
                    type="text"
                    placeholder="Sharing / Private"
                    value={newProductForm.type}
                    onChange={(e) => setNewProductForm({ ...newProductForm, type: e.target.value })}
                    className="w-full px-3 py-2 bg-[#171a2e] border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 cursor-pointer transition-colors"
              >
                Simpan & Munculkan di Toko
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL */}
// ... existing code ...

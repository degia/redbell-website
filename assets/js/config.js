/* =========================================================
   RED BELL — KONFIGURASI LINK
   Ubah link di file ini saja. Semua tombol di website
   otomatis mengikuti nilai di bawah.
   - Isi dengan URL lengkap (https://...)
   - Kosongkan ("") jika belum siap → tombol tampil "Segera Hadir"
   ========================================================= */
window.RB_CONFIG = {
  /* ---------- In-house shop by RedbellGroup ---------- */
  inhouseShop: {
    name: "Redbell Shop",
    // Ganti ke URL toko resmi saat sudah siap, mis. "https://shop.redbellgroup.com"
    url: "/shop",
    status: "coming-soon" // "live" | "coming-soon"
  },

  /* ---------- Marketplace resmi ---------- */
  marketplaces: [
    { id: "tokopedia", name: "Tokopedia", url: "https://www.tokopedia.com/redbellofficial", color: "#03AC0E", note: "Red Bell Official Store" },
    { id: "shopee",    name: "Shopee",    url: "https://shopee.co.id/redbellofficial",       color: "#EE4D2D", note: "Gratis ongkir & voucher" },
    { id: "tiktok",    name: "TikTok Shop", url: "",                                          color: "#111111", note: "Belanja sambil nonton tutorial" },
    { id: "lazada",    name: "Lazada",    url: "",                                            color: "#0F146D", note: "LazMall official" },
    { id: "blibli",    name: "Blibli",    url: "",                                            color: "#0095DA", note: "Official partner" },
    { id: "whatsapp",  name: "WhatsApp Order", url: "https://wa.link/357kze",                 color: "#25D366", note: "Order grosir & reseller" }
  ],

  /* ---------- Kontak & sosial media ---------- */
  contact: {
    email: "hello@redbellgroup.com",
    whatsapp: "https://wa.link/357kze",
    address: "PT Verra Inter Pangan, Blok P3 No 1 Kawasan Industri Millenium, Tigaraksa, Banten 15720, Indonesia",
    maps: "https://maps.google.com/?q=Kawasan+Industri+Millenium+Tigaraksa"
  },
  social: {
    instagram: "https://www.instagram.com/redbellgroup_id/",
    tiktok: "https://www.tiktok.com/@redbellgroup_id",
    youtube: "https://www.youtube.com/@redbellgroup_id4705",
    facebook: "https://www.facebook.com/redbellgroup/"
  },

  /* Halaman resep & cerita lama (ubah jika dipindah) */
  legacyBase: "https://www.redbellgroup.com"
};

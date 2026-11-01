/* Data produk, resep, cerita & sejarah Red Bell */
window.RB_DATA = {
  categories: [
    { id: "pasta",   name: "Pasta",              emoji: "🍓", grad: ["#FF4D6D", "#FF8FA3"], desc: "Rasa nikmat, aroma lezat, dan warna akurat dalam satu botol." },
    { id: "essence", name: "Essence",            emoji: "🌸", grad: ["#9B5DE5", "#C77DFF"], desc: "Aroma lezat yang bikin kue makin menggoda." },
    { id: "water",   name: "Water Based Coloring", emoji: "💧", grad: ["#00BBF9", "#4CC9F0"], desc: "Pewarna cair, mudah larut untuk adonan & minuman." },
    { id: "oil",     name: "Oil Based Coloring", emoji: "🎨", grad: ["#FF9F1C", "#FFBF69"], desc: "Warna makin cerah untuk cokelat, buttercream & ganache." },
    { id: "powder",  name: "Powder Coloring",    emoji: "✨", grad: ["#F15BB5", "#FF99C8"], desc: "Pewarna bubuk pekat, cocok untuk macaron & dry mix." },
    { id: "baking",  name: "Baking Ingredients", emoji: "🧁", grad: ["#06D6A0", "#7AE7C7"], desc: "Bahan pendukung andalan para baker profesional." }
  ],

  products: {
    pasta: ["Alpukat","Ananas","Blewah","Blueberry","Chocolate","Chocolate Black Forest","Coco Pandan","Coffee Mocca","Dark Chocolate","Doger","Durian Kuning","Durian Putih","Frambozen","Grape","Jeruk Keprok","Kopi Gula Aren","Kopyor","Leci","Mangga","Matcha","Melon","Nangka","Orange Base","Pandan","Peppermint","Pisang Ambon","Red Velvet","Rosen","Santa Merah","Santan","Sirsak","Strawberry","Susu","Taro","Tutti Frutti","Vanili","SP Max"],
    essence: ["Coffee Mocca","Cokelat","Frambozen","Kelapa","Leci","Mentega","Pandan","Pisang Ambon","Rhumba","Strawberry","Susu","Tutti Frutti","Vanilla"],
    baking: ["Asam Sitrat","Baking Powder","CMC","Cookie Shine","Cream of Tartar","Gum Xanthan","Natrium Benzoat","Perisa Vanilla","Soda Kue"],
    water: [["Biru","#1E6FD9"],["Biru Tua","#12358C"],["Cokelat","#7B4A2A"],["Hijau Muda","#7ED957"],["Hijau Tua","#1F7A3A"],["Hitam","#1B1B1B"],["Kuning Muda","#FFE45C"],["Kuning Tua","#FFB800"],["Merah Cabe","#D62828"],["Merah Muda","#FF7AA2"],["Merah Tua","#9D0208"],["Orange","#FF7B00"],["Putih","#F7F7F7"],["Violet","#7B2CBF"]],
    oil: [["Biru","#1E6FD9"],["Cokelat","#7B4A2A"],["Hijau","#2BA84A"],["Hitam","#1B1B1B"],["Kuning","#FFD000"],["Merah","#E01E37"],["Merah Muda","#FF7AA2"],["Oranye","#FF7B00"],["Ungu","#7B2CBF"]],
    powder: [["Cokelat","#7B4A2A"],["Hijau Muda","#7ED957"],["Hijau Tua","#1F7A3A"],["Kuning Muda","#FFE45C"],["Kuning Telur","#FFC300"],["Merah Jeruk","#F25C05"],["Merah Tua","#9D0208"],["Putih","#F7F7F7"]]
  },

  flavorColor: {
    "Alpukat":"#9BC53D","Ananas":"#FFD23F","Blewah":"#FFA552","Blueberry":"#4361EE","Chocolate":"#6B3E26","Chocolate Black Forest":"#3D1F14","Coco Pandan":"#57CC99","Coffee Mocca":"#8B5E3C","Dark Chocolate":"#3B2116","Doger":"#FF8FAB","Durian Kuning":"#F4D35E","Durian Putih":"#F1E9C7","Frambozen":"#E63946","Grape":"#7209B7","Jeruk Keprok":"#FF8C00","Kopi Gula Aren":"#7F5539","Kopyor":"#EDE0D4","Leci":"#FFC8DD","Mangga":"#FFB703","Matcha":"#80B918","Melon":"#B5E48C","Nangka":"#FFCA3A","Orange Base":"#FB8500","Pandan":"#2DC653","Peppermint":"#4CD4B0","Pisang Ambon":"#38B000","Red Velvet":"#C1121F","Rosen":"#FF4D8D","Santa Merah":"#E5383B","Santan":"#FAF3E0","Sirsak":"#D8F3DC","Strawberry":"#FF3366","Susu":"#FFF8E7","Taro":"#B185DB","Tutti Frutti":"#FF5DA2","Vanili":"#F3DFA2","Vanilla":"#F3DFA2","SP Max":"#E4002B",
    "Cokelat":"#6B3E26","Kelapa":"#F5F0E1","Mentega":"#FFE8A3","Rhumba":"#8C5A3C"
  },

  recipes: [
    { title: "Strawberry Lemon Cheese Mousse", path: "/strawberry-lemon-cheese-mousse/", tag: "Mousse", grad: ["#FF4D6D","#FFD166"], emoji: "🍓" },
    { title: "Vanilla Mango Panna Cotta", path: "/vanilla-mango-pana-cotta/", tag: "Dessert", grad: ["#FFB703","#FFE5A0"], emoji: "🥭" },
    { title: "Rosen Strawberry Mousse Cake", path: "/1037-2/", tag: "Cake", grad: ["#F15BB5","#FFC8DD"], emoji: "🌹" },
    { title: "Sweet Mango Cheesecake", path: "/sweet-mango-cheesecake/", tag: "Cheesecake", grad: ["#FB8500","#FFD166"], emoji: "🍰" },
    { title: "Creamy Napoleon Cake", path: "/creamy-napoleon-cake/", tag: "Pastry", grad: ["#9B5DE5","#F9C6FF"], emoji: "🥐" },
    { title: "Chocolate Mousse Tartlet", path: "/chocolate-mousse-tartlet/", tag: "Tartlet", grad: ["#6B3E26","#C08552"], emoji: "🍫" }
  ],

  stories: [
    { title: "Nagasari Cake", text: "Kreasi unik sponge cake dengan kue nagasari — perpaduan klasik dan kekinian.", path: "/nagasari-cake/", grad: ["#06D6A0","#B9FBC0"], emoji: "🍌" },
    { title: "Brownies Donat", text: "Dua favorit jadi satu: brownies fudgy dalam bentuk donat yang menggemaskan.", path: "/brownies-donat/", grad: ["#8338EC","#FF006E"], emoji: "🍩" },
    { title: "Burnt Cheeramisu", text: "Ide gabungin Burnt Cheesecake dan Tiramisu jadi BURNT CHEERAMISU.", path: "/burnt-cheeramisu/", grad: ["#FF9F1C","#E4002B"], emoji: "🧀" }
  ],

  timeline: [
    ["1984", "Mulai bergerak di penjualan pewarna makanan di dalam ruko."],
    ["1988", "Mulai memproduksi Pasta dengan merek dagang Red Bell di pabrik Karawaci, Tangerang."],
    ["1991", "Distribusi ke Jawa Timur, membuka cabang Verra Surabaya."],
    ["1993", "Distribusi ke area Jawa Tengah."],
    ["1995", "Distribusi ke Bandung, Jawa Barat."],
    ["2012", "Sertifikasi Halal MUI."],
    ["2019", "Mulai membangun pabrik baru di Tigaraksa, Tangerang."],
    ["2021", "Mulai produksi di pabrik baru Tigaraksa, Tangerang."],
    ["2022", "Sertifikasi ISO 22000 Food Safety Management."],
    ["2023", "Terpilih TOP BRAND kategori Perisa Makanan."],
    ["2025", "Terus berinovasi di bidang baking dan menciptakan produk berkualitas tinggi."]
  ]
};

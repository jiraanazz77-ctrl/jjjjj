// Mengaktifkan Toggle Hamburger Menu untuk versi Mobile
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// Ketika ikon hamburger diklik
hamburger.onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Menutup sidebar ketika klik di area luar menu
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Fungsi Redirect ke WhatsApp dengan format pesanan
function orderToWA(productName, productPrice) {
    // UBAH NOMOR INI: Gunakan format internasional tanpa tanda (+) 
    // Contoh untuk nomor 081234567890 menjadi 6281234567890
    const waNumber = '6285891062196'; 
    
    // Format pesan otomatis
    const message = `Halo Lutfi Bouquet! 🌸\nSaya tertarik dengan koleksi buket ini:\n\n*Produk:* ${productName}\n*Harga:* Rp ${productPrice}\n\nApakah masih bisa dipesan? Terimakasih🤗`;

    
    // Proses encode agar format teks aman dibaca oleh URL
    const encodedMessage = encodeURIComponent(message);
    
    // Generate URL WhatsApp
    const waURL = `https://wa.me/${waNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(waURL, '_blank');
}
    // --- FUNGSIONALITAS BARU: ANIMASI SCROLL MUNCUL LEMBUT (INTERSECTION OBSERVER) ---
    const animationOptions = {
        root: null, // Berdasarkan layar browser
        threshold: 0.15, // Aktif ketika 15% elemen masuk ke layar
        rootMargin: "0px 0px -20px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Menambahkan kelas 'appear' untuk memicu transisi CSS
                entry.target.classList.add("appear");
                // Matikan pemantauan elemen ini agar menghemat baterai/performa device
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    // Daftarkan semua kartu ber-class .animate-card ke sistem animasi observer
    const animatedElements = document.querySelectorAll(".animate-card");
    animatedElements.forEach(element => {
        cardObserver.observe(element);
    });

// ==========================================================
// FUNGSI UNTUK TOMBOL "BELI SEKARANG" & "CHAT LUTFI BOUQUET"
// ==========================================================
function chatUmum() {
    // Nomor WA kamu
    const waNumber = '6285891062196';
    
    // Pesan umum yang kamu mau
    const messageUmum = `Halo Lutfia Bouquet! 🌸\nSaya datang dari website. Ingin bertanya terkait produk\n\nTerimakasih🤗`;
    
    // Proses encode agar aman dibaca URL
    const encodedMessage = encodeURIComponent(messageUmum);
    
    // Generate URL WhatsApp
    const waURL = `https://wa.me/${waNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(waURL, '_blank');
}

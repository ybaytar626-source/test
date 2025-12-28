const hayirBtn = document.getElementById('hayirBtn');
const evetBtn = document.getElementById('evetBtn');
const soru = document.getElementById('soru');
const container = document.getElementById('main-container');

// Videodaki gibi kaçarken değişecek yazılar
const mesajlar = [
    "Sevdiğini itiraf et! 🤫",
    "Ağlayacağım ama! 😭",
    "Son şansın!",
    "Biliyorum seviyorsun!",
    "Hala mı hayır?",
    "Emin misin?",
    "Gerçekten mi?",
    "Beni seviyorsun!"
];

let mesajIndex = 0;

// Hayır butonunun kaçma ve yazı değiştirme mantığı
hayirBtn.addEventListener('mouseover', () => {
    // 1. Rastgele pozisyon
    const x = Math.random() * (window.innerWidth - hayirBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - hayirBtn.clientHeight);
    
    hayirBtn.style.left = `${x}px`;
    hayirBtn.style.top = `${y}px`;

    // 2. Yazıyı değiştir
    hayirBtn.innerText = mesajlar[mesajIndex];
    mesajIndex = (mesajIndex + 1) % mesajlar.length;
});

// Evet butonuna basıldığında (Final Sahnesi)
evetBtn.addEventListener('click', () => {
    // Tüm ekranı pembe kaplayan yeni bir div oluştur
    const finalOverlay = document.createElement('div');
    finalOverlay.className = 'final-screen';
    
    finalOverlay.innerHTML = `
        <h1 style="font-size: 5rem; margin: 0;">EVET! 💜✨</h1>
        <p style="font-size: 1.5rem; margin-top: 20px;">Ben de seni seviyorum! 🥰</p>
        <p style="font-size: 1rem; opacity: 0.8;">Bunu biliyordum!</p>
    `;
    
    document.body.appendChild(finalOverlay);
});

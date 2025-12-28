const evetBtn = document.getElementById('evetBtn');
const hayirBtn = document.getElementById('hayirBtn');
const soruMetni = document.getElementById('soru');
const anaEkran = document.getElementById('ana-ekran');
const sonucEkran = document.getElementById('sonuc-ekran');

let evetBoyutu = 1;
const mesajlar = ["Emin misin?", "Gerçekten mi?", "Beni seviyorsan bas!", "Son şansın!", "Ağlayacağım ama..."];

// Hayır butonuna tıklandığında (veya üzerine gelindiğinde) kaçma mantığı
hayirBtn.addEventListener('mouseover', () => {
    // Rastgele konum hesapla
    const x = Math.random() * (window.innerWidth - hayirBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - hayirBtn.clientHeight);
    
    hayirBtn.style.position = 'fixed';
    hayirBtn.style.left = x + 'px';
    hayirBtn.style.top = y + 'px';

    // Evet butonunu büyüt
    evetBoyutu += 0.5;
    evetBtn.style.transform = scale(${evetBoyutu});
    
    // Rastgele mesaj değiştir
    const rastgeleMesaj = mesajlar[Math.floor(Math.random() * mesajlar.length)];
    hayirBtn.innerText = rastgeleMesaj;
});

// Evet butonuna basıldığında
evetBtn.addEventListener('click', () => {
    evetBtn.classList.add('full-screen');
    evetBtn.innerText = "EVET! 💖";
    
    setTimeout(() => {
        anaEkran.classList.add('gizli');
        sonucEkran.classList.remove('gizli');
        evetBtn.classList.remove('full-screen');
    }, 1000);
});
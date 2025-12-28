const hayirBtn = document.getElementById('hayirBtn');
const evetBtn = document.getElementById('evetBtn');
const soru = document.getElementById('soru');
const container = document.querySelector('.container');

// Hayır butonunun kaçma mekanizması
hayirBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - hayirBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - hayirBtn.clientHeight);
    hayirBtn.style.left = x + 'px';
    hayirBtn.style.top = y + 'px';
});

// Evet butonuna basıldığında videodaki o final sahnesini yapan kısım:
evetBtn.addEventListener('click', () => {
    // 1. Mevcut her şeyi (soru ve butonlar) ekranı temizlemek için gizle
    container.style.display = 'none';
    hayirBtn.style.display = 'none';

    // 2. Arka planı videodaki gibi koyu pembe yap
    document.body.style.backgroundColor = '#ff4d6d';

    // 3. Ekrana yeni bir büyük yazı ekle
    const finalMesaj = document.createElement('h1');
    finalMesaj.innerHTML = "Ben de seni seviyorum! 🥰";
    finalMesaj.style.color = "white";
    finalMesaj.style.fontSize = "4rem";
    finalMesaj.style.textAlign = "center";
    finalMesaj.style.width = "100%";
    
    // Yazıyı ekranın tam ortasına yerleştir
    document.body.appendChild(finalMesaj);
});

const hayirBtn = document.getElementById('hayirBtn');
const evetBtn = document.getElementById('evetBtn');
const soru = document.getElementById('soru');

// Hayır butonu kaçma mantığı
hayirBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - hayirBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - hayirBtn.clientHeight);
    hayirBtn.style.left = x + 'px';
    hayirBtn.style.top = y + 'px';
});

// Evet butonu tıklama mantığı
evetBtn.addEventListener('click', () => {
    // 1. Yazıyı değiştir
    soru.innerHTML = "Ben de seni seviyorum! 🥰"; 
    
    // 2. Hayır butonunu gizle
    hayirBtn.style.display = 'none'; 
    
    // 3. Arka planı pembe yap
    document.body.style.backgroundColor = '#ff4d6d';
    
    // 4. Konteynırı (beyaz kutuyu) da pembeye uyumlu yap veya gizle
    document.querySelector('.container').style.boxShadow = 'none';
});

let vadeler = [];

document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('baslangicTarihi').value = today;

    yeniSatirEkle();
    document.getElementById('baslangicTarihi').addEventListener('change', tumVadeleriGuncelle);
});

function yeniSatirEkle() {
    const tablo = document.getElementById('vadeTablosu');
    const yeniSatir = document.createElement('tr');
    const satirNo = tablo.children.length + 1;

    yeniSatir.innerHTML = `
        <td>${satirNo}</td>
        <td><input type="text" class="form-control tutar" placeholder="Tutar" oninput="formatTutar(this)" data-raw-value=""></td>
        <td><input type="number" class="form-control vadeGun" placeholder="Gün" oninput="vadeGuncelle(this)"></td>
        <td><input type="date" class="form-control tarih" onchange="tarihGuncelle(this)"></td>
        <td><button class="btn btn-sm btn-danger" onclick="satirSil(this)">Sil</button></td>
    `;
    tablo.appendChild(yeniSatir);
    kayitSayisiniGuncelle(); // Kayıt sayısını güncelle
}

function vadeGuncelle(input) {
    const satir = input.closest('tr');
    const baslangicTarihi = new Date(document.getElementById('baslangicTarihi').value);
    const gun = parseInt(input.value) || 0;

    if (gun > 0) {
        const tarih = new Date(baslangicTarihi);
        tarih.setDate(baslangicTarihi.getDate() + gun);
        satir.querySelector('.tarih').value = tarih.toISOString().split('T')[0];
    }
    ortalamaHesapla();
}

function tarihGuncelle(input) {
    const satir = input.closest('tr');
    const baslangicTarihi = new Date(document.getElementById('baslangicTarihi').value);
    const tarih = new Date(input.value);

    if (tarih) {
        const gunFark = Math.round((tarih - baslangicTarihi) / (1000 * 60 * 60 * 24));
        satir.querySelector('.vadeGun').value = gunFark;
    }
    ortalamaHesapla();
}

function ortalamaHesapla() {
    const satirlar = Array.from(document.getElementById('vadeTablosu').children);
    let toplamTutar = 0;
    let agirlikliToplam = 0;

    satirlar.forEach(satir => {
        const tutarInput = satir.querySelector('.tutar');
        const rawValue = tutarInput.getAttribute('data-raw-value') || '';
        
        // Virgüllü değeri doğru şekilde parse et
        let tutar = 0;
        if (rawValue) {
            if (rawValue.includes(',')) {
                // Virgülü noktaya çevir ve parseFloat ile parse et
                let normalizedValue = rawValue.replace(',', '.');
                tutar = parseFloat(normalizedValue) || 0;
            } else {
                tutar = parseFloat(rawValue) || 0;
            }
        }
        
        const vadeGun = parseInt(satir.querySelector('.vadeGun').value) || 0;

        toplamTutar += tutar;
        agirlikliToplam += tutar * vadeGun;
    });

    const ortalamaVade = toplamTutar ? Math.round(agirlikliToplam / toplamTutar) : 0;
    const baslangicTarihi = new Date(document.getElementById('baslangicTarihi').value);
    const ortalamaTarih = new Date(baslangicTarihi);
    ortalamaTarih.setDate(baslangicTarihi.getDate() + ortalamaVade);

    document.getElementById('ortalamaVade').textContent = `${ortalamaVade} gün`;
    document.getElementById('toplamTutar').textContent = toplamTutar.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
    document.getElementById('ortalamaTarih').textContent = toplamTutar ? ortalamaTarih.toLocaleDateString('tr-TR') : '-';

    kayitSayisiniGuncelle(); // Kayıt sayısını güncelle
}

function tumVadeleriGuncelle() {
    const satirlar = Array.from(document.getElementById('vadeTablosu').children);
    const baslangicTarihi = new Date(document.getElementById('baslangicTarihi').value);

    satirlar.forEach(satir => {
        const tarihInput = satir.querySelector('.tarih');
        const vadeGunInput = satir.querySelector('.vadeGun');

        if (tarihInput.value) {
            // Vade tarihi sabit kalacak, gün sayısını yeniden hesapla
            const vadeTarihi = new Date(tarihInput.value);
            const gunFark = Math.round((vadeTarihi - baslangicTarihi) / (1000 * 60 * 60 * 24));
            vadeGunInput.value = gunFark;
        }
    });

    // Ortalama hesaplamalarını güncelle
    ortalamaHesapla();
}

function satirSil(button) {
    const satir = button.closest('tr');
    satir.remove();
    kayitSayisiniGuncelle(); // Kayıt sayısını güncelle
    ortalamaHesapla();
}

function kayitSayisiniGuncelle() {
    const tablo = document.getElementById('vadeTablosu');
    const satirlar = Array.from(tablo.children);
    const kayitSayisi = satirlar.filter(satir => {
        const tutarInput = satir.querySelector('.tutar');
        const rawValue = tutarInput.getAttribute('data-raw-value') || '';
        return rawValue && !isNaN(parseFloat(rawValue)); // Tutar alanı dolu ve geçerli bir sayı
    }).length;
    document.getElementById('kayitSayisiHeader').textContent = kayitSayisi; // Sadece sayfa üstündeki alan güncelleniyor
}

function formatTutar(input) {
    let rawValue = input.value.replace(/[^\d,]/g, ''); // Rakamları ve virgülü al
    input.setAttribute('data-raw-value', rawValue); // Gerçek değeri sakla
    
    if (rawValue) {
        // Kullanıcı virgül girdiyse ondalık kısım var demektir
        if (rawValue.includes(',')) {
            // Virgülü ayırıcı olarak kullan
            let parts = rawValue.split(',');
            let integerPart = parts[0];
            let decimalPart = parts[1] || '';
            
            // Ondalık kısmı 2 basamakla sınırla
            if (decimalPart.length > 2) {
                decimalPart = decimalPart.substring(0, 2);
            }
            
            // Tam kısmı binlik ayıracıyla formatla (nokta ile)
            let formattedInteger = formatWithDotSeparator(integerPart);
            
            input.value = formattedInteger + ',' + decimalPart;
        } else {
            // Sadece tam sayı ise binlik ayıracı ekle (nokta ile)
            input.value = formatWithDotSeparator(rawValue);
        }
    } else {
        input.value = ''; // Boş bırak
    }
    ortalamaHesapla(); // Hesaplamaları güncelle
}

// Binlik ayıracı olarak nokta kullanan formatlama fonksiyonu
function formatWithDotSeparator(numStr) {
    if (!numStr) return '';
    
    let result = '';
    let counter = 0;
    
    // Sağdan sola doğru 3 basamakta bir nokta ekle
    for (let i = numStr.length - 1; i >= 0; i--) {
        result = numStr[i] + result;
        counter++;
        
        if (counter % 3 === 0 && i !== 0) {
            result = '.' + result;
        }
    }
    
    return result;
}

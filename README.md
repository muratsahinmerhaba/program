Vade Hesaplama Uygulaması Proje Dokümantasyonu
1. Proje Amacı
Vade Hesaplama Uygulaması, finansal işlemlerde vade takibi ve hesaplamaları yapmak için tasarlanmış profesyonel bir web tabanlı araçtır. Kullanıcıların birden fazla vade kaydı eklemesine, düzenlemesine ve bu kayıtların ortalama vade süresini hesaplamasına olanak tanır.

Temel Amaçlar:
Finansal vade takibini kolaylaştırmak
Birden fazla vade kaydını tek bir arayüzde yönetmek
Ağırlıklı ortalama vade hesaplaması yapmak
Mobil ve masaüstü cihazlarda sorunsuz çalışmak
2. Hedef Kitle
Finans departmanı çalışanları
Muhasebe profesyonelleri
İşletme sahipleri
Bankacılık sektörü çalışanları
Vade takibi yapan tüm profesyoneller
3. Temel Özellikler
3.1. Başlangıç Tarihi Yönetimi
Uygulama açıldığında varsayılan olarak bugünün tarihi gelir
Kullanıcı başlangıç tarihini değiştirebilir
Başlangıç tarihi değiştiğinde tüm vade günleri otomatik güncellenir (vade tarihleri sabit kalır)
3.2. Vade Kayıtları Yönetimi
Yeni vade kaydı ekleme
Mevcut kayıtları düzenleme
Kayıt silme
Her kayıt için:
Tutar (Türk Lirası cinsinden)
Vade gün sayısı (takvim günleri)
Vade tarihi
3.3. Otomatik Hesaplamalar
Gün-Tarih İlişkisi:
Gün değiştiğinde vade tarihi otomatik hesaplanır
Tarih değiştiğinde gün sayısı otomatik hesaplanır
Ağırlıklı Ortalama Vade:
Her kaydın tutarıyla orantılı olarak ağırlıklandırma
Formül: (tutar × gün toplamı) / toplam tutar
Özet Bilgiler:
Toplam kayıt sayısı
Ortalama vade süresi
Ortalama vade tarihi
Toplam tutar
3.4. Kullanıcı Deneyimi Özellikleri
Responsive Tasarım: Mobil ve masaüstü cihazlarda mükemmel görünüm
Anlık Güncellemeler: Tüm değişiklikler anında yansır
Para Formatı: Binlik ayraç olarak nokta, ondalık ayraç olarak virgül
Boş Değer Yönetimi: Yeni kayıtlarda tutar ve gün alanları boş gelir
Otomatik Odaklanma: Yeni kayıt eklendiğinde tutar alanına otomatik odaklanma
4. Teknik Detaylar
4.1. Kullanılan Teknolojiler
Frontend: HTML5, CSS3, JavaScript (ES6+)
CSS Framework: Tailwind CSS
İkon Kütüphanesi: Font Awesome
Veri Yapısı: JavaScript Array (in-memory storage)
4.2. Tasarım Prensipleri
Glass Morphism: Şeffaf ve bulanık arka plan efektleri
Gradient Arka Planlar: Görsel hiyerarşi için renk geçişleri
Animasyonlar: Yumuşak geçişler ve hover efektleri
Responsive Grid: Farklı ekran boyutları için esnek grid yapısı
4.3. Mobil Optimizasyonları
Dokunmatik Odaklama: Input alanları için dokunma dostu boyutlar
Sayısal Klavye: Tutar girildiğinde mobilde sayısal klavye açılması
Kart Görünümü: Mobilde her kayıt için ayrı kart tasarımı
İmleç Yönetimi: Güncelleme sırasında aktif input alanını koruma
4.4. Hesaplama Mantığı
Takvim Günü Hesaplaması: Hafta sonları dahil tüm günler
Tarih Hesaplama: calculateDate(startDate, days) fonksiyonu
Gün Sayısı Hesaplama: calculateDays(startDate, endDate) fonksiyonu
Para Formatı: toLocaleString('tr-TR') ile Türk Lirası formatı
5. Arayüz Detayları
5.1. Başlık Bölümü
Gradient arka planlı profesyonel başlık
"Profesyonel Vade Takip" başlığı
Başlangıç tarihi seçici (takvim ikonlu)
5.2. Özet Kartları
4 sütunlu grid düzeni (mobilde 2 sütun)
Her kartta:
Başlık (örn: "Kayıt Sayısı")
Değer (örn: "3")
İkon ve gölge efektleri
5.3. Masaüstü Tablo Görünümü
Profesyonel tablo tasarımı
Hover efektleri
Alternatif satır renkleri
Inline düzenlenebilir hücreler
5.4. Mobil Kart Görünümü
Her kayıt için ayrı kart
Gün ve vade tarihi aynı satırda
Büyük dokunma alanları
Net görsel ayrım
5.5. Yeni Kayıt Ekleme
Sayfanın altında konumlandırılmış buton
Yuvarlatılmış tasarım
Pulse animasyonu
Büyük dokunma alanı
6. Flutter Uygulaması İçin Dikkat Edilmesi Gerekenler
6.1. Proje Yapısı

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
lib/
├── models/
│   └── vade_kaydi.dart        # Vade kaydı modeli
├── screens/
│   ├── home_screen.dart      # Ana ekran
│   └── vade_kayit_ekle.dart  # Yeni kayıt ekleme
├── widgets/
│   ├── vade_karti.dart       # Vade kartı widget'ı
│   └── ozet_karti.dart       # Özet kartı widget'ı
├── utils/
│   ├── date_utils.dart       # Tarih hesaplama yardımcıları
│   └── currency_utils.dart   # Para formatı yardımcıları
└── main.dart                 # Uygulama giriş noktası
6.2. State Yönetimi
Provider veya Riverpod kullanımı önerilir
Vade kayıtları için global state
Başlangıç tarihi için state yönetimi
Hesaplanan özet değerler için state
6.3. Widget'lar
Responsive Tasarım: MediaQuery ve LayoutBuilder kullanımı
Vade Kartı: Card widget'ı ile özel tasarım
Input Alanları: TextFormField ile özel formatter'lar
Tarih Seçici: showDatePicker ile entegrasyon
6.4. Veri Modeli
dart

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
class VadeKaydi {
  final String id;
  final double tutar;
  final int gun;
  final DateTime tarih;
  
  VadeKaydi({
    required this.id,
    required this.tutar,
    required this.gun,
    required this.tarih,
  });
}
6.5. Platform Entegrasyonları
iOS: intl paketi ile tarih formatlama
Android: Material Design uyumluluğu
Web: Responsive tasarım testleri
6.6. Performans Optimizasyonları
ListView.builder için uzun listeler
Debounce kullanımı anlık güncellemeler için
Stateless Widget kullanımı statik bileşenler için
7. Test Senaryoları
7.1. Temel Testler
Yeni vade kaydı ekleme
Mevcut kaydı düzenleme
Kayıt silme
Başlangıç tarihi değiştirme
Tutar formatı testi
7.2. Hesaplama Testleri
Gün-tarih ilişkisi doğruluğu
Ağırlıklı ortalama hesaplama
Toplam tutar hesaplama
Başlangıç tarihi değişimi etkileri
7.3. Responsive Testler
Mobil görünüm testi
Tablet görünüm testi
Masaüstü görünüm testi
Ekran döndürme testleri
8. Gelecek Geliştirmeler
8.1. Veri Depolama
Local storage entegrasyonu
Cloud senkronizasyonu
Kullanıcı profilleri
8.2. İleri Özellikler
Excel dışa aktarma
PDF rapor oluşturma
Grafiksel gösterimler
Çoklu para birimi desteği
8.3. Entegrasyonlar
Banka API'leri
Muhasebe programları
Takvim uygulamaları
9. Sonuç
Bu proje dokümantasyonu, Vade Hesaplama Uygulaması'nın tüm teknik ve tasarım detaylarını içermektedir. Flutter uygulaması geliştirilirken bu doküman bir kaynak olarak kullanılabilir. Projenin başarısı, kullanıcı dostu arayüzü, doğru hesaplama mantığı ve mobil uyumluluğa dayanmaktadır.


------------------------------------------------------------------------------------------------------------
# Vade Hesaplama Uygulaması

Profesyonel vade takip ve hesaplama sistemi için geliştirilmiş modern bir web uygulaması.

## 📋 Proje Özeti

Vade Hesaplama Uygulaması, finansal işlemlerde vade takibi ve hesaplamaları yapmak için tasarlanmış kullanıcı dostu bir araçtır. Birden fazla vade kaydını yönetmenize, düzenlemenize ve ağırlıklı ortalama vade hesaplamaları yapmanıza olanak tanır.

## ✨ Özellikler

### 🎯 Temel Özellikler
- **Başlangıç Tarihi Yönetimi**: Varsayılan olarak bugünün tarihi ile başlar, istendiğinde değiştirilebilir
- **Vade Kayıtları**: Sınırsız sayıda vade kaydı ekleme, düzenleme ve silme
- **Otomatik Hesaplamalar**: Gün-tarih ilişkisi ve ağırlıklı ortalama vade hesaplamaları
- **Anlık Güncellemeler**: Tüm değişiklikler anında yansır

### 📊 Hesaplama Özellikleri
- **Gün-Tarih İlişkisi**: Gün değiştiğinde tarih, tarih değiştiğinde gün otomatik hesaplanır
- **Ağırlıklı Ortalama Vade**: Her kaydın tutarıyla orantılı olarak hesaplanır
- **Özet Bilgiler**: Toplam kayıt sayısı, ortalama vade, ortalama tarih ve toplam tutar

### 🎨 Tasarım Özellikleri
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Modern Arayüz**: Glass morphism efektleri ve gradient arka planlar
- **Mobil Optimizasyon**: Dokunma dostu arayüz, sayısal klavye desteği
- **Kart Görünümü**: Mobil cihazlarda her kayıt için ayrı kart tasarımı

## 🛠️ Kullanılan Teknolojiler

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: Tailwind CSS
- **İkon Kütüphanesi**: Font Awesome 6.4.0
- **Veri Yapısı**: JavaScript Array (in-memory storage)

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı (CDN kaynakları için)

### Çalıştırma Adımları

1. **Projeyi İndirin**
   ```bash
   git clone https://github.com/kullaniciadi/vade-hesaplama.git
   cd vade-hesaplama

Tools

Dosyaları Açın
index.html dosyasını web tarayıcınızda açın
veya bir lokal sunucu kullanın:
bash

Line Wrapping

Collapse
Copy
1
2
3
4
# Python ile basit sunucu
python -m http.server 8000
# Node.js ile
npx http-server
Uygulamayı Kullanın
Başlangıç tarihini kontrol edin
Vade kayıtlarını ekleyin ve düzenleyin
Otomatik hesaplamaları gözlemleyin
📁 Proje Yapısı

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
vade-hesaplama/
├── index.html              # Ana HTML dosyası
├── assets/                 # Statik dosyalar (opsiyonel)
├── docs/                   # Dokümantasyon
│   ├── README.md          # Bu dosya
│   └── proje-dokumani.md   # Detaylı proje dokümantasyonu
└── LICENSE                # Lisans dosyası
📱 Kullanım Kılavuzu
Yeni Vade Kaydı Ekleme
Sayfanın altındaki "Yeni Kayıt Ekle" butonuna tıklayın
Otomatik olarak oluşturulan yeni kayda tutar girin
Vade gün sayısını veya vade tarihini düzenleyin
Değişiklikler anında yansıyacaktır
Mevcut Kaydı Düzenleme
Tablo veya kart üzerindeki ilgili alana tıklayın
Değeri doğrudan düzenleyin
Değişiklikler otomatik kaydedilir
Başlangıç Tarihini Değiştirme
Sayfanın üstündeki tarih seçiciye tıklayın
Yeni başlangıç tarihini seçin
Tüm vade günleri otomatik güncellenecektir
🔧 Geliştirme İçin Notlar
Hesaplama Mantığı
Takvim Günü Hesaplaması: Hafta sonları dahil tüm günler
Ağırlıklı Ortalama: (tutar × gün toplamı) / toplam tutar
Para Formatı: Türk Lirası formatı (binlik ayraç nokta, ondalık ayraç virgül)
Responsive Tasarım
Mobil (< 768px): Kart görünümü, gün ve tarih aynı satırda
Masaüstü (≥ 769px): Tablo görünümü, hover efektleri
Performans Optimizasyonları
Anlık güncellemeler için event delegation
Mobil cihazlarda imleç pozisyonu koruma
Kısmi güncellemeler için optimize edilmiş fonksiyonlar
🚀 Flutter Uygulaması İçin Hazırlık
Bu web uygulamasının Flutter versiyonunu geliştirmek için:

Önerilen Proje Yapısı

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
lib/
├── models/
│   └── vade_kaydi.dart        # Vade kaydı modeli
├── screens/
│   ├── home_screen.dart      # Ana ekran
│   └── vade_kayit_ekle.dart  # Yeni kayıt ekleme
├── widgets/
│   ├── vade_karti.dart       # Vade kartı widget'ı
│   └── ozet_karti.dart       # Özet kartı widget'ı
├── utils/
│   ├── date_utils.dart       # Tarih hesaplama yardımcıları
│   └── currency_utils.dart   # Para formatı yardımcıları
└── main.dart                 # Uygulama giriş noktası
Önemli Noktalar
State Yönetimi: Provider veya Riverpod kullanımı önerilir
Responsive Tasarım: MediaQuery ve LayoutBuilder kullanımı
Platform Entegrasyonu: iOS ve Material Design uyumluluğu
Performans: ListView.builder ve StatelessWidget optimizasyonu
🤝 Katkıda Bulunma
Katkıda bulunmak isterseniz:

Projeyi fork edin
Yeni bir branch oluşturun (git checkout -b feature/yeni-ozellik)
Değişikliklerinizi commit edin (git commit -am 'Yeni özellik eklendi')
Branch'inizi push edin (git push origin feature/yeni-ozellik)
Bir Pull Request oluşturun
📄 Lisans
Bu proje MIT Lisansı ile lisanslanmıştır. Detaylar için LICENSE dosyasına bakın.

🙏 Teşekkürler
Tailwind CSS için modern CSS framework
Font Awesome için ikon kütüphanesi
Tüm katkıda bulunanlar ve test edenler
📞 İletişim
Sorularınız veya önerileriniz için:

E-posta: ornek@email.com
GitHub Issues: Proje Issues
Not: Bu proje sadece eğitim ve demo amaçlıdır. Gerçek finansal işlemler için kullanılmamalıdır.

# Akdağ Motor (kod adı: 372)

**Motor durumundan + oksijen sensöründen arızanın anlamını çıkaran iOS app.**

## Tek cümle

OBD-II adaptörüyle araçtan canlı veri alıp 7 boyutlu sağlık vektörü üreten,
sistematik tarama akışıyla ECU kayıtları + anlık ölçümü birlikte yorumlayan,
"motor sağlıklı" ya da "şu boyut düşük → şu kontrol et" diye tek cümle karar
yazan iOS uygulaması.

## Mimari

```
iPhone (com.akdag.motor372)
─────────────────────────────────────────
SwiftUI 4-sekme TabView
  · TANI    — sistematik tarama + 7 boyut radar + karar
  · CANLI   — gerçek-zamanlı PID sparkline'ları
  · GEÇMİŞ  — SwiftData zaman çizelgesi + sağlık eğrisi
  · ARAÇ    — VIN + WMI decode + bakım takvimi

CoreBluetooth ⇄ ELM327 BLE adaptör (ya da
WebSerial üzerinden USB ELM327)
  ↓
ELM327 protokol katmanı (transport-agnostic)
  ↓
OBD-II PID polling
  hızlı: 0C (RPM) / 0D (hız) / 14 ya da 24 (O2)
  seyrek: 04 (yük) / 03 (fuel status) /
          05 (coolant) / 06 (STFT) / 07 (LTFT)
DTC modları: 03 (kalıcı) / 07 (bekleyen) / 0A (silinmeyen)
Mode 02: freeze frame (DTC anındaki sensör değerleri)
Mode 09 PID 02: VIN okuma + WMI decode
```

## Substrat akışı

1. Bağlan (BLE veya USB)
2. ELM init (ATZ → ATE0 → ATL0 → ATS0 → ATSP0 → 0100)
3. Sistematik tarama otomatik:
   - DTC kayıtları (3 mode)
   - VIN okuma + WMI → marka, model yılı, ülke
   - O2 sensör türü tespit (PID 24 yanıt → wide-band, yoksa dar-band)
   - Freeze frame okuma (DTC varsa)
   - 15 sn anlık veri penceresi (PID polling)
4. **7 boyut sağlık vektörü** hesaplanır:
   - lambda dengesi
   - salınım frekansı
   - salınım genliği
   - yakıt trim toplamı
   - trim/lambda uyumu
   - motor sıcaklığı
   - lambda kontrol kapısı (open/closed-loop)
5. **Kristalleşme:** en zayıf bileşen kararı belirler
6. **Tek cümle karar** + güven yüzdesi + 1-2 satır açıklama
7. Kayıt SwiftData'ya otomatik düşer (geçmiş zaman çizelgesi)

## 7 boyut formülleri (örnek)

```swift
// lambda dengesi (1.0 stoichiometric)
lamSkor = exp(-pow((lamGer - 1.0) / 0.08, 2))

// yakıt trim toplamı (-15 .. +15 normal)
trimSkor = exp(-pow((ltft + stft) / 12, 2))

// lambda kontrol kapısı (closed-loop = 1.0, open-loop = 0.4)
kontrolSkor = (fuelStatus == 2 || fuelStatus == 16) ? 1.0 : 0.4
```

Aynı girdi → aynı skor. Halüsinasyon yok, AI/ML yok.

## VIN + WMI decode

WMI tablosu Türkiye-yaygın markalar öncelikli:

```
NM0 → Ford (Ford Otosan)
NJ8 → Fiat (Tofaş Bursa)
NMT → Toyota (TMMT)
NLH → Hyundai (Assan)
NLE → Mercedes (Aksaray)
TMP → Renault (Oyak)
WAU/WBA/WDB/WVW → Audi/BMW/Mercedes/VW
ZFA → Fiat (İtalya)
KMH/KNA → Hyundai/Kia
JF1/JTM/JN1 → Subaru/Toyota/Nissan
5YJ/7SA → Tesla
+ 30+ marka, + ülke bölgesi fallback (W=Almanya, Z=İtalya, ...)
```

10. hane → model yılı (A=2010 .. Y=2030, 1=2031 .. 9=2039)

## Tech stack

- **iOS:** Swift 5.9 / SwiftUI / SwiftData (iOS 17+) / CoreBluetooth /
  Combine
- **Web (paralel sürüm):** Vanilla HTML/CSS/JS / WebSerial API / Web
  Bluetooth API (Chrome / Edge desktop)
- **Yapı:** xcodegen + xcodebuild + devicectl
- **İmza:** Apple Developer Team `5JBV65U52K`
- **Hedef:** iOS 17.0+ iPhone, hem BLE hem USB ELM327 destekli

## Adaptör uyumluluğu

- BLE: Vgate iCar Pro BLE, OBDLink CX, Konnwei KW902 BLE, BAFX, Veepeak,
  Ancel — Service UUID `0xFFE0` / `0xFFF0` / `0x18F0` otomatik tarama
- USB: standart ELM327 USB (38400 baud) — WebSerial üstünden Chrome'da

## Durum

- **Canlı:** balophone iPhone 16e'de yüklü, çalışıyor. Web sürüm Chrome'da
  çalışıyor.
- **Saha testi bekleyen:** gerçek araç + ELM327 adaptör ile sürüş kaydı.
- **Bekleyen geliştirmeler (sırası belli):**
  - VIN derin decode (Türk pazarı modelleri — VDS hane decode'u)
  - Bakım takvimi gerçek (manuel tarih + km girişi + push notification)
  - DTC + sağlık + araç model üçlüsünden sıralı tanı checklist
  - 3D kalibrasyon (ARKit motor odası 3D + CoreMotion sürüş — lokal,
    cihazda referans havuz)
  - WiFi ELM327 desteği (eski adapter sınıfı için)

## Pazar konumu

- **Ucuz OBD-II okuyucular** (60–200 ₺): ham kod döker, anlam vermez
- **Profesyonel scanner'lar** (10.000 ₺+): marka-bağımlı, pahalı
- **Akdağ Motor:** ucuz adaptörle (~150 ₺) çalışan akıllı yorum, marka-bağımsız,
  Türkçe, mekanikçi-uyumlu

## Hangi NDA-altı tarafı var

- 7 boyut skorlama formülleri ve eşik kalibrasyonları (NDA + lisans
  sonrası teknik komiteye)
- Sıralı tanı bilgi tabanı (DTC × boyut × araç-modeli matrisi)

## Hangisi açık görülebilir

- iOS uygulama canlı (BLUETOOTH bağlan butonu + sahne akışı görülebilir)
- ELM327 protokol katmanı + PID parse açık (standart OBD-II)
- VIN + WMI decode tablosu açık (kamuya açık standart)
- UI/UX tasarımı açık

# Akdağ Medikal

**Saç ekimi merkezli, çok-branşlı klinik karar destek platformu. Türk yapımı.**

## Tek cümle

iPhone üstünde 26 teknoloji modülünü tek monolit olarak çalıştıran, 6 tıp
branşına izomorfik genişleyen, deterministik klasik matematiğe dayalı klinik
asistan + hasta portali + atölye paneli. Yıldız motoru üstünde.

## Pozisyon (mevcut sektör boşluğu)

```
HIS / EMR var → ama branş-özel klinik karar destek (CDS) yok.
Karar standartsız. Denetim açık. Projeksiyon sözel.

Akdağ Medikal: bu boşluğu denetim izli, ölçülebilir, 5 yıl projeksiyonlu
olarak dolduruyor. KVKK uyumlu, sıfır 3rd-party telemetri.
```

## 12 ay hedefi

| Gösterge | Hedef |
|---|---|
| Ödeyen klinik | 25 |
| Aylık ARR | ₺1.25M (15M/yıl) |
| Büyük lisans imzası | 1 (5–25M tek seferlik) |
| Hibe (KOSGEB / TÜBİTAK / EU) | 1–3M |
| Toplam yıllık portföy | ₺25–40M |

## Mimari

```
iOS App (com.akdag.app)             Mac üstü Sunucular
─────────────────────               ────────────────────
SwiftUI monolit                ←→   FastAPI (Python)
26 teknoloji modülü                 - Akdağ Medikal API (port 1919)
4 katman çıktı:                       launchd KeepAlive
  · Dijital İkiz                      Endpoint'ler:
  · Atlas (referans aralık)             /api/saglik
  · Delta (sapma analizi)               /atlas/{domain}
  · Projeksiyon (5 yıl S-eğrisi)        /dijital_ikiz, /delta,
6 branş paylaşılan omurga             /projeksiyon, /tam,
(saç + dermat + diş + göz +           /ledger, /havuz/ekle
 ortopedi + kornea)
```

## 26 modül (sahne tipine göre)

| Sahne | Modüller |
|---|---|
| `.kamera` | FotoProtokol (4 açı kılavuzu) |
| `.canli_ar` | SacSegment, CanliARMasa, DonorMaske (her biri teknolojiId-aware overlay) |
| `.bezier` | PreopStencil (hairline tasarım) |
| `.form` | KlinikAkis, KlinikValide, CokDil |
| `.liste` | UzmanAgi, KlinisyenEgitim, AmeliyatAsist (7 cerrahi adım), HastaPortal (7 zaman noktası) |
| `.rapor` | MarkaRapor (klinik rapor önizleme) |
| `.grafik` | TedaviEgrisi (Swift Charts S-eğrisi) |
| `.ozet` (default) | KlinikKopru, MarkaRapor, AlopesiAyir, EkimPlan3D, EvSac, NorwoodGoru, PostOpHair, TakipNokta, TrikoMobil, DonorKalkan, DensAI, AkdagHat |

Her modülün ortak yapısı `AkdagCipGenericView` dispatcher; sahne tipi modüle
özgü görünümü seçer.

## Tech stack

- **iOS:** Swift 5.9 / SwiftUI / SwiftData / ARKit / AVFoundation / Charts /
  CoreBluetooth / RealityKit (planlı 3D)
- **Backend:** Python 3 / FastAPI / NumPy / SciPy / Pydantic
- **Veri:** klinik atlas tabloları (JSON), hasta havuzu (KVKK uyumlu, anonim),
  5 dil sözlük tabanı
- **Yapı:** xcodegen ile project.yml monolit hedef; build-et.sh script;
  launchd ile sunucu KeepAlive; Bonjour servis keşfi (yerel ağ)
- **İmza:** Apple Developer Team `5JBV65U52K`, automatic code signing
- **Hedef cihaz:** iPhone 17.0+, iPad, Mac Catalyst, Vision Pro Designed-for

## Çekirdek değer

- **AI/ML değil:** klasik CV + Bayesian + soliton dalga + atlas-delta. Aynı
  girdi → aynı çıktı, halüsinasyon yok, denetlenebilir.
- **6 branş izomorfik:** saç şablonu transfer ile dermat / diş / göz /
  ortopedi / kornea; 144 karar dosyası.
- **PBI 1000×:** post-op iyileşme penceresi modeli (δ/β = 1000 seviyesinde
  hassasiyet).
- **5 dil sözlük:** tr / en / de / ar / fr — klinik+hasta arayüzü.
- **Klinik havuz KVKK:** anonim hasta verileri, denetim izi.

## Durum

- **Canlı:** balophone (iPhone 16e) cihazında com.akdag.app olarak yüklü ve
  çalışıyor. Yıldız 19376 + AkdagMedical 1919 çift backend launchd KeepAlive.
- **Üretim hattı:** xcodegen + xcodebuild + devicectl install + launch
  otomatik (`build-et.sh`).
- **Veri pazarı tarama (5 dev × 79 capability):** Genesys + Veeva + Tempus +
  Philips + Siemens izomorfik eşleşme, kalite kapısı geçti.

## Hangi NDA-altı tarafı var

- **Akdağ Core algoritma çekirdeği** — deterministik matematik motoru, her
  modülün altında ortak. NDA + sözleşme sonrası teknik komiteye açılır.
- **Atlas içerikleri** (klinik referans aralıklar) — telif sahip Akdağ.
- **Klinik havuz şeması** — KVKK uyumlu anonimleştirme protokolü.

## Hangisi açık görülebilir

- iOS uygulaması canlı cihazda — kapasite görünür (her modülün ne yaptığı,
  hangi sahneyle).
- API endpoint imzaları (saglik, atlas, dijital_ikiz vb.) açık.
- Build script + project.yml mimari iskeleti açık.

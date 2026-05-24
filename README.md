# Muhammet Barış Akdağ — Portföy Paketi

Yazılım mühendisi gözüyle bakılması için hazırlanmış tanıtım paketi.

## Nasıl okunur

1. **Önce `index.html`** — tarayıcıda aç, çekirdek motor + üretim ürünleri
   + yapılan web siteleri + gelir kanal matrisi + 12 ay hedefi (5 dakika)
2. **Sonra ilgini çeken parçayı derinleştir:**
   - [Yıldız](proje_yildiz.md) — deterministik matematik motoru, tüm
     ürünlerin altında ortak çekirdek
   - [Akdağ Medikal](proje_akdag_medikal.md) — saç ekimi + 6 branş
     klinik karar destek platformu (iOS Swift monolit)
   - [Akdağ App (RN)](proje_akdag_app_rn.md) — Akdağ Medikal'in React
     Native cross-platform sürümü
   - [Akdağ Motor](proje_akdag_motor.md) — OBD-II motor sağlık iOS app
   - [AuWave](proje_auwave.md) — niyet odaklı sosyal medya (tanıklık /
     bağ / dalga), 6 sekme + EQUALS eşleşme + DM realtime + 13 Aura aleti +
     6 mini oyun, MVP canlı (eski adı AuraSocial)
   - [İstanbul Koşusu](proje_istanbul_kosusu.md) — Three.js + iOS WKWebView
     endless runner, 7 semt deterministik sahne üretimi
   - [Arabalarımız.com](proje_arabalarimiz.md) — sertifikalı araç ilan
     platformu
   - [LinguaNokta](proje_lingua_nokta.md) — İngilizce öğrenme app
   - [Aura Suite](proje_aura_suite.md) — 8 mini iOS uygulamasından oluşan
     kişisel verim paketi (Breath/Calc/Focus/Habits/Mind/Mood/Notes/QR)
   - [AlanEvren · 1000 Fert](proje_alan_evren.md) — çoklu-fert alan
     dinamiği teorisinin App Store inşası
   - [MemPalace](proje_mempalace.md) — AI sistemleri için open-source
     bellek altyapısı (MIT lisanslı)
   - [AKLUS](proje_aklus.md) — Linux taşıyıcılı işleme sistemi
   - [Structuramentis IQ Test](proje_iq_test.md) — zihinsel yapılandırma
     ve bilişsel ölçüm

## Yapılan web siteleri (canlı)

- **akdagmedikal.org** — Akdağ Medikal kurumsal site
- **structuramentis.org** — Bilişsel ölçüm kurumsal site
- **onemessages.org** — Tek mesaj odaklı iletişim aracı

Cloudflare Pages üzerinde, custom domain + SSL aktif.

Deploy bekleyenler: arabalarimiz.com landing, Beril Güzellik (Erciş)
kurumsal site.

## Görseller (`gorseller.js`)

Repo'daki `gorseller.js` dosyası boş URL sözlüğü içerir. WordPress'ten
yükleyeceğin URL'leri buraya yapıştır:

```js
const GORSELLER = {
  yildiz:        "https://wp.akdagsoft.com/wp-content/.../yildiz.png",
  akdag_medikal: "https://wp.akdagsoft.com/wp-content/.../akdag-medikal.png",
  akdag_motor:   "https://wp.akdagsoft.com/wp-content/.../akdag-motor.png",
  arabalarimiz:  "https://wp.akdagsoft.com/wp-content/.../arabalarimiz.png",
  lingua_nokta:  "https://wp.akdagsoft.com/wp-content/.../lingua-nokta.png",
};
```

URL'siz kalan görsel yerleri sade renkli placeholder olarak görünür —
sayfayı bozmaz.

## Repo'ya yükleme

```bash
cd /Users/baris/dev/Portfoy
git init
git add .
git commit -m "Portföy ilk yayın"
git remote add origin git@github.com:barisakdag2611/portfoy.git
git push -u origin main
```

GitHub Pages açıkla repo ayarlarından → `https://barisakdag2611.github.io/portfoy/`
adresinden canlı yayın olur.

## Paket içinde olmayanlar (bilinçli)

- Yıldız çekirdek modül kodu (NDA + ön-görüşme sonrası teknik komiteye)
- Klinik atlas içerikleri (telif sahip Akdağ)
- Sertifika imza protokolünün düşük seviye detayı
- Asa motor + El komuta merkezi gibi sistem altyapısı
- Kişisel notlar / finans / iç-dil dokümanları

## Tech stack özeti

- **iOS:** Swift 5.9 · SwiftUI · SwiftData · ARKit · AVFoundation ·
  CoreBluetooth · Charts · Combine
- **Backend:** Python 3 · FastAPI · NumPy · SciPy · NLTK · Pydantic
- **Web:** HTML5 · CSS3 · Vanilla JS (ES2020+)
- **Yapı:** xcodegen + xcodebuild + devicectl · launchd · git
- **İmza:** Apple Developer Team `5JBV65U52K` · automatic code signing

## Mimari ortak ilkeler

1. **AI/ML değil, deterministik matematik.** Aynı girdi → aynı çıktı.
2. **Marka-bağımsız.** Hiçbir tek-üretici tekeline bağlı değil.
3. **Açıklanabilir.** Her karar adımı izlenebilir.
4. **Kapasite görünür, algoritma kapalı.** NDA altında iç matematik açılır.
5. **Etik çerçeve.** Veri satışı yok, reklam yok, kötüye kullanım kapısı kapalı.

## Görüşme formatı

- Pakete bakış sonrası ilgini çeken yön için kısa bir görüşme
- NDA + ön-görüşme sonrası teknik komiteye iç matematik açılır
- Freelance / ortaklık / lisans çerçevesi sahibin elinde
- Almanya GmbH kurulum yol haritası ve Android aktarım planı hazır

İletişim sahibin koordinatlarından.

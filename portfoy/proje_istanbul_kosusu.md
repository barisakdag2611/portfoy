# İstanbul Koşusu

**5-lane endless runner oyun.** Three.js tabanlı web çekirdek + iOS
WKWebView sarıcı. **İstanbul'un 7 semti** sahne olarak: Galata,
Sultanahmet, Kadıköy, Beyoğlu, Boğaz, Üsküdar, Eminönü. Her sahne JSON
sözleşmesiyle deterministik üretiliyor — aynı (semt, zorluk, ofset)
girdisi her zaman aynı dünyayı veriyor.

- **Web çekirdek:** Three.js ES module (CDN), tek HTML dosyası, sıfır build adımı
- **Mobil sarıcı:** iOS WKWebView (SwiftUI), Resources/ altına gömülü web
- **Bundle:** `com.akdag.istanbulkosusu` · Team `5JBV65U52K`
- **Cihaz:** iPhone 16e (balophone) install OK, TestFlight için archive sırada

## Neden web (neden Unity değil)

Önce Unity 6 LTS denendi (16 May 2026). Editor + iOS modül + batchmode
sahne kurucu çalıştı. Tıkanan: GUI Editor Play mode focus problemi,
MonoBehaviour binding hatası, Play mode'da NewScene exception. AppleScript
ile menü tıklama çalıştı ama klavye kısayolu focus'u kayıyordu.

Three.js dakikalar içinde çalıştı: tek HTML, ES module, klavye + touch
swipe + fare swipe, kamera takibi, çarpışma, skor, game over. **Sahibin
notu:** "html yap ya. unity berbat oldu."

## Çekirdek mekanikler

- 5 lane (5 × 2 m = 10 m geniş yol)
- 3. kişi kamera, arkadan takip
- Klavye (← →) + dokunma swipe + fare swipe + tüm yatay tetik
- Engellerle çarpışma → game over
- Skor mesafeyle birikir

## Sahne üretici

`~/dev/Yildiz/yildiz/istanbul_kosu.py` — bir Cip eklentisi olarak
çalışıyor. Çıktı: 5-lane spawn matrisi + **garantili geçit** (en az bir
lane her zaman açık olacak şekilde matematik garantili). Çağrı:

```python
uret("istanbul_sahnesi", hasta={"semt": "Galata", "zorluk": 0.35, "uzunluk_metre": 800})
```

Deterministik: SHA-256 tohum + LCG akışı. Aynı girdi her koşulda aynı
sahneyi veriyor. Yıldız motoru bağımsız çalışabilir — oyun tarafı
inline JSON ile de açılır.

## iOS sarıcı

- xcodegen → `IstanbulKosu.xcodeproj` üretiyor
- `WebTasiyici` (UIViewRepresentable) → WKWebView local file load
- Resources/web/ bundle'a gömülü (CORS dışı, file:// koşar)
- `xcodebuild -destination "id=<udid>"` → BUILD SUCCEEDED
- `devicectl device install` → balophone'a yüklü

## Bağlam

İki niyet birlikte:
1. **Yeğen için.** Oyun istedi.
2. **Oyun üretme yetkinlik testi.** Akdağ ekosistemi web ve iOS
   uygulamalarında derin; oyun yeni bir dikey. Üretim hattının bunu da
   yapabildiğini göstermek.

## Bekleyen

- Galata dışındaki 6 semt için sahne seçici menü (web UI, native değil)
- GLTF karakter modeli (kapsül yerine)
- Semt anahtarlı müzik (Resources/sesler/)
- App icon + splash + TestFlight archive
- App Store Connect kaydı

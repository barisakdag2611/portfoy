# Akdağ App (React Native)

**Akdağ Medikal'in cross-platform sürümü — iOS + Android + Web tek kod tabanından.**

## Tek cümle

iOS Swift monolitin (Akdağ Medikal) yanında, React Native + Expo ile
geliştirilen cross-platform sürüm — klinisyen ve hastaya tarayıcıdan veya
Android'den erişim için.

## Neden iki sürüm

- **iOS Swift monolit (com.akdag.app):** klinik içi ana kullanım, iPhone +
  iPad + Mac Catalyst hedefli, AR + 26 modül + 4 katman çıktı
- **React Native (Akdağ App):** dış paylaşım, hasta tarafı, web erişim,
  Android telefonlardan görüntüleme

İki sürüm aynı backend'e (port 1919 Akdağ Medikal API) bağlanır.

## Tech stack

- React Native + Expo
- TypeScript
- EAS Build (Expo Application Services)
- iOS + Android + Web hedef

## İçerik

```
App.tsx          — kök bileşen
src/             — uygulama kodu
assets/          — görseller + ikon
app.json         — Expo yapılandırma
eas.json         — EAS Build profilleri
package.json     — npm bağımlılıkları
tsconfig.json    — TypeScript ayarları
```

## Durum

Expo geliştirme aşamasında. EAS Build hattı kurulu, yayın için son
hazırlık.

## NDA-altı tarafı

Akdağ Medikal API ile entegrasyon noktaları + algoritma çekirdeği
(Akdağ Core / Yıldız) — NDA + ön-görüşme sonrası teknik komiteye.

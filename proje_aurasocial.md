# AuraSocial

**Niyet odaklı sosyal medya uygulaması.** Klasik like/follow/post yerine
**tanıklık / bağ / dalga** sözleşmesi. 17 dalga frekansı, Dunbar 7 çember,
EQUALS tarzı eşleşme, real-time özel mesajlaşma. Warm-black tema; ego-free
ton, sayaç-baskısı yok.

- **Stack:** React Native 0.83 + Expo SDK 55 (stable, canary yok) +
  React 19.2 + TypeScript + react-native-skia 2.4 + react-native-reanimated 3
- **Backend:** Supabase (eu-central) — auth, postgres + RLS, realtime kanal
- **Auth:** Apple Sign-In + e-posta + handle (`@kullanıcı`)
- **Bundle:** `org.name.AuraSocial`
- **Cihaz:** iPhone 16e (balophone), MVP canlı (24 May 2026)
- **Reklam başlangıç:** Haziran başı 2026

## Niyet sözleşmesi — kendine özgü

| Klasik | AuraSocial |
|---|---|
| like | **tanıklık** (sessiz onay, sayaç yok) |
| follow | **bağ** (karşılıklı, vektörlü) |
| group | **çember** (Dunbar 7 sınırı) |
| story | **ruh hali halkası** (24 saat) |
| post | **dalga** (17 frekans) |
| DM | **mesaj** (sadece bağ kabulü sonrası) |
| discovery | **Eşleş** + **Keşfet** |

## 6 sekme + 13 Aura aleti

**Alt sekmeler:** Alan · Çember · **Eşleş** (orta) · Arena · Aura · Profil

**Aura aletleri (yerel AsyncStorage):** Habits · Sleep · Mind · Calc · QR ·
Scan · Sac · Dens · Breath · Focus · Mood · Notes · Mind2

## Eşleş ekranı — EQUALS Music Twin pattern

- Dairesel merkez avatar + radial 5 dalga chip (uyum yüksek dalgalar)
- Mega %uyum rozetı + Bağ İste / Geç butonları
- Swipe gesture korunmuş
- Frekans uyumu: son 30 gün `dalga_tipi` cosine similarity

## DM — Supabase realtime

- `mesajlar` tablosu RLS + realtime kanal
- Okundu rozeti (✓/✓✓)
- Handle → id çözücü
- Bağ kabulü zorunlu (RLS politika: `EXISTS baglar`)

## Diğer özellikler

- **Keşfet:** 3 yatay şerit (frekans uyumu / ortak dalga / yeni katılan)
- **Bildirim merkezi:** `BildirimZili` + `BildirimSheet`, okunmamış pulse
- **Yol ekranı:** kullanım şeması + Dunbar alıntı (ilk açılışta otomatik)
- **Dalga imza grafiği:** profil 17-bar son 30 gün
- **DalgaKart:** çift-dokun ❤️ patlama + long-press menü + "neden gördün"
  mikro şeffaflık satırı + "şimdi yayında" yeşil dot
- **Compose taslak otomatik kayıt** (500 ms debounce)
- **Alan akış:** varsayılan tümü (17 dalga karışık), tab strip ile filtre
- **Ruh hali halkası:** Alan üstünde Stories-pattern Aura niyetiyle

## Tasarım dili

- Warm-black palet (`#0C0708`, %3 kırmızı bias — pure black değil)
- Threads + Linear + EQUALS ölçü disiplini
- Gold sadece premium aksent, başka yerde değil
- 4 px grid, minimal radius
- Emoji yerine Skia path ikon

## Veri + KVKK

- 0 üçüncü taraf analitik
- KVKK + GDPR uyumlu mimari
- Veri eu-central'da
- Engelleme / şikayet / kullanıcı silme akışları

## Notlar (mühendise)

- Yıldız motoru **bağlı değil** — backend Supabase. Kavramsal substrat
  olarak referans (UI ölçü vektörü ve niyet sözleşmesi orada şekillenmiş)
  ama cihazda ya da backend'de Yıldız çalıştırılmıyor.
- Tip: Strict TypeScript, expo router file-based, expo-image, expo-haptics
- Build: `npx expo run:ios --device <udid>` veya EAS build

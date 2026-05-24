# AuraSocial

**Niyet odaklı sosyal medya uygulaması.** Klasik like/follow/post yerine
**tanıklık / bağ / dalga** sözleşmesi. 17 dalga frekansı, Dunbar 7 çember,
EQUALS tarzı eşleşme, real-time özel mesajlaşma. Warm-black tema + sıcak
terracotta aksent; ego-free ton, sayaç-baskısı yok.

- **Stack:** React Native 0.83 + Expo SDK 55 (stable, canary yok) +
  React 19.2 + TypeScript + react-native-skia 2.4 + react-native-reanimated 3
- **Backend:** Supabase (eu-central) — auth, postgres + RLS, realtime kanal
- **Auth:** Apple Sign-In + e-posta + handle (`@kullanıcı`)
- **Bundle:** `com.akdag.aurasocial`
- **Cihaz:** iPhone 16e (balophone), MVP canlı
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

**Aura aletleri** — 4 kategori altında chip filtreleme ile sunulur
(LinguaNokta'nın "Bugün için" hero+chip paterni AuraSocial'a port edildi):
- **Sakin** — Nefes, Ruh, Söz, Sleep
- **Tetik** — Odak, Habits, Mind
- **Beden** — Saç, Dens, Scan
- **Çabuk** — Not, Calc, QR

Kullanıcı chip seçer, üstteki büyük HeroKart o kategoride en sıcak aleti
gösterir; tek dokunuş ile aleti açar.

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

## Aletlerin işlevsel durumu (Mayıs 2026 sonu)

| Alet | Durum |
|---|---|
| **Sleep** | 6 ambient ses canlı (yağmur/okyanus/orman/ateş/fan/sessizlik); `expo-audio` loop, sessiz modda da çalar |
| **Scan** | Kamera çekim + galeri seç, foto + metin notu birlikte kayıt, thumbnail görüntü (OCR sonraki sürüm) |
| **Nefes** | 4-7-8 seansı, Skia daire ölçek + haptic |
| **Odak** | Pomodoro 15/25/50, geçmiş |
| **Habits** | 365-gün takımyıldız grid |
| **Ruh** | Günlük 1-5 slider + not + geçmiş |
| **Diğer** | Söz · Not · Calc · QR · Mind · Saç · Dens — sade yerel araçlar |

## Diğer özellikler

- **Keşfet:** 3 yatay şerit (frekans uyumu / ortak dalga / yeni katılan)
- **Bildirim merkezi:** `BildirimZili` + `BildirimSheet`, okunmamış pulse,
  Supabase realtime kanal
- **Yol ekranı:** kullanım şeması + Dunbar alıntı (ilk açılışta otomatik)
- **Dalga imza grafiği:** profil 17-bar son 30 gün
- **DalgaKart:** çift-dokun ❤️ patlama + long-press menü + "neden gördün"
  mikro şeffaflık satırı + "şimdi yayında" yeşil dot
- **Compose taslak otomatik kayıt** (500 ms debounce)
- **Hesap silme:** RPC `hesabi_sil()` — App Store şart, 2 onay sonrası tam
  veri silimi
- **Ruh hali halkası:** Alan üstünde Stories-pattern niyetiyle

## Arena — mini oyun atölyesi

6 hazır oyun + 3 yakında. Hepsi WebView host + inline HTML5 canvas.

- **Hazır:** İstanbul Koşusu (endless 5-lane), Galata Atlama (flappy reflex),
  Boğaz Olta (timing), Simit Yakala (catch), Lokum Eşle (match-3),
  Tarihi Yarımada (4×4 hafıza)
- **Yakında:** Dens Turnuvası, Aforizma Savaşı, Eşzamanlı Nefes — route'lar
  güvenli "yakında" ekranıyla hazır (deep-link/notification crash riski 0)

## Tasarım dili

- **Warm-black palet** (`#0C0708`, %3 kırmızı bias — pure black değil)
- **Tek sıcak aksent: terracotta** (`#D45B3A` koyu / `#C24A2A` açık) —
  LinguaNokta vibe; Tab bar aktif sekme, Hero CTA, başlık vurgusu
- **Tipografi:** iOS'ta SF Pro Rounded (Duolingo yumuşaklığı), Geist
  asset eklenince otomatik üst-üste binecek
- **Threads + Linear + EQUALS ölçü disiplini**
- 4 px grid, minimal radius
- Emoji yerine Skia path ikon
- "Yakında gelenler" disclosure altında (default kapalı, easy algı)

## Veri + KVKK

- 0 üçüncü taraf analitik
- KVKK + GDPR uyumlu mimari
- Veri eu-central'da
- Engelleme / şikayet / kullanıcı silme akışları

## Notlar (mühendise)

- Yıldız motoru **bağlı değil** — backend Supabase. Kavramsal substrat
  olarak referans (UI ölçü vektörü ve niyet sözleşmesi orada şekillenmiş)
  ama cihazda ya da backend'de Yıldız çalıştırılmıyor.
- Tip: Strict TypeScript, expo router file-based, 0 tip hatası
- Build: `npx expo run:ios --device <udid>` veya EAS build

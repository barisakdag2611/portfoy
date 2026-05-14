# Arabalarımız.com

**Akdağ Motor sertifikası tabanlı araç ilan platformu — iki yönlü güven kapısı.**

## Tek cümle

Satıcı motorunu Akdağ Motor uygulamasıyla canlı tarar, raporu ilanına ekler,
"güvenli rozet" alır; alıcı motor sağlığını rakamlarla görerek karar verir;
sertifikası olmayan araç piyasada görünmez.

## Mimari (mevcut + planlı)

```
arabalarimiz.com
─────────────────
[Mevcut: static landing]
- HTML / CSS / JavaScript (Vanilla)
- 8 ana bölüm: hero · rozet · nasıl çalışır
                · ilanlar (mock) · demo rapor · fiyatlandırma · SSS · CTA
- KVKK iç sayfa (kvkk.html)
- Mobil-uyumlu (760px breakpoint)
- Türkçe, sade dil, jargon-az

[Planlı: backend + dinamik]
- Cloudflare Pages / Vercel hosting
- API (FastAPI veya Cloudflare Workers):
    POST /ilan/yeni    — satıcı ilan açar (Akdağ Motor rapor + araç bilgisi)
    GET  /ilan/{id}    — ilan detay
    POST /rapor/dogrula — alıcı rapor sertifika doğrulama
    GET  /ilan?marka=&fiyat=  — arama + filtre
- Veritabanı: PostgreSQL veya SQLite (ölçeğe göre)
- Akdağ Motor API entegrasyonu:
    POST /sertifika/uret — uygulamadan rapor → cihaz-imzalı sertifika
- KVKK uyumlu hesap + onay sistemi
```

## "Güvenli rozet" akışı

```
Satıcı                          Platform               Alıcı
─────                          ─────────              ─────
1. Akdağ Motor uygulaması
   ile aracını tara
2. 7 boyut + DTC raporu
   üretilir
3. Cihaz-imzalı sertifika
   (zaman damgası + hash)
4. Sertifika ile ilan ver  →   İlan "güvenli              5. İlana bak
                                rozetli" yayınlanır       6. Rapor detay aç
                                                          7. Test sürüşünde kendi
                                                             cihazıyla doğrula
```

## Sahte rapor engeli

- Sertifika cihaz-imzalı (ELM327 bağlantı imzası + zaman damgası)
- Alıcı, kendi cihazıyla aynı raporu tarayıp doğrulayabilir
- Platform tarafında sertifika hash'i blockchain-benzeri append-only ledger
  (planlı)

## Etik mühür (kapı kapalı kanallar)

- Sigorta entegrasyonu **kapalı** (araç sahibi aleyhine prim/skor üretme riski)
- Filo sürücü gözetimi **kapalı** (sürücü mahremiyeti)
- Reklam yok
- Üçüncü taraf veri akışı yok
- Veri satışı yok

## Açık kanallar

- Bireysel satıcı / alıcı (App Store ücretsiz uygulama)
- Atölye paketi (çoklu kullanıcı lisansı)
- Oto-tamir eğitim kurumu (öğretim lisansı)
- Yedek parça satıcı ortaklığı (ürün-arıza eşleme, açık kullanım)

## Tech stack

- **Mevcut:** HTML5 / CSS3 / Vanilla JS (ES2020+)
- **Planlı backend:** Python FastAPI ya da TypeScript Cloudflare Workers
- **Veri:** PostgreSQL (öncelikli) veya SQLite (pilot)
- **Hosting:** Cloudflare Pages (static) + Workers (API) ya da Netlify
- **Domain:** `arabalarimiz.com` (sade Türkçe — punycode UX bozulmasın diye)

## Durum

- **Static landing hazır** — tüm bölümler dolu, KVKK iç sayfa taslak halinde
- **Backend bekliyor** — sahip karar verince başlar
- **Domain bekliyor** — sahip alımı yapacak
- **App Store linki bekliyor** — Akdağ Motor uygulaması yayına geçince
- **Gerçek araç fotoğrafları bekliyor** — sahip yükleyecek

## Hangisi açık görülebilir

- Tüm landing sayfası kod açık (HTML/CSS/JS standart)
- Sertifika doğrulama protokolü tasarımı açık
- KVKK + veri ilkeleri açık taslak

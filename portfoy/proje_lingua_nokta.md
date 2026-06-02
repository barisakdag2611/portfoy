# LinguaNokta

**İngilizce öğrenme uygulaması — kural tabanlı gerçek dil motoru, AI değil.**

## Tek cümle

WordNet + cmudict + 6 modlu deterministik dil işleme çekirdeği üstüne kurulu,
sektörün üst-tabanlı LLM tıkanışına alternatif sunan iOS uygulaması.

## 6 mod (substrat çerçevesi)

1. **Idea (fikir)** — kullanıcının niyeti hangi anlam-noktasına doğru
2. **Form (biçim)** — o niyetin İngilizcedeki dilbilgisel biçimi
3. **Gözlemci** — kullanıcının ürettiği cümleyi tarafsız ölçen katman
4. **Doğrulama** — biçim ile niyet uyumlu mu, eksik bileşen var mı
5. **Üretim** — düzeltilmiş cümle veya alternatif öneri
6. **Geri besleme (SEAL)** — öğrenen tarafın kendi hatasını görmesi için
   sade ipucu (cevap yapıştırma değil)

Bu altı mod birbirinin çıktısını yeniden besler. Her adım deterministik —
aynı girdi → aynı çıktı.

## Mimari

```
iOS App (LinguaNokta)               Mac üstü Sunucu
─────────────────────              ──────────────────
SwiftUI + Cip eklenti              cip_dil sunucu (port 19377)
                                   Python FastAPI
72 teknoloji modülü                WordNet (NLTK)
- gramer çözücü                    cmudict (telaffuz fonemleri)
- telaffuz örneği                  Pydantic + JSON şema
- kelime ailesi                    Endpoint'ler:
- biçim dönüşüm                       /idea, /form, /gozlemci,
- doğrulama                           /dogrulama, /uretim, /seal
- ipucu sıralı                        /kelime/{w}, /aile/{w}
                                   launchd KeepAlive
```

## Tech stack

- **iOS:** Swift 5.9 / SwiftUI / xcodegen build
- **Backend:** Python 3 / FastAPI / NLTK (WordNet) / cmudict /
  rule-based grammar engine
- **Veri:** WordNet (Princeton) + cmudict (CMU) — kamuya açık dil veri
  kaynakları + özel kural tabloları
- **Build:** xcodegen + xcodebuild → BUILD SUCCEEDED, iPhone hedefli

## Sektörel pozisyon

- **LLM tabanlı çözümler** (Duolingo'nun AI'lı sürümü, ChatGPT tutor):
  pahalı, halüsinasyon riski, açıklanamaz
- **Klasik kural-tabanlı sözlük uygulamaları**: kuru, etkileşim sınırlı
- **LinguaNokta:** kural tabanlı + 6 mod döngüsü → öğrenenin kendi hatasını
  görmesi (cevap yapıştırma yok), aynı girdi → aynı geri-besleme

## Çekirdek değer

- **Deterministik:** aynı cümle hatası aynı geri-besleme. Öğrenen
  güvenebilir, ölçer.
- **Kapsamlı:** 72 teknoloji (gramer + telaffuz + biçim + sözlük +
  doğrulama + üretim + seal)
- **AI/ML değil:** klasik dilbilim + kural tabanı; halüsinasyon yok
- **Açıklanabilir:** her geri-besleme hangi modlardan geçti izlenebilir

## Durum

- **iOS xcodegen build OK** (memory: BUILD SUCCEEDED)
- **Sunucu ayakta:** cip_dil sunucu port 19377 launchd KeepAlive
- **Pilot kullanıcı bekleniyor** — UI cilalama + içerik genişletme

## Hangi NDA-altı tarafı var

- 6 mod döngüsü iç matematik (idea ↔ form geçişi formülleri, doğrulama
  fonksiyonları)
- Kural tabanı içeriği (kullanıcı hatası → düzeltme eşlemesi)

## Hangisi açık görülebilir

- iOS arayüzü (cihazda gösterilebilir)
- WordNet + cmudict kullanımı (kamuya açık veri)
- 6 mod isimlendirmesi ve genel akış
- API endpoint imzaları

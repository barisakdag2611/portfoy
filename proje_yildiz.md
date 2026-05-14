# Yıldız

**Akdağ ekosistemindeki tüm üretim ürünlerinin altında ortak deterministik
matematik motoru.**

## Tek cümle

Klasik matematik mirasına dayanan, aynı girdiye aynı çıktıyı veren, AI/ML
değil bir işleme çekirdeği — sağlık, otomotiv, dil ve eğitim alanlarına
izomorfik aktarımla yayılan ortak substrat.

## Ne yapar

Yıldız bir uygulama değil, bir **motor**. Doğrudan kullanıcıya görünmez.
Üstüne kurulu üretim ürünleri (Akdağ Medikal, Akdağ Motor, LinguaNokta,
Arabalarımız) onun çıkardığı kararları kendi alanlarının diliyle sunar.

Tek ortak çekirdek olduğu için:
- Bir alanda doğrulanmış matematik mantığı diğer alana **birebir transfer**
  edilir (saç ekimi şablonu → diş hekimliği, motor sağlık vektörü → dil hata
  tespiti aynı çatı).
- Tek bakım, tek geliştirme, tek denetim noktası.
- 6 tıp branşı + 3 sektör (otomotiv / dil / web platform) tek motorla.

## Mimari ilkeler

1. **Deterministik.** Aynı girdi, aynı çıktı. Halüsinasyon yok, kayma yok.
   Sertifikalandırılabilir.
2. **Açıklanabilir.** Her karar adımı izlenebilir, kayıt altına alınır,
   kullanıcıya gösterilebilir.
3. **5 kuvvet bağlanım yapısı.** Klasik fizik analojisinden esinlenerek
   tasarlanan, çoklu-girdi → çoklu-çıktı bağlanım modeli. Her ürün bu beş
   kuvveti kendi bağlamında uyarlar.
4. **İzomorfik aktarım.** Bir alandaki çözüm matematik olarak başka alana
   taşınabiliyorsa, transfer edilir. Saç şablonu 6 tıp branşına bu şekilde
   yayıldı (144 karar dosyası).
5. **AI/ML değil.** Klasik matematik (Hilbert · Gödel · Turing · soliton
   dalga geleneği) + Bayesian + klasik bilgisayar görüşü + atlas-delta
   karşılaştırması. Yapay öğrenme yok.

## Tech stack

- **Çekirdek dil:** Python 3
- **Matematik:** NumPy / SciPy + özel deterministik modüller
- **Servis:** FastAPI (HTTP) + launchd KeepAlive
- **Çıktı:** JSON şeması, Pydantic doğrulamalı
- **Bağlanım:** Yerel ağ (Bonjour); doğrudan kamuya açık değil

## Üretim ürünleriyle ilişkisi

Yıldız bir **motor**, ürünler **arayüz**. İlişki şöyle:

```
Akdağ Medikal       — saç ekimi + 5 branş klinik karar destek
   ↓
Akdağ Motor         — OBD-II motor sağlık vektörü (7 boyut)
   ↓                              [ortak çekirdek matematik]
LinguaNokta         — 6 modlu dil işleme (idea → SEAL döngüsü)
   ↓
Arabalarımız.com    — sertifika doğrulama + ilan platformu
   ↓
─────────────────────────────────────
                YILDIZ
   (deterministik matematik motoru)
```

Üst katman değişir, çekirdek aynı kalır. Bu yüzden bir branşta
doğrulanmış mantık, başka bir branşta sıfırdan yazılmaz.

## Hangi NDA-altı tarafı var

- **Çekirdek modül kodu** — sahibinin elinde, public yok, repo
  paylaşılmıyor.
- **5 kuvvet bağlanım matematik formülleri** — patent + lisans çerçevesi
  içinde sınırlı paylaşım.
- **İzomorfik aktarım protokolü** — bir alandan diğerine transfer
  prosedürü.

## Hangisi açık görülebilir

- Genel mimari ilkeler (bu belge)
- Üretim ürünlerinin Yıldız ile entegrasyon noktaları (üst seviye)
- Endpoint imzaları (kapasite, atlas, dijital_ikiz, delta gibi —
  Akdağ Medikal API üzerinden)
- "Aynı girdi → aynı çıktı" garantisinin sertifika değeri

## Görüşme çerçevesi

NDA + ön-görüşme sonrası teknik komiteye:
- Çekirdek modüllerin yapısal açıklaması
- 5 kuvvet bağlanım matematik temeli
- İzomorfik aktarım örnekleriyle (saç → diş eşlemesi)
- Performans + sertifikasyon yolu

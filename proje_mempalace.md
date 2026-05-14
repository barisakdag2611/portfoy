# MemPalace

**AI sistemleri için bellek altyapısı. Open-source, MIT lisanslı.**

## Tek cümle

Antik hatip "bellek sarayı" tekniğinden esinlenen, AI konuşmalarını kanat-salon-oda
hiyerarşisinde saklayan, AI'ya değil kullanıcıya kontrol veren açık kaynak bellek
çerçevesi.

## Çekirdek fikir

> Diğer bellek sistemleri AI'ya "neyin önemli" karar verme yetkisi veriyor.
> "Kullanıcı PostgreSQL tercih ediyor" diye özet çıkarıp arkasındaki sebebi
> atıyor. **MemPalace farklı yaklaşım: her şeyi sakla, sonra bulunabilir kıl.**

Antik Yunan hatipleri bütün konuşmaları zihinlerinde bir bina kurarak
ezberlerdi — fikirleri odalara koy, bina içinde dolaş, fikri bul.
MemPalace aynı ilkeyi AI belleğine uyguluyor.

## Yapı

```
Saray
├── Kanat (Wing)        — kişi veya proje
│   └── Salon (Hall)    — bellek tipi (karar / hata / mimari / kişi)
│       └── Oda (Room)  — özel fikir / olay
└── Navigasyon          — kullanıcı dolaşır, AI değil
```

Her kelime saklı. Hiçbir AI özetlemiyor. Yapı navigasyona açık bir harita.

## Tech stack

- Python
- JSON şema tabanlı saklama
- Hooks (Claude Code uyumlu)
- Integrations (popüler AI araçları için adaptör)
- Benchmarks (skor karşılaştırma)

## Durum

- Open-source (MIT)
- README'de "en yüksek skorlu AI memory sistemi" konumlandırması
- docs / examples / hooks / integrations dizini hazır

## Nasıl kullanılır

Repo'dan klonlanır, kurulum dökümanı `docs/` altında. AI agent'ler için
hooks formatı: konuşma → otomatik saray güncelleme.

## Açık kaynak gerekçesi

Bellek altyapısı kullanıcıya ait olmalı, AI satıcısına değil. Open-source
kalmasının sebebi bu — MemPalace hiçbir tek sağlayıcıya bağımlı değil,
veriyi kullanıcı tutuyor.

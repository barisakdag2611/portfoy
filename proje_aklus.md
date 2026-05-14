# AKLUS

**Linux taşıyıcı katmanı üstünde yepyeni işleme sistemi.**

## Tek cümle

Yıldız motorunun yan-kardeş işletim katmanı; Linux substrat üstünde sistem
seviyesi işleme operasyonları için kurulan bağımsız işleme sistemi.

## Pozisyon

- **Kopya değil, fork değil:** mevcut Linux dağıtımının üstüne
  kurulmuş kendi işleme katmanı
- **Yıldız'ın yanı-sıra:** ana matematik motoru olan Yıldız ile birlikte,
  ama sistem-seviyesi sorumluluk ayrı

## İçerik

```
aklus/        — çekirdek modüller
docs/         — sistem dokümanları
konfig/       — yapılandırma şablonları
scripts/      — sistem operasyon script'leri
test/         — birim testler
README.md     — sistem girişi
requirements.txt
```

## Tech stack

- Python 3
- Linux sistem çağrıları
- Shell scripts
- Konfigürasyon yönetimi

## Durum

Yapım hattı. Yıldız ile koordinasyon noktaları belirleniyor.

## NDA-altı tarafı

Sistem-seviyesi operasyon protokolleri ve Yıldız ile arayüz çağrıları
NDA + ön-görüşme sonrası teknik komiteye.

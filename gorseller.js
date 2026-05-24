// ─────────────────────────────────────────────────────────────────
//  Görsel URL sözlüğü
//  WordPress'ten aldığın URL'leri buraya yapıştır.
//  HTML'deki <img data-gorsel="..."> elementleri otomatik bağlanır.
//  Boş bırakılan görseller için kart placeholder gösterilir.
// ─────────────────────────────────────────────────────────────────

const GORSELLER = {
  // Yıldız (substrat / motor)
  yildiz:           "",

  // Üretim ürünleri — sağlık/otomotiv/web/dil
  akdag_medikal:    "",
  akdag_app_rn:     "",   // React Native cross-platform sürüm
  akdag_motor:      "",
  arabalarimiz:     "",
  lingua_nokta:     "",

  // Aura Suite — 8 mini app
  aura_suite:       "",

  // AlanEvren — 1000 fert App Store
  alan_evren:       "",

  // MemPalace — AI memory sistemi (open-source)
  mempalace:        "",

  // AKLUS — Linux taşıyıcılı işleme
  aklus:            "",

  // structuramentis IQ Test
  iq_test:          "",

  // AuWave — niyet odaklı sosyal medya (eski adı AuraSocial)
  auwave:           "",

  // İstanbul Koşusu — web + iOS oyun
  istanbul_kosusu:  "",

  // Sahip avatarı / logo
  marka_logo:       "",
  sahip_avatar:     "",
};

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-gorsel]").forEach(el => {
    const anahtar = el.dataset.gorsel;
    const url = GORSELLER[anahtar];
    if (url && url.trim().length > 0) {
      el.src = url;
      el.classList.remove("gorsel-bos");
    } else {
      el.classList.add("gorsel-bos");
      // alt text görünür (placeholder)
      const yer = document.createElement("div");
      yer.className = "gorsel-yer";
      yer.textContent = el.alt || anahtar;
      el.replaceWith(yer);
    }
  });
});

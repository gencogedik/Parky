# cforclaude — Claude Code ile Daha İyi Sonuç Alma Taktikleri

Bu belge, Claude Code kullanırken ve onunla proje geliştirirken daha iyi sonuç almak
için taktikleri toplamak ve planlamak için başlangıç noktası. Madde ekledikçe büyüyecek.

---

## 1. Projeye bağlam vermek

- **CLAUDE.md dosyası**: Proje kökünde olur, her oturumda otomatik okunur. İçine:
  - Projenin ne olduğu (1-2 cümle)
  - Kurulum, çalıştırma, test, lint komutları
  - Kod stili kuralları (isimlendirme, klasör yapısı, kullanılan kütüphaneler)
  - "Şunu asla yapma" listesi
- `/init` komutu mevcut koddan otomatik bir CLAUDE.md taslağı çıkarır.
- CLAUDE.md'yi kısa tut; uzun dosya önemli kuralları gömer.

## 2. İstek yazma (prompt) taktikleri

- Ne istediğini **net ve somut** yaz: hangi dosya, hangi davranış, nasıl test edilecek.
- Büyük işi **küçük adımlara böl**; her adımı ayrı iste ve kontrol et.
- Önce **plan iste**, onaylayınca kodlattır (Plan modu: Shift+Tab).
- Örnek ver: "şu fonksiyon gibi yaz", "şu ekran görüntüsündeki gibi olsun".
- Kabul kriteri ver: "bitince `npm test` geçmeli".

## 3. Doğrulama döngüsü

- Claude'un kendi işini **test ederek doğrulamasını** iste (test, lint, build).
- Arayüz işlerinde ekran görüntüsü aldır / uygulamayı çalıştırt.
- Testleri önce yazdır, sonra kodu (TDD) — hedef net olur.

## 4. Oturum ve bağlam yönetimi

- Konu değişince `/clear` ile temiz başla; eski bağlam yeni işi karıştırır.
- Uzun oturumda `/compact` ile özetlet.
- Önemli kararları CLAUDE.md'ye veya bir notlar dosyasına yazdır ki kaybolmasın.

## 5. Araçlar ve otomasyon

- **Skill'ler**: Tekrarlayan işler için talimat paketleri (ör. "her PR'da şunu kontrol et").
- **Hook'lar**: Her düzenlemeden sonra otomatik format/lint çalıştırmak gibi.
- **İzinler** (`settings.json`): Sık kullanılan güvenli komutlara izin ver, onay sorusu azalsın.
- **MCP / bağlayıcılar**: GitHub, Drive gibi dış servislere erişim.
- **Alt ajanlar**: Büyük aramaları veya paralel işleri böl.

## 6. Git alışkanlıkları

- Her anlamlı adımdan sonra commit; geri dönmek kolaylaşır.
- Riskli işleri ayrı branch'te yaptır.
- `/code-review` ve `/security-review` ile değişiklikleri gözden geçirt.

---

## Yapılacaklar / Planlanacaklar

- [ ] Örnek bir CLAUDE.md şablonu hazırla
- [ ] İyi ve kötü prompt örnekleri listesi
- [ ] Sık kullanılan komutlar için izin listesi
- [ ] Format/lint için hook örneği
- [ ] Proje tipine göre (web, mobil, script) özel taktikler

## Notlar

(Buraya yeni fikirler eklenecek.)

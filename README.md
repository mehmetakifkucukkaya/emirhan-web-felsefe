# Felsefe Test Uygulaması

Bu proje, 11. sınıf düzeyinde Türkiye müfredatına uygun felsefe sorularını içeren eğlenceli ve komik ögelerle zenginleştirilmiş bir test uygulamasıdır. Modern ve profesyonel bir tasarıma sahip olan bu web uygulaması, öğrencilerin felsefe bilgilerini keyifli bir şekilde test etmelerini sağlar.

## Özellikler

- Rastgele sorularla pratik yapma imkanı
- Çoktan seçmeli sorular
- Zamanlayıcı ile süre takibi
- Sonuçların detaylı analizi
- Doğru ve yanlış cevapların açıklamalarıyla incelenmesi
- Mobil uyumlu modern tasarım

### Eğlenceli Özellikler

- **Filozoflarla Savaş**: Test başlamadan önce rehberliğinde ilerlemek istediğiniz filozofu seçebilirsiniz. Her filozof kendine özgü özelliklere ve catchphrase'lere sahiptir.
- **Komik Yanlış Cevap Tepkileri**: Yanlış cevap verdiğinizde meşhur filozoflardan esprili tepkiler görürsünüz.
- **Felsefi Başarı Rozetleri**: Test sonunda performansınıza göre eğlenceli rozetler kazanırsınız ("Sofist Çaylağı", "Platon'un Akademisi Mezunu" gibi).
- **Filozofların Tweetleri**: Her soru için farklı bir filozofun modern çağda atması muhtemel eğlenceli tweetleri görürsünüz.

## Kullanılan Teknolojiler

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts
- Font Awesome

## Nasıl Çalıştırılır

1. Projeyi bilgisayarınıza indirin.
2. İndirdiğiniz klasörü herhangi bir web sunucusunda çalıştırın veya doğrudan tarayıcınızda `index.html` dosyasını açın.

```bash
# Eğer Python yüklüyse, aşağıdaki komutla basit bir web sunucusu başlatabilirsiniz:
python -m http.server 8000
```

3. Tarayıcınızda `http://localhost:8000` adresini açın.

## Proje Yapısı

```
felsefe-website/
├── index.html       # Ana HTML dosyası
├── css/
│   └── style.css    # Stil dosyası
├── js/
│   ├── app.js       # Ana JavaScript kodu
│   ├── questions.js # Soru havuzu
│   └── philosophers.js # Filozof verileri
├── images/          # Filozof ve rozet görselleri
└── README.md        # Bu dosya
```

## Soru Havuzu

Uygulama toplam 100'den fazla felsefe sorusu içermektedir. Her test için bu havuzdan rastgele 10 soru seçilir. Soru havuzuna yeni sorular eklemek için `js/questions.js` dosyasındaki `questionsData` dizisine aşağıdaki formatta yeni sorular ekleyebilirsiniz:

```javascript
{
    id: 101, // Benzersiz bir ID
    question: "Soru metni burada",
    options: [
        { text: "Seçenek A", isCorrect: false },
        { text: "Seçenek B", isCorrect: false },
        { text: "Seçenek C", isCorrect: true }, // Doğru cevap
        { text: "Seçenek D", isCorrect: false }
    ],
    explanation: "Sorunun açıklaması ve doğru cevabın nedeni burada"
}
```

## Filozof Verileri

Yeni filozoflar eklemek veya mevcut filozof bilgilerini düzenlemek için `js/philosophers.js` dosyasındaki `philosopherAvatars` dizisini değiştirebilirsiniz:

```javascript
{
    name: "Yeni Filozof",
    power: "Güç Tanımı",
    image: "filozof_gorsel.png",
    catchphrase: "Meşhur Sözü!",
    description: "Filozof hakkında kısa bilgi."
}
```

## Özelleştirme

Uygulamanın görünümünü değiştirmek için `css/style.css` dosyasını düzenleyebilirsiniz. Ana renkleri değiştirmek için `:root` seçicisindeki CSS değişkenlerini değiştirebilirsiniz:

```css
:root {
  --primary-color: #4a6ed0; /* Ana renk */
  --primary-dark: #3551a3; /* Koyu ana renk */
  --secondary-color: #28a745; /* İkincil renk */
  --accent-color: #ff6b6b; /* Vurgu rengi - yeni tepkiler için */
  /* ... */
}
```

## Lisans

Bu proje açık kaynaklıdır ve eğitim amaçlı kullanılabilir.

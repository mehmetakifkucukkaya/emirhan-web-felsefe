// Filozof avatarları
const philosopherAvatars = [
    {
        name: "Sokrates",
        power: "Sorgulama",
        image: "sokrates.png",
        catchphrase: "Bildiğim tek şey, hiçbir şey bilmediğimdir!",
        description: "Sorgulamayı seven, doğruyu aramaktan vazgeçmeyen bir filozoftur."
    },
    {
        name: "Platon",
        power: "İdealizm",
        image: "platon.png",
        catchphrase: "Gerçeklik görünenin ötesindedir!",
        description: "İdealar dünyasını keşfeden, mağara alegorisinin yaratıcısıdır."
    },
    {
        name: "Aristoteles",
        power: "Mantık",
        image: "aristoteles.png",
        catchphrase: "İnsan doğası gereği bilmek ister!",
        description: "Mantığın babası, bilimsel düşüncenin öncüsüdür."
    },
    {
        name: "Nietzsche",
        power: "Nihilizm",
        image: "nietzsche.png",
        catchphrase: "Uçuruma bakarsan, uçurum da sana bakar!",
        description: "Geleneksel değerleri sorgulayan, üstinsanın habercisidir."
    },
    {
        name: "Descartes",
        power: "Şüphecilik",
        image: "descartes.png",
        catchphrase: "Düşünüyorum, o halde varım... sanırım?",
        description: "Modern felsefenin babası, metodik şüphenin ustasıdır."
    },
    {
        name: "Kant",
        power: "Eleştiri",
        image: "kant.png",
        catchphrase: "Cesaret et, aklını kullanmaya!",
        description: "Eleştirel felsefenin ustası, ahlakın ve bilginin sınırlarını belirleyen filozoftur."
    }
];

// Komik yanlış cevap tepkileri
const wrongAnswerReactions = [
    "Platon şu anda mağarasında başını duvarlara vuruyor!",
    "Kant şu anda kategorik olarak hayal kırıklığına uğradı.",
    "Konfüçyüs diyor ki: 'Bilge kişi bazen soruları yanlış cevaplayabilir, ama sonra internette doğrusunu arar.'",
    "Descartes: 'Yanlış cevap veriyorum, o halde... belki de yokum?'",
    "Aristoteles: 'Hadi ama, bu soru bir ilkokul öğrencisi için bile kolaydı!'",
    "Sokrates: 'Bilmediğini bilmemek, gerçek bilgisizliktir dostum!'",
    "Spinoza: 'Doğa da senin bu cevabına gülüyor!'",
    "Marx: 'Sorular herkese göre, doğru cevaplar sadece gerçek filozoflara...'",
    "Sartre: 'Varoluşun saçmalığı işte bu cevabında gizli!'",
    "Diogenes: 'Bir fıçıda yaşıyorum ama cevapların benim evimden daha karışık.'",
    "Herakleitos: 'Aynı soruya iki kez bakamazsın, çünkü cevabın her seferinde değişir.'",
    "Wittgenstein: 'Üzerine konuşamadığın şeyler hakkında susman gerekirdi!'",
    "Locke: 'Zihnin boş bir levha ama bu kadar da boş olmamalıydı!'",
    "Hegel: 'Diyalektiğimde tez, antitez ve sentez var; senin cevabında hiçbiri yok!'",
    "Epikür: 'Haz en büyük iyiliktir ama senin bu cevabında hiç keyif alamadım.'",
    "Schopenhauer: 'Kötümser olduğum için zaten bunu bekliyordum...'",
    "Hume: 'Bu cevabı nedensellik ilkesiyle açıklayamıyorum, sadece talihsizlikle açıklayabilirim.'",
    "Leibniz: 'Mümkün dünyaların en iyisinde bile bu cevap yanlış.'",
    "Kierkegaard: 'Ya doğru ya da yanlış... Maalesef sen yanlışı seçtin!'",
    "Sun Tzu: 'Savaş sanatında önemli olan düşmanını tanımaktır, sen soruyu bile tanıyamamışsın!'",
    "Rousseau: 'İnsan özgür doğar ama her yerde cevapları yanlış işaretliyor!'",
    "Pascal: 'Bu sonsuz evrenin sessizliği senin yanlış cevabından daha anlamlı.'",
    "Zeno: 'Ok hedefe asla ulaşamaz, senin de doğru cevaba ulaşman imkansız görünüyor.'",
    "Lao Tzu: 'Bilge kişi bilmediğini bilir. Sen ise bilmediğini bilmiyor gibisin.'",
    "Hannah Arendt: 'Düşünme yetisi ile yargılama yetisi arasında bir kopukluk yaşıyorsun.'",
    "Freud: 'Bu cevap bilinçaltında bir bastırılmış bilgi sorunu olabilir.'",
    "Jung: 'Kolektif bilinçdışında doğru cevap var, ama sen kişisel egonla hareket ettin.'",
    "Simone de Beauvoir: 'Cinsiyet bir kader değildir, ama yanlış cevaplar vermek senin kaderinmiş gibi.'",
    "John Stuart Mill: 'Faydacılık açısından, bu cevabın topluma hiçbir faydası yok!'",
    "Adam Smith: 'Görünmez el seni doğru cevaba yönlendirmeye çalıştı, ama sen direndin.'",
    "Popper: 'Teorin yanlışlanabilirdi ve az önce yanlışlandı!'",
    "Kuhn: 'Bu bir paradigma kayması değil, sadece bir yanılgı.'",
    "Foucault: 'Bilgi ve iktidar ilişkisinde sen şu an en alttasın!'",
    "Derrida: 'Senin bu cevabını yapısöküme uğrattım ve altından hiçbir şey çıkmadı!'"
];

// Felsefi başarı rozetleri ve komik skor değerlendirmeleri
const scoreEvaluations = [
    { minScore: 0, maxScore: 3, title: "Sofist Çaylağı", message: "Sokrates bile başını avuçlarına gömüp ağlıyor şu anda!", badge: "sofist_caylagi.png" },
    { minScore: 4, maxScore: 6, title: "Platon'un Mağarasında Kaybolmuş", message: "Diogenes: 'Bir fıçıda yaşıyorum ama cevapların benim evimden daha karışık.'", badge: "magara_yolcusu.png" },
    { minScore: 7, maxScore: 8, title: "Sokrates'in Çırağı", message: "Aristoteles olsaydı seni 'potansiyel filozoftan' 'aktüel filozofa' terfi ettirirdi.", badge: "sokrates_ciragi.png" },
    { minScore: 9, maxScore: 9, title: "Platon'un Akademisi Mezunu", message: "Kant: 'Aklını kullanma cesaretini gösterdin, tebrikler!'", badge: "akademi_mezunu.png" },
    { minScore: 10, maxScore: 10, title: "Aristoteles'in Sağ Kolu", message: "Nietzsche: 'Üstinsan dedikleri bu olsa gerek!'", badge: "aristoteles_sagkolu.png" }
];

// Filozofların tweetleri
const philosopherTweets = [
    { philosopher: "Sokrates", username: "@gerçekSokrates", tweet: "Bugün yine Atina'da dolaşıp insanların bilgisizliğini ortaya çıkardım. Şimdi herkes benden nefret ediyor. #GünlükSorgulama #BilmediğiniBil", likes: 2347, retweets: 1289 },
    { philosopher: "Platon", username: "@realPlaton", tweet: "Bugün yeni bir mağara satın aldım. Gölgeler 4K çözünürlükte! #RealityIsOverrated #IdeasRule", likes: 5129, retweets: 3042 },
    { philosopher: "Aristoteles", username: "@mantıkçıAristotle", tweet: "Her insanın doğası gereği bilme isteği vardır, ama bazıları Netflix izlemeyi tercih ediyor. #BilimFelsefesi", likes: 3820, retweets: 2103 },
    { philosopher: "Descartes", username: "@düşünüyorum", tweet: "Bugün var olduğumdan şüphe etmeye çalıştım, sonra acıktım. Pizza sipariş ettim. O pizza var mı yok mu? #Şüphecilik #AcıktımGaliba", likes: 4512, retweets: 1856 },
    { philosopher: "Kant", username: "@kategorikImperatif", tweet: "Bir kurala göre hareket et: eyleminin ilkesi evrensel bir yasa olabilseydi, bu yasada yaşamak ister miydin? #AhlakFelsefesi #YapMasaydın", likes: 2986, retweets: 1754 },
    { philosopher: "Marx", username: "@sınıfsızToplum", tweet: "Filozoflar dünyayı sadece yorumladılar, oysa mesele onu değiştirmektir... veya bir Netflix dizisi yapmaktır. #DevrimZamanı #KapitalizmeHayır", likes: 8912, retweets: 6541 },
    { philosopher: "Konfüçyüs", username: "@Üstünİnsan", tweet: "Üstün insan kendini suçlar, sıradan insan başkalarını. Kötü Netflix dizilerinin suçlusu ise genelde senaristlerdir. #BilgelikSözleri", likes: 3214, retweets: 1842 },
];

// Her soru için rastgele bir filozof tweeti seç
function getRandomPhilosopherTweet() {
    const randomIndex = Math.floor(Math.random() * philosopherTweets.length);
    return philosopherTweets[randomIndex];
}

// Skora göre değerlendirme ve rozet al
function getScoreEvaluation(score) {
    for (let i = 0; i < scoreEvaluations.length; i++) {
        if (score >= scoreEvaluations[i].minScore && score <= scoreEvaluations[i].maxScore) {
            return scoreEvaluations[i];
        }
    }
    return scoreEvaluations[0]; // Varsayılan olarak en düşük değerlendirme
}

// Rastgele yanlış cevap tepkisi
function getRandomWrongAnswerReaction() {
    const randomIndex = Math.floor(Math.random() * wrongAnswerReactions.length);
    return wrongAnswerReactions[randomIndex];
} 
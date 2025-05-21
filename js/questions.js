// Felsefe soruları veri havuzu
const questionsData = [
    {
        "id": 1,
        "question": "Konfüçyüs'ün 'Konuşmalar' eserine göre 'Üstün İnsan'ın özelliği aşağıdakilerden hangisi değildir?",
        "options": [
            { "text": "Erdemli olmaya çalışması", "isCorrect": false },
            { "text": "Kaygı duymaması ve korkmaması", "isCorrect": false },
            { "text": "Yaptığı iyiliklerden karşılık beklemesi", "isCorrect": true },
            { "text": "Doğru olanı izlemesi", "isCorrect": false }
        ],
        "explanation": "Konfüçyüs'ün 'Konuşmalar' eserinden alınan parçaya göre üstün insan erdemi düşünür, doğru olanı izler, kaygı duymaz ve korkmaz. 'Sadece kendi faydasının peşinden gidenlere karşı duyulan kin hiç tükenmez' ifadesi, üstün insanın fayda peşinde koşmadığını ima eder. Yaptığı iyiliklerden karşılık beklemesi gerektiğine dair bir ifade kaynakta yer almamaktadır."
    },
    {
        "id": 2,
        "question": "Hint medeniyetinin Antik Yunan felsefesi üzerindeki etkisi, kaynakta belirtildiği üzere, hangi alanla ilgilidir?",
        "options": [
            { "text": "Ahlak anlayışı", "isCorrect": false },
            { "text": "Varlık anlayışı", "isCorrect": true },
            { "text": "Siyaset felsefesi", "isCorrect": false },
            { "text": "Mantık kuralları", "isCorrect": false }
        ],
        "explanation": "Kaynakta, Hint medeniyetinin 'boşluğu evrenin varlık nedeni olarak kabul etmesi ve evrenin nasıl meydana geldiğine dair sorularıyla Antik Yunan felsefesinde varlık anlayışını biçimlendirdiği' belirtilmiştir. Ayrıca 'Veda' metinlerindeki evren, varlık, yokluk tartışmaları ve bu sorulara cevap arayışının Antik Yunan felsefesi üzerinde etkili olduğu ifade edilir."
    },
    {
        "id": 3,
        "question": "MÖ 6-MS 2. yüzyıl felsefesinin ilk döneminin 'doğa felsefesi' olarak adlandırılmasının temel nedeni aşağıdakilerden hangisidir?",
        "options": [
            { "text": "İnsan aklının doğaüstü olaylara odaklanması", "isCorrect": false },
            { "text": "Felsefi sorgulamaların din merkezli olması", "isCorrect": false },
            { "text": "Sorgulamaların doğa üzerine yapılması", "isCorrect": true },
            { "text": "Toplumsal düzen problemlerinin ele alınması", "isCorrect": false }
        ],
        "explanation": "Kaynakta, MÖ 6-MS 2. yüzyıl felsefesinin doğa üzerine yapılan sorgulamalarla başladığı ve bu nedenle ilk dönemin 'doğa felsefesi' olarak adlandırıldığı açıkça belirtilmiştir."
    },
    {
        "id": 4,
        "question": "Platon, bilgiyi farklı derecelere göre sınıflandırmıştır. Ona göre akılla ulaşılan ve kesin olan bilginin adı nedir?",
        "options": [
            { "text": "Eikasia (Tahmin)", "isCorrect": false },
            { "text": "Pistis (İnanç)", "isCorrect": false },
            { "text": "Dianoia (Çıkarsama)", "isCorrect": false },
            { "text": "Episteme (İdeaların bilgisi)", "isCorrect": true }
        ],
        "explanation": "Platon'un bilgi sınıflandırmasına göre, kesin ve doğru bilgi sıralamasında en üstte akılla ulaşılan ideaların bilgisi (episteme) bulunur."
    },
    {
        "id": 5,
        "question": "Sokrates'in 'Savunması' metnine göre, kötülük yapan kişi Sokrates'e göre bunu hangi durumda gerçekleştirir?",
        "options": [
            { "text": "Bile isteye, kar elde etmek için", "isCorrect": false },
            { "text": "Başkalarına zarar verme amacıyla", "isCorrect": false },
            { "text": "Bilgisizlik nedeniyle", "isCorrect": true },
            { "text": "Toplumsal baskılar sonucu", "isCorrect": false }
        ],
        "explanation": "Sokrates, kendisini suçlayan Meletos'a hitaben, eğer gençleri doğru yoldan çıkarıyorsa bunu bilmeyerek yaptığını, çünkü kimsenin birlikte yaşamak zorunda olduğu bir kimseden zarar görmek istemeyeceğini belirtir. Bu argüman, kötülüğün bilgisizlikten kaynaklandığı yönündeki ahlak anlayışını yansıtır."
    },
    {
        "id": 6,
        "question": "Aristoteles'e göre karakter erdemi, eylemlerde ve etkilenimlerde neyin ortasıdır?",
        "options": [
            { "text": "Zevk ve acının", "isCorrect": false },
            { "text": "Doğru ve yanlışın", "isCorrect": false },
            { "text": "Aşırılık ve eksikliğin", "isCorrect": true },
            { "text": "Bilgelik ve bilgisizliğin", "isCorrect": false }
        ],
        "explanation": "Aristoteles için karakter erdemi, etkilenimlerle ve eylemlerle ilgili olup, aşırılık, eksiklik ve ortanın bunlarda bulunduğunu ve erdemin ortayı hedef edinmek olduğunu belirtir."
    },
    {
        "id": 7,
        "question": "Hristiyan felsefesinde ele alınan 'kötülük problemi' temel olarak hangi soruyu sorgular?",
        "options": [
            { "text": "Kötülüğün evrendeki rolü nedir?", "isCorrect": false },
            { "text": "İnsan neden günah işlemeye eğilimlidir?", "isCorrect": false },
            { "text": "Mutlak iyi olan Tanrı neden kötülüğe izin verir?", "isCorrect": true },
            { "text": "Kötülük kavramı nasıl tanımlanmalıdır?", "isCorrect": false }
        ],
        "explanation": "Kötülük problemi, özü itibarıyla mutlak iyilik olarak görülen Tanrı'nın kötülüğe neden izin verdiği sorusu etrafında şekillenir."
    },
    {
        "id": 8,
        "question": "Hristiyan felsefesi için 'tümeller tartışması' neden büyük bir sorundur?",
        "options": [
            { "text": "Tümellerin varlığı, dinî dogmaları doğrudan etkilemediği için", "isCorrect": false },
            { "text": "Tümellerin gerçekliğinin reddedilmesinin Tanrı'nın varlığını tehlikeye sokması nedeniyle", "isCorrect": true },
            { "text": "Tümellerin yalnızca dilsel kavramlar olmasının felsefeyi gereksiz kılması nedeniyle", "isCorrect": false },
            { "text": "Tümellerin bu dünyada bulunması gerektiği iddiası nedeniyle", "isCorrect": false }
        ],
        "explanation": "Kaynakta, tümellerin varlığının Hristiyan felsefesi için büyük bir sorun olduğu, çünkü tümellerin gerçekliğinin reddedilmesinin (adcılık) Hristiyanlığın temel dogmalarını sarsarak Tanrı'nın varlığını tehlikeli bir duruma soktuğu ifade edilir."
    },
    {
        "id": 9,
        "question": "İslam felsefesinde evrenin yaratılışı problemiyle ilgili en çok tartışılan konu aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Yaratmanın amacı", "isCorrect": false },
            { "text": "Yaratmanın zamanı (ezelî mi, sonradan mı?)", "isCorrect": true },
            { "text": "Evrenin boyutu", "isCorrect": false },
            { "text": "Yaratmanın niteliği (maddi mi, manevi mi?)", "isCorrect": false }
        ],
        "explanation": "İslam felsefesinde evrenin yaratılışı problemiyle ilgili en çok tartışılan konunun, yaratmanın zamanı ile ilgili olduğu ('Yaratma, ezelî midir yoksa sonradan mı olmuştur?') belirtilmiştir."
    },
    {
        "id": 10,
        "question": "Fârâbî ve İbn Sînâ'nın evrenin Tanrı'dan meydana gelişiyle ilgili savunduğu teori aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Yaratılış teorisi (ex nihilo)", "isCorrect": false },
            { "text": "Sudûr teorisi (taşma)", "isCorrect": true },
            { "text": "Big Bang teorisi", "isCorrect": false },
            { "text": "Diyalektik materyalizm", "isCorrect": false }
        ],
        "explanation": "Kaynakta, Tanrı’nın evreni yaratmasını sudûr teorisiyle açıklayan Fârâbî ve İbn Sînâ’ya göre evrenin zorunluluk gereği Tanrı’dan meydana geldiği belirtilir."
    },
    {
        "id": 11,
        "question": "Antik Yunan felsefesinden yapılan çeviri faaliyetlerinin İslam felsefesi üzerindeki etkilerinden biri aşağıdakilerden hangisidir?",
        "options": [
            { "text": "İslam felsefesinin tamamen Yunan düşüncesine dönüşmesi", "isCorrect": false },
            { "text": "Felsefeye yeni terimler kazandırılarak felsefi terminoloji oluşturulması", "isCorrect": true },
            { "text": "İslam düşüncesinin din merkezli olmaktan çıkması", "isCorrect": false },
            { "text": "Batı felsefesinin İslam felsefesini etkilemesi", "isCorrect": false }
        ],
        "explanation": "Çeviri faaliyetleri sonucunda felsefeye yeni terimler kazandırılarak felsefi terminoloji oluşturulduğu kaynakta açıkça ifade edilmiştir."
    },
    {
        "id": 12,
        "question": "Augustinus'un 'İtiraflar' eserinden alınan parçaya göre kötülük nedir?",
        "options": [
            { "text": "Tanrı'nın yarattığı bir varlık", "isCorrect": false },
            { "text": "İyiliğin noksanlığı ve Tanrı'dan uzaklaşma", "isCorrect": true },
            { "text": "İnsan aklının bir yanılsaması", "isCorrect": false },
            { "text": "Maddi dünyanın kaçınılmaz bir parçası", "isCorrect": false }
        ],
        "explanation": "Augustinus, kötülüğün bir töz olmadığını, aksine Tanrı'dan yüz çeviren ve aşağı seviyedeki şeylere dönen bir iradenin ahlak bozukluğu olduğunu, yani iyiliğin noksanlığı olduğunu ifade eder."
    },
    {
        "id": 13,
        "question": "Gazâlî, 'Kalp Gözü' metninde kesin bilgiye ulaşma konusunda yaşadığı şüphe krizinden nasıl kurtulduğunu belirtmiştir?",
        "options": [
            { "text": "Duyu bilgilerine tamamen güvenerek", "isCorrect": false },
            { "text": "Mantıksal deliller ve akıl yürütme yoluyla", "isCorrect": false },
            { "text": "Yüce Allah’ın kalbe bıraktığı bir nurla", "isCorrect": true },
            { "text": "Geleneksel bilgilere geri dönerek", "isCorrect": false }
        ],
        "explanation": "Gazâlî, duyu ve akıl bilgilerine yönelik şüphesinden, 'yüce Allah beni bu hastalıktan kurtardı ve zihnim tekrar sağlığına ve dengeye kavuştu; bu sayede zorunlu aklî bilgiler tekrar geçerli ve güvenli hale dönerek kesinlik kazandı. Bu durum, mantıki deliller getirmek ve söz düzenlemekle değil, yüce Allah’ın kalbe bıraktığı bir nurla oldu' diyerek kurtulduğunu ifade eder."
    },
    {
        "id": 14,
        "question": "Kaynakta belirtildiği üzere, Antik Yunan felsefesi ile MS 2-15. yüzyıl felsefesi arasındaki temel farklardan biri aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Akıl yürütmenin kullanılması", "isCorrect": false },
            { "text": "Evrenin açıklanmaya çalışılması", "isCorrect": false },
            { "text": "Felsefenin dinin hizmetine koşulması", "isCorrect": true },
            { "text": "Bilgiye önem verilmesi", "isCorrect": false }
        ],
        "explanation": "Antik Yunan’da felsefenin akla dayanarak, bilmek için bilmek amacıyla yapıldığı; MS 2-15. yüzyıllar arasında ise felsefenin dinin hizmetine koşulduğu ve dinî öğretileri temellendirme amacı güttüğü belirtilir."
    },
    {
        "id": 15,
        "question": "Tasavvuf felsefesinde Tanrı bilgisine ulaşmanın yolu aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Duyular", "isCorrect": false },
            { "text": "Akıl", "isCorrect": false },
            { "text": "Sezgi (Kalp gözü)", "isCorrect": true },
            { "text": "Geleneksel metinler", "isCorrect": false }
        ],
        "explanation": "Tasavvufta Tanrı'nın baştaki gözle görülmediği, fakat basiret gözü ile görülebildiği ve mutasavvıfların onu kalp gözü ile gördükleri ifade edilir."
    },
    {
        "id": 16,
        "question": "15.-17. yüzyıl felsefesinde, gerçekte olmayan fakat olması arzulanan ideal devlet tasarımlarına ne ad verilir?",
        "options": [
            { "text": "Distopya", "isCorrect": false },
            { "text": "Ütopya", "isCorrect": true },
            { "text": "Demokrasi", "isCorrect": false },
            { "text": "Anarşi", "isCorrect": false }
        ],
        "explanation": "İdeal devlet tasarımlarına 'ütopya' adı verildiği ve bu tasarımların gerçekte olmayan fakat olması arzulanan bir dünya kurguladığı belirtilmiştir."
    },
    {
        "id": 17,
        "question": "J. Locke'a göre, insan zihni doğuştan boş bir levha (tabula rasa) gibidir. Zihin bilgi edinmeye nereden başlar?",
        "options": [
            { "text": "Doğuştan gelen fikirlerden", "isCorrect": false },
            { "text": "Vahiyden", "isCorrect": false },
            { "text": "Deneyimden (Duyum ve Düşünüm)", "isCorrect": true },
            { "text": "Mantıksal akıl yürütmelerden", "isCorrect": false }
        ],
        "explanation": "J. Locke'a göre zihnin bütün bilgi gereçlerini deneyimden edindiği, deneyimin duyum ve düşünüm olmak üzere iki kaynaktan geldiği ifade edilmiştir."
    },
    {
        "id": 18,
        "question": "A. Comte'un 'üç hâl yasası'na göre, insan düşüncesinin ulaştığı en yüksek aşama ve bu aşamada olayları açıklama biçimi aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Teolojik aşama - Doğaüstü güçler", "isCorrect": false },
            { "text": "Metafizik aşama - Soyut kavramlar", "isCorrect": false },
            { "text": "Pozitif aşama - Bilimsel yasalar", "isCorrect": true },
            { "text": "Felsefi aşama - Rasyonel açıklamalar", "isCorrect": false }
        ],
        "explanation": "A. Comte'un 'üç hâl yasası'na göre insan düşüncesi teolojik ve metafizik aşamalardan geçerek pozitif aşamaya ulaşır. Pozitif aşama, bilimsel bilginin tek güvenilir kaynak olduğu ve olayların bilimsel yasalarla açıklandığı en yüksek düzeydir."
    },
    {
        "id": 19,
        "question": "Kaynakta belirtildiği üzere, 20. yüzyıl başlarında aklın, bilimin ve teknolojinin gücüne duyulan güvene ilk darbeyi vuran olay aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Sanayi Devrimi", "isCorrect": false },
            { "text": "Fransız İhtilali", "isCorrect": false },
            { "text": "Titanik'in batışı", "isCorrect": true },
            { "text": "Birinci Dünya Savaşı", "isCorrect": false }
        ],
        "explanation": "Kaynakta, 19. yüzyıl sonu ve 20. yüzyıl başlarındaki teknolojiye duyulan umut ve iyimserliğe ilk darbeyi 1912’de Titanik’in batışının vurduğu, bunun aklın, bilimin ve teknolojinin sulara gömülmesi olarak görüldüğü ifade edilir."
    },
    {
        "id": 20,
        "question": "Varoluşçuluk felsefesinin temel ilkelerinden biri kaynakta nasıl açıklanmıştır?",
        "options": [
            { "text": "İnsanın önceden belirlenmiş bir doğası vardır.", "isCorrect": false },
            { "text": "İnsan önce dünyaya gelir, sonra deneyimleri ve seçimleriyle varoluşunu gerçekleştirir.", "isCorrect": true },
            { "text": "İnsan, akıl yürütme yeteneği sayesinde var olur.", "isCorrect": false },
            { "text": "İnsan varoluşu, Tanrısal bir planın parçasıdır.", "isCorrect": false }
        ],
        "explanation": "Varoluşçuluğa göre insanın önceden belirlenmiş bir doğası yoktur. İnsan, önce dünyaya gelir yani var olur. Daha sonra deneyimleri ve seçimleri ile kendi varoluşunu gerçekleştirir. 'İnsan var olur önce. Bir geleceğe doğru atılan ve bu atılışın bilincine varan bir varlık olarak ortaya çıkar.' ifadesi varoluşçuluğun baş ilkesi olarak sunulur."
    },
    {
        "id": 21,
        "question": "Felsefe Ortaöğretim 11. Sınıf Ders Kitabı'nın yazarları arasında aşağıdakilerden hangisi yer almaz?",
        "options": [
            { "text": "Esin KÖKMEN GÖZÜKÜÇÜK", "isCorrect": false },
            { "text": "Güler ÖZKALKAN", "isCorrect": false },
            { "text": "Ramazan SARIKAYA", "isCorrect": false },
            { "text": "Mehmet YILMAZ", "isCorrect": true },
        ],
        "explanation": "Kaynak Felsefe Ortaöğretim 11. Sınıf Ders Kitabı'nın yazarları olarak Esin KÖKMEN GÖZÜKÜÇÜK, Güler ÖZKALKAN, Ramazan SARIKAYA ve Sibel KAYALI'yı listelemektedir. Mehmet Yılmaz listede yer almaz."
    },
    {
        "id": 22,
        "question": "İstiklal Marşı'nın ilk iki kıtasına göre, aşağıdakilerden hangisi milletin bağımsızlığı (istiklal) için ifade edilen şartlardan biridir?",
        "options": [
            { "text": "Sadece kahraman olmak", "isCorrect": false },
            { "text": "Yurt üstünde ocak tütememesi", "isCorrect": false },
            { "text": "Hakk'a tapan bir millet olmak", "isCorrect": true },
            { "text": "Bayrağa kurban olmak", "isCorrect": false },
        ],
        "explanation": "İstiklal Marşı'nın ikinci kıtasında 'Hakkıdır Hakk’a tapan milletimin istiklâl.' ifadesi geçmektedir. Bu, bağımsızlığın temel şartlarından biridir."
    },
    {
        "id": 23,
        "question": "MÖ 6. Yüzyıl-MS 2. Yüzyıl Felsefesi'nin ilk döneminin 'doğa felsefesi' olarak adlandırılmasının temel sebebi nedir?",
        "options": [
            { "text": "İnsan ahlakını incelemesi", "isCorrect": false },
            { "text": "Siyaset felsefesine odaklanması", "isCorrect": false },
            { "text": "Doğa olaylarını sistematik olarak gözlemlemesi", "isCorrect": false },
            { "text": "Evrenin yapısı ve işleyişi üzerine sorgulamalarla başlaması", "isCorrect": true },
        ],
        "explanation": "Kaynak, MÖ 6-MS 2. yüzyıl felsefesinin doğa üzerine yapılan sorgulamalarla başladığını ve bu nedenle 'doğa felsefesi' olarak adlandırıldığını belirtir."
    },
    {
        "id": 24,
        "question": "Antik Yunan felsefesinde 'arkhe' arayışı, hangi temel problemi çözme çabasıyla ortaya çıkmıştır?",
        "options": [
            { "text": "Bilginin sınırlarını belirleme", "isCorrect": false },
            { "text": "Devletin en iyi yönetim biçimini bulma", "isCorrect": false },
            { "text": "Görünüşteki çokluğun arkasındaki değişmeden kalan ilk nedeni belirleme", "isCorrect": true },
            { "text": "İnsan mutluluğunun sırrını anlama", "isCorrect": false },
        ],
        "explanation": "Kaynak, bu dönem filozoflarının 'doğada görünüşteki çokluğun arkasında... değişmeden kalan bir varlık' arayışında olduklarını ve buna 'arkhe' dediklerini açıklar."
    },
    {
        "id": 25,
        "question": "Afşar Timuçin'in 'Düşünce Tarihi' adlı eserinden yapılan alıntıya göre felsefeyi mitolojiden ayıran temel özellik nedir?",
        "options": [
            { "text": "Tanrıların rolünü vurgulaması", "isCorrect": false },
            { "text": "Evrenin kökenini açıklaması", "isCorrect": false },
            { "text": "İmgesel ögeler kullanması", "isCorrect": false },
            { "text": "Soruları akla dayanarak yanıtlama eğilimi", "isCorrect": true },
        ],
        "explanation": "Kaynak'deki alıntıya göre, felsefenin mitolojiden başlıca farkı 'felsefenin imgesel ögelerden uzaklaşıp her soruyu akla dayanarak yanıtlama eğilimidir'."
    },
    {
        "id": 26,
        "question": "Thales'in 'her şeyin temel maddesi sudur' görüşünün düşünce tarihinde dönüm noktası olarak görülmesinin nedeni aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Bu fikrin daha önce hiç düşünülmemiş olması", "isCorrect": false },
            { "text": "Mitolojik açıklamalara tamamen karşı çıkması", "isCorrect": false },
            { "text": "Doğanın ve evrenin yapısına dair dikkatli gözlemlere dayanması", "isCorrect": true },
            { "text": "Suyu kutsal bir element ilan etmesi", "isCorrect": false },
        ],
        "explanation": "Kaynak, Thales'in düşüncesinin 'doğanın ve evrenin yapısına ve işleyişine dair dikkatli gözlemlere dayanıyor olması' özelliğiyle bir dönüm noktası oluşturduğunu belirtir."
    },
    {
        "id": 27,
        "question": "Montaigne'in 'Denemeler' adlı eserinden yapılan alıntıda görecelilik (relativizm) fikrini desteklemek için kullanılan örnekteki temel argüman nedir?",
        "options": [
            { "text": "Hayvanların insanlardan daha keskin duyulara sahip olması", "isCorrect": false },
            { "text": "Aynı şeyin farklı canlılar için farklı etkilerde bulunması (örn. tükürük, zehir)", "isCorrect": true },
            { "text": "Gerçeğin tamamen bilinemez olduğu", "isCorrect": false },
            { "text": "Herkesin kendi duyusuna göre yargıda bulunması gerektiği", "isCorrect": false }
        ],
        "explanation": "Kaynak, Montaigne'in tükürüğün insan ve yılan için farklı etkisini ve zehirli balık örneğini kullanarak 'duyuların bizimkilerle hayvanlarınkiler arasındaki ayrım'ı ve dolayısıyla göreceliliği gösterdiğini anlatır."
    },
    {
        "id": 28,
        "question": "Konfüçyüs'ün 'Konuşmalar' adlı eserinden yapılan alıntılara göre 'Üst İnsan'ın ahlak anlayışı aşağıdakilerden hangisiyle çelişir?",
        "options": [
            { "text": "Erdemi hayata geçirmek için kendine dayanmak", "isCorrect": false },
            { "text": "Kaygı duymamak ve korkmamak", "isCorrect": false },
            { "text": "Yasalar konusunda kafa çalıştırmak", "isCorrect": false },
            { "text": "Kendi faydasını aramaya bakmak", "isCorrect": true }
        ],
        "explanation": "Kaynak ve, 'Üstün insan, yasalar konusunda kafasını çalıştırır; küçük insansa kendi çıkarını aramaya bakar.' ifadesiyle Üst İnsanın kendi çıkarını düşünmediğini, ise 'Sadece kendi faydasının peşinden gidenlere karşı duyulan kin hiç tükenmez.' diyerek fayda arayışının Üst İnsanla bağdaşmadığını gösterir."
    },
    {
        "id": 29,
        "question": "Sokrates'in mahkeme karşısındaki savunmasında, kendisini bilerek gençleri doğru yoldan çıkarmakla suçlayan Meletos'a karşı temel argümanı nedir?",
        "options": [
            { "text": "Gençleri doğru yoldan çıkardığını kabul etmesi", "isCorrect": false },
            { "text": "Eğer bilerek yapıyorsa, birlikte yaşadığı kişilerden zarar görmek isteyeceğini ki bunun mümkün olmadığını iddia etmesi", "isCorrect": true },
            { "text": "Mahkemenin yetkisiz olduğunu savunması", "isCorrect": false },
            { "text": "Gençlerin zaten doğru yolda olmadığını belirtmesi", "isCorrect": false },
        ],
        "explanation": "Kaynak'da Sokrates, 'birlikte yaşamak zorunda olduğum bir kimseyi doğru yoldan ayırırsam, ondan bana zarar geleceğini bilmeyecek kadar karanlık ve bilgisizlik içindeyim; hem de bunu, savına göre, bile bile yapıyorum. Meletos, buna ne beni inandırabilirsin, ne de başkalarını.' diyerek bilerek kötülük yapmasının kendi zararına olacağını ve bu yüzden inanılmaz olduğunu savunur."
    },
    {
        "id": 30,
        "question": "Platon'un bilgi sınıflamasına göre duyulara dayanarak maddi varlıklarla ilgili elde edilen bilgi türü nedir?",
        "options": [
            { "text": "Tahmin (eikasia)", "isCorrect": false },
            { "text": "İnanç (pistis)", "isCorrect": true },
            { "text": "Matematiksel bilgi (dianoia)", "isCorrect": false },
            { "text": "Akıl bilgisi", "isCorrect": false }
        ],
        "explanation": "Kaynak, Platon'un bilgi ayrımlarını listeler ve ikinci sırada duyulara dayanarak maddi varlıklarla ilgili elde edilen bilginin 'inanç (pistis)' olduğunu belirtir."
    },
    {
        "id": 31,
        "question": "MS 2. Yüzyıl-MS 15. Yüzyıl felsefesinin genel karakteristiği aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Bilimsel yöntemin ön planda olması", "isCorrect": false },
            { "text": "Akıl ve inanç arasındaki ilişkinin din merkezli ele alınması", "isCorrect": true },
            { "text": "Doğa ve insan merkezli düşünme", "isCorrect": false },
            { "text": "Sorgulamaya ve eleştiriye tamamen açık olma", "isCorrect": false },
        ],
        "explanation": "Kaynak ve, bu dönemin din merkezli olduğunu, inancın akılla temellendirilmeye çalışıldığını ve felsefenin dinî dogmalara bağlı olduğunu belirtir. Bu durum, akıl ve inanç ilişkisinin din merkezli ele alınması karakteristiğini gösterir."
    },
    {
        "id": 32,
        "question": "Augustinus'un 'İtiraflar' adlı eserinde kötülüğün kaynağını araştırırken vardığı sonuçlardan biri nedir?",
        "options": [
            { "text": "Kötülüğün Tanrı tarafından yaratılmış bir varlık olduğu", "isCorrect": false },
            { "text": "Kötülüğün maddeye içkin olduğu", "isCorrect": false },
            { "text": "Kötülüğün bir töz (cevher) olmadığını, Tanrı'dan yüz çeviren iradenin ahlak bozukluğu olduğunu", "isCorrect": true },
            { "text": "Kötülüğün iyiliğin tamamen zıttı ve eşit güce sahip olduğu", "isCorrect": false },
        ],
        "explanation": "Kaynak, Augustinus'un 'Kötünün ne olduğunu aradım ve onun bir töz olmadığını keşfettim. Kötülük; yüce tözden yani Tanrı’m senden yüz çeviren... bir iradenin ahlak bozukluğudur.' ifadelerini içerir."
    },
    {
        "id": 33,
        "question": "Aquinalı Thomas'ın Tanrı'nın varlığına yönelik kozmolojik kanıtının temel dayanağı nedir?",
        "options": [
            { "text": "Evrendeki kusursuz düzen ve amaçlılık", "isCorrect": false },
            { "text": "Her olayın bir nedeni olduğu ve bu nedenler zincirinin geriye doğru sonsuza gidemeyeceği fikri", "isCorrect": true },
            { "text": "İnsan ahlakının evrenselliği", "isCorrect": false },
            { "text": "Peygamberlik ve mucizeler", "isCorrect": false }
        ],
        "explanation": "Kaynak'deki kozmolojik kanıtın argümanları, 'Var olan her şeyin bir nedeni vardır.' ve 'Neden ve eser zinciri... sonsuza kadar geriye gidemez.' diyerek bir 'ilk neden'in zorunluluğuna işaret eder."
    },
    {
        "id": 34,
        "question": "İslam felsefesinde gerçekleştirilen çeviri faaliyetlerinin sonuçlarından biri aşağıdakilerden hangisi değildir?",
        "options": [
            { "text": "Felsefeye yeni terimlerin kazandırılması", "isCorrect": false },
            { "text": "Antik Yunan metinlerinin orijinal hallerinin korunması", "isCorrect": false },
            { "text": "Batı felsezesinin Antik Yunan düşüncesiyle yeniden tanışması", "isCorrect": false },
            { "text": "İslam felsefesinin Antik Yunan etkisinden tamamen bağımsızlaşması", "isCorrect": true }
        ],
        "explanation": "Kaynak, çeviri faaliyetlerinin katkıları arasında 'Antik Yunan düşünce dünyasına ait metinlerin orijinallerinin kaybolmadan günümüze kadar gelmesi', 'İslam felsefesi, yeni konu ve problemlerle karşılaşmıştır' ve 'Batı felsefesi, Yunan felsefi düşüncesinin ele aldığı problemlerle yeniden tanışmıştır.' gibi maddeler listeler. Tamamen bağımsızlaşma gibi bir durum söz konusu değildir, aksine etkileşimden bahsedilir."
    },
    {
        "id": 35,
        "question": "Fârâbî ve İbn Sînâ'nın sudûr teorisine göre evren, Tanrı'dan nasıl meydana gelir?",
        "options": [
            { "text": "Tanrı'nın iradesiyle hiçlikten yaratma yoluyla", "isCorrect": false },
            { "text": "Tanrı'nın kendiliğinden taşması (sudûr etmesi) yoluyla", "isCorrect": true },
            { "text": "Madde ve formun birleşmesiyle", "isCorrect": false },
            { "text": "Nedensellik zinciri yoluyla", "isCorrect": false }
        ],
        "explanation": "Kaynak, Fârâbî ve İbn Sînâ'nın evreni 'sudûr teorisiyle' açıkladığını ve evrenin 'zorunluluk gereği Tanrı’dan meydana gelir... Tanrı, kendi kendisini düşünür ve sudûr eder yani taşar.' ifadeleriyle bu durumu anlattığını belirtir."
    },
    {
        "id": 36,
        "question": "Gazâlî'nin 'Kalb Gözü' adlı metninde, duyu ve akıl bilgilerinden şüphe ettikten sonra kesin bilgiye ulaşmasını sağlayan kaynağı ne olarak nitelendirmiştir?",
        "options": [
            { "text": "Dış dünyayı gözlemlemek", "isCorrect": false },
            { "text": "Mantık kurallarını kullanmak", "isCorrect": false },
            { "text": "Yüce Allah'ın kalbe bıraktığı bir nur", "isCorrect": true },
            { "text": "Kendi zihinsel süreçlerini analiz etmek", "isCorrect": false }
        ],
        "explanation": "Kaynak'daki metinde Gazâlî, şüphecilikten kurtuluşunu 'mantıki deliller getirmek ve söz düzenlemekle değil, yüce Allah’ın kalbe bıraktığı bir nurla oldu.' diyerek açıklar."
    },
    {
        "id": 37,
        "question": "Hristiyan felsefesinde 'Tümeller tartışması'nın önemi, kilisenin resmi görüşü olan 'kavram realizmi' açısından nasıl açıklanmıştır?",
        "options": [
            { "text": "Tümellerin varlığının bilimsel ilerlemeyi engellemesi", "isCorrect": false },
            { "text": "Tümellerin yok sayılmasının Tanrı'nın varlığını tehlikeye atması", "isCorrect": true },
            { "text": "Tümellerin sadece dilsel adlandırmalar olmasının Tanrı'yı güçlendirmesi", "isCorrect": false },
            { "text": "Tümeller tartışmasının din ve akıl ayrımını netleştirmesi", "isCorrect": false }
        ],
        "explanation": "Kaynak, kiliseye göre 'Tümel varlığın yok olması Tanrı’yı da yok etmektedir.' ifadesiyle tümellerin varlığının Tanrı'nın varlığı için kritik olduğunu belirtir."
    },
    {
        "id": 38,
        "question": "Babillerin astronomik gözlemlerini Antik Yunanlarınkinden ayıran temel amaç farkı kaynakta nasıl belirtilmiştir?",
        "options": [
            { "text": "Babillerin daha gelişmiş gözlem araçlarına sahip olması", "isCorrect": false },
            { "text": "Babillerin göksel olayları bilimsel merakla değil, astrolojik sonuçlar çıkarmak amacıyla incelemesi", "isCorrect": true },
            { "text": "Babillerin matematiksel hesaplamaları kullanmaması", "isCorrect": false },
            { "text": "Antik Yunanların öndeyiler yapmaması", "isCorrect": false }
        ],
        "explanation": "Kaynak, 'Babiller, göksel olayları bilimsel bir merakla değil onlardan astrolojik sonuçlar çıkarmak amacıyla incelemişlerdir. Yunanlar ise... “bilmek için bilmek” arzusunu ve merakını tatmin etmek... amacıyla bilim yapmışlardır.' ifadeleriyle bu farkı vurgular."
    },
    {
        "id": 39,
        "question": "Milet felsefesini daha önceki evren açıklamalarından temel olarak ayıran özellik nedir?",
        "options": [
            { "text": "Birden fazla temel madde kabul etmeleri", "isCorrect": false },
            { "text": "Mitolojileri rasyonelleştirmesi ve doğaüstünü doğallaştırması", "isCorrect": true },
            { "text": "Duyusal deneyimi bilgi kaynağı kabul etmeleri", "isCorrect": false },
            { "text": "Ahlaki değerleri merkeze almaları", "isCorrect": false }
        ],
        "explanation": "Kaynak, Milet felsefesinin 'mitolojileri rasyonelleştirmesi ve doğaüstünü doğallaştırması' olduğunu belirtir."
    },
    {
        "id": 40,
        "question": "Skolastik düşünce ile 15-17. yüzyıl felsefesi arasındaki temel farklardan biri (kaynakta belirtilen eğilimler doğrultusunda) nedir?",
        "options": [
            { "text": "Skolastik düşünce Tanrı merkezliyken, 15-17. yüzyıl felsefesi insan ve doğa merkezlidir.", "isCorrect": true },
            { "text": "Skolastik düşünce akla önem verirken, 15-17. yüzyıl felsefesi aklı dışlamıştır.", "isCorrect": false },
            { "text": "Skolastik düşünce sorgulamaya açıktır, 15-17. yüzyıl felsefesi kapalıdır.", "isCorrect": false },
            { "text": "Her iki dönem de aynı problemleri aynı yöntemle ele almıştır.", "isCorrect": false },
        ],
        "explanation": "Kaynak, MS 2-15. yüzyıl (Skolastik) felsefesinin din ve Tanrı merkezli olduğunu belirtirken; Kaynak, 15-17. yüzyıl felsefesi (Rönesans) ile ilgili olarak doğa ve insanı konu edinen problemlerle ilgilenildiğini (soru 29 ile birlikte) ve hümanizmin insanı merkeze aldığını ima eder. Bu, bir merkez kaymasını gösterir."
    },
    {
        "id": 41,
        "question": "Hümanizm akımının temel özelliklerinden biri aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Doğaüstü olaylara odaklanma", "isCorrect": false },
            { "text": "Dinin toplumsal hayattaki rolünü artırma", "isCorrect": false },
            { "text": "İnsan aklına ve potansiyeline güvenme, insanı merkeze alma", "isCorrect": true },
            { "text": "Maddi dünyayı tamamen reddetme", "isCorrect": false }
        ],
        "explanation": "Kaynak, Hümanizm'in 'İnsan, belirlenmiş değil özgür bir varlıktır.' ve 'İnsan için bu dünyada mutlu olmak amaçtır.' gibi anlayışları savunduğunu belirtir (soru 29). Ayrıca doğa ve insanı konu edindiğini ima eder (soru 29 ile birlikte). Bu, insanı merkeze alan ve onun potansiyeline güvenen bir yaklaşımdır."
    },
    {
        "id": 42,
        "question": "18. Yüzyıl-19. Yüzyıl Felsefesi (Aydınlanma Çağı), aklın rolü ve otoritelere karşı duruşu açısından nasıl tanımlanmaktadır?",
        "options": [
            { "text": "Aklın dinî otoriteye tam bağlı olduğu bir dönem", "isCorrect": false },
            { "text": "Aklın dinin baskısından kurtularak kendi başına hareket ettiği bir dönem", "isCorrect": true },
            { "text": "Dogmatik düşüncenin her alanda güçlendiği bir dönem", "isCorrect": false },
            { "text": "Geleneksel toplumsal yapının sorgulanmadığı bir dönem", "isCorrect": false }
        ],
        "explanation": "Kaynak, Aydınlanma kavramını 'aklın, dinin baskısından kurtularak her alandaki sorunları kendi gücüyle çözmeye çalışması' olarak tanımlar. Bu, aklın bağımsızlaştığı bir dönemi ifade eder."
    },
    {
        "id": 43,
        "question": "J. Locke'a göre zihnin ideleri (fikirleri) edinmesindeki iki temel kaynak nedir?",
        "options": [
            { "text": "Akıl ve Sezgi", "isCorrect": false },
            { "text": "Vahiy ve Gelenek", "isCorrect": false },
            { "text": "Duyum (Sensation) ve Düşünüm (Reflection)", "isCorrect": true },
            { "text": "Mantık ve Matematik", "isCorrect": false }
        ],
        "explanation": "Kaynak ve (soru 26), J. Locke'un 'bütün idelerimizin kendilerinden başladığı biricik kaynaklardır' diyerek Duyum ve Düşünüm'ü işaret ettiğini belirtir."
    },
    {
        "id": 44,
        "question": "A. Comte'un 'üç hâl yasası'na göre, olay ve olguların bilimsel yasalarla açıklandığı aşama aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Teolojik aşama", "isCorrect": false },
            { "text": "Metafizik aşama", "isCorrect": false },
            { "text": "Pozitif aşama", "isCorrect": true },
            { "text": "Soyut aşama", "isCorrect": false },
        ],
        "explanation": "Kaynak, A. Comte'un pozitif aşamayı 'olay ve olgular, bilimsel yasalarla açıklanmaktadır.' şeklinde tanımladığını belirtir."
    },
    {
        "id": 45,
        "question": "İ. Kant'ın ödev ahlakına göre, bir eylemin ahlaki olarak doğru olmasının ölçütü aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Eylemin sonuçlarının en fazla sayıda insana fayda sağlaması", "isCorrect": false },
            { "text": "Eylemin kişisel çıkar ve isteklerden bağımsız, evrensel bir ilkeye dayanması", "isCorrect": true },
            { "text": "Eylemin toplumsal kurallara uygun olması", "isCorrect": false },
            { "text": "Eylemin kişinin vicdanını rahatlatması", "isCorrect": false }
        ],
        "explanation": "Kaynak'teki Kant'ın kategorik imperatif formülleri, eylemin 'herkes için geçerli evrensel bir yasa' olabilecek bir ilkeye dayanması gerektiğini vurgular. Bu, ödev ahlakının temelini oluşturur ve kişisel çıkardan bağımsızdır."
    },
    {
        "id": 46,
        "question": "Varoluşçuluk felsefesinin temel argümanına göre, insanı diğer varlıklardan (taş, masa vb.) ayıran ve onun nasıl olacağını belirleyen şey nedir?",
        "options": [
            { "text": "Dışsal bir güç tarafından belirlenmiş olması", "isCorrect": false },
            { "text": "Kendi varoluşundan sonra kendini tasarlaması ve yapması", "isCorrect": true },
            { "text": "Mantıksal düşünme yeteneği", "isCorrect": false },
            { "text": "Toplumsal rolü", "isCorrect": false }
        ],
        "explanation": "Kaynak, Varoluşçuluğun baş ilkesini 'İnsan var olur önce... Kendini nasıl yaparsa öyledir yani.' diyerek açıklar. İnsan, var olduktan sonra kendini tasarımıyla var eder."
    },
    {
        "id": 47,
        "question": "T. Kuhn'a göre 'normal bilim' dönemi, bilimsel teorilerin hangi durumunda yaşanır?",
        "options": [
            { "text": "Bilimsel teorilerin doğa olaylarını açıklayamadığı durumda", "isCorrect": false },
            { "text": "Bilim insanlarının sahip olduğu paradigmalarla çelişen bulgular ortaya çıktığında", "isCorrect": false },
            { "text": "Bilimsel teorilerin doğa olaylarını açıklayabildiği sürece", "isCorrect": true },
            { "text": "Bilimsel bilginin doğrusal olarak ilerlediği durumda", "isCorrect": false }
        ],
        "explanation": "Kaynak, T. Kuhn'a göre 'Bilimsel teoriler, doğa olaylarını açıklayabildiği sürece normal bilim dönemi yaşanır.' ifadesini kullanır."
    },
    {
        "id": 48,
        "question": "İ. Kuçuradi'nin felsefi düşüncelerinin ana temasını oluşturan üçleme aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Akıl-Deney-Bilgi", "isCorrect": false },
            { "text": "İnsan-Doğa-Toplum", "isCorrect": false },
            { "text": "İnsan-Değer-Çağ", "isCorrect": true },
            { "text": "Öz-Varoluş-Hiçlik", "isCorrect": false }
        ],
        "explanation": "Kaynak, İ. Kuçuradi'nin felsefi düşüncelerinin ana temasını 'insan-değer-çağ üçlemesi'nin oluşturduğunu belirtir."
    },
    {
        "id": 49,
        "question": "Mantıksal pozitivizm yaklaşımına göre, bilgi değeri taşıyan ve anlamlı olan önermelerin temel özelliği nedir?",
        "options": [
            { "text": "Metafiziksel konuları açıklaması", "isCorrect": false },
            { "text": "Mantıksal olarak analiz edilememesi", "isCorrect": false },
            { "text": "Doğrulanabilir olması", "isCorrect": true },
            { "text": "Akıl yürütme yoluyla elde edilmesi", "isCorrect": false }
        ],
        "explanation": "Kaynak, mantıksal pozitivizme göre 'Doğrulanabilen ve anlamlı olan bilgiler mümkündür. Başka bir deyişle anlamlı olan her önerme aynı zamanda doğrulanabilir bir bilgidir.' ifadeleriyle bunu açıklar."
    },
    {
        "id": 50,
        "question": "Takiyettin Mengüşoğlu'nun insan anlayışı kaynakta nasıl vurgulanmıştır?",
        "options": [
            { "text": "Ruhun bedenden bağımsız ve üstün olduğu", "isCorrect": false },
            { "text": "İnsanın ruh ve bedenin ikiliğinden oluşan karmaşık bir yapı olduğu", "isCorrect": false },
            { "text": "İnsanın somut bir bütünlük olduğu", "isCorrect": true },
            { "text": "İnsanın toplumsal ilişkilerle tanımlandığı", "isCorrect": false }
        ],
        "explanation": "Kaynak'deki alıntıda Takiyettin Mengüşoğlu, 'biz bir insana selam verirken ruh ve bedenden meydana gelen bir ikiliğe değil somut bir bütün olan insana selam veririz.' diyerek insanın bütünlüğünü vurgular."
    },


    {
        "id": 51,
        "question": "Kaynaklara göre MÖ 6. yüzyılda Antik Yunan şehir devletlerinden İyonya'daki düşünürler hangi uygarlıkların birikimlerinden etkilenmiştir?",
        "options": [
            { "text": "Roma, Pers ve Aztek", "isCorrect": false },
            { "text": "Mısır, Babil, Hint, Çin ve Mezopotamya", "isCorrect": true },
            { "text": "Fenike, Lidya ve Frigya", "isCorrect": false },
            { "text": "Sümer, Akad ve Asur", "isCorrect": false }
        ],
        "explanation": "Kaynakta açıkça belirtildiği üzere, MÖ 6. yüzyılda İyonya'daki düşünürler; Mısır, Babil, Hint, Çin ve Mezopotamya gibi birçok uygarlığın birikimlerinden etkilenmiştir."
    },
    {
        "id": 52,
        "question": "Kaynaklara göre, evrenin boşluktan meydana geldiği ve evrenin varlık nedeni olarak boşluğun kabul edilmesi görüşü hangi medeniyetin Antik Yunan felsezesini etkilemiştir?",
        "options": [
            { "text": "İran", "isCorrect": false },
            { "text": "Çin", "isCorrect": false },
            { "text": "Mısır", "isCorrect": false },
            { "text": "Hint", "isCorrect": true }
        ],
        "explanation": "Hint medeniyeti, boşluğu evrenin varlık nedeni olarak kabul etmesi ve evrenin nasıl meydana geldiğine dair sorularıyla Antik Yunan felsefesinde varlık anlayışını biçimlendirmiştir."
    },
    {
        "id": 53,
        "question": "Kaynaklara göre, iyi ve kötünün çatışması anlayışıyla Antik Yunan felsefesinde karşıtların çatışması görüşünün oluşmasında etkili olan medeniyet hangisidir?",
        "options": [
            { "text": "Hint", "isCorrect": false },
            { "text": "İran", "isCorrect": true },
            { "text": "Çin", "isCorrect": false },
            { "text": "Mezopotamya", "isCorrect": false }
        ],
        "explanation": "İran medeniyeti, ortaya koyduğu iyi ve kötünün çatışması anlayışıyla Antik Yunan felsefesinde karşıtların çatışması görüşünün oluşmasında etkili olmuştur."
    },
    {
        "id": 54,
        "question": "MÖ 6-MS 2. yüzyıl felsefesinin ilk dönemi, doğa üzerine yapılan sorgulamalarla başlaması nedeniyle ne olarak adlandırılır?",
        "options": [
            { "text": "Ahlak felsefesi", "isCorrect": false },
            { "text": "Siyaset felsefesi", "isCorrect": false },
            { "text": "Bilgi felsefesi", "isCorrect": false },
            { "text": "Doğa felsefesi", "isCorrect": true }
        ],
        "explanation": "MÖ 6-MS 2. yüzyıl felsefesi, doğa üzerine yapılan sorgulamalarla başlar. Bu nedenle MÖ 6-MS 2. yüzyıl felsefesinin ilk dönemi “doğa felsefesi” olarak adlandırılır."
    },
    {
        "id": 55,
        "question": "MÖ 6-MS 2. yüzyıl felsefesinde, dış dünyadaki varlıkların kendisinden doğduğu ve her şeyin ilk nedeni olan varlığa ne ad verilir?",
        "options": [
            { "text": "İdea", "isCorrect": false },
            { "text": "Form", "isCorrect": false },
            { "text": "Töz", "isCorrect": false },
            { "text": "Arkhe", "isCorrect": true }
        ],
        "explanation": "Dış dünyadaki varlıkların kendisinden doğduğu ve her şeyin ilk nedeni olan bu varlığa ‘’arkhe’’ denir."
    },
    {
        "id": 56,
        "question": "Thales'in her şeyin temel maddesi ve kökeni olarak suyu belirlemesine neden olan gözlemlerden biri aşağıdakilerden hangisi değildir?",
        "options": [
            { "text": "Suyun insanlar ve diğer canlılar için taşıdığı önem", "isCorrect": false },
            { "text": "Okyanusların kara parçalarını taşıyor olması olgusu", "isCorrect": false },
            { "text": "Doğada yer alan tüm varlıkları yine doğanın kendisinde bulunan bir unsur olan su ile açıklaması", "isCorrect": true },
            { "text": "Suyun katılaşıp buz, buharlaşıp gaz hâline gelmesi (Bu gözlem metinde yok, ancak seçenek D'deki ifade doğrudan Thales'in görüşüdür, gözlemi değil.)", "isCorrect": false }
        ],
        "explanation": "Thales, suyun her şeyin temel maddesi ve kökeni olduğu görüşüne suyun insanlar ve diğer canlılar için taşıdığı önemi, okyanusların kara parçalarını taşıyor olmaları olgusunu ve bunun gibi başka bazı gözlemleri göz önünde bulundurarak varmıştır. D seçeneği Thales'in görüşünün kendisidir, gözlemi değildir."
    },
    {
        "id": 57,
        "question": "Platon, bilgi ve doğruluk derecelerine göre yaptığı sınıflandırmada en üstte yer alan, akılla ulaşılan kesin ve doğru bilgi türünü ne olarak adlandırır?",
        "options": [
            { "text": "Tahmin (Eikasia)", "isCorrect": false },
            { "text": "İnanç (Pistis)", "isCorrect": false },
            { "text": "Matematiksel bilgi (Dianoia)", "isCorrect": false },
            { "text": "İdeaların bilgisi (Episteme)", "isCorrect": true }
        ],
        "explanation": "Platon'a göre kesin ve doğru bilgi sıralamasında en üstte akılla ulaşılan ideaların bilgisi (episteme) bulunur."
    },
    {
        "id": 58,
        "question": "Platon'un \"mağara benzetmesi\"nde, mağarada yaşayan insanların gerçek sandığı karanlık mağara duvarlarındaki gölgeler neyi temsil eder?",
        "options": [
            { "text": "İdealar", "isCorrect": false },
            { "text": "Gerçeklik", "isCorrect": false },
            { "text": "Duyulara dayalı yanılsamalar/Görünüş", "isCorrect": true },
            { "text": "Akıl", "isCorrect": false }
        ],
        "explanation": "Mağarada yaşayan insanlar, karanlık mağara duvarlarında gördükleri gölgeleri gerçek sanırlar. Bu gölgeler, Platon'un felsefesinde duyularla algılanan ve yanıltıcı olan görünüş dünyasını temsil eder."
    },
    {
        "id": 59,
        "question": "Aristoteles'e göre erdem nedir?",
        "options": [
            { "text": "Bilgelik", "isCorrect": false },
            { "text": "Aşırılık ve eksikliğin ortası olan huy", "isCorrect": true },
            { "text": "İdealara ulaşmak", "isCorrect": false },
            { "text": "Kendini dizginlemek", "isCorrect": false }
        ],
        "explanation": "Aristoteles'e göre karakter erdemi, etkilenimler ve eylemlerle ilgilidir; aşırılık, eksiklik ve orta bunlarda bulunur. Erdem, aşırılık ve eksiklikten kaçıp ortayı hedef edinmektir."
    },
    {
        "id": 60,
        "question": "Konfüçyüs'ün \"Konuşmalar\" eserine göre, Üst İnsan'dan beklenen temel özelliklerden biri hangisidir?",
        "options": [
            { "text": "Kendi faydasının peşinden gitmesi", "isCorrect": false },
            { "text": "Kaygı duyması ve korkması", "isCorrect": false },
            { "text": "Erdeme aykırı davranışlardan kaçınması", "isCorrect": true },
            { "text": "Makama sahip olmaktan endişelenmesi", "isCorrect": false }
        ],
        "explanation": "Konfüçyüs, Üst İnsanın ahlakı düşünmesi gerektiğini belirtir. Erdemli insan kendini dizginlemeli, konuşma ve davranışları adaba uygun olmalıdır. Kaygı duymaz ve korkmaz."
    },
    {
        "id": 61,
        "question": "Sokrates'in \"Savunma\" metnine göre, birinin bilmeyerek işlediği suç karşısında yasanın beklentisi nedir?",
        "options": [
            { "text": "Doğrudan cezalandırmak", "isCorrect": false },
            { "text": "Mahkemeye sürüklemek", "isCorrect": false },
            { "text": "Bir kenara çekerek anımsatmak ve öğüt vermek", "isCorrect": true },
            { "text": "Suçu görmezden gelmek", "isCorrect": false }
        ],
        "explanation": "Sokrates, işlediği suç bilmeyerek işlenmişse, yasanın onu suç saymayacağını; kendisini bir kenara çekerek ayrıca anımsatmanın ve öğüt vermenin gerektiğini belirtir."
    },
    {
        "id": 62,
        "question": "Sokrates, mahkemede yaptığı savunmada, ölümden kurtulmak için aşağılık davranışlara sapmaktansa neyi tercih ettiğini belirtmiştir?",
        "options": [
            { "text": "Yalvarıp yakarmayı", "isCorrect": false },
            { "text": "Acıklı sahneler yaratmayı", "isCorrect": false },
            { "text": "Alıştığı gibi konuşarak ölmeyi", "isCorrect": true },
            { "text": "Silahlarını bırakıp diz çökmeyi", "isCorrect": false }
        ],
        "explanation": "Sokrates, tehlikeye düştüğünde böyle aşağılık davranışlara, alçaklıklara sapmayacağını; böyle bir şey yapmaktansa, alıştığı gibi konuşarak ölmeyi üstün gördüğünü ifade eder."
    },
    {
        "id": 63,
        "question": "Kaynaklara göre MS 2. yüzyıl-MS 15. yüzyıl felsefesinin egemen düşünce biçimi aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Akıl merkezli düşünme", "isCorrect": false },
            { "text": "Bilim merkezli düşünme", "isCorrect": false },
            { "text": "Din merkezli düşünme", "isCorrect": true },
            { "text": "İnsan merkezli düşünme", "isCorrect": false }
        ],
        "explanation": "MS 2. yüzyıl-MS 15. yüzyıl felsefesi için din merkezli düşünmenin egemen olduğu belirtilmiştir."
    },
    {
        "id": 64,
        "question": "Skolastik felsefenin temel amacı aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Yeni bilgilere ulaşmak", "isCorrect": false },
            { "text": "İnancı akılla temellendirmek", "isCorrect": true },
            { "text": "Dini eleştirmek", "isCorrect": false },
            { "text": "Bilimsel yöntemi geliştirmek", "isCorrect": false }
        ],
        "explanation": "Skolastik felsefenin amacı; aklın vahiyle gelenleri kanıtlaması, denetlemesi ve açıklaması için dinin önermelerine felsefi kavram üretmektir. Bu, inancı akılla temellendirmeye çalışmaktır."
    },
    {
        "id": 65,
        "question": "Tek tanrılı dinlerde Tanrı'nın mutlak iyi olmasına rağmen kötülüğe izin vermesi sorusu felsefede hangi problem etrafında şekillenir?",
        "options": [
            { "text": "İrade özgürlüğü problemi", "isCorrect": false },
            { "text": "Tümeller problemi", "isCorrect": false },
            { "text": "Bilginin kaynağı problemi", "isCorrect": false },
            { "text": "Kötülük problemi", "isCorrect": true }
        ],
        "explanation": "Kötülük problemi, özü itibarıyla mutlak iyilik olarak görülen Tanrı’nın kötülüğe neden izin verdiği sorusu etrafında şekillenir."
    },
    {
        "id": 66,
        "question": "Augustinus, kötülüğün kökenini araştırırken ne sonucuna varmıştır?",
        "options": [
            { "text": "Kötülüğün Tanrı'dan kaynaklandığı", "isCorrect": false },
            { "text": "Kötülüğün maddenin bir özelliği olduğu", "isCorrect": false },
            { "text": "Kötülüğün bir töz (varlık) olmadığı", "isCorrect": true },
            { "text": "Kötülüğün iyilikten bağımsız olduğu", "isCorrect": false }
        ],
        "explanation": "Augustinus, kötünün ne olduğunu aradığını ve onun bir töz olmadığını keşfettiğini belirtir."
    },
    {
        "id": 67,
        "question": "Augustinus'a göre evren nasıl yaratılmıştır?",
        "options": [
            { "text": "Ezeli olarak", "isCorrect": false },
            { "text": "Dört temel ögeden", "isCorrect": false },
            { "text": "Hiçlikten", "isCorrect": true },
            { "text": "Tanrı'nın dışarıdan bir malzemeyi kullanmasıyla", "isCorrect": false }
        ],
        "explanation": "Augustinus, Tanrı'nın göğü ve yeri yaratırken elinde bir malzeme olmadığını, yaratacağı bir mekan da olmadığını ve sebep olmadıkça herhangi bir şeyin olamayacağını belirterek evrenin hiçlikten (yoktan) yaratıldığını ima eder. Başlık da 'Dünya hiçlikten yaratıldı' şeklindedir."
    },
    {
        "id": 68,
        "question": "Fârâbî ve İbn Sînâ'nın evrenin yaratılışını açıklamak için kullandığı teori hangisidir?",
        "options": [
            { "text": "Yaratılış teorisi", "isCorrect": false },
            { "text": "Sudûr teorisi", "isCorrect": true },
            { "text": "Diyalektik teori", "isCorrect": false },
            { "text": "Atom teorisi", "isCorrect": false }
        ],
        "explanation": "Tanrı’nın evreni yaratmasını sudûr teorisiyle açıklayan Fârâbî ve İbn Sînâ’ya göre evren zorunluluk gereği Tanrı’dan meydana gelir."
    },
    {
        "id": 69,
        "question": "Fârâbî'nin Sudûr teorisine göre Tanrı'dan taşma (sudûr) yoluyla ilk meydana gelen varlık hangisidir?",
        "options": [
            { "text": "Maddi evren", "isCorrect": false },
            { "text": "Faal akıl", "isCorrect": false },
            { "text": "İlk akıl", "isCorrect": true },
            { "text": "Ayüstü âlemi", "isCorrect": false }
        ],
        "explanation": "Sudûr teorisine göre Tanrı, kendi kendisini düşünür ve sudûr eder (taşar). Böylece 'ilk akıl' ortaya çıkar."
    },
    {
        "id": 70,
        "question": "Gazâlî, duyulara ve akla dayalı bilgilerin şüphe taşıdığını belirttikten sonra, kesin ve mutlak bilgiye nasıl ulaşılabileceğini savunmuştur?",
        "options": [
            { "text": "Mantıksal delillerle", "isCorrect": false },
            { "text": "Bilimsel yöntemle", "isCorrect": false },
            { "text": "Yüce Allah'ın kalbe bıraktığı bir nurla (Sezgi/İlham)", "isCorrect": true },
            { "text": "Geleneksel bilgilere (taklîd) dayanarak", "isCorrect": false }
        ],
        "explanation": "Gazâlî, duyulara ve akla olan güveninin yıkıldığını belirtir. Kesinlik kazanan zorunlu aklî bilgilerin tekrar geçerli hâle gelmesinin mantıki delillerle değil, yüce Allah’ın kalbe bıraktığı bir nurla olduğunu ifade eder."
    },
    {
        "id": 71,
        "question": "İbn Sînâ'nın \"Hay Bin Yakzan\" adlı eseri hangi tarzda yazılmış, düşüncelerin sembollerle ifade edildiği bir öyküdür?",
        "options": [
            { "text": "Tarihi", "isCorrect": false },
            { "text": "Bilimsel", "isCorrect": false },
            { "text": "Alegorik", "isCorrect": true },
            { "text": "Felsefi tez", "isCorrect": false }
        ],
        "explanation": "Kaynakta 'Hay b. Yakzan'ın alegorik bir öykü olduğu ve alegorik tarzda yazılan eserlerde yazarın düşüncelerini sembollerle ifade ettiği belirtilir."
    },
    {
        "id": 72,
        "question": "Kaynaklara göre, vahiy gelmese bile insanların akıl yoluyla Tanrı'nın varlığını bilmekle yükümlü olduğunu savunan düşünür kimdir?",
        "options": [
            { "text": "Augustinus", "isCorrect": false },
            { "text": "Aquinalı Thomas", "isCorrect": false },
            { "text": "Gazâlî", "isCorrect": false },
            { "text": "İmam Mâtürîdî", "isCorrect": true }
        ],
        "explanation": "İmam Mâtürîdî, Tanrı’nın akılla bulunabileceğini ve vahiy gelmese bile insanların Tanrı’nın varlığını tasdik etmekle mesul olduğunu savunur."
    },
    {
        "id": 73,
        "question": "Tümeller tartışmasının Hristiyan felsefesi için bu kadar önemli olmasının temel nedenlerinden biri nedir?",
        "options": [
            { "text": "Bilimsel gelişmeleri etkilemesi", "isCorrect": false },
            { "text": "İnanç ve akıl ilişkisini belirlemesi", "isCorrect": false },
            { "text": "Tanrı'nın varlığı ve niteliklerinin temellendirilmesinde kullanılması", "isCorrect": true },
            { "text": "Ahlaki değerlerin kaynağını açıklaması", "isCorrect": false }
        ],
        "explanation": "Kavram realizmi görüşünün Hristiyan felsefesinde kilisenin resmi görüşü olarak kabul edilmesinin nedeni, bu görüşün Hristiyanlığın tezlerini ve Tanrı’nın varlığını temellendirmek için kullanılmasıdır. Tümellerin varlığı, Tanrı'nın varlığı ile ilişkilendirilmiştir."
    },
    {
        "id": 74,
        "question": "Çeviri faaliyetleri sonucunda İslam felsefesinin kazandığı yeni konu ve problemlerin kökeni hangi düşünce dünyasına dayanmaktadır?",
        "options": [
            { "text": "Hint düşünce dünyası", "isCorrect": false },
            { "text": "İran düşünce dünyası", "isCorrect": false },
            { "text": "Antik Yunan düşünce dünyası", "isCorrect": true },
            { "text": "Uzak Doğu düşünce dünyası", "isCorrect": false }
        ],
        "explanation": "Çeviri faaliyetleri sonucunda İslam felsefesi, yeni konu ve problemlerle karşılaşmıştır. Bu faaliyetler Antik Yunan düşünce dünyasına ait metinlerin çevrilmesiyle gerçekleştiği için problemlerin kökeni Antik Yunan'a dayanır."
    },
    {
        "id": 75,
        "question": "Kaynakta verilen Mehmet Akif Ersoy şiirinin ilk kıtasında özellikle hangi değere yapılan vurgu dikkat çekmektedir?",
        "options": [
            { "text": "Bilgi birikimi", "isCorrect": false },
            { "text": "Vatan sevgisi", "isCorrect": true },
            { "text": "Dostluk", "isCorrect": false },
            { "text": "Özgürlük", "isCorrect": false }
        ],
        "explanation": "Şiirin ilk kıtası, 'Verme, dünyalar alsan da bu cennet vatan. Kim bu cennet vatann uğruna olmaz ki feda?' dizeleriyle vatan sevgisine güçlü bir vurgu yapmaktadır."
    },
    {
        "id": 76,
        "question": "İstiklal Marşı'nın başlangıç kıtalarında (kaynakta verilen) hakim olan temel duygu ve vurgu nedir?",
        "options": [
            { "text": "Umut ve milli bağımsızlık", "isCorrect": true },
            { "text": "Korku ve endişe", "isCorrect": false },
            { "text": "Yabancı düşmanlığı", "isCorrect": false },
            { "text": "Dini bağlılık", "isCorrect": false }
        ],
        "explanation": "Şiir 'Korkma, sönmez bu şafaklarda yüzen al sancak;' dizesiyle umutla başlar ve 'Hakkıdır Hakk’a tapan milletimin istiklâl' dizesiyle milli bağımsızlığı vurgular."
    },
    {
        "id": 77,
        "question": "Stoacı filozof Epiktetos'a göre, insanın kontrol edebileceği ve üzerinde güç yetirebileceği tek şey nedir?",
        "options": [
            { "text": "Doğal olaylar", "isCorrect": false },
            { "text": "Başkalarının davranışları", "isCorrect": false },
            { "text": "Kendi tavrı ve tutkuları", "isCorrect": true },
            { "text": "Tanrı'nın takdiri", "isCorrect": false }
        ],
        "explanation": "Epiktetos'un ahlak felsefesinin elimizde olan ve elimizde olmayan diye iki yönü bulunmaktadır. İnsanın kontrol edebileceği, yalnızca kendi tavrı ve tutkularıdır."
    },
    {
        "id": 78,
        "question": "Montaigne'e göre duyular neden kesin bilgi vermede yetersizdir?",
        "options": [
            { "text": "Duyuların sayısının az olması", "isCorrect": false },
            { "text": "Duyuların bizi sık sık yanıltması ve farklı canlılarda farklılık göstermesi", "isCorrect": true },
            { "text": "Duyuların sadece dış dünyayı algılaması", "isCorrect": false },
            { "text": "Duyuların akıldan bağımsız olması", "isCorrect": false }
        ],
        "explanation": "Montaigne, duyularımızın birçok kez bizi yanılttığını ve duyuların farklı hayvanlarda farklı şekillerde çalıştığını örneklerle açıklayarak duyuların kesin bilgi vermede yetersizliğini savunur."
    },
    {
        "id": 79,
        "question": "F. Bacon'a göre, insanın anlama yetisinde kök salmış olan ve doğru bilgiye ulaşmasını engelleyen yanılgı kaynaklarına ne ad verilir?",
        "options": [
            { "text": "Şüphe", "isCorrect": false },
            { "text": "İdol", "isCorrect": true },
            { "text": "Paradigma", "isCorrect": false },
            { "text": "İdea", "isCorrect": false }
        ],
        "explanation": "F. Bacon’a göre insanın anlama yetisinde kök salmış olan idoller, insanı yargılarında yanıltır ve zihnin yeni bilgilere ulaşmasını engeller."
    },
    {
        "id": 80,
        "question": "Descartes'in her şeyden şüphe etme yöntemi sonucunda, varlığını ispatladığı ilk kesin şey nedir?",
        "options": [
            { "text": "Tanrı'nın varlığı", "isCorrect": false },
            { "text": "Dış dünyanın varlığı", "isCorrect": false },
            { "text": "Kendi düşünen varlığı (Cogito)", "isCorrect": true },
            { "text": "Matematiksel gerçekler", "isCorrect": false }
        ],
        "explanation": "Descartes, her şeyden kuşku duyulabileceğini ancak kuşku duyan (düşünen) varlığın var olmaması durumunda kuşkunun da olamayacağını belirterek, düşünen varlığının (kendinin) var olduğunun ilk kesin bilgi olduğunu ortaya koyar. Bu, 'Düşünüyorum, öyleyse varım' (Cogito ergo sum) şeklinde ifade edilir."
    },
    {
        "id": 81,
        "question": "J. Locke'a göre, zihindeki tüm idelerin kaynağı nedir?",
        "options": [
            { "text": "Doğuştan gelen aklı ilkeler", "isCorrect": false },
            { "text": "Sadece duyumlar", "isCorrect": false },
            { "text": "Duyum ve düşünüm (deneyim)", "isCorrect": true },
            { "text": "İlahi vahiy", "isCorrect": false }
        ],
        "explanation": "J. Locke'a göre zihindeki idelerin iki kaynağı vardır: duyum (dışsal nesnelerden gelenler) ve düşünüm (zihnin kendi içindeki işlemlerine yönelik gözlemler). Bu iki kaynak da deneyimin farklı biçimleridir."
    },
    {
        "id": 82,
        "question": "18-19. yüzyılları kapsayan Aydınlanma Çağı'nın en belirgin özelliği aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Dinî dogmaların güçlenmesi", "isCorrect": false },
            { "text": "Aklın dinden bağımsızlaşarak sorunları çözmeye çalışması", "isCorrect": true },
            { "text": "Bilimsel bilginin reddedilmesi", "isCorrect": false },
            { "text": "Geleneksel otoritelerin sorgulanmaması", "isCorrect": false }
        ],
        "explanation": "Aydınlanma kavramı, aklın dinin baskısından kurtularak her alandaki sorunları kendi gücüyle çözmeye çalışması olarak tanımlanır. Problemler dinin açıklamalarından bağımsız olarak akıl ve felsefenin yöntemleriyle ele alınmıştır."
    },
    {
        "id": 83,
        "question": "I. Kant'a göre ahlaki bir eylemin değeri, eylemin kendisinden veya sonucundan bağımsız olarak neye dayanır?",
        "options": [
            { "text": "Eylemin sonucunda sağlanan faydaya", "isCorrect": false },
            { "text": "Eylemi gerçekleştiren kişinin eğilimlerine", "isCorrect": false },
            { "text": "Eylemin yasa veya kurala uygun olmasına (ödeve)", "isCorrect": true },
            { "text": "Toplumsal değerlere", "isCorrect": false }
        ],
        "explanation": "I. Kant'a göre ahlaki bir eylemin kararı ödeve dayanmalıdır. Eylemin ödeve uygun olmasının ölçütü iradeye dayanması (iyi isteme) ve çıkardan uzak olmasıdır. Eylemin değeri, ödevden yapılıp yapılmadığına bağlıdır, bencil bir amaçla yapılmışsa ahlaki değildir."
    },
    {
        "id": 84,
        "question": "I. Kant'ın ahlak anlayışına göre, bir eylem sadece \"bencil bir amaç\" veya fayda nedeniyle yapılmışsa, bu eylem ahlaki midir?",
        "options": [
            { "text": "Evet, fayda sağlıyorsa ahlakidir.", "isCorrect": false },
            { "text": "Hayır, ahlaki değildir.", "isCorrect": true },
            { "text": "Kısmen ahlakidir.", "isCorrect": false },
            { "text": "Duruma göre değişir.", "isCorrect": false }
        ],
        "explanation": "I. Kant’a göre bir eylem 'ödevden' değil, yalnızca 'bencil bir amaç' nedeniyle yapılmışsa ahlaki değildir."
    },
    {
        "id": 85,
        "question": "J. J. Rousseau'ya göre uygarlığın insan üzerindeki temel olumsuz etkisi nedir?",
        "options": [
            { "text": "İnsanın doğasına uygun yaşamasını sağlaması", "isCorrect": false },
            { "text": "İnsanın bilgi birikimini artırması", "isCorrect": false },
            { "text": "İnsanın doğallığını ve gerçek duygularını kaybetmesine neden olması", "isCorrect": true },
            { "text": "İnsanın toplumsal bağlarını güçlendirmesi", "isCorrect": false }
        ],
        "explanation": "Rousseau'ya göre uygarlık, insanın doğal içgüdülerini frenlemesine, gerçek duygularını bastırmasına, kendine yabancılaşmasına ve yalan ile ikiyüzlülüğün yayılmasına neden olur. Uygarlık insanın doğasını olumsuz yönde etkiler."
    },
    {
        "id": 86,
        "question": "A. Comte'un \"üç hâl yasası\"na göre, insan düşüncesinin tarihsel süreçte ulaştığı en yüksek düzey hangisidir?",
        "options": [
            { "text": "Teolojik aşama", "isCorrect": false },
            { "text": "Metafizik aşama", "isCorrect": false },
            { "text": "Pozitif aşama (Bilimsel)", "isCorrect": true },
            { "text": "Mitolojik aşama", "isCorrect": false }
        ],
        "explanation": "A. Comte, insan düşüncesinin teolojik ve metafizik aşamalardan geçerek en yüksek düzey olan pozitif aşamaya ulaştığını savunur."
    },
    {
        "id": 87,
        "question": "Mantıksal pozitivizme göre, bilginin temel kaynağı ve geçerlilik ölçütü nedir?",
        "options": [
            { "text": "Sadece akıl yürütme", "isCorrect": false },
            { "text": "Duyum ve deneye dayanan bilimsel yöntem", "isCorrect": true },
            { "text": "Sezgi ve ilham", "isCorrect": false },
            { "text": "Metafiziksel açıklamalar", "isCorrect": false }
        ],
        "explanation": "Mantıksal pozitivizm, bilginin duyum ve deneye dayanan bilimsel yöntemle elde edilebileceğini, bunların dışında kalan metafiziksel alanın bilgisinin mümkün olmadığını savunur."
    },
    {
        "id": 88,
        "question": "Mantıksal pozitivizme göre bilgi değeri taşıyan önermelerin temel özelliği nedir?",
        "options": [
            { "text": "Akılsal olarak tutarlı olması", "isCorrect": false },
            { "text": "Doğrulanabilir olması", "isCorrect": true },
            { "text": "Ahlaki değer içermesi", "isCorrect": false },
            { "text": "Tarihsel olarak kabul görmüş olması", "isCorrect": false }
        ],
        "explanation": "Mantıksal pozitivizme göre doğrulanabilen ve anlamlı olan bilgiler mümkündür. Anlamlı olan her önerme aynı zamanda doğrulanabilir bir bilgidir."
    },
    {
        "id": 89,
        "question": "Varoluşçuluğun temel ilkesi aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Öz varoluştan önce gelir", "isCorrect": false },
            { "text": "Varoluş özden önce gelir", "isCorrect": true },
            { "text": "İnsan belirlenmiş bir varlıktır", "isCorrect": false },
            { "text": "İnsan doğası gereği iyidir", "isCorrect": false }
        ],
        "explanation": "Varoluşçuluğun baş ilkesi, insanın var olduktan sonra kendini kavradığı gibi olması, varlaşmaya doğru yaptığı atılımdan sonra olmak istediği gibi olmasıdır. Bu, varoluşun özden önce geldiği anlamına gelir."
    },
    {
        "id": 90,
        "question": "Varoluşçuluğa göre, insan özgürce kendini var ederken ne gibi bir sorumluluk yüklenir?",
        "options": [
            { "text": "Sadece kendi hayatından sorumludur", "isCorrect": false },
            { "text": "Hiçbir sorumluluğu yoktur", "isCorrect": false },
            { "text": "Sadece yaşadığı toplumdan sorumludur", "isCorrect": false },
            { "text": "Kendi seçimiyle bütün insanlığı bağlar, dolayısıyla bütün insanlığı kucaklayan bir sorumluluğu vardır", "isCorrect": true }
        ],
        "explanation": "Varoluş özden önce gelince ve biz, tasarımıza göre varlaşmak isteyince, bu tasarı herkes için, bütün çağımız için bir değer ve geçerlik kazanır. Böylece, sorumluluğumuz düşünülemeyecek kadar büyümüş olur, giderek, sonunda bütün insanlığı kucaklar."
    },
    {
        "id": 91,
        "question": "T. Kuhn'a göre, bilim insanları tarafından kabul görmüş olan inançlar bütününe veya problemlerin nasıl anlaşılması gerektiği konusunda hemfikir olunan genel kabullere ne ad verilir?",
        "options": [
            { "text": "Hipotez", "isCorrect": false },
            { "text": "Teori", "isCorrect": false },
            { "text": "Paradigma", "isCorrect": true },
            { "text": "Doğrulama", "isCorrect": false }
        ],
        "explanation": "T. Kuhn, bilim insanları tarafından kabul görmüş olan inançlar bütününe veya problemlerin nasıl anlaşılması gerektiği konusunda hemfikir olunan genel kabullere paradigma adını vermiştir."
    },
    {
        "id": 92,
        "question": "T. Kuhn, bilimsel ilerlemenin doğrusal ve sürekli birikim şeklinde değil, ne tür bir süreçle gerçekleştiğini savunur?",
        "options": [
            { "text": "Sadece deney ve gözlemle", "isCorrect": false },
            { "text": "Akıl yürütmeyle", "isCorrect": false },
            { "text": "Paradigmalar arası atlamalar (bilimsel devrimler) şeklinde", "isCorrect": true },
            { "text": "Toplumsal uzlaşmayla", "isCorrect": false }
        ],
        "explanation": "T. Kuhn, bilimin doğrusal olarak sürekli ilerleyen bir sürece değil bir görüşten diğerine atlamalar biçiminde gerçekleşen bilimsel devrimler şeklinde ilerlediğini savunur."
    },
    {
        "id": 93,
        "question": "K. Popper'a göre, olası bir olayla çürütülemeyen bir kuram bilimsel midir?",
        "options": [
            { "text": "Evet, çünkü her zaman doğrudur.", "isCorrect": false },
            { "text": "Hayır, çünkü bilimsel bir kuram yanlışlanabilir olmalıdır.", "isCorrect": true },
            { "text": "Kısmen bilimseldir.", "isCorrect": false },
            { "text": "Sadece sosyal bilimler için geçerlidir.", "isCorrect": false }
        ],
        "explanation": "K. Popper’a göre olası bir olayla çürütülemeyen bir kuram bilimsel değildir. Çürütülemezlik bir kuramın erdemi değil erdemsizliğidir. Bilimsel bir bilgi ancak yanlışlanabilir."
    },
    {
        "id": 94,
        "question": "Nurettin Topçu'nun \"İsyan Ahlakı\" eserine göre, isyanın nihai amacı aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Toplumsal düzeni tamamen yıkmak", "isCorrect": false },
            { "text": "Anarşi yaratmak", "isCorrect": false },
            { "text": "İnsanı esaretten kurtararak \"Yüce Varlık\"a ulaştırmak", "isCorrect": true },
            { "text": "Bireysel özgürlüğü sınırsızlaştırmak", "isCorrect": false }
        ],
        "explanation": "Nurettin Topçu'ya göre isyanın amacı, insanı esaretten kurtararak bizzat insan kılmak, ruhun yücelmesi ve insanın Yüce Varlık’a kadar ulaşmasıdır."
    },
    {
        "id": 95,
        "question": "Takiyettin Mengüşoğlu'nun \"İnsan Felsefesi\" eserinden alıntıya göre, insanı nasıl görmeliyiz?",
        "options": [
            { "text": "Sadece ruhsal bir varlık olarak", "isCorrect": false },
            { "text": "Sadece bedensel bir varlık olarak", "isCorrect": false },
            { "text": "Ruh ve bedenden oluşan ikili bir yapı olarak", "isCorrect": false },
            { "text": "Somut bir bütünlük içinde", "isCorrect": true }
        ],
        "explanation": "Mengüşoğlu, bir insana selam verirken ruh ve bedenden meydana gelen bir ikiliğe değil, somut bir bütün olan insana selam verdiğimizi belirterek insanın bütünlüğünü vurgular."
    },
    {
        "id": 96,
        "question": "Ioanna Kuçuradi'nin felsefi düşüncelerinin ana teması nedir?",
        "options": [
            { "text": "Bilgi-varlık ilişkisi", "isCorrect": false },
            { "text": "Akıl-inanç ilişkisi", "isCorrect": false },
            { "text": "İnsan-değer-çağ üçlemesi", "isCorrect": true },
            { "text": "Doğa-insan ilişkisi", "isCorrect": false }
        ],
        "explanation": "İ. Kuçuradi’nin felsefi düşüncelerinin ana temasını insan-değer-çağ üçlemesi oluşturur."
    },
    {
        "id": 97,
        "question": "Ioanna Kuçuradi'ye göre insanı diğer varlıklardan ayıran ve onu \"insan\" yapan temel özellik nedir?",
        "options": [
            { "text": "Akıl sahibi olması", "isCorrect": false },
            { "text": "Duyulara sahip olması", "isCorrect": false },
            { "text": "Değerler üretebilme potansiyeli", "isCorrect": true },
            { "text": "Toplumsal bir varlık olması", "isCorrect": false }
        ],
        "explanation": "İ. Kuçuradi'ye göre insanı insan yapan, onun değer inşa etme potansiyelidir."
    },
    {
        "id": 98,
        "question": "Ioanna Kuçuradi, yalnızlığı \"bir dostun olmaması\" olarak gören bir filozof olarak, dostluğun ihtiyaca dayanan bir ilişki olup olmadığı sorusuna ne tür bir yaklaşım sergilemektedir?",
        "options": [
            { "text": "Evet, dostluk temel bir ihtiyaçtır.", "isCorrect": false },
            { "text": "Hayır, dostluk ihtiyacın ötesinde etik bir ilişkidir.", "isCorrect": true },
            { "text": "Dostluk sadece faydaya dayanır.", "isCorrect": false },
            { "text": "Dostluk sadece duygusal bir bağdır.", "isCorrect": false }
        ],
        "explanation": "Kaynakta dostluk, 'etik bir ilişki' örneği üzerinden açıklanmaktadır. Bu, dostluğun sadece ihtiyaç gidermeye yönelik olmadığını, bunun ötesinde bir değer taşıdığını ima eder."
    },
    {
        "id": 99,
        "question": "Hristiyan felsefesinde kavram realizminin, kilisenin resmi görüşü olarak kabul edilmesinin temel nedenlerinden biri nedir?",
        "options": [
            { "text": "Tümellerin gerçekliğinin bilimsel olarak kanıtlanması", "isCorrect": false },
            { "text": "Tümellerin gerçekliğinin Tanrı'nın varlığını ve Hristiyan öğretilerini temellendirmesi", "isCorrect": true },
            { "text": "Tümellerin ahlaki değerlerin kaynağı olarak görülmesi", "isCorrect": false },
            { "text": "Tümellerin insan aklının sınırlarını göstermesi", "isCorrect": false }
        ],
        "explanation": "Hristiyan felsefesinde kavram realizmi, Hristiyanlığın tezlerini ve Tanrı’nın varlığını temellendirmek için kullanılmıştır. Kiliseye göre tümel varlık Tanrı'dır ve tümel varlığın varlığı veya yokluğu Tanrı'nın varlığını etkiler."
    },
    {
        "id": 100,
        "question": "Kaynaklarda belirtilen Tanrı'nın varlığına yönelik teleolojik kanıtın temel argümanı aşağıdakilerden hangisidir?",
        "options": [
            { "text": "Her varlığın bir nedeni olduğu ve bu zincirin ilk nedeninin Tanrı olduğu", "isCorrect": false },
            { "text": "En mükemmel varlık olarak Tanrı'nın zihinde ve gerçeklikte var olması gerektiği", "isCorrect": false },
            { "text": "Evrende gözlemlenen mükemmel düzenin ancak akıl sahibi üstün bir varlık tarafından açıklanabileceği", "isCorrect": true },
            { "text": "İnsanların zihninde bir Tanrı kavramı olması", "isCorrect": false }
        ],
        "explanation": "Teleolojik kanıt, doğada açıklanması gereken mükemmel bir düzen olduğunu ve bu düzenin ancak mükemmel bir varoluşun niteliği olabileceğini, bu düzenin arkasında akıl sahibi bir varlık olması gerektiğini savunur. Boethius'un kullandığı kanıt da bu temele dayanır."
    }
]

// Soru havuzundan rastgele belirli sayıda soru seçen fonksiyon
function getRandomQuestions(count) {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
} 
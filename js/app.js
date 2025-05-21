// DOM elementlerini seçme
const startTestBtn = document.getElementById('start-test-btn');
const philosopherSelection = document.getElementById('philosopher-selection');
const testSection = document.getElementById('test-section');
const resultsSection = document.getElementById('results-section');
const questionNumber = document.getElementById('question-number');
const timerElement = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const scoreText = document.getElementById('score-text');
const correctAnswers = document.getElementById('correct-answers');
const wrongAnswers = document.getElementById('wrong-answers');
const timeSpent = document.getElementById('time-spent');
const showAnswersBtn = document.getElementById('show-answers-btn');
const restartBtn = document.getElementById('restart-btn');
const answersReview = document.getElementById('answers-review');
const avatarsContainer = document.getElementById('avatars-container');
const startWithPhilosopherBtn = document.getElementById('start-with-philosopher');
const selectedPhilosopherDisplay = document.getElementById('selected-philosopher-display');
const philosopherTweetElement = document.getElementById('philosopher-tweet');
const scoreBadgeElement = document.getElementById('score-badge');

// Test değişkenleri
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timer;
let seconds = 0;
let minutes = 0;
let selectedAnswer = null;
let selectedPhilosopher = null;
const QUESTION_COUNT = 10; // Her testte kaç soru olacağını belirtir

// Filozofları yükle
function loadPhilosophers() {
    avatarsContainer.innerHTML = '';
    philosopherAvatars.forEach(philosopher => {
        const avatarCard = document.createElement('div');
        avatarCard.className = 'avatar-card';
        avatarCard.setAttribute('data-philosopher', philosopher.name);

        avatarCard.innerHTML = `
            <span class="philosopher-power">${philosopher.power}</span>
            <img src="images/${philosopher.image}" alt="${philosopher.name}" onerror="this.src='https://via.placeholder.com/120x120?text=${philosopher.name}'">
            <h3>${philosopher.name}</h3>
            <p class="catchphrase">"${philosopher.catchphrase}"</p>
            <p class="description">${philosopher.description}</p>
        `;

        avatarCard.addEventListener('click', () => selectPhilosopher(philosopher));
        avatarsContainer.appendChild(avatarCard);
    });
}

// Filozofu seç
function selectPhilosopher(philosopher) {
    selectedPhilosopher = philosopher;

    // Tüm kartlardan seçim sınıfını kaldır
    document.querySelectorAll('.avatar-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Seçilen filozofun kartına seçim sınıfını ekle
    document.querySelector(`.avatar-card[data-philosopher="${philosopher.name}"]`).classList.add('selected');

    // Başla butonunu etkinleştir
    startWithPhilosopherBtn.disabled = false;
    startWithPhilosopherBtn.style.opacity = 1;
}

// Seçili filozofu görüntüle
function displaySelectedPhilosopher() {
    if (selectedPhilosopher) {
        selectedPhilosopherDisplay.innerHTML = `
            <img src="images/${selectedPhilosopher.image}" alt="${selectedPhilosopher.name}" onerror="this.src='https://via.placeholder.com/40x40?text=${selectedPhilosopher.name}'">
            <div class="selected-philosopher-info">
                <h4>${selectedPhilosopher.name}</h4>
                <p>"${selectedPhilosopher.catchphrase}"</p>
                <span class="philosopher-power">${selectedPhilosopher.power}</span>
            </div>
        `;
        selectedPhilosopherDisplay.style.display = 'flex';
    } else {
        selectedPhilosopherDisplay.style.display = 'none';
    }
}

// Filozof tweet'ini görüntüle
function displayPhilosopherTweet() {
    const randomTweet = getRandomPhilosopherTweet();

    philosopherTweetElement.innerHTML = `
        <div class="tweet-header">
            <img src="images/${randomTweet.philosopher.toLowerCase()}.png" alt="${randomTweet.philosopher}" onerror="this.src='https://via.placeholder.com/40x40?text=${randomTweet.philosopher}'">
            <div class="tweet-user-info">
                <h4>${randomTweet.philosopher}</h4>
                <span>${randomTweet.username}</span>
            </div>
        </div>
        <div class="tweet-content">
            ${randomTweet.tweet}
        </div>
        <div class="tweet-meta">
            <span><i class="fas fa-heart"></i> ${randomTweet.likes}</span>
            <span><i class="fas fa-retweet"></i> ${randomTweet.retweets}</span>
        </div>
    `;

    philosopherTweetElement.style.display = 'block';
}

// Filozof seçim ekranını göster
function showPhilosopherSelection() {
    // Ana sayfa görünümünü gizle
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.about').style.display = 'none';

    // Filozof seçim ekranını göster
    philosopherSelection.style.display = 'block';

    // Filozofları yükle
    loadPhilosophers();

    // Başla butonunu devre dışı bırak
    startWithPhilosopherBtn.disabled = true;
    startWithPhilosopherBtn.style.opacity = 0.5;
}

// Testi başlatan fonksiyon
function startTest() {
    // Filozof seçim ekranını gizle
    philosopherSelection.style.display = 'none';

    // Test bölümünü göster
    testSection.style.display = 'block';

    // Seçili filozofu görüntüle
    displaySelectedPhilosopher();

    // Rastgele soru seç
    currentQuestions = getRandomQuestions(QUESTION_COUNT);

    // İlk soruyu göster
    showQuestion(0);

    // Zamanlayıcıyı başlat
    startTimer();
}

// Soruyu gösteren fonksiyon
function showQuestion(index) {
    // Mevcut soru indeksini güncelle
    currentQuestionIndex = index;

    // Soru ve seçenek bilgilerini al
    const question = currentQuestions[index];

    // İlerleme çubuğunu güncelle
    updateProgressBar();

    // Soru numarasını güncelle
    questionNumber.textContent = `Soru ${index + 1}/${QUESTION_COUNT}`;

    // Soru metnini güncelle
    questionText.textContent = question.question;

    // Seçenekleri temizle ve yeniden oluştur
    optionsContainer.innerHTML = '';

    // Önce seçili cevabı sıfırla
    selectedAnswer = null;

    // Eğer kullanıcı bu soruya daha önce cevap verdiyse, o cevabı seçili göster
    if (userAnswers[currentQuestionIndex] !== undefined) {
        selectedAnswer = userAnswers[currentQuestionIndex].selectedOption;
    }

    // Seçenekleri oluştur
    const optionLetters = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';

        // Eğer kullanıcı bu soruya daha önce cevap verdiyse, seçili cevabı işaretle
        if (selectedAnswer === i) {
            optionElement.classList.add('selected');
        }

        optionElement.innerHTML = `
            <span class="option-prefix">${optionLetters[i]}</span>
            <span class="option-text">${option.text}</span>
        `;

        // Seçenek tıklama olayını ekle
        optionElement.addEventListener('click', () => selectOption(optionElement, i));

        optionsContainer.appendChild(optionElement);
    });

    // Sonraki butonunu güncelle
    updateNextButton();

    // Yeni bir filozof tweeti göster
    displayPhilosopherTweet();

    // Varsa daha önceki "philosopher-reaction" elementini kaldır
    const existingReaction = document.querySelector('.philosopher-reaction');
    if (existingReaction) {
        existingReaction.remove();
    }

    // Soru alanındaki bulanıklığı kaldır
    const questionContainer = document.querySelector('.question-container');
    if (questionContainer.classList.contains('blur')) {
        questionContainer.classList.remove('blur');
    }
}

// Seçenek seçme fonksiyonu
function selectOption(optionElement, optionIndex) {
    // Önceki seçili seçeneği kaldır
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));

    // Yeni seçeneği seç
    optionElement.classList.add('selected');
    selectedAnswer = optionIndex;

    // Kullanıcı cevaplarını güncelle
    if (userAnswers[currentQuestionIndex] === undefined) {
        userAnswers[currentQuestionIndex] = {
            questionId: currentQuestions[currentQuestionIndex].id,
            selectedOption: optionIndex
        };
    } else {
        userAnswers[currentQuestionIndex].selectedOption = optionIndex;
    }

    // Seçenek doğru mu kontrol et ve doğru/yanlış bilgisini sakla
    const correctOption = currentQuestions[currentQuestionIndex].options.findIndex(option => option.isCorrect);
    userAnswers[currentQuestionIndex].isCorrect = (optionIndex === correctOption);

    // Sonraki butonunu güncelle
    updateNextButton();
}

// Yanlış cevap tepkisi göster
function showWrongAnswerReaction() {
    // Eğer zaten bir reaksiyon gösteriliyorsa, onu kaldır
    const existingReaction = document.querySelector('.philosopher-reaction');
    if (existingReaction) {
        existingReaction.remove();
    }

    // Soru alanını bulanıklaştır
    const questionContainer = document.querySelector('.question-container');
    questionContainer.classList.add('blur');

    // Yeni bir reaksiyon oluştur
    const reaction = document.createElement('div');
    reaction.className = 'philosopher-reaction';
    reaction.textContent = getRandomWrongAnswerReaction();

    // Reaksiyonu soruya ekle (artık üzerinde gösterilecek)
    questionContainer.appendChild(reaction);

    // Reaksiyonu daha uzun süre göster (bulanıklık süresi boyunca)
    // 3.5 saniye sonra kaldır ve bulanıklığı temizle
    setTimeout(() => {
        reaction.remove();
        questionContainer.classList.remove('blur');
    }, 3500);
}

// Sonraki butonu durumunu güncelleme
function updateNextButton() {
    if (currentQuestionIndex === QUESTION_COUNT - 1) {
        nextBtn.textContent = 'Testi Bitir';
    } else {
        nextBtn.textContent = 'Sonraki Soru';
    }

    // Eğer kullanıcı bir seçenek seçtiyse butonu etkinleştir
    if (selectedAnswer !== null) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = 1;
    } else {
        // Kullanıcı henüz bir seçenek seçmemişse butonu devre dışı bırak
        nextBtn.disabled = true;
        nextBtn.style.opacity = 0.5;
        // Bir açıklama göster
        nextBtn.title = "Lütfen önce bir seçenek işaretleyin";
    }
}

// İlerleme çubuğunu güncelleme
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / QUESTION_COUNT) * 100;
    progressBar.style.width = `${progress}%`;
}

// Zamanlayıcıyı başlatma
function startTimer() {
    seconds = 0;
    minutes = 0;

    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        // Zamanlayıcıyı güncelle
        updateTimer();
    }, 1000);
}

// Zamanlayıcıyı güncelleme
function updateTimer() {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    timerElement.textContent = `Süre: ${formattedMinutes}:${formattedSeconds}`;
}

// Zamanlayıcıyı durdurma
function stopTimer() {
    clearInterval(timer);
}

// Testi bitirme ve sonuçları gösterme
function endTest() {
    // Zamanlayıcıyı durdur
    stopTimer();

    // Test bölümünü gizle
    testSection.style.display = 'none';

    // Sonuçları hesapla
    calculateResults();

    // Sonuçları göster
    resultsSection.style.display = 'block';

    // Başarı rozetini göster
    displayScoreBadge();

    // Scroll to top
    window.scrollTo(0, 0);
}

// Başarı rozetini göster
function displayScoreBadge() {
    const evaluation = getScoreEvaluation(score);

    scoreBadgeElement.innerHTML = `
        <img src="images/${evaluation.badge}" alt="${evaluation.title}" class="badge-image" onerror="this.src='https://via.placeholder.com/120x120?text=Rozet'">
        <h3 class="badge-title">${evaluation.title}</h3>
        <p class="badge-message">${evaluation.message}</p>
    `;

    scoreBadgeElement.style.display = 'flex';
}

// Sonuçları hesaplama
function calculateResults() {
    score = 0;
    let wrong = 0;

    // Doğru cevapları say
    userAnswers.forEach((answer, index) => {
        const correctOption = currentQuestions[index].options.findIndex(option => option.isCorrect);
        if (answer.selectedOption === correctOption) {
            score++;
        } else {
            wrong++;
        }
    });

    // Sonuç metinlerini güncelle
    scoreText.textContent = `${score}/${QUESTION_COUNT}`;
    correctAnswers.textContent = score;
    wrongAnswers.textContent = wrong;

    // Geçen süreyi göster
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    timeSpent.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// Cevapları inceleme
function showAnswersReview() {
    // Cevaplar inceleme panelini göster
    answersReview.style.display = 'block';
    showAnswersBtn.style.display = 'none';

    // İnceleme panelini temizle
    answersReview.innerHTML = '';

    // Her soru için inceleme ekle
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] ? userAnswers[index].selectedOption : -1;
        const correctAnswer = question.options.findIndex(option => option.isCorrect);

        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-question';

        let reviewHTML = `
            <h3>Soru ${index + 1}: ${question.question}</h3>
            <div class="review-options">
        `;

        const optionLetters = ['A', 'B', 'C', 'D'];
        question.options.forEach((option, i) => {
            let optionClass = '';

            if (userAnswer === i && correctAnswer === i) {
                optionClass = 'correct';
            } else if (userAnswer === i && correctAnswer !== i) {
                optionClass = 'wrong';
            } else if (correctAnswer === i) {
                optionClass = 'correct';
            }

            reviewHTML += `
                <div class="option ${optionClass}">
                    <span class="option-prefix">${optionLetters[i]}</span>
                    <span class="option-text">${option.text}</span>
                </div>
            `;
        });

        reviewHTML += `</div>
            <p class="explanation"><strong>Açıklama:</strong> ${question.explanation}</p>
        `;

        reviewElement.innerHTML = reviewHTML;
        answersReview.appendChild(reviewElement);
    });

    // Sayfayı inceleme paneline kaydır
    answersReview.scrollIntoView({ behavior: 'smooth' });
}

// Testi yeniden başlatma
function restartTest() {
    // Değişkenleri sıfırla
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedAnswer = null;
    selectedPhilosopher = null;

    // Sonuç bölümünü gizle
    resultsSection.style.display = 'none';
    answersReview.style.display = 'none';
    showAnswersBtn.style.display = 'block';

    // Ana sayfayı göster
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.about').style.display = 'block';

    // Sayfayı en üste kaydır
    window.scrollTo(0, 0);
}

// Event Listeners
startTestBtn.addEventListener('click', showPhilosopherSelection);

startWithPhilosopherBtn.addEventListener('click', startTest);

nextBtn.addEventListener('click', () => {
    // "Sonraki Soru" butonuna tıklandığında
    const questionContainer = document.querySelector('.question-container');

    // Buton devre dışı bırak (tekrar tıklamayı önlemek için)
    nextBtn.disabled = true;
    nextBtn.style.opacity = 0.5;

    // Eğer kullanıcının cevabı yanlışsa tepki göster
    if (currentQuestionIndex < userAnswers.length && userAnswers[currentQuestionIndex] &&
        userAnswers[currentQuestionIndex].isCorrect === false) {

        showWrongAnswerReaction();

        // Tepkinin gösterilmesi için daha uzun süre bekleyip sonra bir sonraki soruya geç
        setTimeout(() => {
            proceedToNextQuestion();
            // İşlem tamamlandıktan sonra buton tekrar etkinleştir
            nextBtn.disabled = false;
            nextBtn.style.opacity = 1;
        }, 3700);
    } else {
        // Doğru cevap verilmişse direkt sonraki soruya geç
        proceedToNextQuestion();
        // İşlem tamamlandıktan sonra buton tekrar etkinleştir
        nextBtn.disabled = false;
        nextBtn.style.opacity = 1;
    }
});

showAnswersBtn.addEventListener('click', showAnswersReview);
restartBtn.addEventListener('click', restartTest);

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Sonuç ve test bölümlerini gizle
    testSection.style.display = 'none';
    resultsSection.style.display = 'none';
    philosopherSelection.style.display = 'none';
    philosopherTweetElement.style.display = 'none';

    // Sonraki butonu başlangıçta devre dışı bırak
    nextBtn.disabled = true;
    nextBtn.style.opacity = 0.5;

    // Navigasyon linklerini seç
    const navLinks = document.querySelectorAll('.nav-links a');

    // Logo linkleri için event listener ekle (header ve footer'daki logolar)
    document.querySelectorAll('.logo a').forEach(logoLink => {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();

            // Ana sayfaya dönme işlemini gerçekleştir
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            updateActiveNavLink(navLinks, 0);

            // Test veya sonuç sayfasında ise
            if (testSection.style.display === 'block' ||
                resultsSection.style.display === 'block' ||
                philosopherSelection.style.display === 'block') {

                // Eğer test devam ediyorsa, kullanıcıya uyarı göster
                if (testSection.style.display === 'block') {
                    if (confirm('Testi yarıda bırakmak istediğinize emin misiniz? İlerlemeniz kaybolacaktır.')) {
                        // Kullanıcı onaylarsa testi sıfırla ve ana sayfaya dön
                        resetTest();
                    }
                } else {
                    // Sonuç veya filozof seçim sayfasındaysa direkt ana sayfaya dön
                    resetTest();
                }
            }
        });
    });

    // Navigasyon linkleri için event listener'lar ekle
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();

                // Ana sayfaya dönme işlemini gerçekleştir
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                // Ana sayfa linkine tıklandığında her zaman ana sayfaya dön
                if (testSection.style.display === 'block' ||
                    resultsSection.style.display === 'block' ||
                    philosopherSelection.style.display === 'block') {

                    // Test ekranındaysa uyarı göster
                    if (testSection.style.display === 'block') {
                        if (confirm('Testi yarıda bırakmak istediğinize emin misiniz? İlerlemeniz kaybolacaktır.')) {
                            resetTest();
                        }
                    } else {
                        // Diğer ekranlarda (sonuç veya filozof seçim) doğrudan ana sayfaya dön
                        resetTest();
                    }
                }
            }
            updateActiveNavLink(navLinks, index);
        });
    });

    // Sayfa kaydırma olayını dinle ve aktif linki güncelle
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Bölümleri seç
        const sections = [
            document.querySelector('.hero'),
            document.querySelector('#about')
        ];

        // Görünür bölümü belirle
        let activeSection = 0;
        sections.forEach((section, index) => {
            if (section && scrollPosition >= section.offsetTop - 200) {
                activeSection = index;
            }
        });

        // Aktif navigasyon linkini güncelle
        updateActiveNavLink(navLinks, activeSection);
    });
});

// Aktif navigasyon linkini güncelleyen yardımcı fonksiyon
function updateActiveNavLink(links, activeIndex) {
    links.forEach(link => link.classList.remove('active'));
    links[activeIndex].classList.add('active');
}

// Test ve sonuçları sıfırlayıp ana sayfaya dönen fonksiyon
function resetTest() {
    // Test veya sonuç bölümünü gizle
    testSection.style.display = 'none';
    resultsSection.style.display = 'none';
    philosopherSelection.style.display = 'none';

    // Test değişkenlerini sıfırla
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedAnswer = null;
    selectedPhilosopher = null;

    // Zamanlayıcıyı durdur
    if (timer) {
        stopTimer();
    }

    // Sonuç bölümünde cevapları gizle
    answersReview.style.display = 'none';
    showAnswersBtn.style.display = 'block';

    // Ana sayfayı göster
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.about').style.display = 'block';
}

// Sonraki soruya geçiş fonksiyonu
function proceedToNextQuestion() {
    if (currentQuestionIndex < QUESTION_COUNT - 1) {
        // Sonraki soruya geç
        showQuestion(currentQuestionIndex + 1);
    } else {
        // Test bitti
        endTest();
    }
} 
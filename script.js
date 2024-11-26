
// Niz sa pitanjima, odgovorima i slikama
const questions = [
   
    {
      question: "Papio anubis je majmun iz Starog sveta koji se može pohvaliti najrasprostranjenijim staništem u porodici pavijana. Na slici je prikazan?",
      image: "maslinasti pavijan.jpeg", // Putanja do slike za pitanje
      options: ["Braon kapucini", "Maslinasti pavijan", "Japanski makaki"],
      correct: "Maslinasti pavijan"
      
    },
    {
      question: "Rhinopithecus rokellana je vrsta 'gold' majmuna koji se nalaze u planinskim šumama na nadmorskim visinama od 1.600 do 4.000 metara. Na slici je?",
      image: "majmun sa zlatnim nosem.webp", // Putanja do slike za pitanje
      options: ["Majmun sa prnjastim nosom", "Mali marmoset", "Majmun sa zlatnim nosom"],
      correct: "Majmun sa zlatnim nosom"
    },
    {
      question: "Callithrik pigmaea je najmanja vrsta majmuna na svetu.Zbog svoje male veličine živi u gustim prašumama sa puno skrovišta. Na slici je:)?",
      image: "mali marmoset.jpg", // Putanja do slike za pitanje
      options: ["Mali marmoset", "Mandril", "Rolovai majmun"],
      correct: "Mali marmoset"
    },
    {
      question: "„Ateles Geoffroii je jedna vrsta spider majmuna koji imaju izuzetno duge repove koje koriste za vešanje sa drveća ili za branje voća. Na slici je?",
      image: "pauk majmun.webp", // Putanja do slike za pitanje
      options: [ "Car Tamarin", "Gelada", "Paukoliki majmun"],
      correct: "Paukoliki majmun"
    },
    {
    question: "Saguinus imperator je vrsta majmuna koja je dobila ime po nemačkom caru Vilhemu,koji je nosio podignute brkove. Na slici je ?",
      image: "tamarin.webp", // Putanja do slike za pitanje
      options: ["Beloliki Saki", "Tamarin car", "Barbarski makaki"],
      correct: " Tamarin car"
    },
    {
        question: "Aotus vociferans spiks je jedna  vrsta majmuna koja se budi 15 minuta nakon zalaska Sunca i vraća u krevet pre izlaska Sunca. Na slici je?",
          image: "spiksov majmun.jpg", // Putanja do slike za pitanje
          options: ["Spiks","Mandril",  "Zapadni kolobus"],
          correct: "Spiks"
        },
        {
            question: "Nasalis larvatus jedna vrsta big nose majmuna, pronađen samo na azijskom ostrvu Borneo. Na slici je?",
              image: "majmun sa dugackim nosem.avif", // Putanja do slike za pitanje
              options: ["Rolovai", "Gelada", "Majmun sa dugačkim nosom"],
              correct: "Majmun sa dugačkim nosom"
            },
            {
                question: "Cacajao calvus je vrsta majmuna koja se lako prepoznaje po samom izgledu glave. Na slici je?",
                  image: "celavi ukari.jpg", // Putanja do slike za pitanje
                  options: ["Ćelavi Ukari", "Mandril", "Urlikavi",],
                  correct: "Ćelavi Ukari"
                },
                {
                     question: "Macaca fuscata, poznati kao snežni majmuni, naseljavaju toplu i hladnu klimu u vulkanskim regionima Honšua, Japan. Na slici je? )?",
                      image: "japanski makaki.webp", // Putanja do slike za pitanje
                      options: ["Barbarski mermerin", "Japanski makaki", "Šipanza"],
                      correct: "Japanski makaki"
                    },
                    {
                        question: "Theropithecus gelada pripadaju vrsti najkopnenijih majmuna na svetu. Na slici je?",
                          image: "gelada.jpg", // Putanja do slike za pitanje
                          options: ["Zapadni kolobus", "Rolovai majmun", "Gelada"],
                          correct: "Gelada"
                        },
                        

                            {
                                question: "Pithecia pithecia se odmah mogu primetiti po jedinstvenom licu bele boje. Na slici je?",
                                  image: "beloliki saki.jpg", // Putanja do slike za pitanje
                                  options: [ "Rolovai", "Beloliki Saki", "Gold nose"],
                                  correct: "Beloliki Saki"
                                },
                                {
                                    question: "Rhinopithecus bieti je vrsta majmuna koja je poznata po malom nosiću u obliku tačkice. Na slici je?",
                                      image: "prnjasti majmun.jpg", // Putanja do slike za pitanje
                                      options: ["Rolovai", "Majmun sa zlatnim nosom", "Prnjasti majmun"],
                                      correct: "Prnjasti majmun"
                                    },
                                    {
                                        question: "Cercopithecus rolovai je vrsta majmuna koja ima specificne kesice na obrazima za čuvanje hrane. Na slici je?",
                                          image: "rolovai majmun.webp", // Putanja do slike za pitanje
                                          options: ["Kesasti majmun", "Rolovai majmun", "Spiks"],
                                          correct: "Rolovai majmun"
                                        },
                                        {
                                            question: "Alouatta caraia ima uvećanu hioidnu kost u grlu koja pomaže u jačini urlika koji se može čuti na udaljenosti do 5 km. Na slci je?",
                                              image: "urlikavi majmun.jpg", // Putanja do slike za pitanje
                                              options: ["Big boss",  "Barbarski makaki", "Urlikavi majmun"],
                                              correct: "7"
                                            },
                                            {
                                                question: "Mandrillus sphink je najveći majmun na svetu koji se odlikuje maslinasto zelenim telom i crvenom prugom niz njušku. Na slici je?",
                                                  image: "mandril.jpg", // Putanja do slike za pitanje
                                                  options: ["Spiks", "Mandril", "Šipanza"],
                                                  correct: "Mandril"
                                                },
                                                {
                                                    question: " Cebus apella, vrsta majmuna koji je glavni akter u omiljenim serijama ili filmovima, imaj naziv druge vrste toplog napitka. Na slici je?",
                                                      image: "kapucini.jpg", // Putanja do slike za pitanje
                                                      options: ["Gorila", "Avanturista", "Kapućini"],
                                                      correct:  "Kapućini"
                                                    },
  ];
  

// DOM elementi
const loginContainer = document.getElementById('login-container');
const quizContainer = document.getElementById('quiz-container');
const participantNameInput = document.getElementById('participant-name');
const startQuizBtn = document.getElementById('start-quiz-btn');
const resultContainer = document.getElementById('result');

// Globalne promenljive za stanje kviza
let participantName = '';

let timer = null;
let currentQuestionIndex = 0;
let score = 0;
let allScores = []; // Niz za čuvanje bodova svih igrača

// Event listener za početak kviza
startQuizBtn.addEventListener('click', function () {
  participantName = participantNameInput.value.trim();
  
  if (participantName === '') {
    alert('Molimo unesite ime pre početka kviza.');
  } else {
    loginContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    startQuiz();
  }
});

// Funkcija za pokretanje kviza
function startQuiz() {
  if (currentQuestionIndex >= questions.length) {
    showFinalMessage();
    return;
  }

  resetQuestionState(); // Resetovanje stanja za novo pitanje
  const currentQuestion = questions[currentQuestionIndex];

  // Prikaz pitanja, slike i opcija
  document.getElementById('question').textContent = currentQuestion.question;
  document.getElementById('question-image').src = currentQuestion.image;
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(button, option === currentQuestion.correct);
    optionsContainer.appendChild(button);
  });

  startTimer();
}

// Funkcija za pokretanje tajmera
function startTimer() {
  clearTimer(); // Osiguraj da nema aktivnih tajmera
  timeRemaining = 15;
  document.getElementById('time').textContent = timeRemaining;

  timer = setInterval(() => {
    timeRemaining--;
    document.getElementById('time').textContent = timeRemaining;

    if (timeRemaining <= 0) {
      clearTimer();
      showTimeoutMessage();
    }
  }, 1000);
}

// Funkcija za proveru odgovora
function checkAnswer(button, isCorrect) {
  clearTimer();
  const result = document.getElementById('result');

  if (isCorrect) {
    score++;
    result.textContent = `Tačno! Osvojeni bodovi: ${score}`;
    result.style.color = "green";
  } else {
    result.textContent = `Netačno. Osvojeni bodovi: ${score}`;
    result.style.color = "red";
  }

  disableButtons();
  setTimeout(nextQuestion, 2000);
}

// Funkcija za prikaz poruke kada istekne vreme
function showTimeoutMessage() {
  const result = document.getElementById('result');
  result.textContent = "Vreme je isteklo! Pokušaj sledeće pitanje.";
  result.style.color = "orange";

  disableButtons();
  setTimeout(nextQuestion, 2000);
}

// Funkcija za prelazak na sledeće pitanje
function nextQuestion() {
  currentQuestionIndex++;
  startQuiz();
}

// Funkcija za resetovanje stanja pitanja
function resetQuestionState() {
  clearTimer();
  document.getElementById('result').textContent = "";
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = "";
}

// Funkcija za zaustavljanje tajmera
function clearTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

// Funkcija za onemogućavanje dugmadi
function disableButtons() {
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach(button => {
    button.disabled = true;
    button.style.backgroundColor = "#007bff";
    button.style.color = "#fff";
  });
}

// Funkcija za prikaz završne poruke
function showFinalMessage() {
  document.getElementById('question').textContent = 
    `Kviz je završen! Učesnik: ${participantName}, ukupno osvojenih bodova: ${score}.`;
  
  document.getElementById('question-image').src = "";
  document.getElementById('options').innerHTML = "";
  document.getElementById('time').textContent = "";
  document.getElementById('result').textContent = "";

  // Čuvanje rezultata igrača
  allScores.push({ name: participantName, score: score });

  // Prikaz rezultata svih učesnika
  const scoresList = allScores
    .map((entry, index) => `<li>${index + 1}. ${entry.name}: ${entry.score} bodova</li>`)
    .join('');
  resultContainer.innerHTML = `<h3>Kviz je završen!</h3><ul>${scoresList}</ul>`;
}

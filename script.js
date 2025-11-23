
// Niz sa pitanjima, odgovorima i slikama
const questions = [
   
    {
      question: "Alfa heliks se stabilizuje intramolekulskim vodoničnim vezama između bliskih?",
      image: "alpfa heliks.jpg", // Putanja do slike za pitanje
      options: ["polarnih bočnih ostataka aminokiselina", "peptidnih grupa", "hidrofobnih interakcija"],
      correct: "peptidnih grupa"
      
    },
    {
      question: "Na slici je prikazan mioglobin koji gradi strukturu?",
      image: "myoglobin.jpg", // Putanja do slike za pitanje
      options: ["tercijarnu", "kvaternarnu", "sekundarnu"],
      correct: "tercijarnu"
    },
    {
      question: "Serum albumin je globularni protein koji se može naći u ?",
      image: "serum albumin.jpg", // Putanja do slike za pitanje
      options: ["jedru", "vezivnom tkivu", "krvnoj plazmi"],
      correct: "krvnoj plazmi"
    },
    {
      question: "Kovrdžavu kosu gradi protein koji ima dugačka vlakna dodatno stabilizovana?",
      image: "keratin-kosa.jpg", // Putanja do slike za pitanje
      options: [ "hidrofobnim ostacima aminokiselina", "disulfidnim vezama", "peptidnim grupama"],
      correct: "disulfidnim vezama"
    },
    {
    question: "Hemoglobin je protein koji ima crvenu boju koja potiče od hromofore ?",
      image: "hemoglobin.png", // Putanja do slike za pitanje
      options: ["FAD", "NAD", "HEM"],
      correct: "HEM"
    },
    {
        question: "Biuretska reakcija je kvalitatativno dokazna za sadržaj ",
          image: "biuret test.webp", // Putanja do slike za pitanje
          options: ["nukleinskih kiselina","peptida","masti"],
          correct: "peptida"
        },
        {
            question: "Dekapeptid gramicidin S koji se koristi kao antibiotik spada u grupu?",
              image: "gramicidin s.png", // Putanja do slike za pitanje
              options: ["oligopeptida", "proteina", "polipeptida"],
              correct: "oligopeptida"
            },
            {
                question: "Enzim RNK polimeraza koji učestvuje u sintezi RNK sadrži?",
                  image: "rnk-polimeraza.png", // Putanja do slike za pitanje
                  options: ["neproteinsku komponentu RNK", "neproteinsku komponentu DNK", "samo proteinske komponente",],
                  correct: "neproteinsku komponentu RNK"
                },
                {
                     question: "Feritin je protein koji skladišti?",
                      image: "feritin.png", // Putanja do slike za pitanje
                      options: ["masne kiseline", "jone gvožđa (III)", "jone fluora"],
                      correct: "jone gvožđa (III)"
                    },
                    {
                        question: "Glutation u svom tripeptidnom nizu pored ostataka glutaminske kiseline i glicina sadrži ostatke?",
                          image: "glutation.png", // Putanja do slike za pitanje
                          options: ["cisteina", "metionina", "serina"],
                          correct: "cisteina"
                        },
                        

                            {
                                question: "Signalni proteini imaju funkciju da?",
                                  image: "insulin.jpeg", // Putanja do slike za pitanje
                                  options: [ "skladište molekule ili jone", "prenose signale", "vezuju signalne molekule"],
                                  correct: "prenose signale"
                                },
                                {
                                    question: "Proteini koji deluju u citosolu ili u organelama pripadaju grupi proteina?",
                                      image: "celijska membrana.jpg", // Putanja do slike za pitanje
                                      options: ["ćelijskih", "vanćelijskih", "oligomernih"],
                                      correct: "ćelijskih"
                                    },
                                    {
                                        question: "Srpasta anemija nastaje u beta lancu hemoglobina kada se umesto glutaminske aminokiseline ugradi ?",
                                          image: "srpasta anemija.jpg", // Putanja do slike za pitanje
                                          options: ["serin", "histidin", "valin"],
                                          correct: "valin"
                                        },

                                        {
                                            question: "Bočni ostatak jedne od navednih aminokiselina može graditi vodonične veze?",
                                              image: "", // Putanja do slike za pitanje
                                              options: ["fenilalanin",  "tirozin", "triptofan"],
                                              correct: "tirozin"
                                            },
                                            {
                                                question: "Jonske veze u tercijarnoj strukturi proteina mogu graditi naelektrisani bočni nizovi aminokiseline",
                                                  image: "", // Putanja do slike za pitanje
                                                  options: ["leucin", "lizin", "valin"],
                                                  correct: "lizin"
                                                },
                                                {
                                                    question: "Kada dodatkom vode se formira hidratni sloj oko istaloženog molekula proteina, pri čemu se nastale naelektrisane čestice odbijaju i talog se rastvara time se objašnjava proces?",
                                                      image: "", // Putanja do slike za pitanje
                                                      options: ["peptizacije", "koagulacije", "kavitacije"],
                                                      correct:  "peptizacije"
                                                    },

                                                    {
                                                    question: "Prilikom procesa denaturacije proteina narušavaju se viši nivoi strukture a očuva se samo?",
                                                      image: "denaturacija.jpg", // Putanja do slike za pitanje
                                                      options: ["sekundarna", "primarna", "tercijarna"],
                                                      correct:  "primarna"
                                                    },

                                                    {
                                                    question: "Hemoglobin spada u proteine?",
                                                      image: "hemoglobin.png", // Putanja do slike za pitanje
                                                      options: ["tetramerne", "trimerne", "oktamerne"],
                                                      correct:  "tetramerne"
                                                    },
                                                     {
                                                    question: "Izoelektrična tačka je pH vrednost na kojoj je rastvorljivost proteina?",
                                                      image: "izoelektricna pH.png", // Putanja do slike za pitanje
                                                      options: ["najveća", "delimično slaba", "najslabija"],
                                                      correct:  "najslabija"
                                                    },
                                                    {
                                                    question: "Histoni koji stabilizuju DNK strukturu sadrže?",
                                                      image: "histoni.png", // Putanja do slike za pitanje
                                                      options: ["samo aminokiselinske ostatke", "DNK prostetičnu grupu", "histaminske molekule"],
                                                      correct:  "samo aminokiselinske ostatke"
                                                    },
                                                    
                                                    {
                                                    question: "Receptori su molekuli koji?",
                                                      image: "receptori.jpg", // Putanja do slike za pitanje
                                                      options: ["prenose signale", "vezuju signalne molekule", "transportuju molekule ili jone"],
                                                      correct:  "vezuju signalne molekule"
                                                    },
                                                     {
                                                    question: "Informacija o redosledu aminokiselina svakog proteina sadržana je u redosledu genetskog koda nukelotida?",
                                                      image: "DNK-slika.jpg", // Putanja do slike za pitanje
                                                      options: ["DNK", "RNK", "DNK i RNK"],
                                                      correct:  "DNK"
                                                    },
                                                     {
                                                    question: "Na slici je prikazana struktura?",
                                                      image: "peptidi.png", // Putanja do slike za pitanje
                                                      options: ["tripeptida ala-ser-gly", "tetrapeptida val-gly-ser-ala", "tetrapeptida ile-ser-gly-val"],
                                                      correct:  "tetrapeptida val-gly-ser-ala"
                                                    },
                                                    {
                                                    question: "Koji nivo strukture proteina će biti narušen delovanjem leka koji selektivno raskida kovalentne veze između disulfidnih bočnih ostataka nesusednih aminokiselina u polipeptidnom lancu?",
                                                      image: "", // Putanja do slike za pitanje
                                                      options: ["primarni", "sekundarni", "tercijarni"],
                                                      correct:  "tercijarni"
                                                    },
                                                     {
                                                    question: "Složeni protein sadrži ostatke ugljenih hidrata, takav protein pripada grupi?",
                                                      image: "glikoproteini.jpg", // Putanja do slike za pitanje
                                                      options: ["lipoproteina", "glikoproteina", "nukleoproteina"],
                                                      correct:  "glikoproteina"
                                                    },
                                                    {
                                                    question: "Bolest ludih krava je posledica pogrešnog uvijanja strukture proteina?",
                                                      image: "bolest ludih krava.jpg", // Putanja do slike za pitanje
                                                      options: ["primarne", "tercijarne", "sekundarne"],
                                                      correct:  "sekundarne"
                                                    },
                                                    {
                                                    question: "Kolagen pripada grupi?",
                                                      image: "kolagen.jpg", // Putanja do slike za pitanje
                                                      options: ["skleroproteina", "nukleoproteina", "hromoproteina"],
                                                      correct:  "skleroproteina"
                                                    },{
                                                    question: "Elektroforeza je metoda razdvajanja proteina na osnovu?",
                                                      image: "elektroforeza.jpg", // Putanja do slike za pitanje
                                                      options: ["gustine", "brzine naelektrisanih čestica", "molekulske mase"],
                                                      correct:  "brzine naelektrisanih čestica"
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
  timeRemaining = 30;
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

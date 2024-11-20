// Niz sa pitanjima, odgovorima i slikama
const questions = [
   
    {
      question: "Papio anubis je majmun iz Starog sveta koji se može pohvaliti najrasprostranjenijim staništem u porodici pavijana. Na slici je prikazan?",
      image: "maslinasti pavijan.jpeg", // Putanja do slike za pitanje
      options: ["Braon kapucini", "Maslinasti pavijan", "Japanski makaki"],
      correct: "Maslinasti pavijan"
      
    },
    {
      question: "Rhinopithecus rokellana je vrsta 'gold' majmuna koji se nalaze u planinskim šumama na nadmorskim visinama od 1.600 do 4.000 metara nadmorske visine. Na slici je?",
      image: "majmun sa zlatnim nosem.webp", // Putanja do slike za pitanje
      options: ["Majmun sa prnjastim nosom", "Mali marmoset", "Majmun sa zlatnim nosom"],
      correct: "Majmun sa zlatnim nosom"
    },
    {
      question: "Callithrik pigmaea je najmanja vrsta majmuna na svetu.Zbog svoje male veličine žive u gustim prašumama sa puno skrovišta. Na slici je:)?",
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
      options: ["Beloliki Saki", "Tamarin-car", "Barbarski makaki"],
      correct: " Tamarin-car"
    },
    {
        question: "Aotus vociferans spiks je jedna  vrsta majmuna koja se budi 15 minuta nakon zalaska sunca i vraća u krevet pre izlaska sunca. Na slici je:)?",
          image: "spiksov majmun.jpg", // Putanja do slike za pitanje
          options: ["Mandril", "Majmun-spiks", "Zapadni kolobus"],
          correct: "7"
        },
        {
            question: "Nasalis larvatus jedna vrsta big nose majmuna, pronađen samo na azijskom ostrvu Borneo. Na slici je?",
              image: "majmun sa dugackim nosem.avif", // Putanja do slike za pitanje
              options: ["Rolovai", "Gelada", "Majmun sa dugačkim nosom"],
              correct: "Majmun sa dugačkim nosom"
            },
            {
                question: "Cacajao calvus vrsta majmuna koja se lako prepoznaje po samom izgledu glave.)?",
                  image: "celavi ukari.jpg", // Putanja do slike za pitanje
                  options: ["Ćelavi Ukari", "Mandril", "Urlikavi",],
                  correct: "Ćelavi Ukari"
                },
                {
                    question: "Macaca fuscata, poznati kao snežni majmuni)?",
                      image: "japanski makaki.webp", // Putanja do slike za pitanje
                      options: ["5", "6", "7", "8"],
                      correct: "7"
                    },
                    {
                        question: "Koliko kontinenata se nalazi na slici?",
                          image: "gelada.jpg", // Putanja do slike za pitanje
                          options: ["5", "6", "7", "8"],
                          correct: "7"
                        },
                        {
                            question: "Koliko kontinenata se nalazi na slici?",
                              image: "crveni kolobus.jpg", // Putanja do slike za pitanje
                              options: ["5", "6", "7", "8"],
                              correct: "7"
                            },
                            {
                                question: "Koliko kontinenata se nalazi na slici?",
                                  image: "beloliki saki.jpg", // Putanja do slike za pitanje
                                  options: ["5", "6", "7", "8"],
                                  correct: "7"
                                },
                                {
                                    question: "Koliko kontinenata se nalazi na slici?",
                                      image: "prnjasti majmun.jpg", // Putanja do slike za pitanje
                                      options: ["5", "6", "7", "8"],
                                      correct: "7"
                                    },
                                    {
                                        question: "Koliko kontinenata se nalazi na slici?",
                                          image: "rolovai majmun.webp", // Putanja do slike za pitanje
                                          options: ["5", "6", "7", "8"],
                                          correct: "7"
                                        },
                                        {
                                            question: "Koliko kontinenata se nalazi na slici?",
                                              image: "urlikavi majmun.jpg", // Putanja do slike za pitanje
                                              options: ["5", "6", "7", "8"],
                                              correct: "7"
                                            },
                                            {
                                                question: "Koliko kontinenata se nalazi na slici?",
                                                  image: "mandril.jpg", // Putanja do slike za pitanje
                                                  options: ["5", "6", "7", "8"],
                                                  correct: "7"
                                                },
                                                {
                                                    question: "Koliko kontinenata se nalazi na slici?",
                                                      image: "kapucini.jpg", // Putanja do slike za pitanje
                                                      options: ["5", "6", "7", "8"],
                                                      correct: "7"
                                                    },
  ];
  
  let timeRemaining = 10;
  let timer;
  let currentQuestionIndex = 0;
  let score = 0; // Bodovi igrača
  
  // Funkcija za pokretanje kviza sa novim pitanjem
  function startQuiz() {
    timeRemaining = 10;
    document.getElementById('time').textContent = timeRemaining;
    document.getElementById('result').textContent = "";
  
    if (currentQuestionIndex >= questions.length) {
      showFinalMessage();
      return;
    }
  
    const currentQuestion = questions[currentQuestionIndex];
    
    // Prikaz slike, pitanja i opcija
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('question-image').src = currentQuestion.image; // Prikaz slike
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
    timer = setInterval(() => {
      const timeDisplay = document.getElementById('time');
      timeRemaining -= 1;
      timeDisplay.textContent = timeRemaining;
  
      if (timeRemaining <= 0) {
        clearInterval(timer);
        showTimeoutMessage();
      }
    }, 1000);
  }
  
  // Funkcija za prikaz poruke kada istekne vreme
  function showTimeoutMessage() {
    const result = document.getElementById('result');
    result.textContent = "Vreme je isteklo! Pokušaj sledeće pitanje.";
    result.style.color = "orange";
  
    disableButtons();
    
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  }
  
  // Funkcija za proveru odgovora
  function checkAnswer(button, isCorrect) {
    clearInterval(timer);
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
  
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  }
  
  // Funkcija za onemogućavanje dugmadi
  function disableButtons() {
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => {
      button.disabled = true;
      button.style.backgroundColor = "#007bff";
      button.style.color = "#fff";
    });
  }
  
  // Funkcija za prelazak na sledeće pitanje
  function nextQuestion() {
    currentQuestionIndex++;
    startQuiz();
  }
  
  // Funkcija za prikaz završne poruke
  function showFinalMessage() {
    document.getElementById('question').textContent = `Kviz je završen! Ukupno osvojenih bodova: ${score}`;
    document.getElementById('question-image').src = ""; // Uklanja sliku
    document.getElementById('options').innerHTML = "";
    document.getElementById('timer').textContent = "";
    document.getElementById('result').textContent = "";
  }
  const totalScoreElement = document.getElementById('total-score');

  // Pretpostavimo da čuvaš bodove svakog igrača u nizu (može biti deo igre)
  let allScores = []; // Niz koji čuva bodove svih igrača

  // Funkcija koja dodaje rezultat igrača na kraju igre
  function addPlayerScore(score) {
    allScores.push(score); // Dodaj bodove trenutnog igrača u niz
    updateTotalScore(); // Ažuriraj ukupan rezultat
  }

  // Funkcija za prikaz ukupnog rezultata
  function updateTotalScore() {
    const totalScore = allScores.reduce((sum, current) => sum + current, 0); // Sabira bodove
    totalScoreElement.innerText = `Ukupno bodova: ${totalScore}`;
  }

  // Simulacija završetka igre za jednog igrača (npr. nakon završenog kviza)
  function endGame(playerScore) {
    addPlayerScore(playerScore); // Dodaje bodove trenutnog igrača
    alert(`Igrač je završio sa ${playerScore} bodova!`);
  }

  
  
  window.onload = startQuiz;
  

// Niz sa pitanjima, odgovorima i slikama
const questions = [
   
    {
      question: "Koji okean je prikazan na slici?",
      image: "maslinasti pavijan.jpeg", // Putanja do slike za pitanje
      options: ["Atlantski okean", "Tihi okean", "Indijski okean", "Severni ledeni okean"],
      correct: "Tihi okean"
    },
    {
      question: "Koji planinski vrh je prikazan na slici?",
      image: "majmun sa zlatnim nosem.webp", // Putanja do slike za pitanje
      options: ["Mont Everest", "K2", "Kangčendzenga", "Lhotse"],
      correct: "Mont Everest"
    },
    {
      question: "Koja planeta je prikazana na slici?",
      image: "mali marmoset.jpg", // Putanja do slike za pitanje
      options: ["Merkur", "Mars", "Zemlja", "Venera"],
      correct: "Merkur"
    },
    {
      question: "Koliko kontinenata se nalazi na slici?",
      image: "pauk majmun.webp", // Putanja do slike za pitanje
      options: ["5", "6", "7", "8"],
      correct: "7"
    },
    {
    question: "Koliko kontinenata se nalazi na slici?",
      image: "tamarin.webp", // Putanja do slike za pitanje
      options: ["5", "6", "7", "8"],
      correct: "7"
    },
    {
        question: "Koliko kontinenata se nalazi na slici?",
          image: "spiksov majmun.jpg", // Putanja do slike za pitanje
          options: ["5", "6", "7", "8"],
          correct: "7"
        },
        {
            question: "Koliko kontinenata se nalazi na slici?",
              image: "majmun sa dugackim nosem.avif", // Putanja do slike za pitanje
              options: ["5", "6", "7", "8"],
              correct: "7"
            },
            {
                question: "Koliko kontinenata se nalazi na slici?",
                  image: "celavi ukari.jpg", // Putanja do slike za pitanje
                  options: ["5", "6", "7", "8"],
                  correct: "7"
                },
                {
                    question: "Koliko kontinenata se nalazi na slici?",
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
  
  window.onload = startQuiz;
  

    document.addEventListener('click', function () {
    const audio = document.getElementById('bg-audio');
    audio.play();
    });

    //quiz
    const quiz = [
        {
          question: "Where is the Grand Egyptian Museum located?",
          options: ["Cairo", "Giza", "Alexandria", "Luxor"],
          answer: "Giza"
        },
        {
          question: "Which famous pharaoh's full tomb collection will be displayed in the museum?",
          options: ["Ramses II", "Tutankhamun", "Cleopatra", "Akhenaten"],
          answer: "Tutankhamun"
        },
        {
          question: "What is unique about the museum's main entrance?",
          options: [
            "It features a hanging garden",
            "It has a glass pyramid",
            "It has a giant statue of Ramses II",
            "It's underground"
          ],
          answer: "It has a giant statue of Ramses II"
        }
      ];
  
      let currentQuestion = 0;
      let score = 0;
      let selected = null;
  
      const questionDiv = document.getElementById("question");
      const answersDiv = document.getElementById("answers");
      const nextBtn = document.getElementById("nextBtn");
      const redoBtn = document.getElementById("redoBtn");
      const resultDiv = document.getElementById("result");
  
      function showQuestion() {
        const q = quiz[currentQuestion];
        questionDiv.textContent = q.question;
        answersDiv.innerHTML = "";
        nextBtn.disabled = true;
        selected = null;
  
        q.options.forEach(option => {
          const btn = document.createElement("button");
          btn.textContent = option;
          btn.onclick = () => {
            selected = option;
            Array.from(answersDiv.children).forEach(b => b.style.backgroundColor = ""); // reset others
            btn.style.backgroundColor = "#dcdcdc";
            nextBtn.disabled = false;
          };
          answersDiv.appendChild(btn);
        });
      }
  
      nextBtn.onclick = () => {
        if (selected === quiz[currentQuestion].answer) {
          score++;
        }
        currentQuestion++;
        if (currentQuestion < quiz.length) {
          showQuestion();
        } else {
          showResult();
        }
      };
  
      redoBtn.onclick = () => {
        currentQuestion = 0;
        score = 0;
        resultDiv.textContent = "";
        nextBtn.style.display = "inline-block";
        redoBtn.style.display = "none";
        showQuestion();
      };
  
      function showResult() {
        questionDiv.textContent = "Quiz Finished!";
        answersDiv.innerHTML = "";
        resultDiv.textContent = `You scored ${score} out of ${quiz.length}`;
        nextBtn.style.display = "none";
        redoBtn.style.display = "inline-block";
      }
  
      showQuestion();
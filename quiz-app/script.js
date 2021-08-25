//INITIAL DATA
let currentQuestion = 0;
let corretQuestions = 0;

showQuestion();



//FUNCTIONS
function showQuestion() {

  if(questions[currentQuestion]) {
  let q = questions[currentQuestion];

  let pct = (currentQuestion / questions.length) * 100;
  document.querySelector('.progress--bar').style.width = `${pct}%`;

  document.querySelector('.questionArea').style.display = 'block';
  document.querySelector('.question').innerHTML = `${q.question}`;
  document.querySelector('.options').innerHTML = '';
  document.querySelector('.scoreArea').style.display = 'none';

  for(let i in q.options) {
    document.querySelector('.options').innerHTML += `<div data-op="${parseInt(i)}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}`;
  }

  document.querySelectorAll('.option').forEach(optionEvent);
} else {
  finishQuiz();
}
}

function optionEvent(item) {
  item.addEventListener('click', (event) => {

    if(item.getAttribute('data-op') == questions[currentQuestion].answer) {
      corretQuestions++;
      currentQuestion++;
      showQuestion();
    } else {
      currentQuestion++;
      showQuestion();
      console.log('errou')
    }
  
  })
}


function finishQuiz() {
  document.querySelector('.questionArea').style.display = 'none';
  document.querySelector('.scoreArea').style.display = 'block';

  let corretsPct = (corretQuestions / questions.length) * 100;
  document.querySelector('.scorePct').innerHTML = `Acertou ${corretsPct}%`;

  if(corretsPct < 30) {
    document.querySelector('.scoreText1').innerHTML = `Ruim`;
    document.querySelector('.scorePct').style.color = 'red';
    console.log('passou');
  } else if(corretsPct >= 30 && corretsPct < 70) {
    document.querySelector('.scoreText1').innerHTML = `Bom`;
    document.querySelector('.scorePct').style.color = 'yellow';
  } else if(corretsPct >= 70) {
    document.querySelector('.scoreText1').innerHTML = `Parabéns`;
    document.querySelector('.scorePct').style.color = 'green';
  }

  document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${corretQuestions}`;
}



//EVENTS
document.querySelector('.scoreArea button').addEventListener('click', ()=>{
  currentQuestion = 0;
  corretQuestions = 0;

  showQuestion();
})

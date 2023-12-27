var Gryffindor=0;
var Slytherin=0;
var Hufflepuff=0;
var Ravenclaw=0;
var house="initial";


const quizData = [
    {
        question: "Which of these traits do you value most?",
        opta: "Bravery",
        optb: "Ambition",
        optc: "Loyalty",
        optd: "Intelligence"
    },
    {
        question: "Which of these animals do you identify with the most?",
        opta: "Lion",
        optb: "Snake",
        optc: "Badger",
        optd: "Raven"
    },
    {
        question: "Which of these subjects do you enjoy the most?",
        opta: "Defense Against the Dark Arts",
        optb: "Potions",
        optc: "Charms",
        optd: "Transfiguration"
    },
    {
        question: "Which of these magical artifacts would you like to possess?",
        opta: "Invisibility Cloak",
        optb: "Philosopher's Stone",
        optc: "Marauder's Map",
        optd: "Time-Turner"
    },
    {
        question: "Which of these Hogwarts professors do you respect the most?",
        opta: "Minerva McGonagall",
        optb: "Severus Snape",
        optc: "Pomona Sprout",
        optd: "Filius Flitwick"
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0


loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.opta
    b_text.innerText = currentQuizData.optb
    c_text.innerText = currentQuizData.optc
    d_text.innerText = currentQuizData.optd
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer);
    if(answer) {
       if(answer == 'a') {
           Gryffindor++;
       }
       else if(answer == 'b') {
            Slytherin++;
       }
       else if(answer == "c") {
            Hufflepuff++;
       }
       else if(answer == 'd') {
            Ravenclaw++;
       }
       console.log("g="+Gryffindor);
       console.log("s="+Slytherin);
       console.log("h="+Hufflepuff);
       console.log("r="+Ravenclaw);
       console.log("quizval="+currentQuiz);
       var maxi = Math.max(Gryffindor,Slytherin,Hufflepuff,Ravenclaw);
       console.log("maxi="+maxi);
       if (maxi===Gryffindor){
        house="You r Gryffindorian";
        

       }
       else if (maxi===Slytherin){
        house="You r sly";

       }
       else if (maxi===Hufflepuff){
        house="You r huff";

       }
       else if (maxi===Ravenclaw){
        house="You r rav";

       }
       

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>${house}</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
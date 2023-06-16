const quizData=[
    {
        question:"button inline tegmi yoki block li",
        a:"inline",
        b:"ikki tasiga ham kirmaydi",
        c:"ikki ham emas",
        d:"block",
        correct:"d",
    },
    {
        question:"Variable nechta",
        a:"5 ta",
        b:"3 ta",
        c:"2 ta",
        d:"1 ta",
        correct:"b",
    },
    {
        question:"Json ning kengaytirilgan varianti",
        a:"JavaScript Object Notation",
        b:"JavaScript Option Notation",
        c:"JavaScript Object Node ",
        d:"JavaScript obb noScript",
        correct:"a",
    },
];
 

const quiz =document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl =document.getElementById('question')
const a_text =document.getElementById('a_text')
const b_text =document.getElementById('b_text')
const c_text =document.getElementById('c_text')
const d_text =document.getElementById('d_text')
const submitBtn=document.getElementById('submit')


let currentQuiz=0
let score=0

loadQuiz()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData=quizData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}
function getSellected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id

        }
    })
    return answer
}
    submitBtn.addEventListener('click', () =>{
           const answer=getSellected()
           if(answer){
               if(answer===quizData[currentQuiz].correct){
                   score++
               }
               currentQuiz++
               if(currentQuiz<quizData.length){
                   loadQuiz()
               }else{
                   quiz.innerHTML=`
                   <h2>Siz ${score}/${quizData.length} ta savolga tog'ri javob berdingiz</h2>
                   <button onclick="location.reload()">Reload</button>
                   `
               }
           }
    })
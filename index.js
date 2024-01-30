let Questions= [{
    questionNo:1,
    question:"Which company laptop you are using ?",
    a:"lenevo",
    b:"dell",
    c:"hp",
    d:"acer",
    answer:"lenevo"
},
{
    questionNo:2,
    question:"In which IT company do u work ?",
    a:"TCS",
    b:"Infosys",
    c:"Wipro",
    d:"Bhikmanga",
    answer:"TCS"
},
{
    questionNo:3,
    question:"What salary you get in hand ?",
    a:"Mat puch pagla rulayega kya",
    b:"Ambani se jyada",
    c:"Shaddi kar lene layak",
    d:"Null",
    answer:"Mat puch pagla rulayega kya" 
}
]
let count=0;
let ques=document.querySelector(".Question");
let button=document.querySelector("#button");
let AllInput=document.querySelectorAll("input[type=radio]");
let correctAnswer=0;
loadQuestion();
function loadQuestion(){
    ques.innerHTML= `${count+1} . ${Questions[count].question}`;
    document.querySelector("#option1").nextElementSibling.innerHTML=Questions[count].a
    document.querySelector("#option2").nextElementSibling.innerHTML=Questions[count].b
    document.querySelector("#option3").nextElementSibling.innerHTML=Questions[count].c
    document.querySelector("#option4").nextElementSibling.innerHTML=Questions[count].d
    button.addEventListener('click',getAnswer);
    
}    
function getAnswer(){
    AllInput.forEach(element => {

        if(element.checked==true){
            if(element.nextElementSibling.innerHTML==Questions[count].answer){
                //alert("correct answer");
                correctAnswer=correctAnswer+1
                element.checked=false;
            }
            else{
                //alert("false answer");
                element.checked=false;
            }
        } 
        
    });
    if(count<2){
        count++;
        loadQuestion()
    }
    else{
        quizEnd();
    }
    
}
function quizEnd(){
    let endQuiz=document.querySelector(".innerBox");
    endQuiz.innerHTML=`<h2>Quiz End, You Scored ${correctAnswer}/${count+1}<h2>`;
    let button=document.createElement('button')
    button.innerHTML="Restart Quiz";
    endQuiz.appendChild(button)
    endQuiz.classList.add("quiz-end");
    button.classList.add("quizendButton");
    button.addEventListener('click',()=>{
        location.reload();
    })
}
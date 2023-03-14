const questions = [
    {
        question: "How many days makes a week ?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },

    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionB"
    },

    {
        question: "Who was the first President of USA ?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOption: "optionD"
    },

    {
        question: "30 days has ______ ?",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        optionD: "August",
        correctOption: "optionC"
    },

    {
        question: "How manay hours can be found in a day ?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },

    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },

    {
        question: "_____ is the hottest Continent on Earth ?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionC"
    },

    {
        question: "Which country is the largest in the world ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "Which of these numbers is an odd number ?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "Eleven",
        correctOption: "optionD"
    },

    {
        question: `"You Can't see me" is a popular saying by`,
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionD"
    },

    {
        question: "Where is the world tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },

    {
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },

    {
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "How man states does Nigeria have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of Nigeria ?",
        optionA: "Abuja",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }

]
var i = -1;
var q = 0;
var count=0;
var G_score=0;
var G_Question;
var G_optionA;
var G_optionB;
var G_optionC;
var G_optionD;
var G_option;
var G_correct;

Continue();

function Continue() {
    if (i < questions.length - 1) {
        i += 1;
        Question_number = q += 1
        G_Question_number=Question_number
        Question= questions[i].question;
        G_Question= Question
        optionA = questions[i].optionA;
        G_optionA=optionA
        optionB = questions[i].optionB;
        G_optionB=optionB
        optionC = questions[i].optionC;
        G_optionC=optionC
        optionD = questions[i].optionD;
        G_optionD=optionD
        correct_answer_option=questions[i].correctOption
        G_correct=correct_answer_option;
        count=0;
        

        html_data = `
        <div class="topdiv">
        <span class="insidetopdiv">score: <span id="score">${G_score}</span></span> <span class="insidetopdiv">question: <span id="q_number1">${Question_number}</span></span>
    </div>
    <div type="button" class="qdiv"><span id="q_number">Q)</span><h4 id="Question">${Question}</h4></div>
    <div class="optiondiv">
    <div type="button" onclick="Lock_option('optionA')" class="btn" id="optionA">A) ${optionA}</div>
    <div type="button" onclick="Lock_option('optionB')" class="btn" id="optionB">B) ${optionB}</div>
    <div type="button" onclick="Lock_option('optionC')" class="btn" id="optionC">c) ${optionC}</div>
    <div type="button" onclick="Lock_option('optionD')" class="btn" id="optionD">D) ${optionD}</div>
    </div>
    <div class="qnavigator"> 
            <button id="next" onclick="Continue()">Continue</button>
            <button id="next" onclick="submit()">submit</button>
    </div>`
    

        main1.innerHTML = html_data




    }else{


        html_data=`
            <div class="finalresult">
            <div class="score_card">
              <h1>YOUR SCORE</h1>
            <div class="score"><h1>${G_score}</h1></div>
            </div>

       </div>`

       main1.innerHTML = html_data


    }



}
    



function Lock_option(option){
        G_option=option
        count++;
        if(count===1){
               document.querySelector(`#${option}`).style.background = 'yellow';
        }
    }

    function submit(){
       if( G_option==G_correct){
            G_score+=1;

            html_data = `
            <div class="topdiv">
            <span class="insidetopdiv">score: <span id="score">${G_score}</span></span> <span class="insidetopdiv">question: <span id="q_number1">${Question_number}</span></span>
        </div>
        <div type="button" class="qdiv"><span id="q_number">Q)</span><h4 id="Question">${Question}</h4></div>
        <div class="optiondiv">
        <div type="button" onclick="Lock_option('optionA')" class="btn" id="optionA">A) ${optionA}</div>
        <div type="button" onclick="Lock_option('optionB')" class="btn" id="optionB">B) ${optionB}</div>
        <div type="button" onclick="Lock_option('optionC')" class="btn" id="optionC">c) ${optionC}</div>
        <div type="button" onclick="Lock_option('optionD')" class="btn" id="optionD">D) ${optionD}</div>
        </div>
        <div class="qnavigator"> 
                <button id="continue" onclick="Continue()">Continue</button>
                <button id="submit" onclick="submit()">submit</button>
        </div>`
        
    
            main1.innerHTML = html_data
            document.querySelector(`#${G_option}`).style.background = 'green';


       }
       else{
        document.querySelector(`#${G_option}`).style.background = 'red';
        document.querySelector(`#${G_correct}`).style.background = 'green';

       }
    }

    







       
      
    



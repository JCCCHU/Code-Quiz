// Questions are formatted as objects with the question name, correct answer, and incorrect answers.
var JSquestionList = [
    {
        'question': 'What is the correct format for variable declaration?',
        'correct': 'var variableName;',
        'incorrect': ['variable variableName;','public variable variableName;','var variableName', 'int variableName;','int variableName','str variableName;','str variableName', 'public variableName;','public variableName','private variableName','private variableName;']
    },
    {
        'question': 'What is the result of "1" + 1?',
        'correct': '\"11\"',
        'incorrect': ['1','2','11','\"1\",\"2\"','1+1',"\"1\"+1"]
    },
    {
        'question': 'What does the keyword \"break\" do?',
        'correct': 'Escapes the switch statement or loop.',
        'incorrect': ['Deletes the queried HTML.','Deletes the queried style.','Exits the current line of code.','Continues to the next if/else or case.','Escapes the current function.','Assigns the subject variable to null.','Crashes the program.','Safely exits the program with exit code 0']
    },
    {
        'question': 'Does indentation matter in Javascript?',
        'correct': 'No',
        'incorrect': ['Yes', 'It depends']
    },
    {
        'question': 'Which code snippet describes a \"for\" loop?',
        'correct': "for (var i; (condition); i++)",
        'incorrect': ['do ... while (condition)','while (condition)','for (i in list) {};','for (var i in list)','for (var i = 1-15; (condition))','if ... else','switch () case:','$(selector).in(condition)']
    },
    {
        'question': 'What is jQuery?',
        'correct': 'A tool to make manipulating HTML in Javascript easier.',
        'incorrect': ['A content delivery node for Bootstrap within Javascript.','An interface for GIT repository management within Javscript.','A compatibility library for Java within Javascript.']
    },
    {
        'question': 'What is a promise in Javascript?',
        'correct': 'A bookmark for data that has been requested but not yet received.',
        'incorrect': ['An oath between programmers.','An API request.','A stored value in JSON.','A value in local storage.','A cookie.','A reference to an HTML element.','A callback function.']
    },
    {
        'question': 'console.log() does what?',
        'correct': 'Prints the argument to the console.',
        'incorrect': ['Chops the argument into thin bundles of wood.','Creates a message in the browser.','Crashes the program with error code 0.','Takes a screenshot.','Prints the previous line of code to the console.','CLeans up the referenced variable or object.']
    },
    {
        'question': 'JSON stands for what?',
        'correct': 'JavaScript Object Notation',
        'incorrect': ['JavaScript Observer Node','JavaScript Operating Node','JavaScript Operation Notation','JavaScript Opensource Notation','JavaScript Object Node','JavaScript Objective Notation','Jam and Salmon on Naan']
    },
];

$(document).ready(function() {
    var quizStatus = "landing";
    var timeLeft = 5;
    var score = 0;

    $("#start-button").on("click",function() {
        quizStatus = "active";
        $("#landing").css({ "display":"none" })
        $("#start-button").remove();
        $("body").append("<p id=\"timer\">Time left: " + timeLeft + "</p>");
        $("body").append("<p id=\"score\">Current score: " + score + "</p>");

        startQuiz();

    });

    // Input: array of answers
    // Returns: array of selected answers
    // Randomly selects 3 elements. If there are 3 or fewer elements they are all selected.
    function addRandomAnswers(answers) {
        var selected = [];
        if (answers.length <= 3) {
            return answers;
        }
        for (var i = 0; i < 3; i++) {
            selected.push(answers.splice(Math.floor(Math.random() * answers.length),1)[0]);
            console.log(selected);
        }
    }

    // Gratuitously copied from Lauren Holst's answer on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    
    // Randomize array element order in-place.
    // Using Durstenfeld shuffle algorithm.

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            console.log(array);
        }
    }

    // Input: an array of 'quiz questions', which are objects containing a question, correct answer, and incorrect answers
    // Returns: nothing
    // Removes the current quiz question and answers from the page, chooses a random quiz question (and removes it), 

    function generateQuestion(quizQuestions) {
        // Chooses a random question that has not already been asked
        var question = quizQuestions.splice(Math.floor(Math.random() * quizQuestions.length))[0];

        // Creates a randomized list of answers containing 1 correct answer and up to 3 incorrect answers
        var answerList = shuffleArray([question.correct].concat(addRandomAnswers(question.incorrect)));
        

        // 
        

        $("#quiz").remove();
        $(".quiz-buttons").remove();
        $("body").append("<br>");
        $("body").append("<div id=\"quiz\"></div>")
        
        

    
    }

    var q = JSquestionList[0];

    console.log(q.correct);
    console.log(addRandomAnswers(q.incorrect));

    function startQuiz() {
        quizStatus = "active";
        
        generateQuestion();

        var timerInterval = setInterval(function() {
          timeLeft--;
          $("#timer").text("Time left: " + timeLeft);
      
          if((timeLeft === 0) || (quizStatus == "allanswered")) {
            clearInterval(timerInterval);
            quizStatus = "end";
            // endQuiz();
          }
      
        }, 1000);
      }


})
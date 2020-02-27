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

    // Can be "landing", "start", or "end".
    var quizStatus = "landing";
    var timeLeft = 5;
    var score = 0;
    var currentQuestion = 0;

    $(document).on("click", "#start-button", function() {
        quizStatus = "active";
        shuffleArray(JSquestionList);
        $("#landing").css({ "display":"none" })
        $("#start-button").remove();
        $("body").append("<p id=\"timer\">Time left: " + timeLeft);
        $("body").append("<p id=\"score\">Current score: " + score);
        startQuiz();

    });

    $(document).on("click", ".quiz-button", function() {
        event.preventDefault();
        //console.log(JSquestionList[currentQuestion].correct === $(this).text());
        console.log(JSquestionList[currentQuestion].correct);
        console.log($(this).text());

        if (JSquestionList[currentQuestion].correct === $(this).text()) {
            score++;
            console.log(score);
            $("#score").text("Current score: " + score);
            $("#result").text("Right!");
        } else {
            timeLeft--;
            $("#result").text("Wrong!");
        }
        currentQuestion++;
        generateQuestion();

        //console.log(JSquestionList[currentQuestion].correct == $(this).text());
    })

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
        }
        return selected;
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
        }
        return array;
    }

    // Input: an array of 'quiz questions', which are objects containing a question, correct answer, and incorrect answers
    // Returns: nothing
    // Removes the current quiz question and answers from the page, chooses a random quiz question (and removes it), 

    function generateQuestion() {
        // Chooses a random question that has not already been asked
        var selected = JSquestionList[currentQuestion];

        // Creates a randomized list of answers containing 1 correct answer and up to 3 incorrect answers
        var answerList = shuffleArray([selected.correct].concat(addRandomAnswers(selected.incorrect)));
        
        $("#quiz").remove();
        $(".quiz-button").remove();

        $("body").append("<div id=\"quiz\"></div>");

        $("#quiz").append("<p id =\"question\">" + selected.question);

        for (var i = 0; i < answerList.length; i++) {
            $("#quiz").append("<button class=\"btn-primary btn py-0 my-1 quiz-button\">" + answerList[i] + "</button><br>");
        }
        $("#quiz").append("<p id=\"result\">");
    }

    function startQuiz() {
        quizStatus = "active";
        
        generateQuestion();

        var timerInterval = setInterval(function() {
          timeLeft--;
          $("#timer").text("Time left: " + timeLeft);
      
          if((timeLeft < 1) || (quizStatus == "allanswered")) {
            clearInterval(timerInterval);
            alert("Quiz over");
            endQuiz();
            // endQuiz();
          }
      
        }, 1000);
      }

    function endQuiz() {
        quizStatus = "end";

    }


})
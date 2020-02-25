// Questions are formatted as objects with the question name, correct answer, and incorrect answers.
var JSquestionList = [
    {
        'question': 'What is the correct format for variable declaration?',
        'correct': 'var variableName;',
        'incorrect': ['variable variableName;','public variable variableName;','var variableName', 'int variableName;','int variableName','str variableName;','str variableName', 'public variableName;','public variableName','private variableName','private variableName;'],
        'asked': false
    },
    {
        'question': 'What is the result of "1" + 1?',
        'correct': '\"11\"',
        'incorrect': ['1','2','11','\"1\",\"2\"','1+1',"\"1\"+1"],
        'asked': false
    },
    {
        'question': 'What does the keyword \"break\" do?',
        'correct': 'Escapes the switch statement or loop.',
        'incorrect': ['Deletes the queried HTML.','Deletes the queried style.','Exits the current line of code.','Continues to the next if/else or case.','Escapes the current function.','Assigns the subject variable to null.','Crashes the program.','Safely exits the program with exit code 0'],
        'asked': false
    },
    {
        'question': 'Does indentation matter in Javascript?',
        'correct': 'No',
        'incorrect': ['Yes', 'It depends'],
        'asked': false
    },
    {
        'question': 'Which code snippet describes a \"for\" loop?',
        'correct': "for (var i; (condition); i++)",
        'incorrect': ['do ... while (condition)','while (condition)','for (i in list) {};','for (var i in list)','for (var i = 1-15; (condition))','if ... else','switch () case:','$(selector).in(condition)'],
        'asked': false
    },
    {
        'question': 'What is jQuery?',
        'correct': 'A tool to make manipulating HTML in Javascript easier.',
        'incorrect': ['A content delivery node for Bootstrap within Javascript.','An interface for GIT repository management within Javscript.','A compatibility library for Java within Javascript.'],
        'asked': false
    },
    {
        'question': 'What is a promise in Javascript?',
        'correct': 'A bookmark for data that has been requested but not yet received.',
        'incorrect': ['An oath between programmers.','An API request.','A stored value in JSON.','A value in local storage.','A cookie.','A reference to an HTML element.','A callback function.'],
        'asked': false
    },
    {
        'question': 'console.log() does what?',
        'correct': 'Prints the argument to the console.',
        'incorrect': ['Chops the argument into thin bundles of wood.','Creates a message in the browser.','Crashes the program with error code 0.','Takes a screenshot.','Prints the previous line of code to the console.','CLeans up the referenced variable or object.'],
        'asked': false
    },
    {
        'question': 'JSON stands for what?',
        'correct': 'JavaScript Object Notation',
        'incorrect': ['JavaScript Observer Node','JavaScript Operating Node','JavaScript Operation Notation','JavaScript Opensource Notation','JavaScript Object Node','JavaScript Objective Notation','Jam and Salmon on Naan'],
        'asked': false
    },
];

$(document).ready(function() {
    var quizStatus = "landing";
    var timeLeft = 20;
    var score = 0;

    $("#start-button").on("click",function() {
        quizStatus = "active";
        $("#landing").css({ "display":"none" })
        $("#start-button").remove();
        $("body").append("<p id=\"timer\">Time left: " + timeLeft + "</p>");
        $("body").append("<p id=\"score\"></p>");

        startQuiz();

    });

    function startQuiz() {
        quizStatus = "active";
        var timerInterval = setInterval(function() {
          timeLeft--;
          $("#timer").text("Time left: " + timeLeft);
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
      
        }, 1000);
      }


})
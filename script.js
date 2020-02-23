// Questions are formatted as objects with the question name, correct answer, and incorrect answers.
var JSquestionList = [
    {
        'question': 'What is the correct format for variable declaration?',
        'correct': 'var variableName;',
        'incorrect': ['variable variableName;','variable variableName','var variableName', 'int variableName;','int variableName','str variableName;','str variableName', 'public variableName;','public variableName','private variableName','private variableName;']
    },
    {
        'question': 'What is the result of "1" + 1?',
        'correct': '\"11\"',
        'incorrect': ['1','2','11','\"1\",\"2\"','1+1',"\"1\"+1"]
    },
    {
        'question': 'What does the keyword \"break;\" do?',
        'correct': 'Escapes the switch statement or loop.',
        'incorrect': ['Exits the current line of code.','Continues to the next if/else or case.','Escapes the current function.','Assigns the subject variable to null.','Crashes the program.','Safely exits the program with exit code 0']
    },
    {
        'question': 'Does indentation matter in Javascript?',
        'correct': 'No',
        'incorrect': ['Yes', 'It depends']
    }
];
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){

            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                    +'<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnser===questions[i].correctAnswer){

                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            }

            else{
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

var myQuestions = [
    {
        question: "What Scottish garment has a name based on the Middle English term for 'fold' or 'pleat'?",
        answers: {
            a: 'Gillie brogue',
            b: 'Kilt',
            c: 'Sporran',
            d: 'Tartan'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the highest possible score in a 10-frame game in bowling?",
        answers: {
            a: '300',
            b: '150',
            c: '275',
            d: '400'
        },
        correctAnswer: 'a'
    },
    {
        question: "What was the name of the first manned mission to land on the moon?",
        answers: {
            a: 'Project Mercury',
            b: 'Apollo 11',
            c: 'Freedom 7',
            d: 'The Gemini Program'
        },
        correctAnswer: 'b'
    },
    {
        question: "What was completed in 1825 to connect the Hudson River with Lake Erie?",
        answers: {
            a: 'Welland Canal',
            b: 'Chesapeake and Ohio Canal',
            c: 'Erie Canal',
            d: 'Panama Canal'
        },
        correctAnswer: 'c'
    },
    {
        question: "What's the kid's cartoon that takes place in Bikini Bottom?",
        answers:{
            a: 'Fairly Odd Parents', 
            b: 'Kim Possible',
            c: 'The Grim Adventures of Billy and Mandy',
            d: 'Spongebob Squarepants'
        },
        correctAnswer: 'd'
    },
    {
        question: "Who was the first Buffalo Bills player to be elected into the Hall of Fame",
        answers: {
            a: 'Andre Reed',
            b: 'OJ Simpson',
            c: 'Billy Shaw',
            d: 'Jim Kelly'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the name for a young deer?",
        answers: {
            a: 'Baby deer',
            b: 'Doe',
            c: 'Fawn',
            d: 'Cub'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is Shawshank in the movie 'The Shawshank Redemption'?",
        answers: {
            a: 'An inmate',
            b: 'A prison guard',
            c: 'The warden',
            d: 'A prison'
        },
        correctAnswer: 'd'
    },
    {
        question: "How long does a full solar eclipse last?",
        answers: {
            a: '450 seconds',
            b: '7 days',
            c: '24 hours',
            d: '1 minute'
        },
        correctAnswer: 'a'
    },
    {
        question: "What twenty-eight-mile structure was started in 1961 and came down in 1989?",
        answers: {
            a: 'The Great Wall of China',
            b: 'The Colosseum',
            c: 'The Leaning Tower of Pisa',
            d: 'The Berlin Wall'
        },
        correctAnswer: 'd'
    },
]

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submimt');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


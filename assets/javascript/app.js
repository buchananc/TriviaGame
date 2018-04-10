// You'll create a trivia (form html) with multiple choice.
// https://www.w3schools.com/html/html_forms.asp
    //How do I represent multiple choice within a form ? I would use inputs.  Inputs have types(radio).
    //https://www.w3schools.com/html/tryit.asp?filename=tryhtml_radio
//How do you know which button is selected?
    //https://stackoverflow.com/questions/596351/how-can-i-know-which-radio-button-is-selected-via-jquery

    //What is the correct answer? 
    //https://stackoverflow.com/questions/13935786/quiz-counts-radio-button-values
// The player will have a limited amount of time to finish the quiz.
    //https://stackoverflow.com/questions/5665915/how-to-check-a-radio-button-with-jquery
    //Timer: https://stackoverflow.com/questions/6893130/how-to-set-one-minute-counter-in-javascript
    //http://navaneeth.me/simple-countdown-timer-using-javascript/#.Wsp_gdPwY1g

// The game ends when the time runs out.The page will reveal the number of questions that players answer correctly and incorrectly.
//     Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.


$(document).ready(function () {
    $('#questions').hide();
    $('#startScreen').hide();
    $('#playerAnswers').hide();
    $('#results').hide();
    $('#timer').hide();

});

    // click to start then display quesions
    $("button").click(function () {
        $('#welcomeScreen').hide();
        $('#questions').show();
        $('#startScreen').show();
        $('#timer').show();
        countdown();
        
        //variables
        var answered;
        var unanswered;
        var seconds;
        var incorrectAnswer;
        var correctAnswer;

        //timer function
        function countdown() {
            seconds = 60;
            $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
            answered = true;
            //sets timer to go down
            time = setInterval(showCountdown, 1000);
        }

        function showCountdown() {
            seconds--;
            $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
            if (seconds < 1) {
                clearInterval(time);
                answered = false;
                answerPage();
            }
        }
        //end of Timer function
});

 //end of Trivia Game
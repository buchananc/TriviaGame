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

    // click to start then display questions
    $("#startbtn").click(function () {
        $('#welcomeScreen').hide();
        $('#questions').show();
        $('#startScreen').show();
        $('#timer').show();
        run();
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        
        //variables
        var answered;
        var unanswered;
        var incorrectAnswer;
        var correctAnswer;
        var count = 60;
        var intervalId;

        //timer function (interval-solved class solution)
        //when button is clicked, they will trigger the stop or run
        $("#submitAnswers").on("click", stop);
        $("#timeLeft").on("click", run);

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);   
        }

        function decrement() {
            //decrease count by 1
            count--;
            //show timer in tag id
            $("#timeLeft").html("<h2>" + count + "</h2>");

            //once timer hits zero
            if (count === 0) {
                stop();

                alert("Times Up!");
            }
        }
        //clear intervalId
        function stop() {
            clearInterval(intervalId);
        }
        //end of Timer function

        //Score answers
        function getScore(form) {
            var answersAndObjects = new Array();
            answersAndObjects[0] = ["Oh Mylanta!", form.question1];
            answersAndObjects[1] = ["Jodie Sweetin", form.question2];
            answersAndObjects[2] = ["D.J.", form.question3];
            answersAndObjects[3] = ["Steve", form.question4];

            var theScore = 0;

            for (i = 0; i < answersAndObjects.length; i++) {
                currQuestionObject = answersAndObjects[i][1];
                for (j = 0; j < currQuestionObject.length; j++) {
                    if (currQuestionObject[j].checked && currQuestionObject[j].value == answersAndObjects[i][0]) {
                        theScore++;
                        break;
                    }

                }
            }

            theScore = Math.round(theScore / answersAndObjects.length * 100);
            form.percentage.value = theScore + "%";
        }
        getScore();
        


        // click submit to stop timer
        $("#submitAnswers").click(function () {
            $('#timer').hide();
            $('#questions').hide();
            $('#playerAnswers').show();
            $('#results').show();
            clearTimeout(time);
        });

});

 //end of Trivia Game
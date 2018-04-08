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

// The game ends when the time runs out.The page will reveal the number of questions that players answer correctly and incorrectly.
//     Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.


$(document).ready(function () {
    $("input[type='submit']").click(function (event) {
        if ($("input[type='radio']").is(':checked')) {
            console.log($("input[type='radio']:checked").val());
        }
        event.preventDefault();
    });

});
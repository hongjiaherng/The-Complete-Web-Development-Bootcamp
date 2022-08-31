var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var isStarted = false;
var level = 0;

$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keypress", function() {
    if (!isStarted) {
        isStarted = true;
        nextSequence();
    }
});

function nextSequence() {
    level += 1;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(".btn." + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var soundEffect = new Audio("sounds/" + name + ".mp3");
    soundEffect.play();
}

function animatePress(currentColour) {
    $(".btn." + currentColour).addClass("pressed");    
    setTimeout(function() {
        $(".btn." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            userClickedPattern = [];
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }

    } else {
        playSound("wrong");
        
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    isStarted = false;
}
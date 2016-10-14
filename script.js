var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners
    setupModeButtons();
    // Adds click listeners to each square
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            if(this.textContent === "Easy") {
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare color to picked color
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                h1.style.background = clickedColor;
                changeColors(clickedColor);
                resetButton.textContent = "Play Again";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset() {
    // Generate new colors
    colors = generateRandomColors(numberOfSquares);
    messageDisplay.textContent = "";
    // Pick new random color from array
    pickedColor = pickColor();
    // Change color display to match picked
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    h1.style.background = "steelblue";
    // Change colors of squares

    for(var i = 0; i < squares.length; i++) {
            if(colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
            }
    }
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    // loop through all squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make array
    var arr = [];
    // Add num random colors to arr
    for(var i = 0; i < num; i++) {
        // get random color and push into array
        let color = randomColor();
        arr.push(color);
    }
    // return arr
    return arr;
}

function randomColor() {
    // pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
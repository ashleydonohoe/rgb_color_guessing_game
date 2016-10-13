var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easyButton");
var hard = document.querySelector("#hardButton");

easy.addEventListener("click", function() {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "#232323";

    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function() {
    numberOfSquares = 6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "#232323";

    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    // Generate new colors
    colors = generateRandomColors(numberOfSquares);
    // Pick new random color from array
    pickedColor = pickColor();
    // Change color display to match picked
    colorDisplay.textContent = pickedColor;
    h1.style.background = "#232323";
    // Change colors of squares

    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

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
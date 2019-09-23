var colors = generateColors(6);
var header = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor();
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var easyMode = false; 

colorDisplay.textContent = pickedColor;
updateGrid();
createListeners();

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    easyMode = true;
    colors = generateColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    header.style.backgroundColor = "steelblue";
    updateGrid()
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    easyMode = false;
    colors = generateColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    header.style.backgroundColor = "steelblue";
    updateGrid()
});

resetButton.addEventListener("click", function() {
    if(easyMode) 
        colors = generateColors(3);
    else
        colors = generateColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    updateGrid();
    messageDisplay.textContent = "";
    header.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";

});
//Update color grid
function updateGrid() {
    for(var i = 0; i < squares.length; i++) {
        if(colors[i])
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.backgroundColor = "#232323";
    };
}
//Create listeners for grid squares
function createListeners() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            if(this.style.backgroundColor === pickedColor) {
                colorChange(pickedColor);
                messageDisplay.textContent = "Correct!";
                header.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            } 
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    };
}

//change color to indicated color argument
function colorChange(color) {
    for(var i = 0; i < squares.length; i++) {
        if(colors[i])
            squares[i].style.backgroundColor = color;
        else
            squares[i].style.backgroundColor = "#232323";
    }
}
//randomly pick a color from array
function pickColor() {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
//Generate new array for rgb colors
function generateColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr[i] = generateColor();
    }
    return arr;
}
// Generate new rgb color
function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
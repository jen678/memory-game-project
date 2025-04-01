// Seudo code for MEMORY GAME

//  -------VARIABLES------
//  - 
// Provide HTML link to access game page
// clearly display the name of the game 'Memory'
// Add a brief but clear descriptio of 'How to play'
// Add a 'start playing' button at the bottom of the grid 

// SHOW GRID LAYOUT 
// (5x4) grid, centered
// grid will appear once the 'start playing' button has been clicked.
// There is a total of 20 squares
// ALL square will have an 'src=img'randomly allocated to it 
// 10 img will be prvided (2 of each will be added to make it a total of 20 beig displayed on the grid behind cover)
// ALL the squares will have an open and close function while 
// The squares will only stay open once thy are matched

// GAME CONCEPT 
// This is a game between two players (the user & the clock)
// The player will Select 'two' random squares to check if they both contain the same image inside
// IF the two squares they click contain the same image, they will remain open to indicate that they have been matched
// IF the player has not selected the ccorecct two images, the squares will close up to its original form, and it will allow the user to click on another square
// The timer will track how long it is taking them to complete mattching the images/squares
// A timer with a 60 second (1min) countdown will be displayed for the user to compete against
// The user will aim to finish matching all the squares before the timer times out.
// The Game will test their memory by seeing how they remember where each image is hiding as they open them trying to macth them accordingly

// YOU DID IT! / END OF GAME message
// message will only appear once all images are paired correctly
// The timer will show the user how long it took them










// --------CACHED ELEMENT REFERENCES----------

const squareElements = document.querySelectorAll('.square');
let firstClick = null;
let secondClick = null;
let lockBoard = false;

const startBtn = document.getElementById("Start-Playing");
const playAgainBtn = document.getElementById("Play-Again")

document.getElementById("Start-Playing")
document.getElementById('Play-Again')

const imageList = [
    "red-book.jpg", "cartoon-heart.jpg", "house.jpg", "coffee.jpg",
    "flower-bouqet.jpg", "bed.jpg", "blue-car.jpg", "laptop.jpg",
    "horse.jpg", "coloring-pencils.jpg", "red-book.jpg", "cartoon-heart.jpg", "house.jpg", "coffee.jpg",
    "flower-bouqet.jpg", "bed.jpg", "blue-car.jpg", "laptop.jpg",
    "horse.jpg", "coloring-pencils.jpg"
];


    // play agin button has to have a callbackfunction to return back to the game page 

// ----------FUNCTIONS----------

function shuffleImages() {
    for (let i = imageList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [imageList[i], imageList[j]] = imageList[j], [imageList[i]];
    }
}

function assignImages() {
    shuffleImages();
    squareElements.forEach((square, index) => {
        square.innerHTML = '<img src="${imageList[index]}" alt="memory image">';
    });
}

// div class for "game" 
// <button className="square"></button> (20 of these) you can use selectorqueryAll
// btnElement.forEach((test)) => {
// }

// setInterval function for timer

// square img has to be set to display: none; in css 
// to allow it to remain hidden until the matched squares are clicked and macted. 




// -----------EVENT LISTENNERS-----------

buttonEl.addEventListener('click', startPlaying)
buttonEl.addEventListener('click', playAgain)

function startPlaying() {
}

function checkWinner() {
}

function playAgain() {
}

function timer() {
}


console.log(checkWinner)
assignImages()

// playAgain.addEventListener()


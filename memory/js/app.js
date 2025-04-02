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





// --------CACHED ELEMENT REFERENCES-----



//   GRID/SQUARE MOVEMENTS

const squareElements = document.querySelectorAll(".square");
const startBtn = document.getElementById("start-playing");
const playAgainBtn = document.getElementById("Play-Again")

let firstClick = null;
let secondClick = null;
let lockBoard = false;

startBtn.addEventListener("click", function () {
    document.querySelectorAll(".square").forEach(square => {
        square.classList.remove("hidden");
    });
});

document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("click", function () {
        this.querySelector("img").classList.remove("hidden");
    });
});

//  List of images 
const imageList = [
    "red-book.jpg", "cartoon-heart.jpg", "house.jpg", "coffee.jpg",
    "flower-bouqet.jpg", "bed.jpg", "blue-car.jpg", "laptop.jpg",
    "horse.jpg", "coloring-pencils.jpg", "red-book.jpg", "cartoon-heart.jpg", "house.jpg", "coffee.jpg",
    "flower-bouqet.jpg", "bed.jpg", "blue-car.jpg", "laptop.jpg",
    "horse.jpg", "coloring-pencils.jpg"
];

// ----------FUNCTIONS----------
//  function to help move/shuffle images randomly 
function shuffleImages() {
    for (let i = imageList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [imageList[i], imageList[j]] = imageList[j], [imageList[i]];
    }
}

// function extention to help assign images to the squares
function assignImages() {
    shuffleImages();
    squareElements.forEach((square, index) => {
        square.innerHTML = '<img src="${imageList[index]}" alt="memory image"> style="display: none;">';
    });
}
assignImages();

// click function for the start-playing button to work
function startGame() {
    startBtn.classList.add("hidden");
    countdownContainer.classList.remove("hidden");
    square.forEach(square => square.classList.remove("hidden"))
}
startBtn.addEventListener("click", startGame);

// function to check if it's a match
// function to reset selection



//  END GAAME FUNCTION

function endGame() {
    clearInterval(countdown);
    playAgainBtn.classList.remove("hidden");
}

// TIMER 

let countdown;
let timeLeft = 60;
let matchedPairs = 0;

const totalPairs = document.querySelectorAll(".square").length / 2;
const countdownContainer = document.getElementById("cuntdow-container");
const countdownDisplay = document.getElementById("countdown");
const startPlayingBtn = document.getElementById("start-playing")

function startInterval() {
    countdownContainer.classList.remove("hidden");
    timeLeft = 60;
    countdownDisplay.textContent = '${timeLeft} sec';

    countdown = setInterval(() => {
        timeLeft--;
        countdownDisplay.textContent = '${timeLeft} sec';

        if (timeLeft <= 0) {
            clearInterval(countdown);
            endGame("Oops! Try Again!");
        }
    }, 1000);
}
playAgainBtn.addEventListener("click", playAgainBtn)



function stopTimer() {
    clearInterval(countdown);
    countdownContainer.classList.add("hidden");
}
function checkForMatch() {
    if (firstClick && secondClick) {
        if (firstClick && secondClick) {
            if (firstClick.src === secondClick.src) {
                matchedPairs++;
                if (matchedPairs === totalPairs) {
                    endGame("YOU DID IT!")
                }
            }
        }
    }
}

//  function to handle clicks on the squares
function handleSquareCLick(event) {
    if (lockBoard) return;

    let clickedSquare = event.currentTarget;
    let clickedImage = clickedSquare.querySelector("img");

    if (!clickedImage) return;
    if (!clickedImage || clickedImage.style.display === "block") return;
    //  show the image
    clickedImage.style.display = "block";

    if (!firstClick) {
        firstClick = clickedImage;
    } else {
        secondClick = clickedImage;
        lockBoard = true;
    }
}
squareBtn.addEventListener("click", display)
// RESETTING GAME - play again button 

function resetSelection() {
    firstClick = null;
    secondClick = null;
    lockBoard = false;
}


function resetGame() {
    assignImages();
    squareElements.forEach(square => {
        let img = square.querySelector("img");
        if (img) img.style.display = "none";
    });
    resetSelection()
}

playAgainBtn.addEventListener("click", () => location.reload());

// doccument.getElementById("Play-Again").addEventListener("click", resetGame);
// setInterval function for timer
// square img has to be set to display: none; in css 
// for it to remain hidden until the matched squares are clicked 
// and macted after clicking start playing.
// function startPlaying()
// console.log(checkWinner)
// assignImages()
// playAgain.addEventListener()


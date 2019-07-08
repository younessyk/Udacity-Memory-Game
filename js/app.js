/*
 * Create a list that holds all of your cards
 */
const deck = document.querySelector('.deck');
let cards = document.getElementsByClassName('card');
const deckCard = [...cards];

/*
 *Open cards list
 */
let openCards = [];

/*
 *Matched cards list
 */
let   matchCards = [];

/*
 *Increment counter : counter++
 */
let counter = 0;

/*
 *stars list
 */
const stars = document.querySelector('.stars').children;
let nbStar = 3;


/*
 * increment counter to know number of moves
 */
function incrementCounter() {
  counter++;
  document.querySelector('.moves').innerText = counter;
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


/*
 *Shuffle function from http://stackoverflow.com/a/2450976 
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

 /*
  * shuffle the deck
  */
function deckShuffle() {
     /*
      * calling shuffle function
      */
  shuffle(deckCard);

  for (let i = 0; i < deckCard.length; i++) {
    let newCardClass = deckCard[i];
  deck.appendChild(newCardClass);
  }
}

window.onload = deckShuffle();
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 /*
  * matching card, put it into matched cards list
  */
function matchedCards() {
      matchCards.push(openCards);
  for (let mc = 0; mc < openCards.length; mc++) {
    openCards[mc].classList.remove('open', 'show');
    openCards[mc].classList.add('match');
  }
  openCards.splice(0, 2);
}

 /*
  * Don't matching card, turn it back over
  */
  //  matchCards.push(openCards);
function dMatchedCard() {
  for (let dmc = 0; dmc < openCards.length; dmc++) {
        openCards[dmc].classList.remove('open', 'show');
          }
    openCards.splice(0, 2);
}


/*
  * match check two cards
  */
function matchCheck() {
  if (openCards.length === 1) {
    openCards[0].style.pointerEvents = "none";
  }
    if (openCards.length === 2) {
        if (openCards[0].querySelector('i').classList.value === openCards[1].querySelector('i').classList.value) {
          matchedCards();
        }
        else {
          setTimeout(dMatchedCard, 1000);
          openCards[0].style.pointerEvents = "auto";
        }
        incrementCounter();
    }
}

/*
 * modal contain: game results
 */
function winGame() {
  if (  matchCards.length === 8) {
    modal();
    stopTimer();
  }
}

/*
 *I used this function  http://logicalmoon.com/2015/05/using-javascript-to-create-a-timer/ 
 */
let timer;

function startTimer() {
  let seconds = 0;
  timer = setInterval(function() {
      seconds++;
      const secDisplay = document.querySelector('.seconds');
      const minDisplay = document.querySelector('.minutes');
      let secs = seconds % 60;
      let mins = parseInt(seconds / 60);
      let displayTime = ('00' + secs).slice(-2);
      secDisplay.innerHTML = displayTime;
      minDisplay.innerHTML = mins;
        }, 1000);
}

 function stopTimer() {
    clearInterval(timer);
    seconds = 0;
}

/*
 *Star degree with moves condition
 */
function starsDegree() {

  if (counter === 10) {
    nbStar = 2;
    stars[0].style.display = "none";
  } else if (counter === 20) {
    nbStar = 1;
    stars[1].style.display = "none";
  }
}

/*
 *Repeat the game
 */
function repeatGame() {
  deckShuffle();
  /*
     *turn timer to zero: secods & minutes
     */
  stopTimer();
  document.querySelector('.seconds').innerHTML = 0;
  document.querySelector('.minutes').innerHTML = 0;
  
    /*
     *turn counter of moves to zero
     */
  counter = 0;
  document.querySelector('.moves').innerText = 0;

    /*
     *showing stars again
     */
  stars[0].style.display = "inline-block"
  stars[1].style.display = "inline-block"

    /*
     *turn back over all cards
     */
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('match');
  }

      /*
       *close modal
       */
  document.querySelector('.modal').style.display = 'none';

      /*
       *turn off match Cards array
       */
  while (  matchCards.length > 0) {
      matchCards.splice(0, 1);
  }

  
  deck.addEventListener('click', startTimer, {once: true});
}

/*
 * modal winning result
 */
function modal() {
  const modal = document.querySelector('.modal');
  const winTime = document.querySelector('.winTime');
  const winMoves = document.querySelector('.winMoves');
  const winStars = document.querySelector('.winStars');
  modal.style.display = 'block';
  winTime.innerText = document.querySelector('.timer').innerText;
  winMoves.innerText = counter;
  winStars.innerText = nbStar;
}


deck.addEventListener('click', startTimer, {once: true});

/*
 *add Event listener when  cards clicked 
 */

deck.addEventListener('click', function (e) {
    if (e.target.nodeName === 'LI') {
      
      if (openCards.length === 2) {
        return;
      }
      if (e.target.classList.contains('match')) {
        return;
      }
      e.target.classList.add('open', 'show');
      openCards.push(e.target);
    }

    starsDegree();
    matchCheck();
    winGame();

});

const repeatBtn = document.querySelector('.restart');
repeatBtn.addEventListener('click', function(e) {
    repeatGame();
});

const endGameRepeat = document.querySelector('.restartModal');
endGameRepeat.addEventListener('click', function(e) {
    repeatGame();
});
/***************************************************************************************/

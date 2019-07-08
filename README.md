# Memory Game Project

## Table of Contents

* [General](#general)
* [How The Game Works](#how-the-game-works)
* [Resources](#resources)

## General

Udacity Front-End Developer Nanodegree Second Project

## How The Game Works

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very
simple: open two hidden cards at a time to locate the ones that match!

Each turn:

set up the event listener for a card. If a card is clicked:
    - display the card's symbol (put this functionality in another function that you call from this one)
    - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
    - if the list already has another card, check to see if the two cards match
        + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
        + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
        + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
        + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)

The stars rating depends on the number of moves:
    *:star::star: If the moves  are between 10.
    *:star: If the moves  are  20 .
The game ends once all cards have been correctly matched.
The player could restart the game at any time by clicking on the restart icon.

## Resources

* Shuffle function from [stackoverflow](http://stackoverflow.com/a/2450976).
* Icons from Font [fontawesome cdn](https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css) - [Bootstrap cdn](https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css).
* [Coda](https://fonts.googleapis.com/css?family=Coda) from Google Fonts.

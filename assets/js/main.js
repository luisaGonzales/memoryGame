var cards = document.getElementsByClassName("card");
var countClick = 0;
var cardsActual = [];

for (var i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
        pick(this);
    }
}

function pick(card) {
    countClick = countClick + 1;
    if (countClick == 1) {
        card.classList.remove("back");
        card.classList.add("front");
    } else if (countClick == 2) {
        if (card.classList[2] != "front") {
            card.classList.remove("back");
            card.classList.add("front");
            var cardsFront = document.getElementsByClassName("front");
            for (var i = 0; i < cardsFront.length; i++) {
                cardsActual.push(cardsFront[i]);
            }
            change(cardsActual);
        } else {
            countClick = 1;
        }
    }
}

function changeCards(cardsActual) {
    cardsActual[0].classList.add("back");
    cardsActual[0].classList.remove("front");
    cardsActual[1].classList.add("back");
    cardsActual[1].classList.remove("front");
    countClick = 0;
    cardsActual.pop();
    cardsActual.pop();
    clearTimeout(t);
}

function changeCardsMatch(cardsActual) {
    cardsActual[0].classList.add("none");
    cardsActual[0].classList.remove("front");
    cardsActual[1].classList.add("none");
    cardsActual[1].classList.remove("front");
    countClick = 0;
    cardsActual.pop();
    cardsActual.pop();
    clearTimeout(time);
}

function change(cardsActual) {
    if (cardsActual[0].classList[1] == cardsActual[1].classList[1]) {
        time = setTimeout(function () {
            changeCardsMatch(cardsActual);
        }, 500);
    } else {
        t = setTimeout(function () {
            changeCards(cardsActual);
        }, 500);
    }
}
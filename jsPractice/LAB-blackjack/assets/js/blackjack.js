let deck = []
let typesOfCard = ["C", "D", "H", "S"]
let cardWithLetter = ["A", "J", "Q", "K"]

let pointsPlayer1 = 0
let pointsComputer = 0

// HTML references
const btnNewCard = document.querySelector("#btnNewCard")
const btnStop = document.querySelector("#btnStop")
const divPlayer1Cards = document.querySelector("#player1-cards")
const divComputerCards = document.querySelector("#house-cards")
//with querySelectorAll we can specify what html tag we want with [0],[1] etc as shown in the btnNewCard.addEventListener
const htmlCounterPlayer1 = document.querySelectorAll("small")


//creating deck adding elements from array and returning shuffled array called deck 
const createDeck = () => {
    //iterating with card values 2-10, types (C,D,H,S) and adding them together to the deck array
    for (let i = 2; i <= 10; i++) {
        for (let j = 0; j < typesOfCard.length; j++) {
            deck.push(i + typesOfCard[j])
        }
    }
    //iterating with card values (A,J,Q,K), types (C,D,H,S) and adding them together to the deck array
    for (let i = 0; i < cardWithLetter.length; i++) {
        for (let j = 0; j < typesOfCard.length; j++) {
            deck.push(cardWithLetter[i] + typesOfCard[j])
        }
    }
    //using underscore library for the 'shuffle' method
    deck = _.shuffle(deck)
    return deck
}
createDeck()


// let newCard = []
//returning card
const giveCard = () => {
    if (deck.length === 0) {
        throw 'No more cards!'
    }
    //solution to remove a card from the deck and store that card in a new array(maybe for a hand)
    // newCard.push(deck.shift())

    //pop method to return last card in array and show card in varriable card
    const card = deck.pop()
    return card
}

//defining value of returned card for player1
const cardValue = (card) => {
    //we apply a substring to remove the last character from the card (e.g. 10A) and use the value as points
    const cardValue = card.substring(0, card.length - 1)
    return isNaN(cardValue) //inNaN returns true or false depending if the given value is a number
        ?
        (cardValue === "A") ? 11 : 10
        :
        cardValue * 1  //we multiply a string * 1 to make it a number
}

//dealer/computer turn. getting cards to surpass player1 points and stopping when player lost(+21 points)
const computerTurn = (minimumPoints) => {
    do {
        const card = giveCard()
        pointsComputer += cardValue(card)
        htmlCounterPlayer1[1].innerText = pointsComputer

        // <img class="card" src="./assets/cards/2C.png">
        const cardImg = document.createElement('img')
        cardImg.src = `./assets/cards/${card}.png`
        cardImg.classList.add('card')
        divComputerCards.append(cardImg)

        if (minimumPoints > 21) {
            break
        }

    } while ((pointsComputer < minimumPoints) && (minimumPoints <= 21))
}

//Events
//CALLBACK: function that calls another function as an argument

btnNewCard.addEventListener('click', () => {
    const card = giveCard()
    // console.log(card)
    pointsPlayer1 += cardValue(card)
    htmlCounterPlayer1[0].innerText = pointsPlayer1

    // <img class="card" src="./assets/cards/2C.png">
    const cardImg = document.createElement('img')
    cardImg.src = `./assets/cards/${card}.png`
    cardImg.classList.add('card')
    divPlayer1Cards.append(cardImg)

    //player must not get more cards after surpassing 21
    if (pointsPlayer1 > 21) {
        console.warn("Just lost bro lmao")
        btnNewCard.disabled = true
        btnStop.disabled = true
        computerTurn(pointsPlayer1)
    } else if (pointsPlayer1 === 21) {
        console.warn("Got 21. Nice!")
        btnStop.disabled = true
        btnNewCard.disabled = true
        computerTurn(pointsPlayer1)
    }
})

//eventListener for stop button. disabling buttons and ending the game with conditions for result message
btnStop.addEventListener('click', () => {
    btnNewCard.disabled = true
    btnStop.disabled = true
    computerTurn(pointsPlayer1)
    if ((pointsPlayer1 > pointsComputer) && (pointsPlayer1 <= 21) ||
        (pointsPlayer1 <= 21 && pointsComputer > 21)) {
        console.warn("U WON DOG LESGOOO")
    } else {
        console.warn("u lost dog :(((")
    }
})
(() => {
    'use strict'

    let deck = []
    const typesOfCard = ["C", "D", "H", "S"],
        cardWithLetter = ["A", "J", "Q", "K"]

    let playersPoints = []

    // HTML references
    const btnNewCard = document.querySelector("#btnNewCard"),
        btnStop = document.querySelector("#btnStop"),
        btnNewGame = document.querySelector("#btnNewGame")

    const divPlayerCards = document.querySelectorAll(".divCards")
    //with querySelectorAll we can specify what html tag we want with [0],[1] etc as shown in the btnNewCard.addEventListener
    const htmlCounter = document.querySelectorAll("small")

    //with this function we initialize the game //last player must always be the computer
    const initializeGame = (numPlayers = 2) => {
        deck = createDeck()
        for (let i = 0; i < numPlayers; i++) {
            playersPoints.push(0)
        }
    }

    //creating deck adding elements from array and returning shuffled array called deck
    const createDeck = () => {
        deck = []
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
        return _.shuffle(deck)
    }



    // let newCard = []
    //returning card
    const giveCard = () => {
        if (deck.length === 0) {
            throw 'No more cards!'
        }
        //solution to remove a card from the deck and store that card in a new array(maybe for a hand)
        // newCard.push(deck.shift())

        //pop method to return last card in array and show card in varriable card
        return deck.pop()
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

    //Turn: 0 = first player and last one is the computer
    const acumulatePoints = (card, turn) => {

        playersPoints[turn] += cardValue(card)
        htmlCounter[turn].innerText = playersPoints[turn]
        return playersPoints[turn]
    }

    const createCard = (card, turn) => {

        const cardImg = document.createElement('img')
        cardImg.src = `./assets/cards/${card}.png`
        cardImg.classList.add('card')
        divPlayerCards[turn].append(cardImg)
    }

    //dealer/computer turn. getting cards to surpass player1 points and stopping when player lost(+21 points)
    const computerTurn = (minimumPoints) => {
        let pointsComputer = 0
        do {
            const card = giveCard()
            pointsComputer = acumulatePoints(card, playersPoints.length - 1)

            createCard(card, playersPoints.length - 1)

            if (minimumPoints > 21) {
                break
            }

            //house se detiene al igualar al player aunque los puntos sean bajos (e.g. player paró en 10pts y house se quedó con 1 card en 10pts para empatar aunque pudo tomar otra carta sin tener problemas de puntos)
        } while ((pointsComputer < minimumPoints) && (minimumPoints <= 21))

        setTimeout(() => {
            if (pointsComputer === minimumPoints) {
                alert("TIE! No winner.")
            }
            else if ((minimumPoints > pointsComputer) && (minimumPoints <= 21) ||
                (minimumPoints <= 21 && pointsComputer > 21)) {
                alert("U WON DOG LESGOOO")
            } else if ((minimumPoints > 21) || (pointsComputer > minimumPoints) && (pointsComputer <= 21)) {
                alert("u lost dog :(((")
            } else {
                console.warn("unpredicted situation")
            }
        }, 60)
    }



    //Events
    //CALLBACK: function that calls another function as an argument

    btnNewCard.addEventListener('click', () => {
        const card = giveCard()
        const pointsPlayer = acumulatePoints(card, 0)
        console.log("aki", pointsPlayer)
        createCard(card, 0)

        //player must not get more cards after surpassing 21
        if (pointsPlayer > 21) {
            btnNewCard.disabled = true
            btnStop.disabled = true
            computerTurn(pointsPlayer)
        } else if (pointsPlayer === 21) {
            // console.warn("Got 21. Nice!")
            btnStop.disabled = true
            btnNewCard.disabled = true
            computerTurn(pointsPlayer)
        }
    })

    //eventListener for stop button. disabling buttons and ending the game with conditions for result message
    btnStop.addEventListener('click', () => {
        btnNewCard.disabled = true
        btnStop.disabled = true

        computerTurn(pointsPlayer)
    })

    // reset game
    btnNewGame.addEventListener("click", () => {
        initializeGame()


        // // deck = []
        // // deck = createDeck()

        // // pointsPlayer = 0
        // // pointsComputer = 0

        // htmlCounter[0].innerHTML = 0
        // htmlCounter[1].innerHTML = 0


        // divPlayer1Cards.innerHTML = ''
        // divComputerCards.innerHTML = ''

        // btnNewCard.disabled = false
        // btnStop.disabled = false
    })

})();

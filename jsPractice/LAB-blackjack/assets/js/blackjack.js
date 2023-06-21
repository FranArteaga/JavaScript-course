let deck = []
let typesOfCard = ["C", "D", "H", "S"]
let cardWithLetter = ["A", "J", "Q", "K"]

//creating deck adding elements from array
const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let j = 0; j < typesOfCard.length; j++) {
            deck.push(i + typesOfCard[j])
        }
    }

    for (let i = 0; i < cardWithLetter.length; i++) {
        for (let j = 0; j < typesOfCard.length; j++) {
            deck.push(cardWithLetter[i] + typesOfCard[j])
        }
    }
    deck = _.shuffle(deck)
    console.log("shuffled", deck)
    return deck
}
createDeck()

//returning card

// let newCard = []
const giveCard = () => {
    if (deck.length === 0) {
        throw 'No more cards!'
    }
    // newCard.push(deck.shift())
    // console.log(newCard)
    const card = deck.pop()
    console.log("deck -given card", deck)
    console.log("given card", card)
    return card

}
giveCard()

const cardValue = (card) => {
    const cardValue = card.substring(0, card.length -1)
    let points
    if ( isNaN( cardValue )) {
        //idea: switch that assigns value to points depending on letter
        
    } else {
        //we multiply a string * 1 to make it a number
        points = cardValue * 1
    }
    console.log("points", points)
}
cardValue("6D")
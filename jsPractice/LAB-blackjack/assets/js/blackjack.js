let deck = []
let typesOfCard = ["C", "D", "H", "S"]
let cardWithLetter = ["A", "J", "Q", "K"]

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
    console.log("shuffled", deck)
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
    console.log("deck minus given card", deck)
    console.log("given card", card)
    return card

}
giveCard()

//defining value of returned card
const cardValue = (card) => {
    //we apply a substring to remove the last character from the card (e.g. 10A) and use the value as points
    const cardValue = card.substring(0, card.length - 1)
    return isNaN(cardValue) //inNaN returns true or false depending if the given value is a number
        ?
        (cardValue === "A") ? 11 : 10
        :
        cardValue * 1  //we multiply a string * 1 to make it a number
}
let finalCardValue = cardValue(giveCard())
console.log( {finalCardValue} )
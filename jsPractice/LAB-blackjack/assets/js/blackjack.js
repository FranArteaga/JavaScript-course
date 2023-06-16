let deck = []
let typesOfCard = ["C", "D", "H", "S"]
let cardWithLetter = ["A", "J", "Q", "K"]


const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let j = 0; j < typesOfCard.length; j++) {
            deck.push(i + typesOfCard[j])
        }
    }

    for (let i = 0; i < cardWithLetter.length; i++){
        for (let j = 0; j< typesOfCard.length; j++){
            deck.push(cardWithLetter[i]+ typesOfCard[j])
        }
    }
    console.log(deck)
}
createDeck()
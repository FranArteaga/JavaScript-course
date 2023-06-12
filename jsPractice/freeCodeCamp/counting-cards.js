/**freecodecamp exercise
 * The function will then return a string with the current count 
 * and the string Bet if the count is positive, or Hold if the count is zero or negative. 
 * The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet
 */
let count = 0;

const cc = (card) => {

  let message
  if (card >= 2 && card <= 6) {
    count += 1
  } else if (card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A") {
      count-=1
  }
if (count >=1) {
  message = "Bet"
} else {
  message = "Hold"
}
  return count + " " + message;
 
}

console.log(cc(2) )
console.log(cc(3))
console.log(cc(7))
console.log(cc('K'))
console.log(cc('A'))
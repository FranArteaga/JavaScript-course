/**
 * store exercise
 * Display a message depending on weekday
 * "on weekends we open at 11" || "on weekdays we open at 9"
 * 
 * Display a message depending on the hour 
 *  "it's open || it's closed, we open at XX"
 * 
 */

const today = new Date();
let dayOfWeek = today.getDay();
let currentHour = today.getHours();
console.log(dayOfWeek, currentHour)

const storeOpenHourMessage = (day, hour) => {
    if ([0, 6].includes(day) && hour < 9) {
        return "on weekends we open at 9"
    } else if ([0, 6].includes(day) && hour >= 9) {
        return "it's open!"
    }

    if (hour < 11) {
        return "on weekdays we open at 11"
    } else {
        return "we're open!"
    }
}
console.log(storeOpenHourMessage(dayOfWeek, currentHour))

let dayExample = 0
let hourExample = 7
let message

let openingHour = ([0, 6].includes(dayExample)) ? 9 : 11
hourExample >= openingHour ? message = "open :)" : message = `closed, We open at ${openingHour}`
console.log(message)

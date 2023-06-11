const today = new Date()
let day = today.getDate()

console.log({ day })

if (day === 0) {
    console.log('sunday')
} else if (day === 1) {
    console.log('monday')
} else {
    console.log('not sunday nor monday')
}


//using alternatives to if-Else to get information depending on the value given
let otherDay = 5

let daysOfWeekArr = ["sunday", "monday", "tueday", "wednesday", "thursday", "friday", "saturday"]

let daysOfWeekObj = {
    0: () => "sunday - 0",
    1: () => "monday - 1",
    2: () => "tuesday - 2",
    3: () => "wednesday - 3",
    4: () => "thursday - 4",
    5: () => "friday - 5",
    6: () => "saturday - 6",
}
console.log("obj", daysOfWeekObj[otherDay]() ||  "day not defined")

console.log("arr", daysOfWeekArr[otherDay] || "day not defined")
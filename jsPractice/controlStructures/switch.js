const day = new Date()
let dayNum = day.getDay()
console.log(dayNum)

const getDayWithSwitch = (day) => {
    switch (day) {
        case 0:
            console.log("sunday")
            break;
        case 1:
            console.log("monday")
            break;
        case 2:
            console.log("tuesday")
            break;
        default:
            console.log("it's not sunday, monday or tuesday")
    }
}
getDayWithSwitch(dayNum)
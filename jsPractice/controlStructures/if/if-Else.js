const today = new Date()
let day = today.getDate()

console.log({day})

if (day === 0){
    console.log('sunday')
} else if (day === 1){
    console.log('monday')
} else {
    console.log('not sunday nor monday')
}
let graded = (points) => {
let grade = (points >= 95) ? "A+" :
            (points >= 90) ? "A"  :
            (points >= 85) ? "B+" :
            (points >= 80) ? "B"  :
            (points >= 75) ? "C+" :
            (points >= 70) ? "C"  : "F"
return grade
}

console.log(graded(83))
const spiders = [ "spider man", "spider woman", "spider ham", "spider man 2099", "spiders man" ]

console.log("-traditional for-")
for( let i = 0; i < spiders.length; i++ ) {
    console.log(spiders[i])
}

console.log("-for in-")
for( let i in spiders){
    console.log("for in:", [i], spiders[i])
}

//commonly used for getting references to values of arrays or objects more easily
console.log("-for of-")
for(let spider of spiders){
    console.log("for of:", spider)
}
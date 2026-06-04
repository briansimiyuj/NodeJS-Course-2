console.log(global)

global.setTimeout(() =>{

    console.log('Ran after 5 seconds')

    clearInterval(interval)

}, 5000)

const interval = setInterval(() =>{

    console.log('Ran after 2 seconds')

}, 2000)

console.log(__dirname)
console.log(__filename) 
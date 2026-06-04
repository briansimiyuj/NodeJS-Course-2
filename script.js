import fs from "fs"

fs.readFile("./files/about.txt", "utf-8", (err, data) =>{

    if(err){

        console.error(err)

        return

    }

    console.log(data)

})

console.log('Last Line')
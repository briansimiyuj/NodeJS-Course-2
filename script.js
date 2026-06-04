import fs from "fs"

fs.writeFile("files/output.txt", "Hello, World!", err =>{

    if(err){

        console.log(err)
        
    }

    console.log("File created successfully")

})
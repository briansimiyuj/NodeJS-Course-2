import fs from "fs"

fs.mkdir("test", { recursive: true}, err =>{

    if(err){
        
        console.log(err)

    }

    console.log("Directory created")

})
import fs from "fs"

if(fs.existsSync("./files/output.txt")){

    fs.unlink("./files/output.txt", err =>{

        if(err) throw err

        console.log("File deleted successfully")

    })

}
import http from "http"
import fs from "fs"

const server = http.createServer((request, response) =>{

    response.setHeader("Content-Type", "text/html")

    fs.readFile("./views/index.html", (err, data) =>{

        if(err){

            console.log(err)

            response.end("Error loading the page")

        }else{

            response.write(data)
            
            response.end()
        
        }

    })
})

server.listen(3000, () =>{

    console.log("Server is listening on port 3000")

})
import http from "http"
import fs from "fs"

const server = http.createServer((request, response) =>{

    response.setHeader("Content-Type", "text/html")

    let path = "./views/"

    switch(request.url){

        case "/":
            
            path += "index.html"

        break

        case "/about":
            
            path += "about.html"

        break

        default:

            path += "/404.html"

        break

    }

    fs.readFile(path, (err, data) =>{

        if(err){

            console.log(err)

            response.end("Error loading the page")

        }else{

            response.end(data)
        
        }

    })
})

server.listen(3000, () =>{

    console.log("Server is listening on port 3000")

})
import http from "http"

const server = http.createServer((request, response) =>{

    response.setHeader("Content-Type", "text/html")

    response.write("<h1>Hello, World!</h1>")

    response.end()

})

server.listen(3000, () =>{

    console.log("Server is listening on port 3000")

})
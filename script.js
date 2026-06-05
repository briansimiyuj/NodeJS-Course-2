import http from "http"

const server = http.createServer((request, response) =>{

    response.setHeader("Content-Type", "text/plain")

    response.write("Hello, World!")

    response.end()

})

server.listen(3000, () =>{

    console.log("Server is listening on port 3000")

})
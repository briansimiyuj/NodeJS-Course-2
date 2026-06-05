import http from "http"

const server = http.createServer((request, response) =>{

    console.log(request.url, request.method)

})

server.listen(3000, () =>{

    console.log("Server is listening on port 3000")

})
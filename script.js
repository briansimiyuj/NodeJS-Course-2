import fs from "fs"

const readStream = fs.createReadStream("./files/blog.txt", "utf-8") 

readStream.on("data", chunk =>{

    console.log("---- New Chunk ----")

    console.log(chunk)

})
import fs from "fs"

const readStream = fs.createReadStream("./files/blog.txt", "utf-8"),
      writeStream = fs.createWriteStream("./files/blog2.txt")

readStream.on("data", chunk =>{

    writeStream.write("\nNew Chunk:\n")

    writeStream.write(chunk)

})
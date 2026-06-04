import fs from "fs"

const readStream = fs.createReadStream("./files/blog.txt", "utf-8"),
      writeStream = fs.createWriteStream("./files/blog3.txt")

readStream.pipe(writeStream)
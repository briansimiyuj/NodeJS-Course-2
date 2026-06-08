import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const app = express(),
      __fileName = fileURLToPath(import.meta.url),
      __dirName = dirname(__fileName)

app.listen(3000)

app.get("/", (req, res) =>{

    res.sendFile(join(__dirName, "views/index.html"))

})

app.get("/about", (req, res) =>{

    res.sendFile(join(__dirName, "views/about.html"))

})
import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const app = express(),
      __fileName = fileURLToPath(import.meta.url),
      __dirName = dirname(__fileName)

app.set("view engine", "ejs")

app.listen(3000)

app.get("/", (req, res) =>{

    res.render("index")

})

app.get("/about", (req, res) =>{

    res.render("about")

})

app.get("/blogs/create", (req, res) =>{

    res.render("create")

})

app.use((req, res) =>{

    res.status(404).render("404")

})
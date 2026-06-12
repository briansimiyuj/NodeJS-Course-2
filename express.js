import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import blogsRouter from "./routes/blogRoutes.js"

dotenv.config()

const app = express(),
      __fileName = fileURLToPath(import.meta.url),
      __dirName = dirname(__fileName)

mongoose.connect(process.env.dbURI)
    .then(() => console.log('MongoDB connected ✅'))
    .catch(err => console.log(err))

app.set("view engine", "ejs")

app.listen(3000)

app.use(morgan("dev"))

app.use(express.urlencoded({ extended: true }))

app.use(express.static(join(__dirName, "public/CSS")))

app.use(express.static(join(__dirName, "public/JS")))


app.get("/", (req, res) =>{

    res.redirect("/blogs")

})

app.get("/about", (req, res) =>{

    res.render("about", { title: 'About' })

})

app.use("/blogs", blogsRouter)

app.use((req, res) =>{

    res.status(404).render("404", { title: 'Not Found Page '})

})
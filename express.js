import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import Blog from "./models/blog.js"

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


app.get("/", (req, res) =>{

    res.redirect("/blogs")

})

app.get("/about", (req, res) =>{

    res.render("about", { title: 'About' })

})

app.get("/blogs", (req, res) =>{
    
    Blog.find()

        .sort({ createdAt: -1 })

        .then(result =>{

            res.render("index", { title: 'All Blogs', blogs: result })
            
        })

        .catch(err =>{

            console.log(err)
            
        })

})

app.post("/blogs", (req, res) =>{

    const blog = new Blog(req.body)

    blog.save()

        .then(result =>{

            res.redirect("/blogs")

        })

        .catch(err =>{

            console.log(err)
            
        })
    
})

app.get("/blogs/create", (req, res) =>{

    res.render("create", { title: 'Create Blog' })

})

app.use((req, res) =>{

    res.status(404).render("404", { title: 'Not Found Page '})

})
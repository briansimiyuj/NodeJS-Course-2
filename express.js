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

app.use(express.static(join(__dirName, "public/CSS")))

app.get("/add-blog", (req, res) =>{
    
    const blog = new Blog({

        title: 'My new blog 2',
        snippet: 'About my new blog',
        body: 'More about my new blog'
        
    })

    blog.save()
        .then(result => res.send(result))
        .catch(err => console.log(err))

})

app.get("/all-blogs", (req, res) =>{

    Blog.find()
        .then(result => res.send(result))
        .catch(err => console.log(err)) 
    
})

app.get("/single-blog", (req, res) =>{
    
    Blog.findById('6a2a5e48f0abd99386ca2e37')
        .then(result => res.send(result))
        .catch(err => console.log(err))

})

app.get("/", (req, res) =>{

    const blogs =[

        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' }

    ]

    res.render("index", { title: 'Home', blogs })

})

app.get("/about", (req, res) =>{

    res.render("about", { title: 'About' })

})

app.get("/blogs/create", (req, res) =>{

    res.render("create", { title: 'Create Blog' })

})

app.use((req, res) =>{

    res.status(404).render("404", { title: 'Not Found Page '})

})
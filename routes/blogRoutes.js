import express from "express"
import Blog from "./../models/blog.js"

const blogsRouter = express.Router()

blogsRouter.get("/blogs", (req, res) =>{
    
    Blog.find()

        .sort({ createdAt: -1 })

        .then(result =>{

            res.render("index", { title: 'All Blogs', blogs: result })
            
        })

        .catch(err =>{

            console.log(err)
            
        })

})

blogsRouter.post("/blogs", (req, res) =>{

    const blog = new Blog(req.body)

    blog.save()

        .then(result =>{

            res.redirect("/blogs")

        })

        .catch(err =>{

            console.log(err)

        })
    
})

blogsRouter.get("/blogs/create", (req, res) =>{

    res.render("create", { title: 'Create Blog' })

})

blogsRouter.get("/blogs/:id", (req, res) =>{

    const id = req.params.id

    Blog.findById(id)

        .then(result =>{

            res.render("details", { blog: result, title: 'Blog Details' })

        })

        .catch(err =>{

            res.status(404).render("404", { title: 'Not Found Page '})

        })
    
})

blogsRouter.delete("/blogs/:id", (req, res) =>{
    
    const id = req.params.id

    Blog.findByIdAndDelete(id)

        .then(result =>{

            res.json({ redirect: "/blogs" })

        })

        .catch(err =>{

            console.log(err)

        })
        
})

export default blogsRouter
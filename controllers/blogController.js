import Blog from "../models/blog.js"

const blogIndex = (req, res) =>{

    Blog.find()
    
            .sort({ createdAt: -1 })
    
            .then(result =>{
    
                res.render("index", { title: 'All Blogs', blogs: result })
                
            })
    
            .catch(err =>{
    
                console.log(err)
                
            })

}

const blogDetails = (req, res) =>{

    const id = req.params.id
    
        Blog.findById(id)
    
            .then(result =>{
    
                res.render("details", { blog: result, title: 'Blog Details' })
    
            })
    
            .catch(err =>{
    
                res.status(404).render("404", { title: 'Not Found Page '})
    
            })

}

const blogDelete = (req, res) =>{

    const id = req.params.id

    Blog.findByIdAndDelete(id)

        .then(result =>{

            res.json({ redirect: "/" })

        })

        .catch(err =>{

            console.log(err)

        })

}

const blogCreate = (req, res) =>{

    res.render("create", { title: 'Create Blog' })

}

const blogPost = (req, res) =>{

    const blog = new Blog(req.body)

        blog.save()

            .then(result =>{

                res.redirect("/")

            })

            .catch(err =>{

                console.log(err)

            })

}

export { blogIndex, blogDetails, blogDelete, blogCreate, blogPost }
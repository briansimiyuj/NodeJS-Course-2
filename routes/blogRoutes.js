import express from "express"
import Blog from "./../models/blog.js"
import { blogIndex, blogDetails, blogDelete, blogCreate, blogPost } from "../controllers/blogController.js"

const blogsRouter = express.Router()

blogsRouter.get("/", blogIndex)

blogsRouter.post("/", blogPost)

blogsRouter.get("/create", blogCreate)

blogsRouter.get("/:id", blogDetails)

blogsRouter.delete("/:id", blogDelete)

export default blogsRouter
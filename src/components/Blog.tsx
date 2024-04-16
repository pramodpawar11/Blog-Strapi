"use client"
import React, { useContext } from 'react'
import BlogCard from './BlogCard'
import { CategoryContext } from '@/context/CategoryContent'

const Blog = ({blogs}:any) => {
  const {category} = useContext(CategoryContext);
  const filteredBlogs = blogs.data.filter((blog:any)=>{
    return blog.attributes.categories.data.some(
      (cat:any)=>cat.attributes.Title===category
    )
  })

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {filteredBlogs?.map((blogs: any, index: number) => (
        <div key={blogs.id}><BlogCard blogs = {blogs}/></div>
      ))}
    </div>
  )
}

export default Blog
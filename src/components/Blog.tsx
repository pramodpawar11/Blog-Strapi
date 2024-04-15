import React from 'react'
import BlogCard from './BlogCard'

const Blog = ({blogs}:any) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {blogs?.data?.map((blogs: any, index: number) => (
        <div key={blogs.id}><BlogCard blogs = {blogs}/></div>
      ))}
    </div>
  )
}

export default Blog
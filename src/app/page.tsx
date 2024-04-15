
import Blog from "@/components/Blog";
import Categories from "@/components/Categories";

const fetchCategories= async ()=>{
  const option = {
    headers:{
      Authorization:`Bearer ${process.env.BACKEND_API_KEY}`
    }
  }
  try {
    const res = await fetch("http://localhost:1337/api/categories",option);
    const response = await res.json();
    console.log(response);
    return response
  } catch (error) {
    console.log(error);
  }
}

const fetchBlogs= async ()=>{
  const option = {
    headers:{
      Authorization:`Bearer ${process.env.BACKEND_API_KEY}`
    }
  }
  try {
    const res = await fetch("http://localhost:1337/api/blogs?populated=*",option);
    const response = await res.json();
    console.log(response);
    return response
  } catch (error) {
    console.log(error);
  }
}

export default async function Home(){
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  return (
    <div>
      <Categories categories={categories}/>
      <Blog blogs={blogs}/>
    </div>
  )
}
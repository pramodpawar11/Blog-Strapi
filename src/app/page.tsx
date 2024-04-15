
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

export default async function Home(){
  const categories = await fetchCategories()
  return (
    <div>
      <Categories categories={categories}/>
      <Blog/>
    </div>
  )
}
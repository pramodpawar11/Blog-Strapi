import Link from "next/link";
import React from "react";
import Image from "next/image";

const fetchBlog= async (id:number)=>{
  const option = {
    headers:{
      Authorization:`Bearer ${process.env.BACKEND_API_KEY}`
    }
  }
  try {
    const res = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`,option);
    const response = await res.json();
    console.log(response);
    return response
  } catch (error) {
    console.log(error);
  }
}

const page = async ({params}:any) => {
  const blog = await fetchBlog(params.id);
  const imageUrl = "http://localhost:1337"+blog.data.attributes.Img.data.attributes.url

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href="/">{"<Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image layout="fill" objectFit="cover" src={imageUrl} alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{blog.data.attributes.Title}</h1>
        <p className="text-gray-500 mt-2">{blog.data.attributes.Description[0].children[0].text}</p>
      </div>
      <div className="mt-4 flex items-center text-gray-400">
        <span>Publish on{""}{"23-10-2023"}</span>
      </div>
    </div>
  );
};

export default page;

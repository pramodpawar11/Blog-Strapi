import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogCard = ({ blogs }: any) => {
  const truncateBlogDesc = (blog: any) => {
    const description = blog.attributes.Description[0].children[0].text; // Access the first element of Description array and its children
    return description.length > 80
      ? description.substring(0, 50) + "..." // Truncate the description if it's longer than 80 characters
      : description; // Return the full description if it's shorter than or equal to 80 characters
  };
  const truncatedDescription = truncateBlogDesc(blogs); // Assuming you want to truncate the description of the first blog post
  const imageUrl = "http://localhost:1337"+blogs.attributes.Img.data.attributes.url
  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-500 cursor-pointer">
      <Link href={`/blog/${blogs.id}`}>
        <div className="relative w-full h-1 "style={{paddingBottom:"100%"}}>
          <Image
            layout="fill"
            objectFit="cover"
            src={imageUrl}
            alt=""
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2 ">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {blogs.attributes.Title}
          </h2>
          <p className="text-gray-600">{truncatedDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

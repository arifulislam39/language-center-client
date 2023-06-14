import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Blog = () => {
    const [blogs, setBlogs]=useState([]);
    console.log(blogs);

    useEffect(() => {
        fetch("https://language-center-server-nu.vercel.app/blogs")
          .then((res) => res.json())
          .then((data) => setBlogs(data));
      }, []);

  
  return (
   
      <>
      <SectionTitle heading={"Blog"}
            subHeading={"Let's See our latest Blog"}></SectionTitle>
      <div className="grid gap-14 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-20 mb-20">
      {
        blogs.map(blog=><div className="card card-side bg-[#DEE1E6] shadow-xl" key={blog.id}>
        <figure className="w-60 h-full"><img src={blog.image} className="h-full" alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p className="w-56 h-32 overflow-hidden">{blog.details}</p>
          <div className="card-actions justify-end">
          <button
                 
                 className="btn text-white hover:bg-[#dabd3a]  bg-[#123821]"
               >
                Read More
               </button>
          </div>
        </div>
      </div>)
      }
      </div>
      
      </>
  );
};

export default Blog;

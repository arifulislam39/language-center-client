import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://language-center-server-nu.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const sliceText = (text, maxLength) => {
    const words = text.split(" ");
    const slicedText = words.slice(0, maxLength).join(" ");
    const ellipsis = words.length > maxLength ? "..." : "";
    return slicedText + ellipsis;
  };

  return (
    <div className="p-4 md:p-8 my-24">
      <SectionTitle heading={"Blog"} subHeading={"Let's See Our Latest Blog"} />
      <div className="grid gap-6 sm:gap-8 md:gap-14 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-8 sm:mt-10 md:mt-20">
        {blogs.map((blog) => (
          <div
            className="card w-full card-side bg-[#DEE1E6] shadow-xl"
            key={blog.id}
            data-aos="zoom-out"
            data-aos-duration="1500"
          >
            <figure>
              <img src={blog.image} className="h-full" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p className="w-full h-20 overflow-hidden">
                {sliceText(blog.details, 18)}
              </p>
              <div className="card-actions justify-end">
                <button className="btn text-white hover:bg-[#dabd3a] bg-[#123821]">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

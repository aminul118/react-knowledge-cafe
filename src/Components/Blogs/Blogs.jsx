import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'

export default function Blogs({ handleBookMark }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1>Blogs : {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog handleBookMark={handleBookMark} blog={blog} key={blog.id}></Blog>
      ))}
    </div>
  );
}

Blogs.propTypes = {
  handleBookMark: propTypes.func,
};
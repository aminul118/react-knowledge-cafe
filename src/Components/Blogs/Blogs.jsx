import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));

    return () => {};
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  { name: "blog -1", to: "/blogs/1" },
  { name: "blog -2", to: "/blogs/2" },
  { name: "blog -3", to: "/blogs/3" },
];
function BlogPage() {
  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        {blogs.map((blog) => {
          return (
            <li key={blog.name}>
              <Link to={{ pathname: blog.to, search: "sort=name" }}>
                {blog.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogPage;

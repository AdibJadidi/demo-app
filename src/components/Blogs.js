import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

function Blogs({ location, match }) {
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  const id = match.params.id;
  return (
    <div>
      <h2>this is detail of blog : {id}</h2>
      <Link to="/blogs">back to blogs</Link>
    </div>
  );
}

export default Blogs;

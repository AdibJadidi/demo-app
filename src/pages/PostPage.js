import React from "react";

const PostPage = (props) => {
  console.log(props);
  const id = props.match.params.id || 1;
  return (
    <div>
      <h2>post - {id}</h2>
    </div>
  );
};

export default PostPage;

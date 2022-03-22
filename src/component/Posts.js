import React from "react";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const Posts = ({ posts, loading, limit, setLimit}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
      <>
        <label>
        페이지 당 표시할 게시물 수:&nbsp;
            <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(value)}
            >
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            </select>
        </label>

        <ul className="list">
        {posts.map((post) => (
            <li key={post.id} className="list_item">
            {post.id} . {post.title}
            </li>
        ))}
        </ul>
    </>
  );
};

export default Posts;
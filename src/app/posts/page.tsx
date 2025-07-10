"use client";
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.posts);
        console.log(res.posts);
      });
  }, []); // 생명주기에 따라 작동, 마지막 []는 의존배열 : 계속 받아오는 것을 막아준다.

  return (
    <ul>
      {posts.map((post) => (
        <li>
          {post.id} / {post.title}
        </li>
      ))}
    </ul>
  );
}
export default Posts;

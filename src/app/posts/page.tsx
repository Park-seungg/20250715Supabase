"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

function Posts() {
  const [posts, setPosts] = useState<
    Array<{ id: number; title: string; content: string }>
  >([]);

  const fetchData = async () => {
    let { data: posts, error } = await supabase.from("posts").select("*");
    setPosts(posts ?? []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Posts;

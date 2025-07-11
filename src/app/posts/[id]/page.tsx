"use client";

import { supabase } from "@/app/lib/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PostDetail() {
  const [post, setPost] = useState({});
  const params = useParams();
  const { id } = params;

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    setPost(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>{id}번</h1>
      <div className="text-2xl">{post.title}</div>
      <p>{post.contents}</p>
    </>
  );
}

export default PostDetail;

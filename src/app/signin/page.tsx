"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      console.log(error);
    } else {
      alert("로그인 성공");
    }
  };
  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="EMAIL"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
export default Signin;

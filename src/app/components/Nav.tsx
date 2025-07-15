"use client";

import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Nav() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    // 인증 상태(로그인/로그아웃) 변경을 감지하는 리스너너
    // session? -> 오류때매 null이 들어올 수 있다는 것을 표시
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
    // 클인업 함수 -> 컴포넌트가 언마운트 되거나 effect가 재실행되기 전전
    return () => subscription.unsubscribe();
  }, []);

  const router = useRouter();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/signin");
  };

  return (
    <nav className="flex">
      <Link href="/" className="p-2 rounded hover:bg-gray-100">
        메인
      </Link>
      <Link href="/posts" className="p-2 rounded hover:bg-gray-100">
        글 목록
      </Link>
      {user ? (
        <>
          <span>{user.email} 님</span>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <>
          <Link href="/signup" className="p-2 rounded hover:bg-gray-100">
            회원가입
          </Link>
          <Link href="/signin" className="p-2 rounded hover:bg-gray-100">
            로그인
          </Link>
        </>
      )}
    </nav>
  );
}

export default Nav;

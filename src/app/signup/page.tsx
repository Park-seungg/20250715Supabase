function Signup() {
  return (
    <>
      <form>
        <input type="text" name="email" placeholder="EMAIL" />
        <input type="password" name="password" placeholder="비밀번호" />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}

export default Signup;

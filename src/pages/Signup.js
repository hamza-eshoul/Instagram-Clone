import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

// images
import Instagram from "../assets/images/Instagram.png";
import InstaPeople from "../assets/images/InstaPeople.png";

// components

import Loading from "../components/Loading";
import Error from "../components/Error";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, username);
  };

  return (
    <>
      <main className="authContainer">
        <section className="flex w-full justify-center bg-[#fbfcfe] lg:bg-white">
          <img src={InstaPeople} className="hidden w-[60%] lg:block" />
          <section className="flex items-center justify-center lg:w-[40%]">
            {/* Sign up  */}
            <form
              className="flex w-full max-w-xl flex-col items-center justify-center gap-5 rounded bg-white px-3 py-6 shadow-md lg:shadow-none"
              onSubmit={handleSubmit}
            >
              <div className="w-[70%]">
                <img
                  src={Instagram}
                  className="h-full w-full "
                  alt="instagram"
                />
              </div>

              <p className="-translate-y-5 px-8 text-center text-[28px] font-semibold text-[#737373]">
                Sign up
              </p>

              <label className="auth_label">
                <span className="auth_label_text">Email address</span>
                <input
                  type="email"
                  className="authInput"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>

              <label className="auth_label">
                <span className="auth_label_text">Username</span>
                <input
                  type="text"
                  className="authInput"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </label>

              <label className="auth_label">
                <span className="auth_label_text">Password</span>
                <input
                  type="password"
                  className="authInput"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>

              {(email === "" || username === "" || password === "") && (
                <button className="authBtn pointer-events-none opacity-60">
                  Sign Up
                </button>
              )}

              {email !== "" && username !== "" && password !== "" && (
                <>
                  <button className="authBtn">
                    {isPending && (
                      <Loading loadingColor={"white"} loadingSize={35} />
                    )}
                    {!isPending && "Sign Up"}
                  </button>
                  {error && <Error error={error} errorSize={"text-base"} />}
                </>
              )}

              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
                <p className="font-medium text-[#8E8E8E]"> OR </p>
                <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
              </div>

              <p className="text-center">
                {" "}
                Have an account ?{" "}
                <Link to="/login" className="font-semibold text-[#0095F6]">
                  Log in
                </Link>
              </p>
            </form>{" "}
          </section>
        </section>
      </main>
    </>
  );
};

export default Signup;

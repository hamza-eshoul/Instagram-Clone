import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

// icons
import { FaUser } from "react-icons/fa";

// images
import Instagram from "../assets/images/Instagram.png";
import InstaPeople from "../assets/images/InstaPeople.png";

// components

import Loading from "../components/Loading";
import Error from "../components/Error";
import { useDemoLogin } from "../hooks/useDemoLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();
  const { demoLogin, isDemoPending, demoError } = useDemoLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const demoAccountLogin = () => {
    demoLogin(
      process.env.REACT_APP_DEMO_EMAIL,
      process.env.REACT_APP_DEMO_PASSWORD
    );
  };

  return (
    <>
      <main className="authContainer">
        <section className="flex w-full justify-center bg-[#fbfcfe] lg:bg-white">
          <img src={InstaPeople} className="hidden w-[60%] lg:block" />

          <section className="flex items-center justify-center lg:w-[40%]">
            {/*  Login */}
            <form
              className="flex w-full max-w-xl flex-col items-center justify-center gap-5 rounded bg-white px-3 py-6 shadow-md lg:shadow-none"
              onSubmit={handleSubmit}
            >
              <div>
                {/* Insta Img */}
                <img src={Instagram} className="h-full w-full " />
              </div>

              <p className="-translate-y-5 px-8 text-center text-[28px] font-semibold text-[#737373]">
                Login
              </p>

              <input
                type="email"
                placeholder="Email"
                className="authInput"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                type="password"
                placeholder="Password"
                className="authInput"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              {(email == "" || password == "") && (
                <button className="authBtn pointer-events-none opacity-60">
                  Log in
                </button>
              )}

              {email !== "" && password !== "" && (
                <>
                  <button className="authBtn">
                    {isPending && (
                      <Loading loadingColor={"white"} loadingSize={35} />
                    )}
                    {!isPending && "Log in"}
                  </button>
                  {error && <Error error={error} errorSize={"text-base"} />}
                </>
              )}

              <button
                className="flex w-[95%] items-center  justify-center gap-2 rounded border-[1px] border-[#385185] bg-[#385185] px-[16px] py-[7px] text-lg font-semibold text-white sm:w-[80%]"
                type="button"
                onClick={() => demoAccountLogin()}
              >
                {isDemoPending && (
                  <Loading loadingColor={"white"} loadingSize={35} />
                )}
                {!isDemoPending && (
                  <>
                    {" "}
                    <FaUser />
                    <span className="">Try a demo account </span>
                  </>
                )}
              </button>
              {demoError && <Error error={demoError} errorSize={"text-base"} />}

              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
                <p className="font-medium text-[#8E8E8E]"> OR </p>
                <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
              </div>

              <p className="w-full text-center text-lg">
                {" "}
                Don't have an account ?{" "}
                <Link to="/signup" className="font-semibold text-[#0095F6]">
                  Sign up
                </Link>
              </p>
            </form>{" "}
          </section>
        </section>
      </main>
    </>
  );
};

export default Login;

import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

// components
import Footer from "../components/Footer";
import PhoneMockups from "../components/PhoneMockups";
import DownloadAppLinks from "../components/DownloadAppLinks";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <main className="authContainer">
        <section className="mt-10 flex">
          <PhoneMockups />

          <section className="flex flex-col gap-3 mdl:px-6">
            {/*  Login */}
            <form
              className="flex w-full flex-col items-center justify-center gap-5 border-[1px] border-instGrayish py-10"
              onSubmit={handleSubmit}
            >
              <div className="h-16 w-48">
                {/* Insta Img */}
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/instagram-written-logo.png?alt=media&token=932674c8-42e5-4918-b607-d324b3aa5f5f"
                  }
                  className="h-full w-full "
                />
              </div>

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
                      <Loading loadingColor={"white"} loadingSize={25} />
                    )}
                    {!isPending && "Log in"}
                  </button>
                  {error && <Error error={error} errorSize={"text-base"} />}
                </>
              )}

              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
                <p className="font-medium text-[#8E8E8E]"> OR </p>
                <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
              </div>

              <p className="text-center text-sm">
                {" "}
                Don't have an account ?{" "}
                <Link to="/signup" className="font-semibold text-[#0095F6]">
                  Sign up
                </Link>
              </p>
            </form>{" "}
            <DownloadAppLinks />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;

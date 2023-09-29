import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

// components
import Footer from "../components/Footer";
import PhoneMockups from "../components/PhoneMockups";
import DownloadAppLinks from "../components/DownloadAppLinks";
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
      {" "}
      <main className="authContainer my-4">
        <section className="flex">
          <PhoneMockups />

          <section className="flex flex-col gap-3 mdl:px-6">
            {/* Sign up  */}
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
                  alt="instagram"
                />
              </div>

              <p className="bg-red px-8 text-center font-semibold text-[#737373]">
                Sign up to see photos and videos from your friends.
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
                type="text"
                placeholder="Username"
                className="authInput"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
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

              {(email === "" || username === "" || password === "") && (
                <button className="authBtn pointer-events-none opacity-60">
                  Sign Up
                </button>
              )}

              {email !== "" && username !== "" && password !== "" && (
                <>
                  <button className="authBtn">
                    {isPending && (
                      <Loading loadingColor={"white"} loadingSize={25} />
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

              <p className="text-center text-sm">
                {" "}
                Have an account ?{" "}
                <Link to="/login" className="font-semibold text-[#0095F6]">
                  Log in
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

export default Signup;

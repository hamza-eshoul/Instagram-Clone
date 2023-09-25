import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, username);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-around  font-sans">
      <div className="mt-28 flex">
        <PhoneMockups />

        {/* Sign Up And Download */}
        <div className="flex w-[348px] flex-col gap-3">
          {/* Sign up & Login */}
          <form
            className="flex w-full flex-col items-center justify-center gap-5 border-[1px] border-instGrayish py-10"
            onSubmit={handleSubmit}
          >
            <div className="h-16 w-48">
              {/* Insta Img */}
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FHomeImg%2Finstagram.png?alt=media&token=460edde3-4b9e-4f0f-b789-b2d4ca4edb0d"
                }
                className="h-full w-full "
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

            {(email == "" || username == "" || password == "") && (
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

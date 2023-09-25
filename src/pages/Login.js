import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

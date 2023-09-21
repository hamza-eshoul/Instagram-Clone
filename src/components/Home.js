import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import phoneImg1 from "../img/phoneImg1.png";
import phoneImg2 from "../img/phoneImg2.png";
import phoneImg3 from "../img/phoneImg3.png";
import phoneImg4 from "../img/phoneImg4.png";
import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

const imgArray = [phoneImg1, phoneImg2, phoneImg3, phoneImg4];

const Home = ({ setUserInfo, userInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  let navigate = useNavigate();
  const signInRouteChange = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const globalInterval = setInterval(() => {
      setCurrentIndex(-1);
    }, 20000);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval, globalInterval);
  }, []);

  // Sign in with a pop-up window

  setPersistence(auth, browserLocalPersistence).then(() => {
    // New sign-in will be persisted with local persistence.
    return signIn;
  });

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The google access Token that can be used to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        setUserInfo(user);

        // Add user to DB

        setDoc(
          doc(db, "profiles", user.displayName),
          {
            nbrFollowers: 0,
            nbrFollowing: 0,
            nbrPosts: 0,
            profileImgUrl: user.photoURL,
            profileName: user.displayName,
          },
          { merge: true }
        );
      })

      .catch((err) => {
        console.log(err.message);
      });
    // Modify the Auth State persistence

    signInRouteChange("main");
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-around  font-sans">
      <div className="mt-28 flex">
        {/* Phone Mockups */}
        <div className="relative">
          <div className="h-[620px] w-[450px]">
            {" "}
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FHomeImg%2Fphones.png?alt=media&token=f1232220-bbde-4b30-a50c-563ea10aa11e"
              }
              className="h-full w-full object-cover"
            />
          </div>
          <div className={`absolute left-[150px] top-5 h-[535px] w-[250px]`}>
            <img
              src={imgArray[currentIndex]}
              className="featureImage h-full w-full"
            />{" "}
          </div>
        </div>

        {/* Sign Up And Download */}
        <div className="flex w-[348px] flex-col gap-3">
          {/* Sign up & Login */}
          <div className="flex h-[400px] w-full flex-col items-center justify-center gap-5 border-[1px] border-instGrayish">
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
              type="text"
              placeholder="Insert your username"
              className="h-9 w-[80%] rounded-sm border-[1px] border-instGrayish bg-[#FAFAFA] pt-[9px] pl-[8px] pb-[7px] hover:border-neutral-800 focus:outline-[#ccd0d5]"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />

            <button
              className="w-[80%] rounded-lg bg-[#0095F6] py-[7px] px-[16px] text-[14px] font-semibold text-white"
              onClick={signIn}
            >
              Sign Up With Google
            </button>

            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
              <p className="font-medium text-[#8E8E8E]"> OR </p>
              <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
            </div>

            <div className="flex w-[80%] flex-col items-center gap-2">
              <p className="text-center"> Already Signed Up ?</p>
              <button
                className="w-2/3 rounded-lg border-[1px] border-[#ccd0d5] py-[7px] px-[16px] text-[14px] font-semibold hover:border-neutral-800 hover:bg-[#FAFAFA]"
                onClick={signIn}
              >
                Login
              </button>
            </div>
          </div>{" "}
          <div
            className={`${
              inputValue === "" ? "hidden" : "absolute"
            } right-[300px] top-[280px] h-[140px] w-[180px] border-[1px] border-instGrayish border-opacity-100 p-2 opacity-70 shadow-xl`}
          >
            <p className="h-full w-full text-justify text-sm">
              Username is not necessary as it is taken from the google account
              used for the login. This field is displayed for UI purposes only.
            </p>
          </div>
          {/* Download The Application */}
          <div className="flex w-full flex-col items-center gap-3 border-[1px] border-instGrayish pt-2 pb-3">
            <h1> Get the app. </h1>
            <div className="flex w-full justify-center gap-2">
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fitunes.apple.com%2Fapp%2Finstagram%2Fid389801252%3Fpt%3D428156%26ct%3Digweb.loginPage.badge%26mt%3D8%26vt%3Dlo&e=AT0wQ-11T97j2VQEl_HyW8qG3MZO1CAFPtC8ZU-SMhMjSyAqb-g1ZVDyAMWMYkoLJ_jAR-Bso3-uz1HFqa8ouJDFTLEp1yOi&s=1"
                target="_blank"
                className="h-full w-[38%] cursor-pointer active:opacity-50"
              >
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FHomeImg%2FdlAppStore.png?alt=media&token=f9bd4ba2-68cb-4244-ab6b-0d8cc223e085"
                  }
                  className="h-full w-full"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D5095EEDE-9F82-4454-9405-9AEF16A8820C%26utm_content%3Dlo%26utm_medium%3Dbadge"
                target="_blank"
                className="h-full w-[38%] cursor-pointer active:opacity-50"
              >
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2FHomeImg%2FdlGooglePlay.png?alt=media&token=a8db9dce-b28f-40f6-a763-9e389e7cb146"
                  }
                  className="h-full w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

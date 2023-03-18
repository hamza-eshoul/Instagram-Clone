import React, { useEffect, useState } from "react";
import instagram from "../img/instagram.png";
import dlAppStore from "../img/dlAppStore.png";
import dlGooglePlay from "../img/dlGooglePlay.png";
import phones from "../img/phones.png";
import phoneImg1 from "../img/phoneImg1.png";
import phoneImg2 from "../img/phoneImg2.png";
import phoneImg3 from "../img/phoneImg3.png";
import phoneImg4 from "../img/phoneImg4.png";
import Footer from "./Footer";

const imgArray = [phoneImg1, phoneImg2, phoneImg3, phoneImg4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const globalInterval = setInterval(() => {
      setCurrentIndex(-1);
    }, 20000);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval, globalInterval);
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-around  font-sans">
      <div className="mt-28 flex">
        {/* Phone Mockups */}
        <div className="relative">
          <div className="h-[620px] w-[450px]">
            {" "}
            <img src={phones} className="h-full w-full object-cover" />
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
              <img src={instagram} className="h-full w-full " />
            </div>

            <input
              type="text"
              placeholder="Insert your username"
              className="h-9 w-[80%] rounded-sm border-[1px] border-instGrayish bg-[#FAFAFA] pt-[9px] pl-[8px] pb-[7px] hover:border-neutral-800 focus:outline-[#ccd0d5]"
            />

            <button className="w-[80%] rounded-lg bg-[#0095F6] py-[7px] px-[16px] text-[14px] font-semibold text-white">
              Sign Up With Google
            </button>

            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
              <p className="font-medium text-[#8E8E8E]"> OR </p>
              <div className="h-[1px] w-32 border-[0.5px] border-instGrayish"></div>
            </div>

            <div className="flex w-[80%] flex-col items-center gap-2">
              <p className="text-center"> Already Signed Up ?</p>
              <button className="w-2/3 rounded-lg border-[1px] border-[#ccd0d5] py-[7px] px-[16px] text-[14px] font-semibold hover:border-neutral-800 hover:bg-[#FAFAFA]">
                Login
              </button>
            </div>
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
                <img src={dlAppStore} className="h-full w-full" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D5095EEDE-9F82-4454-9405-9AEF16A8820C%26utm_content%3Dlo%26utm_medium%3Dbadge"
                target="_blank"
                className="h-full w-[38%] cursor-pointer active:opacity-50"
              >
                <img src={dlGooglePlay} className="h-full w-full" />
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

import { useState, useEffect } from "react";

// images
import phoneImg1 from "../assets/images/phoneImg1.png";
import phoneImg2 from "../assets/images/phoneImg2.png";
import phoneImg3 from "../assets/images/phoneImg3.png";
import phoneImg4 from "../assets/images/phoneImg4.png";

const imgArray = [phoneImg1, phoneImg2, phoneImg3, phoneImg4];

const PhoneMockups = () => {
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
    <div className="relative hidden mdl:block ">
      <div className="h-[620px] w-[450px]">
        {" "}
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/phone-mockup.png?alt=media&token=525a3d94-3207-4373-bb20-4e8eaec53598"
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
  );
};

export default PhoneMockups;

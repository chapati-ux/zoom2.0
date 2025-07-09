import React from "react";
import video from "../assets/assets/video/Mainvid.mp4"
import RotatingText from "./RotatingText";
const Main = () => {
  return (
    <div className=" h-[100vh] w-screen bg-red-500">
      <video src={video} control="hidden" muted autoPlay  loop className=' absolute top-0 h-[100%] w-[100%] object-cover ' ></video>


 <div className=" absolute top-[20%] ;
 p-1 w-[auto] ">
  <h1 className="text-[6rem]  font-bold text-white text-sm/28
">WE CREATE <br /> AWSOME</h1>
  <RotatingText
  texts={['DEVELOPMENT', 'MARKETING', 'BRANDING']}
  mainClassName=" text-[6rem] text-white font-bold overflow-hidden  justify-center "
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={4000}
/>
 </div>
  

      
    </div>
  );
};

export default Main;

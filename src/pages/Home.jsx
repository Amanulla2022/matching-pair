import React from "react";
import monkey from "../images/monkey_smile.png";
import { IoMdSettings } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <main className="bg-image bg-cover bg-center h-screen w-full flex justify-center items-center">
      <img src={monkey} alt="smiling monkey" />
      <IoMdSettings className="icons left-[10%]" />
      <FaStar className="icons left-[20%]" />
      <div
        className="designs h-8 w-12 bottom-[15%] left-[15%] "
        style={{
          clipPath: "ellipse(41% 17% at 49% 48%)",
        }}
      ></div>
      <div
        className="designs h-4 w-6 bottom-[8%] left-[7%]"
        style={{
          clipPath: "ellipse(41% 17% at 49% 48%)",
        }}
      ></div>
      <div
        className="designs h-8 w-12 bottom-[15%] left-[25%]"
        style={{
          clipPath: "ellipse(41% 17% at 49% 48%)",
        }}
      ></div>
      <div
        className="designs h-4 w-6 bottom-[8%] left-[18%] "
        style={{
          clipPath: "ellipse(41% 17% at 49% 48%)",
        }}
      ></div>
      <div
        className="absolute h-40 w-96 top-10 right-20 bg-white rounded-full flex justify-center items-center"
        style={{
          clipPath:
            "polygon(0 5%, 100% 3%, 100% 75%, 76% 81%, 64% 96%, 57% 76%, 0 75%)",
        }}
      >
        <p className="text-blue-500 font-bold text-4xl text-center hover:underline cursor-pointer">
          Welcome Kiddo!
        </p>
      </div>
      <button className="absolute bottom-12 right-20 h-20 w-32 rounded-full font-bold bg-yellow-400 text-white text-3xl p-2 hover:underline border-8 border-yellow-300">
        START
      </button>
    </main>
  );
};

export default Home;

import React from "react";
import Button1 from "./button";

const Hero = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col text-center m-auto max-w-[900px] items-center pt-[90px]">
        <h1 className="font-bold text-[48px] md:text-[72px] leading-none">
          Welcome to QuizMaster Exam
        </h1>
        <p className="text-2xl my-6">
        Believe you can and you're halfway there
        </p>
        <Button1></Button1>
      </div>
    </div>
  );
};

export default Hero;

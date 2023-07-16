import React from "react";
import { motion } from "framer-motion";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Banner from "./Banner";

const Main = () => {
  return (
    <div className="w-full  h-[88vh] xl:flex items-center gap-20 justify-between">
      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"> <LeftSide /> </div>
      <div className="h-[88vh] mx-auto p-4"> <Banner /> </div>
      <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"> <RightSide /> </div>
    </div>
  );
}
export default Main;
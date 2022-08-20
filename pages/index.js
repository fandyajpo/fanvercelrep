import { getLayout } from "components/Layout";
import AboutMe from "components/Page/AboutMe";

import Food from "components/Page/Food";
import FoodImage from "components/Page/FoodImage";

import Skill from "components/Page/Skill";

import Photo from "components/Page/Photo";
import Music from "components/Page/Music";
import SingerPhoto from "components/Page/SingerPhoto";

const Home = () => {
  return (
    <>
      <div>
        <div className="float-right hidden md:block">
          <Photo />
        </div>
        <AboutMe />
      </div>

      <Skill />
      <div className="flex flex-row justify-between w-full gap-x-4 pb-4 ">
        <div className=" h-full w-1/4 p-4 border shadow-md ">
          <FoodImage />
        </div>
        <div className="w-full">
          <Food />
        </div>
      </div>
      <Music />
      <SingerPhoto />
    </>
  );
};

Home.getLayout = getLayout;
export default Home;

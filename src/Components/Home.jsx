import React from "react";
import Banner from "./Banner";
import ChefSection from "./ChefSection";

const Home = () => {
  return (
    <div>
      <div className="w-[83%] mx-auto">
        <Banner />
      </div>
      <div className="w-[83%] mx-auto ">
        <ChefSection />
      </div>
    </div>
  );
};

export default Home;

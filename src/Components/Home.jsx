import Banner from "./Banner";
import ChefSection from "./ChefSection";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <div className="w-[83%] mx-auto">
        <Banner />
      </div>
      <div className="w-[83%] mx-auto ">
        <ChefSection />
      </div>
      <div className="w-[83%] mx-auto">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;

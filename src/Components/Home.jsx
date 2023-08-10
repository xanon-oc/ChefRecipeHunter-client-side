import Banner from "./Banner";
import CallToAction from "./CallToAction";
import ChefSection from "./ChefSection";
import Gallery from "./Gallery";
import Partners from "./Partners";
import CarouselTestimonial from "./Reviews";

const Home = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <Banner />
      </div>
      <div className="w-[90%] mx-auto ">
        <ChefSection />
      </div>
      <div className="mt-16 mb-16">
        <Partners />
      </div>
      <div className="w-[90%] mx-auto">
        <Gallery />
      </div>
      <div className="mt-8 overflow-hidden">
        <CarouselTestimonial />
      </div>
      <div className="mt-8 overflow-hidden">
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;

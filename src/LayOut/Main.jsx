import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="relative">
      <div className="sticky top-0">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

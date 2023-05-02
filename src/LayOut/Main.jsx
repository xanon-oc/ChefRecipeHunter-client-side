import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="relative">
      <div className="sticky top-0">
        <Header />
      </div>
      <div>
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center h-screen">
            <div className="loader">
              <span className="loader-text">loading</span>
              <span className="load"></span>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Main;

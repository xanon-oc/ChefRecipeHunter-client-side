import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";

const RecipeCard = ({ dish }) => {
  // destructure
  const { recipe_name, ingredients, recipe_pic, cooking_method, rating, id } =
    dish;

  // bookmark function
  const [isBookmarked, setIsBookmarked] = useState([]);
  const handleBookmark = (id) => {
    const findingData = isBookmarked.find((data) => data === id);
    if (!findingData) {
      setIsBookmarked([...isBookmarked, id]);
    }
  };
  // Toast
  const notifySuccess = () =>
    toast.success(" Added to favourite..!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <LazyLoad>
          <img
            alt="Office"
            src={recipe_pic}
            className="h-56 w-full object-cover"
          />
        </LazyLoad>

        <div className="bg-white p-4 sm:p-6">
          <a className="flex items-center justify-between" href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">{recipe_name}</h3>
            <p className="flex items-center gap-4 text-sm">
              <Rating value={rating} readOnly className=" h-4 z-10" />
              {rating}
            </p>
          </a>
          <hr className="mt-2 mb-2" />
          <p className="text-sm font-medium">ingredients :</p>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 grid grid-cols-2">
            {ingredients.map((ingredient) => (
              <li key={ingredient.id}>{`${ingredient}`} .</li>
            ))}
          </p>
          <p className="mt-2 line-clamp-6 text-sm/relaxed text-gray-500">
            <span className="text-sm font-medium"> Cooking Method :</span>{" "}
            {cooking_method}
          </p>
          <hr className="mt-4 mb-2" />
          <div
            onClick={
              !isBookmarked.find((dsbl) => dsbl === id) ? notifySuccess : ""
            }
          >
            {!isBookmarked.find((dsbl) => dsbl === id) ? (
              <button
                disabled={isBookmarked.find((dsbl) => dsbl === id)}
                onClick={() => handleBookmark(id)}
                className="flex mx-auto mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 text-red-500`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </button>
            ) : (
              <button className="flex mx-auto mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 text-green-500`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default RecipeCard;

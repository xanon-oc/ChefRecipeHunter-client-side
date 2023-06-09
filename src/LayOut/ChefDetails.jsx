import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import RecipeCard from "../Components/RecipeCard";
import LazyLoad from "react-lazy-load";

const ChefDetails = () => {
  // hooks
  const navigation = useNavigation();
  const ChefDetails = useLoaderData();
  // destructure
  const {
    name,
    picture_link,
    years_of_experience,
    number_of_recipes,
    likes,
    bio_description,
    recipes,
  } = ChefDetails;
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
          <div>
            <div>
              <div className="text-center">
                <div className="flex justify-center mt-8">
                  <LazyLoad>
                    <img
                      className="rounded-full w-36 h-36 object-cover"
                      src={picture_link}
                      alt=""
                    />
                  </LazyLoad>
                </div>
                <div className="mt-4 md:w-1/2 lg:w-1/2 w-[80%] flex flex-col mx-auto ">
                  <h2 className="uppercase animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-3xl font-black text-transparent mb-4">
                    {name}
                  </h2>
                  <p className="text-sm text-justify lg:text-center md:text-center text-[#757575]">
                    Hi there! My name is
                    <span className="ml-1 mr-1 uppercase animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text  font-black text-transparent">
                      {name}
                    </span>
                    and I&apos;m i Indian Master Chef. Here is some information
                    about me.
                    {bio_description}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[80%] flex justify-center mx-auto">
              <div className="mt-6 flex items-center gap-8 text-xs">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Experience</p>

                    <p className="font-medium">{years_of_experience} Years</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Recipes</p>

                    <p className="font-medium">{number_of_recipes}</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Likes</p>

                    <p className="font-medium">{likes}</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-center mb-8 mt-20 font-extrabold text-5xl">
              Recipes
            </h2>
            <div className="w-[83%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((dish) => (
                <RecipeCard key={dish.id} dish={dish} />
              ))}
            </div>
            <div className="w-[83%] mx-auto">
              <div className="mt-20">
                <div className="mt-8 mb-8 ">
                  <section className="rounded-3xl  relative bg-[url(https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18716.jpg?w=1380&t=st=1682967704~exp=1682968304~hmac=3fd84f6da5a03a37038f5c24f975cb33dd3e37720d0090d201c53928484c5a15)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0   sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[500px] lg:items-center lg:px-8">
                      <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                          Choose from
                          <strong className="block font-extrabold text-white">
                            thousands of
                          </strong>
                          <strong className="block font-extrabold text-white">
                            recipes
                          </strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-base/relaxed text-white">
                          Appropriately integrate technically sound value with
                          scalable infomediaries negotiate sustainable strategic
                          theme areas
                        </p>
                        <div>
                          <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                              to="/"
                              className="flex gap-2 w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                              Back to home
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="w-full">
                <Footer />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChefDetails;

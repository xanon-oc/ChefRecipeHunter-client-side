import React from "react";

const Banner = () => {
  return (
    <div className="mt-8 mb-8 ">
      <section className="rounded-3xl  relative bg-[url(https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18716.jpg?w=1380&t=st=1682967704~exp=1682968304~hmac=3fd84f6da5a03a37038f5c24f975cb33dd3e37720d0090d201c53928484c5a15)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0  bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

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
              Appropriately integrate technically sound value with scalable
              infomediaries negotiate sustainable strategic theme areas
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="flex gap-2 w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Sign up today
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
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

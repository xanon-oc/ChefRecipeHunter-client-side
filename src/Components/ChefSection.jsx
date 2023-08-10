import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
const ChefSection = () => {
  const [chefData, setChefData] = useState([]);

  // using useEffect to get data from outside

  useEffect(() => {
    fetch("https://dish-dash-server-xanon-oc.vercel.app/all")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  return (
    <div className="mb-8 mt-20">
      <h2 className="text-center mb-14 text-xl font-bold tracking-tight">
        Meet Our Chefs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {chefData.map((cDetails) => (
          <article
            key={cDetails.id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm "
          >
            <LazyLoad>
              <img
                alt="Office"
                src={cDetails.picture_link}
                className="h-56 w-full object-cover object-top "
              />
            </LazyLoad>

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  {cDetails.name}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {cDetails.bio_description}
              </p>
              <p className="flex gap-4 font-medium mt-2">
                <small>Experience : {cDetails.years_of_experience}</small>
                <small>Recipes : {cDetails.number_of_recipes}</small>
                <small>Likes : {cDetails.likes}</small>
              </p>

              <Link
                to={`/chef_Details/${cDetails.id}`}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                View Recipes
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;

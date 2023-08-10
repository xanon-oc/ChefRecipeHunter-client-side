const CallToAction = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left">
          <h1 className="text-5xl font-bold leadi">Stay in the loop</h1>
          <p className="text-lg">
            Subscribe to our monthly news letter to get updated about our latest
            recipe.
          </p>
        </div>
        <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end border rounded-lg">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3 border-none"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900 bg-green-400 text-white hover:bg-orange-400 "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

const Contact = () => {
  return (
    <section className="bg-gray-100">
      {/* Contact system is here */}

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Our cuisine website is a platform that showcases the diverse and
              vibrant food culture of India. It features traditional and modern
              recipes, cooking techniques, regional variations, and cultural
              influences, providing a rich culinary experience for food
              enthusiasts, home cooks, and professionals alike.
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600">
                0161 4100 771
              </a>

              <address className="mt-2 not-italic">
                Saluja Residency, Hill Cart Rd, Siliguri, West Bengal 734001,
                India
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    id="option1"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option1"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm font-medium"> Cuisine </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option2"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option2"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm font-medium"> Food </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option3"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option3"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm font-medium"> Query </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

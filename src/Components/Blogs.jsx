import React from "react";
import Pdf from "react-to-pdf";

const Blogs = () => {
  const ref = React.createRef();
  return (
    <div className="w-4/5 mb-20 mx-auto text-start">
      {/* Assignment questions are answered here */}

      <div className="mt-10">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          questions and answers
        </h2>
        <div className="flex mx-auto justify-center mb-8">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf}>
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
            )}
          </Pdf>
        </div>
        <section ref={ref}>
          <div>
            <h2 className="text-lg font-bold">
              Differences between
              <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                uncontrolled and controlled components.
              </span>
            </h2>
            <p className="text-sm leading-6">
              In React, a form input component can be either controlled or
              uncontrolled. The main difference between the two is how the
              component&apos;s data is managed. A controlled component is one
              where the value of the input is controlled by React. This means
              that the component&apos;s value is tied to a piece of state, and
              the value can only be updated by updating that state. When the
              user interacts with the input, React updates the state and
              re-renders the component with the new value. This approach gives
              the developer more control over the data and makes it easier to
              perform data validation and enforce data constraints. An
              uncontrolled component, on the other hand, is one where the value
              of the input is managed by the DOM. The developer can still attach
              event handlers to the input, but the value is not tied to a piece
              of state. This approach can be simpler to implement, but it makes
              it harder to perform data validation and enforce data constraints.
              In summary, controlled components give the developer more control
              over the data, while uncontrolled components can be simpler to
              implement but make it harder to perform data validation and
              enforce data constraints.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">
              How to validate React props using
              <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                PropTypes ?
              </span>
            </h2>
            <p className="text-sm leading-6">
              In React, PropTypes is a package that allows developers to specify
              the types and shapes of the props that a component is expecting.
              PropTypes is used to validate the props that a component receives,
              and to provide helpful error messages when the props are
              incorrect. To use PropTypes, you need to import it into your
              component and define the expected prop types using the propTypes
              static property. propTypes is an object that maps the prop names
              to their expected types, and can be assigned a variety of types
              such as string, number, array, bool, object, and more.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">
              Tell us the difference between
              <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                nodejs and express js.
              </span>
            </h2>
            <p className="text-sm leading-6">
              Node.js and Express.js are both popular technologies used in
              building web applications, but they serve different purposes.
              Node.js is a JavaScript runtime built on Chrome&apos;s V8
              JavaScript engine that allows developers to run JavaScript code
              outside of a browser environment. Node.js provides a set of
              built-in modules and APIs for handling input/output operations,
              file system operations, networking, and more. Node.js is often
              used for building server-side applications, command-line tools,
              and real-time applications. Express.js, on the other hand, is a
              web application framework built on top of Node.js. It provides a
              set of tools and features for building web applications, such as
              routing, middleware, templates, and more. Express.js simplifies
              the process of building web applications and makes it easier to
              handle HTTP requests, responses, and server-side logic. In
              summary, Node.js is a JavaScript runtime environment that provides
              the infrastructure for running JavaScript code outside of a
              browser environment, while Express.js is a web application
              framework built on top of Node.js that simplifies the process of
              building web applications.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">
              What is a custom hook, and why will you create a
              <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">
                custom hook?
              </span>
            </h2>
            <p className="text-sm leading-6">
              A custom hook is a JavaScript function that allows you to extract
              and reuse stateful logic from React functional components. Custom
              hooks enable you to abstract away complex logic, making your
              components more readable, maintainable, and reusable. Custom hooks
              typically use the built-in React hooks like useState, useEffect,
              useContext, and useReducer, and they can also use other custom
              hooks. By following the naming convention, you can create a custom
              hook by prefixing the function name with the word &apos;use.&apos;
              You might create a custom hook to extract and reuse a piece of
              logic that is used in multiple components, or when you need to
              encapsulate complex behavior in a reusable function. Custom hooks
              can also help you abstract away implementation details and make
              your code more modular and testable. For example, you might create
              a custom hook to handle form input validation, data fetching, or
              animation behavior. By creating a custom hook, you can make the
              logic reusable across different components without duplicating
              code or creating tight coupling between components.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;

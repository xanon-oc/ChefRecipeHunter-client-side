import React from "react";

const Blogs = () => {
  return (
    <div className="w-4/5 mb-20 mx-auto text-start">
      <div className="mt-16">
        <h2 className="text-lg font-bold">
          When we use
          <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
            REACT Context api ?
          </span>
        </h2>
        <p className="text-sm leading-6">
          React Context API is a React structure that allows you to share
          specific data from all levels of your application and aids in solving
          prop-drilling. It was introduced with React v.16.3 and allows you to
          pass data through your component trees, giving your components the
          ability to communicate and share data at different levels. Context is
          an API that is built into React, starting from React version 16. This
          means that we can create and use context directly by importing React
          in any React project.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">
          What is
          <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
            Custom HOOK ?
          </span>
        </h2>
        <p className="text-sm leading-6">
          Custom Hooks are reusable functions that a React JS software developer
          can use to add special and unique functionality to the React
          applications. Usually, if there is a requirement to add a feature, one
          can install a third-party library and solve the problem. But what if
          there is no such library with hooks that can be used? That’s where
          custom hooks come into play. A custom hook will consist of one or more
          React JS hooks from the library. Custom hooks in React are a way to
          reuse functionality (particularly functionality involving stateful
          logic) between components. You could just use a function to share
          between components, but then you don’t get all the goodness of being
          able to access component lifecycle events and state.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">
          What is
          <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
            useRef ?
          </span>
        </h2>
        <p className="text-sm leading-6">
          The useRef Hook in React can be used to directly access DOM nodes, as
          well as persist a mutable value across rerenders of a component. When
          combined with the ref attribute, we could use useRef to obtain the
          underlying DOM nodes to perform DOM operations imperatively. useRef is
          a hook that returns a mutable ref object whose .current property is
          initialized with the passed argument (initialValue). The returned
          object will persist for the full lifetime of the component.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">
          What is
          <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">
            useMemo ?
          </span>
        </h2>
        <p className="text-sm leading-6">
          React has a built-in hook called useMemo that allows you to memoize
          expensive functions so that you can avoid calling them on every
          render. You simply pass in a function and an array of inputs and
          useMemo will only recompute the memoized value when one of the inputs
          has changed. useMemo is a hook that will only recompute the memoized
          value when one of the dependencies has changed. This can be useful
          when you have a function that is expensive to compute and you don’t
          want it to be called on every render.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

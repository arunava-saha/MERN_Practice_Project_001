import React, { useState, useEffect } from "react";

// const Jocks = () => {
//   return (
//     <div>
//       {jokes.map((joke) => (
//         <div key={joke.id}>
//           <h3>{joke.title}</h3>
//           <p>{joke.joke}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Jocks;

const DataComponent = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(10);

  const showMore = () => {
    setVisibleItems(visibleItems + 5);
  };

  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Listen for scroll events to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto flex flex-col p-4 border">
      <div className="flex flex-wrap w-full">
        {data.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="p-2 flex w-1/6 bg-transparent text-yellow-100 h-64 rounded-xl mx-3 my-2 flex-col border-b-2 border-r-2"
          >
            <h3 className="text-lg mb-2 p-2 font-semibold">{item.title}</h3>
            <p className="text-gray-200 ">jocks: {item.joke}</p>
          </div>
        ))}
      </div>
      <div>
        {visibleItems < data.length && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 transition duration-300 hover:bg-blue-600 hover:shadow-md"
            onClick={showMore}
          >
            Show More
          </button>
        )}
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="back-to-top-button fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default DataComponent;

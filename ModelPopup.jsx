import React, { useState } from "react";

const ModelPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  function handlePopup() {
    setShowPopup(!showPopup);
    console.log(showPopup);
  }

  return (
    <div>
      {/* onClick={function} -> when there are no parameters otherwise use Arrow function*/}
      <div className="flex flex-col justify-center items-center pt-4 text-wrap w-2/4 mx-auto">
        <button
          disabled={showPopup}
          className={` text-white rounded-md py-2 px-4 ${
            showPopup ? "bg-gray-500" : "bg-green-800"
          }`}
          onClick={handlePopup}
        >
          Show Model Popup
        </button>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio
          perspiciatis fuga dolorem tempore hic ipsa velit deleniti ipsam
          facilis explicabo quisquam quae at veniam, ratione adipisci quidem ad
          aut.
        </p>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-400 opacity-75">
          <div className="popup-box text-center py-8 px-16 rounded-lg shadow-2xl bg-white ">
            <h1 className="text-2xl font-bold">There is an Emergency</h1>
            <p className="py-3"> Click close Button to close popup</p>
            <button
              className="px-4 py-2 bg-purple-800 text-white rounded-lg"
              onClick={handlePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelPopup;

import React from "react";

const AddReview = () => {
  document.title = `Review || Book Now`;
  return (
    <div>
      <div className="h-10 bg-gray-800 px-10 flex items-center text-orange-400 text-xl font-bold">
        <p>Add a Review</p>
      </div>
      <div
        style={{ minHeight: "70vh" }}
        className="w-full flex items-center justify-center"
      >
        <div>
          <p className="text-2xl normal-case">Add a Review Comming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default AddReview;

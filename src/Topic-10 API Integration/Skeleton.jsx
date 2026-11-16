import React from "react";

const Skeleton = ({ limit }) => {
  return (
    <div className="skeleton_container">
      {Array.from({ length: limit }).map((_, index) => (
        <div key={index} className="skeleton_card"></div>
      ))}
    </div>
  );
};

export default Skeleton;

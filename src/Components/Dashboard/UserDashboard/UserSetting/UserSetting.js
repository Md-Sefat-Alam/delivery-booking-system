import React from "react";

const UserSetting = () => {
  document.title = `Setting || Book Now`;
  return (
    <div>
      <div className="h-10 bg-gray-800 px-10 flex items-center text-orange-400 text-xl font-bold">
        <p>User Setting</p>
      </div>
      <div
        style={{ minHeight: "70vh" }}
        className="w-full flex items-center justify-center"
      >
        <div>
          <p className="text-2xl normal">Setting is comming soon</p>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;

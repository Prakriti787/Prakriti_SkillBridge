import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-80">
      <div className="flex flex-col items-center">

        <img
          src="https://via.placeholder.com/100"
          alt="profile"
          className="w-24 h-24 rounded-full mb-4"
        />

        <h2 className="text-xl font-semibold">{user.name}</h2>

        <p className="text-gray-500">{user.email}</p>

        <p className="mt-2 text-sm text-gray-600">
          University: {user.university}
        </p>

        <p className="text-sm text-gray-600">
          Skills: {user.skills}
        </p>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Edit Profile
        </button>

      </div>
    </div>
  );
};

export default ProfileCard;
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Authentication";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="py-8">
      <div className=" p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Profile</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-gray-700 font-bold">Name:</h3>
            <span className="text-gray-900">
              {user?.profile.firstName} {user?.profile.lastName}
            </span>
          </div>

          <div>
            <h3 className="text-gray-700 font-bold">Phone Number:</h3>
            <span className="text-gray-900">{user?.profile.phoneNumber}</span>
          </div>
          <div>
            <h3 className="text-gray-700 font-bold">Address:</h3>
            <span className="text-gray-900">{user?.profile.address}</span>
          </div>
          <div>
            <h3 className="text-gray-700 font-bold">Email:</h3>
            <span className="text-gray-900">{user?.email}</span>
          </div>
          <div className="mt-6">
            <button
              onClick={logout}
              className="w-full bg-red-600 text-white py-2 rounded-md shadow-md hover:bg-red-700 transition duration-200 ease-in-out"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

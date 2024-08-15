import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-screen">
      <div className="p-6 bg-gray-900 flex items-center">
        <img
          src="https://via.placeholder.com/50"
          alt="User"
          className="w-12 h-12 rounded-full border-2 border-blue-500"
        />
        <div className="ml-4">
          <h1 className="text-xl font-semibold">John Doe</h1>
          <p className="text-sm">john.doe@example.com</p>
        </div>
      </div>
      <nav className="flex-1">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-4 hover:bg-gray-700 transition duration-300"
            >
              <FaHome className="mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="flex items-center p-4 hover:bg-gray-700 transition duration-300"
            >
              <FaUser className="mr-3" />
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center p-4 hover:bg-gray-700 transition duration-300"
            >
              <FaCog className="mr-3" />
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="flex items-center p-4 hover:bg-gray-700 transition duration-300"
            >
              <FaSignOutAlt className="mr-3" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

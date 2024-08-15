import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardSidebar from "../Pages/Shared/Sidebar/DashboardSidebar";
import AuthContext from "../Pages/Context/Authentication";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <DashboardSidebar />

        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <header className="bg-white shadow-md px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                Welcome, {user?.profile.firstName} {user?.profile.lastName}
              </h2>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Notifications
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

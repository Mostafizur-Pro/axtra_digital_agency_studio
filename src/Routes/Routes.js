import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}>
        <Route index element={<HomePage />} />
        {/* <Route
          path="jobs/create-job"
          element={
            <PrivateRoute>
              <JobForm />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="about"
          element={
            <PrivateRoute>
              <AboutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="contact"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        /> */}
        <Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
        </Route>
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route
          index
          element={
            // <PrivateRoute>
            <Dashboard />
            // </PrivateRoute>
          }
        />
         <Route
          path="/dashboard/profile"
          element={
        
              <Profile />
         
          }
        /> 
      </Route>
    </>
  )
);

export default router;

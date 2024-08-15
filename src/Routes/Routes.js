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
      {/* <Route path="/jobs" element={<JobLayout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <AllJob />
            </PrivateRoute>
          }
        />
      </Route> */}
    </>
  )
);

export default router;

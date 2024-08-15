import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [apiError, setApiError] = useState("");

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        profile: {
          firstName: data.profile.firstName,
          lastName: data.profile.lastName,
          phoneNumber: data.profile.phoneNumber,
          address: data.profile.address,
        },
      };
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/signup",
        formattedData
      );
      if (response.data.success) {
        window.location.href = "/login";
      } else {
        alert(response.data.message);
      }

      alert("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.response) {
        if (error.response.data && error.response.data.errors) {
          const serverErrors = error.response.data.errors;
          setApiError(
            serverErrors.general || "An error occurred. Please try again."
          );
        } else {
          setApiError("An error occurred. Please try again.");
        }
      } else if (error.request) {
        setApiError(
          "No response from the server. Please check your internet connection."
        );
      } else {
        setApiError("Error setting up the request. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-400">
      <div className="max-w-lg mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {apiError && (
            <div className="bg-red-100 border border-red-500 text-red-700 p-4 rounded-md mb-4">
              {apiError}
            </div>
          )}
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-medium text-left"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("profile.firstName", {
                required: "First name is required",
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.profile?.firstName
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.profile?.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profile.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-medium text-left"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("profile.lastName", {
                required: "Last name is required",
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.profile?.lastName
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.profile?.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profile.lastName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-medium text-left"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              {...register("profile.phoneNumber", {
                required: "Phone number is required",
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.profile?.phoneNumber
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.profile?.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profile.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium text-left"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              {...register("profile.address", {
                required: "Address is required",
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.profile?.address
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.profile?.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profile.address.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirm_password"
              className="block text-gray-700 font-medium text-left"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              {...register("confirm_password", {
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.confirm_password
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="/login" // Update with the actual path to your login page
                className="text-blue-600 hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

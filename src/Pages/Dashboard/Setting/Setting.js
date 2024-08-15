// src/components/Profile.js
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../Context/Authentication";

const Setting = () => {
  const { user, logout } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get("http://localhost:5000/api/v1/auth/userinfo", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.user) {
          setValue("firstName", response.data.user.profile.firstName);
          setValue("lastName", response.data.user.profile.lastName);
          setValue("phoneNumber", response.data.user.profile.phoneNumber);
          setValue("address", response.data.user.profile.address);
          setValue("email", response.data.user.email);
        }

        setIsLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        alert("Failed to fetch user data. Please try again.");
        setIsLoading(false); // Set loading to false on error
      }
    };

    fetchUserData();
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      const token = sessionStorage.getItem("accessToken");
      const response = await axios.put(
        "http://localhost:5000/api/v1/users/me",
        { ...data, profile: { ...data } },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        alert("Profile updated successfully!");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Profile update failed:", error);
      alert("Profile update failed. Please try again.");
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-400">
      <div className="max-w-md mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-medium text-left">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "First name is required",
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.firstName ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-medium text-left">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", {
                required: "Last name is required",
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.lastName ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 font-medium text-left">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.phoneNumber ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium text-left">
              Address
            </label>
            <input
              type="text"
              id="address"
              {...register("address", {
                required: "Address is required",
              })}
              className={`mt-1 block w-full border rounded-md p-3 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
                errors.address ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium text-left">
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
                errors.email ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setting;

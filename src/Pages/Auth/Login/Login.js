import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://axtra-digital-agency-studio-server.vercel.app/api/v1/auth/login",
        data
      );

      if (response.data.success) {
        sessionStorage.setItem("accessToken", response.data.data.accessToken);
        window.location.href = "/";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);

      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-400">
      <div className="max-w-md mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a
                href="/register" // Update with the actual path to your registration page
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default Login;

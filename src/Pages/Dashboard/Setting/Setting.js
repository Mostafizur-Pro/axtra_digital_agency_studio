import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../Context/Authentication";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [firstName, setFirstName] = useState(user?.profile.firstName || "");
  const [lastName, setLastName] = useState(user?.profile.lastName || "");
  const [phoneNumber, setPhoneNumber] = useState(
    user?.profile.phoneNumber || ""
  );
  const [address, setAddress] = useState(user?.profile.address || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.profile.firstName || "");
      setLastName(user.profile.lastName || "");
      setPhoneNumber(user.profile.phoneNumber || "");
      setAddress(user.profile.address || "");
    }
  }, [user]);

  const handleSave = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://axtra-digital-agency-studio-server.vercel.app/api/v1/users/update/${user?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`, // Ensure you include the token
          },
          body: JSON.stringify({
            profile: { firstName, lastName, phoneNumber, address },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const result = await response.json();

      // Optionally, you can update the user data in context if necessary
      // updateUser(result);

      alert("Profile updated successfully!");

      window.location.reload();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-8">
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Settings</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4">
          <div>
            <h3 className="text-gray-700 font-medium">First Name:</h3>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Last Name:</h3>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Phone Number:</h3>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Address:</h3>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={handleSave}
              className={`w-full ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
              } text-white py-2 rounded-md shadow-md hover:${
                loading ? "" : "bg-blue-700"
              } transition duration-200 ease-in-out`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

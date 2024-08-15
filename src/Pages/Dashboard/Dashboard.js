import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  // console.log("dash", users);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://axtra-digital-agency-studio-server.vercel.app/api/v1/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="py-8">
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          User Dashboard
        </h2>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && users.length === 0 && <p>No users found</p>}

        {!loading && !error && users.length > 0 && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                {/* <th className="border p-2">ID</th> */}
                <th className="border p-2">Name</th>

                <th className="border p-2">Email</th>
                <th className="border p-2">Phone Number</th>
                <th className="border p-2">Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  {/* <td className="border p-2">{user._id}</td> */}
                  <td className="border p-2">
                    {user.profile.firstName} {user.profile.lastName}
                  </td>

                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.profile.phoneNumber}</td>
                  <td className="border p-2">{user.profile.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

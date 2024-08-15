import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = sessionStorage.getItem("accessToken");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://axtra-digital-agency-studio-server.vercel.app/api/v1/auth/userinfo",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data.data); // Store the user info in state
        } else {
          console.error("Failed to fetch user info");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        setLoading(false); // Set loading to false after the request is done
      }
    };

    fetchUserInfo();
  }, []); // Empty dependency array ensures this effect runs once on mount

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("accessToken"); // Consistent with token storage
  };

  const updateUser = async (updatedProfile) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/users/update/${user.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(updatedProfile),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const result = await response.json();
      setUser((prevUser) => ({
        ...prevUser,
        profile: result.profile,
      }));
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, logout, loading, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

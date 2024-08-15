import React, { useContext } from "react";
import AuthContext from "../Context/Authentication";

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold underline">
        Hello, {user ? user.firstName : "Guest"}!
      </h1>
      <div className="my-4">
        {user ? (
          <button onClick={logout} className="btn btn-secondary">
            Logout
          </button>
        ) : (
          <p>Please log in to access more features.</p>
        )}
      </div>
      {/* Example buttons for demonstration */}
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
    </div>
  );
};

export default HomePage;

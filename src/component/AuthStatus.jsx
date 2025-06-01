import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider"; // ✅ Ensure correct path

const AuthStatus = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
    } catch (err) {
      alert("Logout failed: " + err.message);
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-4">
      {!user ? (
        <button
          onClick={goToLogin}
          className="px-4 py-2 bg-red-500 text-white rounded-3xl hover:bg-white hover:text-red-500 border border-red-500"
        >
          Login
        </button>
      ) : (
        <>
          <a
            href={`mailto:${user.email}`}
            className="flex items-center gap-3 hover:underline"
            title={`Email ${user.displayName}`}
          >
            <img
              src={user.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-left text-sm">
              <p className="font-medium">{user.displayName}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </a>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-3xl border border-red-500 hover:text-red-500 hover:bg-white"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default AuthStatus;

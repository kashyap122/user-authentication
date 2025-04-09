import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard", { replace: true }); // cleans query string
    }
  });
  const handleLogout = () => {
    localStorage.removeItem("token"); // or sessionStorage.clear();
    navigate("/"); // redirect to login page
  };
  return (
    <button className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200" onClick={handleLogout}>
      Logout
    </button>
  )
}

export default Dashboard
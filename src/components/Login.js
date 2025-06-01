// src/components/SignIn.jsx
import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoginSuccess } from "../utils/userslice";
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const dispatch=useDispatch()

  
    const handleSubmit = (e) => {
    e.preventDefault();
    

    // Send data to parent handler or Redux
    dispatch(isLoginSuccess({ username, password }));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;

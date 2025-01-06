import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import OAuth from "../components/OAuth";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(`${BASE_URL}/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (!data.verified) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-center my-7 text-3xl font-montserrat">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="email"
          className="border rounded-lg p-3 focus:outline-none font-roboto"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg p-3 focus:outline-none font-roboto"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white uppercase rounded-lg p-3 font-semibold hover:opacity-95 disabled:opacity-80 font-roboto"
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
        {/* <OAuth /> */}
      </form>
      <div className="flex gap-2 mt-5 font-roboto">
        <p>Don't have an account ?</p>
        <Link to={"/signup"}>
          <span className="text-red-600 font-roboto">Register</span>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
      {!formData.verified && (
        <p className="text-red-600 mt-5 font-bold font-roboto">
          Please Verify your Email
        </p>
      )}
    </div>
  );
}

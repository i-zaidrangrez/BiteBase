import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "/logoWider.png";
import { Mail, ArrowLeft } from "lucide-react";
import { findAccount } from "../redux/authSlice.js";

const FindAccount = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const handleSearch = async (e) => {
    try {
        e.preventDefault();
        const res = await dispatch(
          findAccount({
            email,
          }),
        ).unwrap();
        console.log(res)
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div className="min-h-screen font-IMB bg-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-orange-100 p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-10 w-22 rounded-xl bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">
            <img src={Logo} alt="" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Find Your Account
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Enter the email associated with your BiteBase account and we'll send
          you a password reset link.
        </p>

        {/* Form */}
        <form onSubmit={handleSearch} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            {auth.loading ? "Searching..." : "Search Account"}
          </button>
        </form>

        {/* Back */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/login"
            className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
          >
            <ArrowLeft size={18} />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindAccount;

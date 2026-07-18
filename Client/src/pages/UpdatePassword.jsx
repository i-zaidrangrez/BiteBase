import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "/logoWider.png";
import { FaLock } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../redux/authSlice.js";

const UpdatePassword = () => {
  const { token } = useParams();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await dispatch(
        resetPassword({
          token,
          password,
          confirmedPass: confirmPassword,
        }),
      );
      console.log(res);
      if (res.type.endsWith("fulfilled")) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6EC] px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-orange-100 p-8">
        <div className="flex justify-center mb-6">
          <div className="h-10 w-22 rounded-xl bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">
            <img src={Logo} alt="" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-slate-900">
          Update Your Password
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Enter your new password below to secure your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-800">
              New Password
            </label>

            <div className="flex items-center border rounded-xl px-4 h-14">
              <FaLock className="text-gray-400" />

              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                placeholder="Enter new password"
                className="flex-1 px-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-800">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-xl px-4 h-14">
              <FaLock className="text-gray-400" />

              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
                type="password"
                placeholder="Confirm new password"
                className="flex-1 px-3 outline-none"
              />
            </div>
          </div>

          <button className="w-full h-14 rounded-xl bg-[#F97316] text-white font-semibold hover:bg-orange-600 transition">
            Update Password
          </button>
          <p
            className={`${auth.error ? "border border-red-500 text-red-500" : null} ${auth.success ? "border border-green-500 text-green-500" : null} text-sm font-medium rounded-lg px-4 py-3 mt-3
    flex items-center justify-center text-center
    transition-all duration-300`}
          >
            {auth.error == "jwt expired"
              ? "Link Expired"
              : null || auth.error
                ? auth.error
                : null || auth.success
                  ? auth.success
                  : null}
          </p>
        </form>

        <div className="flex justify-center mt-7">
          <Link to="/login" className="text-[#F97316] hover:text-orange-600">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;

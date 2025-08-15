"use client";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/authSlice";
import { useRouter } from "next/navigation";

export default function LogOut() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    dispatch(logoutUser());
    router.push("/");
  };

  return (
    <>
      <button
        onClick={handleLogout}
        type="submit"
        className="w-full py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Logout
      </button>
    </>
  );
}

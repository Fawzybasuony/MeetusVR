"use client";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

export default function LogOut() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/logout", { method: "POST" });
      dispatch(logoutUser());
      toast.success("You have successfully logged out!");
      router.push("/");
    } catch (error) {
      toast.error("Logout failed. Please try again ");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleLogout}
        type="submit"
        className="w-full py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all duration-300 shadow-md hover:shadow-lg"
      >
        {loading ? (
          <div
            className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
          "Logout"
        )}
      </button>
    </>
  );
}

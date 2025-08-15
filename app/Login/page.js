import { toast } from "react-toastify";
import Form from "./components/Form";
import Right_Section from "./components/Right_Section";

export default function Login() {
  return (
    <div className="text-center flex justify-between items-center bg-[#E9ECF2]  h-screen relative overflow-hidden">
      {/* Left Section */}
      
      <div className="w-1/2 h-screen flex items-center  ">
        <div className="mx-auto  ">
          {/* Text Header */}
          <div className="font-normal">
            <p className="text-3xl sm:text-5xl text-[#1A1A1E] h-[66px]">
              Welcome back
            </p>
            <p className="text-[#62626B] h-[56px]">
              Step into our shopping metaverse for an unforgettable shopping
              experience
            </p>
          </div>

          {/* Form */}
          <Form />

          {/* Sign up Link */}
          <p className="mt-9 text-sm text-[#62626B]">
            Don't have an account ? Sign up
          </p>
        </div>
      </div>

      {/* Right Section */}
      <Right_Section />


    </div>
  );
}

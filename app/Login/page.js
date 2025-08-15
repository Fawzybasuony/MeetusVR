import Form from "./components/Form";
import Right_Section from "./components/Right_Section";

export default function Login() {
  return (
    <div className="grid grid-cols-12 bg-[#E9ECF2] h-screen text-center relative overflow-hidden">
      {/* Left Section */}

      <div className="col-span-12 lg:col-span-6 h-screen flex items-center ">
        <div className="mx-auto px-20 xl:px-34">
          {/* Text Header */}
          <div className="font-normal">
            <p className="text-3xl sm:text-5xl text-[#1A1A1E] h-[66px]">
              Welcome back
            </p>
            <p className="text-[#62626B] h-14 mb-5">
              Step into our shopping metaverse for an unforgettable shopping
              experience
            </p>
          </div>

          {/* Form */}
          <Form />

          {/* Sign up Link */}
          <p className="mt-8 text-sm text-[#62626B]">
            Don't have an account ? Sign up
          </p>
        </div>
      </div>

      {/* <Right_Section /> */}
      <Right_Section />
    </div>
  );
}

import Form from "./components/Form";
import Right_Section from "./components/Right_Section";
import Top_Text from "./components/Top_Text";

export default function Login() {
  return (
    <div className="grid grid-cols-12 bg-[#E9ECF2] h-screen text-center relative overflow-hidden">
      {/* Left Section */}

      <div className="col-span-12 lg:col-span-6 h-screen flex items-center ">
        <div className="mx-auto px-20 xl:px-34">
          {/* Text Header */}
          <Top_Text />
          {/* Form */}
          <Form />
        </div>
      </div>

      {/* <Right_Section /> */}
      <Right_Section />
    </div>
  );
}

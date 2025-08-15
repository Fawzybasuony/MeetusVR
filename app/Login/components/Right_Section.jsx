export default function Right_Section() {
  return (
    <div className="col-span-6 h-screen flex items-center">
      <img
        className="hidden sm:block p-20 z-50"
        src={"/Logo.png"}
        alt="MeetusVR"
      />
      <div className="hidden lg:block absolute top-[-100px] w-[500px] h-[300px] bg-[#E477F6] blur-[150px]" />
      <div className="hidden lg:block absolute bottom-[-250px] left-[1100px] w-[500px] h-[400px] bg-[#9E77F6] blur-[200px]" />
    </div>
  );
}

import LogOut from "./components/LogOut";
import User from "./components/User";

export default function Dashboard() {
  // git data

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Dashboard
        </h1>
        {/* User */}
        <User />
        {/* LogOut */}
        <LogOut />
      </div>
    </div>
  );
}

import { getUserInfo } from "../../lib/GetUsers";

export default async function User() {
  const user = await getUserInfo();
  if (!user) return <div>Unauthorized</div>;

  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-sm mb-6">
      <p className="text-gray-600">
        <span className="font-semibold">ID:</span> {user?.id}
      </p>
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Name:</span> {user?.name}
      </p>
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">E-mail:</span> {user?.email}
      </p>
    </div>
  );
}

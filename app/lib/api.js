// /lib/api.js
import { cookies } from "next/headers";

export async function getUserInfo() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null; // أو ترمي error
  }

  const res = await fetch(
    "https://api-yeshtery.dev.meetusvr.com/v1/user/info",
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null; // أو throw new Error("Unauthorized");
  }

  const data = await res.json();
  return data;
}

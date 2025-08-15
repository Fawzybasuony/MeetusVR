import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUserInfo() {
  const cookieStore = await cookies();          
  const token = cookieStore.get("token")?.value;  

  const res = await fetch(
    "https://api-yeshtery.dev.meetusvr.com/v1/user/info",
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data;
}

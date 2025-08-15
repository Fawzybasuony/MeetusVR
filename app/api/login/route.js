import { cookies } from "next/headers";

export async function POST(request) {
  const { email, password } = await request.json();

  const res = await fetch(
    "https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, isEmployee: true }),
    }
  );

  const data = await res.json();
  console.log(data);

  cookies().set("token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

import { ABeeZee } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "MeetusVR",
  description: "Step into our shopping metaverse for an unforgettable shopping experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abeezee.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

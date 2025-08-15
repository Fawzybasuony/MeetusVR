import { ABeeZee } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Bounce, ToastContainer } from "react-toastify";

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "MeetusVR",
  description:
    "Step into our shopping metaverse for an unforgettable shopping experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abeezee.className} antialiased`}>
        <Providers>{children}</Providers>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}

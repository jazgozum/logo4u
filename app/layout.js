import { Rubik } from "next/font/google";
import "./globals.css";
import Provider from "./provider";


 const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",

 })


export const metadata = {
  title: "Logo4u",
  description: "Free AI Logo Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={rubik.className}
      >
        <Provider>
        {children}
        </Provider>
        
      </body>
    </html>
  );
}

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
  openGraph: {
    title: "Logo4u",
    description: "Create stunning AI-generated logos instantly for free!",
    url: "https://www.logo4u.xyz/", // Replace with your actual URL
    siteName: "Logo4u",
    images: [
      {
        url: "https://www.logo4u.xyz/logo.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Logo4u - Free AI Logo Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo4u",
    description: "Free AI Logo Generator",
    site: "@Jas0nly", // Optional: your Twitter username
    creator: "@Jas0nly", // Optional: your Twitter username
    images: ["https://www.logo4u.xyz/logo.png"], // Replace with actual image
  },
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

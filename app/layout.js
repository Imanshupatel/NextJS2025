import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Imanshu Patel | Would Best Gameimg Plateform ",
    template: "%s | Imanshu patel",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Thapa Technical.",
  keywords: ["React", "Next.js", "Web Development", "Thapa Technical"],
  icons: {
    icon: "/images/ir-logo.png",
  },
  metadataBase: new URL("https://thapatechical.com"),
  openGraph: {
    title: "Thapa Technical",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Thapa Technical",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thapa Technical Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thapa Technical",
    description: "Learn Web Dev from scratch with Thapa Technical!",
    creator: "@thapatechnical",
    images: ["/og-image.png"],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${workSans.variable} `}>
        {children}
      </body>
    </html>
  );
}
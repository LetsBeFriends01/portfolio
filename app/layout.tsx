import GlowingDotsBackground from "@/components/bg/GlowingDotsBackground";
import SideBar from "@/components/sidebar/SideBar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gelo Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat.className} dark`}>
        <div className="flex gap-5">
          <SideBar />
          <div className="flex-1 px-4 py-2">{children}</div>
        </div>
        <GlowingDotsBackground />
        <Toaster />
      </body>
    </html>
  );
}

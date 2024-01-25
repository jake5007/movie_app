import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  BigSidebar,
  Navbar,
  SidebarContextProvider,
  SmallSidebar,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* TODO: NavBar (Header, Sidebar) */}

      <body className={inter.className}>
        <div className="grid grid-cols-[1fr] md:grid-cols-[auto,1fr]">
          <SidebarContextProvider>
            <BigSidebar />
            <SmallSidebar />
            <Navbar />
          </SidebarContextProvider>
          {children}
        </div>
      </body>
      {/* TODO: Footer */}
    </html>
  );
}

import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import Providers from "./providers";
import { Toaster } from "sonner";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
            <NavbarContainer>
              <Navbar />
            </NavbarContainer>
            {children}
            <Toaster />
        </Providers>
        
      </body>
    </html>
  );
}

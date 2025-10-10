import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import NavbarContainer from "@/components/navbar/NavbarContainer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
        {children}
      </body>
    </html>
  );
}

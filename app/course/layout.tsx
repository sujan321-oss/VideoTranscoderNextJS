"use client"

import Nav from "./(nav)/nav";







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body>

        <div className="main flex min-h-screen w-full relative  ">
 
          <Nav/>
  

          <div className=" flex-grow  overflow-hidden">

              {children}

            </div>

      </div>




      </body>
    </html>
  );
}
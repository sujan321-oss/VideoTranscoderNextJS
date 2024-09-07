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

        <div className="main flex min-h-screen w-full gap-5 ">
 
          <Nav/>
  

          <div className=" flex-grow-0  bg-slate-600">

              {children}

            </div>

      </div>




      </body>
    </html>
  );
}
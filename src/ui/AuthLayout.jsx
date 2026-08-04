/** @format */

import React from "react";
import WelcomeHero from "./Welcome";
const AuthLayout = ({ children }) => {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/ikhlas-qlW7RwHZVG8-unsplash.jpg')", // دقت کنید که در react معمولا از /images استفاده می‌شود نه public/images
      }}
    >
      <div className="w-full max-w-7xl md:min-h-[500px] flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-fuchsia-400">
        {/* Background side */}
        <div
          className="hidden md:flex sm:flex-[2] bg-cover bg-center items-center justify-center relative"
          style={{
            backgroundImage:
              "url('/images/milad-fakurian-PGdW_bHDbpI-unsplash.jpg')",
          }}
        >
          {/* قرار دادن کارت در لایه بالا */}
          <div className="relative z-10 w-full flex justify-center">
            <WelcomeHero />
          </div>
        </div>

        {/* Form Side */}
        <div className="flex-1 p-5 flex items-center justify-center bg-white shadow-lg">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;

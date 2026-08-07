/** @format */

import React from "react";
import WelcomeHero from "./Welcome";
import DarkModeToggle from "./DarkModeToggle";

const AuthLayout = ({ children }) => {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: "url('/images/ikhlas-qlW7RwHZVG8-unsplash.jpg')",
      }}
    >
      {/* Dark overlay for dark mode */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/60 transition-colors pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl md:min-h-[500px] flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-2xl border border-border-secondary">
        {/* Background side */}
        <div
          className="hidden md:flex sm:flex-[2] bg-cover bg-center items-center justify-center relative"
          style={{
            backgroundImage:
              "url('/images/milad-fakurian-PGdW_bHDbpI-unsplash.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/10 dark:bg-black/50 transition-colors" />

          {/* Welcome Card */}
          <div className="relative z-10 w-full flex justify-center">
            <WelcomeHero />
          </div>
        </div>

        {/* Form Side */}
        <div className="flex-1 p-6 sm:p-8 flex items-center justify-center bg-bg-secondary text-text-secondary transition-colors shadow-lg">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;

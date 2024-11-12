// pages/index.tsx
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#003366] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-5 bg-[#003366] text-white border-b border-yellow-500">
        <div className="flex items-center">
          <div className="text-2xl font-bold">Whitespace</div>
        </div>
        <nav className="flex space-x-8 text-sm">
          <a href="#" className="hover:text-yellow-500">Products</a>
          <a href="#" className="hover:text-yellow-500">Solutions</a>
          <a href="#" className="hover:text-yellow-500">Resources</a>
          <a href="#" className="hover:text-yellow-500">Pricing</a>
        </nav>
        <button className="px-5 py-2 bg-yellow-400 text-[#003366] font-semibold rounded hover:bg-yellow-500">
          Login
        </button>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center py-20 space-x-10 overflow-x-auto">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left max-w-md">
          <h1 className="text-5xl font-bold mb-4">
            Get More Done with <span className="text-white">Whitespace</span>
          </h1>
          <p className="text-lg mb-8">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600">
            Try Whitespace free →
          </button>
        </div>

        {/* Colored Square Box */}
        <div className="w-128 h-80 bg-blue-500"></div>
      </main>

      {/* Next Section with White Background */}
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-10">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left max-w-md">
              <h1 className="text-5xl font-bold mb-4"> <span className="text-black">Project Management</span>            </h1>
              <p className="text-lg mb-8 text-black">
                Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
              </p>
              <button className="px-6 py-3 bg-[rgba(189,223,255,1)] text-white font-semibold rounded hover:bg-[rgba(189,223,255,0.8)]">
                Get Started →
              </button>
            </div>

            {/* Right Content (Colored Square Box) */}
            <div className="w-98 h-80 bg-blue-500"></div>
          </div>
        </div>
      </section >


    </div >

  );
};

export default HomePage;

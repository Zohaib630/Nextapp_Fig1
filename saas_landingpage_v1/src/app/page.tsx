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
      <main className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Get More Done with <span className="text-white">Whitespace</span>
        </h1>
        <p className="text-lg max-w-md mb-8">
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
        </p>
        <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600">
          Try Whitespace free →
        </button>
      </main>
    </div>
  );
};

export default HomePage;

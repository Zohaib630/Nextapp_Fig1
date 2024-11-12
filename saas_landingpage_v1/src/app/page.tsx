// pages/index.tsx
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#003366] text-white">
      {/* Header */}
      {/* Header */}
      <header className="flex items-center justify-between w-[1920px] h-[92px] px-[220px] py-[16px] bg-[#043873] text-white opacity-100">
        <div className="flex items-center w-[191px] h-[34px]">
          <div
            className="text-2xl font-bold bg-[url('/Logo.svg')] bg-no-repeat bg-left pl-10 w-[37px] h-[29px] mt-2.5"
          >
            whitepace
          </div>
        </div>
        <nav className="flex space-x-8 text-sm w-[549px] h-[23px] gap-x-4">
          <a href="#" className="hover:text-yellow-500 w-[78] h-[23]">Products</a>
          <a href="#" className="hover:text-yellow-500 w-[79] h-[23]">Solutions</a>
          <a href="#" className="hover:text-yellow-500 w-[89] h-[23]">Resources</a>
          <a href="#" className="hover:text-yellow-500 w-[58] h-[23]">Pricing</a>
        </nav>
        <button className="w-[126px] h-[60px] bg-yellow-400 text-[#003366] font-semibold rounded-[8px] px-[40px] py-[16px] hover:bg-yellow-500">
          Login
        </button>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center py-20 space-x-10 overflow-x-auto w-[1920px] h-[829px] top-[140px] right-[220px] bottom -[140px] left-[220px]">
        {/* Left Content */}  
        <div className="flex flex-col items-start text-left w-[656px] h-[361px] gap-x-[60px]">
        <div className="w-[656px] h-[238px] mb-4">
        <h1 className="text-5xl font-bold mb-2">
          Get More Done with <span className="text-white">whitepace</span>
        </h1>
        <p className="text-[18px] leading-[30px] tracking[-0.02em] mb-8 h-[60px]">
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
        </p>
      </div>

      <button className="w-[219px] h-[63px] rounded-[8px] p-[20px] bg-[#4F9CF9] text-white font-semibold hover:bg-[#3B8EDB]">
        Try Whitespace free →
      </button>
        </div>

        {/* Colored Square Box */}
        <div className="w-[824px] h-[549px] bg-[#C4DEFD] gap-x-[4px]"></div>
      </main>

      {/* Next Section with White Background */}
      <section className="bg-white w-[1920px] h-[1588px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex gap-[100px]">

        <div className="max-w-screen-xl mx-auto px-4 w-[1480px] h-[547px] flex gap-[60px]">
          <div className="flex items-center justify-center space-x-10 w-[672px] h-[411px] flex gap-[60px]">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left max-w-md w-[672px] h-[288px] flex gap-[24px]">
            <div className="mb-4 w-[672px]">
              <h1 className="h-[174px] text-[72px] font-[700] leading-[87.14px] tracking-[-2%] text-black">
                Project Management
              </h1>
              <p className="h-[90px] text-[18px] font-[400] leading-[30px] tracking-[-2%] mb-8 text-black">
          Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
        </p>
            </div>
              <button className="flex items-center w-[201px] h-[63px] bg-[#4F9CF9] text-white font-semibold rounded-[6px] px-[40px] py-[20px] hover:bg-[rgba(189,223,255,0.8)] gap-[10px]">
              <span className="inline-block text-[18px] font-[500] leading-[23px] tracking-[-2%] w-[97px] h-[23px] bg-transparent">
                  Get Started
                </span>
              <span >→</span>
            </button>
            </div>              
          </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div> 
        </div>
            
      </section >


    </div >

  );
};

export default HomePage;

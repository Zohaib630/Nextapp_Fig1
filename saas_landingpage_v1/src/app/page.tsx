// pages/index.tsx
import React from "react";
import Image from "next/image"; 

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
        <div className="  w-[656px] h-[361px] ">
        <div className="w-[656px] h-[238px] mb-4 flex flex-col gap-[24px]">
        <h1 className="text-5xl font-bold mb-2 ">
          Get More Done with <span className="text-white">whitepace</span>
        </h1>
        <p className="text-[18px] leading-[30px] tracking[-0.02em] mb-8 h-[60px] ">
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
        </p>

        <button className="w-[219px] h-[63px] rounded-[8px] p-[20px] bg-[#4F9CF9] text-white font-semibold hover:bg-[#3B8EDB]">
        Try Whitespace free →
      </button>
      </div>


        </div>

        {/* Colored Square Box */}
        <div className="w-[824px] h-[549px] bg-[#C4DEFD] "></div>
      </main>
{/* second section */}
<section className="bg-white w-[1920px] h-[1588px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex flex-col  gap-[100px]">


{/* second section content1 */}
<div className="h-[547px] w-[1480px] flex gap-[60px] "> 

{/* heading div */}
<div className="w-[672px] h-[411px] flex gap-x-[60px]  items-center"> 

{/* textblock  */}
<div className="w-[672px] h-[288px] flex flex-col gap-[24px] "> 
  <h1 className="w-[672px] h-[174px] text-[72px] font-inter font-bold leading-[87.14px] tracking[-0.02em] text-black">
    Project Management
  </h1>

  <p className="w-[672px] h-[90px] text-[18px] font-Inter leading-[30px] tracking-[-0.02em] text-black">
    Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
  </p>

  <button className="w-[201px] h-[63px] rounded-[6px] py-[20px] px-[40px] flex items-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3B8EDB]">
    <p className="font-inter text-[18px] font-medium leading-[23px] tracking[-0.02em] text-left text-white">
      Get Started
    </p>
    <img
      src="/Icon.svg" 
      alt="Icon"
      className="w-[14px] h-[14px] opacity-100" 
    />
  </button>
</div>

</div>

<img className="h-[547px] w-[748px]  bg-[#C4DEFD]" ></img> 

</div>
{/* second section content2 */}

<div className= " w-[1480px] h-[661px] flex gap-[100px] ">

{/* Work together Image container */}

<img
      src="/Work Together Image.svg" 
      alt="Icon"
      className="w-[710px] h-[661px]" 
    />
 {/* Heading div    */}
<div className=" w-[670px] h-[294px] flex gap-x-[60px] place-items-end">

{/* Textblock */}
<div className=" w-[670px] h-[171px] flex flex-col gap-[24px] justify-between ">

<h1 className="w-[670px] h-[87px] text-[72px] font-inter font-bold leading-[87.14px] tracking[-0.02em] text-black">
    Work together
  </h1>

  <p className="w-[670px] h-[60px] text-[18px] font-Inter leading-[30px] tracking-[-0.02em] text-black">
  With whitepace, share your notes with your colleagues and collaborate on them.
  You can also publish a note to the internet and share the URL with others.
  </p>

  <button className="w-[201px] h-[63px] rounded-[6px] py-[20px] px-[40px] flex items-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3B8EDB]">
    <p className="font-inter text-[18px] font-medium leading-[23px] tracking[-0.02em] text-left text-white">
      Try it now
    </p>
    <img
      src="/Icon.svg" 
      alt="Icon"
      className="w-[14px] h-[14px] opacity-100" 
    />
  </button>

</div>
</div>
</div>
</section>

{/* 3rd Section */}
<section className="bg-[#043873] w-[1921px] h-[759px] top-[2509px] left-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex gap-x-[98px]">

{/* Content */}
{/* heading div */}
<div className=" w-[697px] h-[294px] flex gap-x-[60px] items-center ">

{/* Textblock */}
<div className=" w-[697px] h-[171px] flex flex-col gap-[24px]">

<h1 className="w-[697px] h-[87px] text-[72px] font-inter font-bold leading-[87.14px] tracking[-0.02em] text-White">
    Use as Extension
  </h1>

  <p className="w-[697px] h-[60px] text-[18px] font-Inter leading-[30px] tracking-[-0.02em] text-white">
  Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
  </p>

  <button className="w-[171px] h-[63px] rounded-[6px] py-[20px] px-[40px] flex items-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3B8EDB]">
    <p className="font-inter text-[18px] font-medium leading-[23px] tracking[-0.02em] text-left text-white">
      Let's Go
    </p>
    <img
      src="/Icon.svg" 
      alt="Icon"
      className="w-[14px] h-[14px] opacity-100" 
    />
  </button>

</div>

</div>

<img
      src="/Illustration.svg" 
      alt="Icon"
      className="w-[686px] h-[479px] flex gap-x-[4px]" 
    />
  
</section>


{/* 4th Section */}
<section className="bg-white w-[1921px] h-[812.09px] top-[3268px] left-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex gap-x-[98px]">
{/* Content */}

<img
      src="/Illustration.svg" 
      alt="Icon"
      className="w-[714px] h-[479px] flex gap-x-[4px]" 
    />

{/* Heading div    */}
<div className=" w-[696px] h-[411px] flex gap-x-[60px] place-items-center">

{/* Textblock */}
<div className=" w-[669px] h-[288px] flex flex-col gap-[24px] justify-between ">

<h1 className="w-[669px] h-[174px] text-[72px] font-inter font-bold leading-[87.14px] tracking[-0.02em] text-black">
    Customise it to your needs
  </h1>

  <p className="w-[669px] h-[90px] text-[18px] font-Inter leading-[30px] tracking-[-0.02em] text-black">
  Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
  </p>

  <button className="w-[171px] h-[63px] rounded-[8px] py-[20px] px-[40px] flex items-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3B8EDB]">
    <p className="font-inter text-[18px] font-medium leading-[23px] tracking[-0.02em] text-left text-white">
    Let's Go
    </p>
    <img
      src="/Icon.svg" 
      alt="Icon"
      className="w-[14px] h-[14px] opacity-100" 
    />
  </button>
  </div>
  </div>


</section>


{/* 5th Section */}
<section className="bg-[#043873] w-[1921px] h-[574px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex justify-center items-center">

  {/* Heading div */}
  <div className="w-[1481px] h-[294px] flex flex-col gap-x-[60px] items-center">

    {/* Textblock */}
    <div className="w-[1064px] h-[171px] flex flex-col gap-[24px] items-center">

      <h1 className="w-[1064px] h-[87px] text-[72px] font-inter font-bold leading-[87.14px] tracking-[-0.02em] text-white">
        Your work, everywhere you are
      </h1>

      <p className="w-[1064px] h-[60px] text-[18px] font-Inter leading-[30px] tracking-[-0.02em] text-white">
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
      </p>

      <button className="w-[195px] h-[63px] rounded-[8px] py-[20px] px-[40px] flex items-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3B8EDB]">
        <p className="font-inter text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-left text-white">
          Try Taskey
        </p>
        <img
          src="/Icon.svg" 
          alt="Icon"
          className="w-[14px] h-[14px] opacity-100" 
        />
      </button>

    </div>
  </div>

</section>

{/* 6th Section */}
<section className="bg-white w-[1922px] h-[538px] top-[4654px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] flex flex-col justify-around items-center gap-[40px]">

  <h1 className="w-full h-[87px] text-[72px] font-inter font-bold leading-[87.14px] tracking-[-0.02em] text-black text-center">
    Our sponsors
  </h1>

  <div className="w-[1482px] h-[71px] flex justify-center gap-[100px]">
    <img
      src="/Apple.svg"
      alt="Apple Icon"
      className="w-[55.47px] h-[68px] opacity-100"
    />
        <img
      src="/Microsoft.svg"
      alt="Apple Icon"
      className="w-[287px] h-[62px] opacity-100"
    />
            <img
      src="/Slack.svg"
      alt="Apple Icon"
      className="w-[280px] h-[71px] opacity-100"
    />
            <img
      src="/Google.svg"
      alt="Apple Icon"
      className="w-[211px] h-[69.81px] opacity-100"
    />
    {/* Add more images as needed */}
  </div>

</section>









    </div >

  );
};

export default HomePage;

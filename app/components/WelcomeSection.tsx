"use client";
import Image from "next/image";
import banduImg from "../../public/welcome.png";

export default function WelcomeSection() {
  return (
    <section className="bandu-gradient flex bg-white items-center justify-center min-h-[100vh] w-[99.2vw] overflow-hidden">
    
        <div className="flex items-center justify-center">
        <div className="w-2xl">
            <h1
            className="text-[80px] font-medu]ium mb-0 mr-6 leading-[1.3]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
          Banduga <span style={{ color: "#ffc400" }}>Hush</span> <br /> Kelibsiz
          </h1>
          <p
          className="mt-2 text-base sm:text-lg md:text-xl text-[#2b4a1e]/80 font-medium leading-relaxed  mx-auto md:mx-0"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Bandu startap rivojlanish yo‘l xaritasi — foydalanuvchi uchun
          qulay, tezkor va samarali xizmatlarni birlashtiruvchi tizim.
        </p>
        </div>
          <Image
            src={banduImg}
            alt="Bandu Logo"
            width={420}
            height={420}
            className="mb-6"
          />
        </div>
       
    </section>
  );
}
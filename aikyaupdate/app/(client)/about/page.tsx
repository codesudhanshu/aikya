import Container from "@/components/Container";
import { Aboutusbanner, Aboutusbannerhome } from "@/images";
import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  const stats = [
    {
      number: "26% - 27%",
      label: "Market Share"
    },
    {
      number: "27",
      label: "Manufacturing Facilities"
    },
    {
      number: "84",
      label: "Export Presence"
    },
    {
      number: "4300+",
      label: "Authorised Distributors"
    },
    {
      number: "200000+",
      label: "Retailers"
    }
  ];

  const values = [
    {
      title: "INTEGRITY",
      description: "Aligning our thoughts, words, and actions with honesty and strong moral principles.",
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E]"
    },
    {
      title: "TEAMWORK",
      description: "Fostering unity and collaboration to achieve shared organisational goals.",
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E]"
    },
    {
      title: "EMPOWERMENT",
      description: "Enabling individuals to take responsibility and drive meaningful contributions.",
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E]"
    },
    {
      title: "CUSTOMER DELIGHT",
      description: "Anticipating needs and consistently exceeding expectations.",
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E]"
    },
    {
      title: "INNOVATION",
      description: "Continuously developing new ideas, technologies, and processes.",
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E]"
    },
    {
      title: "TRUST",
      description: "Building reliability and confidence in our people and systems.",
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E]"
    }
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] sm:h-[800px]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full h-full">
          <Image
            src={Aboutusbanner}
            alt="About Us Banner Desktop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full h-full">
          <Image
            src={Aboutusbannerhome}
            alt="About Us Banner Mobile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <Container>
          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent">
              Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${value.bgColor} rounded-xl p-4 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon} 
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 tracking-wide bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center relative">
                  <div className="text-4xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                  {index < stats.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-purple-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Continually Expanding Section */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E]"></div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent">
                Continually Expanding
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-6xl">
              With a 26% market share and a trajectory of growth, Polycab&apos;s influence remains on the rise. The company boasts a network of 28 state-of-the-art manufacturing facilities, including two strategic joint ventures with Techno and Trafigura. These facilities are strategically located across the states of Gujarat, Maharashtra, Uttarakhand, and the union territory of Daman and Diu.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutUsPage;
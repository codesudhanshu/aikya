import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import all necessary icons from lucide-react, including 'X' for Twitter
import { Facebook, Linkedin, Youtube, Instagram, X } from 'lucide-react'; 
// Assuming '@/assets/images/aikyalogo.jpg' is the correct path for the uploaded image

export default function FooterHome() {
  const currentYear = new Date().getFullYear();

  // Unified styles for section padding
  const sectionPaddingClasses = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'; 
  // Unified styles for border
  const borderClass = 'border-b border-gray-700/50';

  return (
    // <footer className="bg-[#1a1a1a] text-white">
    //   {/* 1. Top Section - Logo and Description */}
    //   <div className={borderClass}>
    //     <div className={sectionPaddingClasses}>
    //       <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
    //         {/* Logo - Using fill/aspectRatio for better image handling */}
    //         <div className="flex-shrink-0 w-44 h-16 relative"> {/* Set a container size */}
    //           <Image
    //             src={aikyaLogo}
    //             alt="Aikya Traders Private Limited Logo"
    //             layout="fill" // Use fill to make it responsive within the container
    //             objectFit="contain" // Contain ensures the full image is visible
    //             className="w-full h-full"
    //           />
    //         </div>
            
    //         {/* Description */}
    //         <div className="lg:w-3/5">
    //           <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
    //             **Aikya Traders Private Limited** is India's trusted distributor of Wires and Cables and electrical products. 
    //             We are at the forefront of providing innovative, safe and energy efficient products to a diverse set of customers 
    //             via a strong distribution network of authorized dealers and retail outlets. Aikya Traders has also served customers globally. 
    //             Our employees are dedicated to upholding robust governance practices, preserving a customer centric culture, 
    //             and imbibing a genuine sense of ecological consciousness.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* 2. Contact Information Section */}
    //   <div className={borderClass}>
    //     <div className={sectionPaddingClasses}>
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
    //         {/* Registered Office */}
    //         <div>
    //           <h3 className="text-white font-bold text-base mb-4 tracking-wider">REGISTERED OFFICE</h3>
    //           <div className="text-gray-300 text-sm leading-relaxed space-y-1">
    //             <p className="font-semibold">Aikya Traders Private Limited</p>
    //             <p>Unit 4, Plot No.105, Halol Vadodara Road,</p>
    //             <p>Village Nurpura, Taluka Halol,</p>
    //             <p>Panchmahal, Gujarat - 389350, India.</p>
    //             <p className="mt-4 font-medium">Phone No.</p>
    //             <p>+02676-227600/227396/227700</p>
    //           </div>
    //         </div>

    //         {/* Corporate Office */}
    //         <div>
    //           <h3 className="text-white font-bold text-base mb-4 tracking-wider">CORPORATE OFFICE</h3>
    //           <div className="text-gray-300 text-sm leading-relaxed space-y-1">
    //             <p>#29, The Ruby, 21st Floor,</p>
    //             <p>Senapati Bapat Marg, Tulsi Pipe Road,</p>
    //             <p>Dadar (West), Mumbai - 400028</p>
    //             <p className="mt-4">Tel: +91 22 2432 7074</p>
    //             <p className="mt-1">
    //               Email: <a href="mailto:info@aikyatraders.com" className="text-gray-300 hover:text-white transition-colors underline underline-offset-4">info@aikyatraders.com</a>
    //             </p>
    //           </div>
    //         </div>

    //         {/* Customer Support */}
    //         <div>
    //           <h3 className="text-white font-bold text-base mb-4 tracking-wider">CUSTOMER SUPPORT</h3>
    //           <div className="text-gray-300 text-sm leading-relaxed space-y-1">
    //             <p>Register your complaint on our WhatsApp</p>
    //             <p className="font-medium text-white">+91 99714 85861</p>
    //             <p className="mt-4">Call us on our toll free number:</p>
    //             <p className="text-white font-medium">1800-267-0008</p>
    //             <p className="mt-4">
    //               Write to us at <a href="mailto:customercare@aikyatraders.com" className="text-gray-300 hover:text-white transition-colors underline underline-offset-4">customercare@aikyatraders.com</a>
    //             </p>
    //           </div>
    //         </div>

    //         {/* International Business */}
    //         <div>
    //           <h3 className="text-white font-bold text-base mb-4 tracking-wider">INTERNATIONAL BUSINESS</h3>
    //           <div className="text-gray-300 text-sm leading-relaxed space-y-1">
    //             <p>For export enquiries contact:</p>
    //             <p className="mt-2">
    //               Email: <a href="mailto:exports@aikyatraders.com" className="text-gray-300 hover:text-white transition-colors underline underline-offset-4">exports@aikyatraders.com</a>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* 3. Navigation Links */}
    //   <div className={borderClass}>
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    //       <nav className="flex flex-wrap justify-start gap-x-5 gap-y-3 text-sm font-medium">
    //         <Link href="/" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Home</Link>
    //         <span className="text-gray-600">|</span>
    //         <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">About us</Link>
    //         <span className="text-gray-600">|</span>
    //         <Link href="/products" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Products</Link>
    //         <span className="text-gray-600">|</span>
    //         <Link href="/dealer-portal" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Dealer Portal</Link>
    //         <span className="text-gray-600">|</span>
    //         <Link href="/news-media" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">News and Media</Link>
    //         <span className="text-gray-600">|</span>
    //         <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Contact us</Link>
    //         <span className="text-gray-600">|</span>
    //         <Link href="/careers" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Careers</Link>
    //         <span className="text-gray-600">|</span>
    //         <Link href="/blog" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Blog</Link>
    //         <span className="text-gray-600">|</span>
    //         <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
    //       </nav>
    //     </div>
    //   </div>

    //   {/* 4. Bottom Section - Copyright and Social */}
    //   <div className="bg-[#141414]">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
    //       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
    //         {/* Copyright */}
    //         <p className="text-gray-400 text-xs md:text-sm order-2 md:order-1">
    //           Copyright {currentYear} &copy; Aikya Traders Private Limited
    //         </p>

    //         {/* Social Media Icons */}
    //         <div className="flex gap-4 order-1 md:order-2">
    //           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
    //             <Facebook className="w-5 h-5" />
    //           </a>
    //           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
    //             <Linkedin className="w-5 h-5" />
    //           </a>
    //           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
    //             <Youtube className="w-5 h-5" />
    //           </a>
    //           {/* Using the consistent 'X' icon from lucide-react for Twitter/X */}
    //           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter/X">
    //             <X className="w-5 h-5" />
    //           </a>
    //           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
    //             <Instagram className="w-5 h-5" />
    //           </a>
    //         </div>

    //         {/* Powered by */}
    //         <p className="text-gray-400 text-xs md:text-sm order-3">
    //           Powered by <span className="text-white font-medium hover:text-gray-300 transition-colors">ibs fulcro</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
<footer 
  className='text-center  text-white'
  style={{
    padding: "1.5em",
    color: "white",
    background: 'linear-gradient(to right, #2563eb, #9333ea, #db2777)'
  }}
>
  Copyright 2025 © Aikya Traders
</footer>
  );
}
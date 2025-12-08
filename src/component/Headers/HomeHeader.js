"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import aikyaLogo from '@/assets/images/aikyalogo.jpg';

export default function HeaderHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const navLinkClass = "px-4 py-2 text-gray-700 font-medium transition-colors duration-200 rounded-md text-sm hover:text-purple-600 hover:bg-purple-50";
  const dropdownLinkClass = "block px-4 py-2.5 text-sm text-gray-700 transition-colors duration-200 hover:text-purple-600 hover:bg-purple-50";
  const mobileNavLinkClass = "block py-3 px-4 text-gray-700 font-medium transition-colors duration-200 rounded-md hover:text-purple-600 hover:bg-purple-50";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={aikyaLogo}
              alt="Aikya Traders"
              width={140}
              height={56}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
            <Link href="/" className={navLinkClass}>
              Home
            </Link>

            <Link href="/about-us" className={navLinkClass}>
              About Us
            </Link>

            {/* Segment Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('segment')}
                className={`${navLinkClass} flex items-center gap-1`}
                aria-expanded={openDropdown === 'segment'}
                aria-haspopup="true"
              >
                Segment
                <ChevronDown 
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === 'segment' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openDropdown === 'segment' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200 animate-fadeIn">
                  <Link href="/categories/wires-cables" onClick={closeMenu} className={dropdownLinkClass}>
                    Wires & Cables
                  </Link>
                  <Link href="/categories/fans" onClick={closeMenu} className={dropdownLinkClass}>
                    Fans
                  </Link>
                </div>
              )}
            </div>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('categories')}
                className={`${navLinkClass} flex items-center gap-1`}
                aria-expanded={openDropdown === 'categories'}
                aria-haspopup="true"
              >
                Categories
                <ChevronDown 
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === 'categories' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openDropdown === 'categories' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-200 animate-fadeIn">
                  <Link href="/categories/wires-cables" onClick={closeMenu} className={dropdownLinkClass}>
                    Wires & Cables
                  </Link>
                  <Link href="/categories/fans" onClick={closeMenu} className={dropdownLinkClass}>
                    Fans
                  </Link>
                  <Link href="/categories/switches" onClick={closeMenu} className={dropdownLinkClass}>
                    Switches & Sockets
                  </Link>
                  <Link href="/categories/lighting" onClick={closeMenu} className={dropdownLinkClass}>
                    LED Lights
                  </Link>
                  <Link href="/categories/mcb-rccb" onClick={closeMenu} className={dropdownLinkClass}>
                    MCB & RCCB
                  </Link>
                  <Link href="/categories/accessories" onClick={closeMenu} className={dropdownLinkClass}>
                    Accessories
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact-us" className={navLinkClass}>
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button - Hidden on Desktop */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 transition-colors hover:bg-purple-50 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 animate-slideDown">
            <div className="space-y-1">
              <Link href="/" onClick={closeMenu} className={mobileNavLinkClass}>
                Home
              </Link>

              <Link href="/about-us" onClick={closeMenu} className={mobileNavLinkClass}>
                About Us
              </Link>

              {/* Mobile Segment Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('segment-mobile')}
                  className={`${mobileNavLinkClass} w-full flex items-center justify-between`}
                  aria-expanded={openDropdown === 'segment-mobile'}
                >
                  Segment
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === 'segment-mobile' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === 'segment-mobile' && (
                  <div className="mt-1 ml-4 space-y-1 animate-fadeIn">
                    <Link href="/categories/wires-cables" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 transition-colors hover:text-purple-600 hover:bg-purple-50 rounded-md">
                      Wires & Cables
                    </Link>
                    <Link href="/categories/fans" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 transition-colors hover:text-purple-600 hover:bg-purple-50 rounded-md">
                      Fans
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Categories Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('categories-mobile')}
                  className={`${mobileNavLinkClass} w-full flex items-center justify-between`}
                  aria-expanded={openDropdown === 'categories-mobile'}
                >
                  Categories
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === 'categories-mobile' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === 'categories-mobile' && (
                  <div className="mt-1 ml-4 space-y-1 animate-fadeIn">
                    <Link href="/categories/wires-cables" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 transition-colors hover:text-purple-600 hover:bg-purple-50 rounded-md">
                      Wires & Cables
                    </Link>
                    <Link href="/categories/fans" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 transition-colors hover:text-purple-600 hover:bg-purple-50 rounded-md">
                      Fans
                    </Link>
                    <Link href="/categories/switches" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 transition-colors hover:text-purple-600 hover:bg-purple-50 rounded-md">
                      Switches & Sockets
                    </Link>
                    <Link href="/categories/lighting" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 transition-colors hover:text-purple-600 hover:bg-purple-50 rounded-md">
                      LED Lights
                    </Link>
                    <Link href="/categories/mcb-rccb" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 transition-colors hover:text-purple-600 hover:bg-purple-50 rounded-md">
                      MCB & RCCB
                    </Link>
                    <Link href="/categories/accessories" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 transition-colors hover:text-purple-600 hover:bg-purple-50 rounded-md">
                      Accessories
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact-us" onClick={closeMenu} className={mobileNavLinkClass}>
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
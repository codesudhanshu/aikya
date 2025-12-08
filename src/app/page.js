"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [countdown, setCountdown] = useState({
    days: 3,
    hours: 8,
    minutes: 42,
    seconds: 30
  });
  const [email, setEmail] = useState('');

  // Window size tracking
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const parallaxX = windowSize.width ? (mousePosition.x - windowSize.width / 2) / 50 : 0;
  const parallaxY = windowSize.height ? (mousePosition.y - windowSize.height / 2) / 50 : 0;

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      alert(`Thank you! We'll notify you at ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden text-white">
      {/* Wire/Cable Animated Background */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            top: `${(i * 8) + Math.random() * 10}%`,
            left: i % 2 === 0 ? '-5%' : '105%',
            width: '120%',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${
              i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#3b82f6' : '#ef4444'
            }, transparent)`,
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
            animation: `slideWire ${10 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* Cable Coils/Circles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`coil-${i}`}
          className="absolute rounded-full border-2 opacity-10"
          style={{
            width: `${150 + i * 100}px`,
            height: `${150 + i * 100}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderColor: i % 2 === 0 ? '#f59e0b' : '#3b82f6',
            animation: `spin ${20 + i * 5}s linear infinite`,
            animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
          }}
        />
      ))}

      <style jsx>{`
        @keyframes slideWire {
          0% {
            transform: translateX(-100%) rotate(${Math.random() * 10 - 5}deg);
          }
          100% {
            transform: translateX(100%) rotate(${Math.random() * 10 - 5}deg);
          }
        }
        
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Logo with Parallax */}
        <div
          className="mb-8 transform transition-transform duration-300"
          style={{
            transform: `translate(${parallaxX}px, ${parallaxY}px)`
          }}
        >
          <div className="w-24 h-24  rounded-2xl flex items-center justify-center">
             <img
                src="/aikyalogo.jpg"
                alt="Aikya Logo"
                className="w-32 h-64 rounded-full object-contain"
              />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 via-blue-500 to-red-500 bg-clip-text text-transparent">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-2xl">
          Something amazing is on its way. Get ready for an extraordinary experience.
        </p>

        <Link href="/about" className="mb-12 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg">
          Know More About Aikya
        </Link>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12">
          {[
            { label: 'Days', value: countdown.days },
            { label: 'Hours', value: countdown.hours },
            { label: 'Minutes', value: countdown.minutes },
            { label: 'Seconds', value: countdown.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] shadow-xl border border-white/20">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                  {String(item.value).padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm md:text-base text-gray-400 mt-2 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
          />
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg font-semibold"
          >
            Notify Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
            <a
              key={social}
              href="#"
              className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
              aria-label={social}
            >
              <span className="text-xl font-bold">{social[0]}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
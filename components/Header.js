// components/Header.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100" style={{fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif'}}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
           <Image src="/logo.svg" alt="Company Logo" width={100} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#use-cases" className="relative text-gray-600 hover:text-[#9333EA] transition-all duration-300 text-[14px] font-medium group px-2 py-2 rounded-lg hover:bg-purple-50/80">
              Use Cases
              <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-[#9333EA] transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
            </Link>
            <Link href="#security" className="relative text-gray-600 hover:text-[#9333EA] transition-all duration-300 text-[14px] font-medium group px-2 py-2 rounded-lg hover:bg-purple-50/80">
              Security Overview
              <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-[#9333EA] transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
            </Link>
            <div className="relative group">
              <button className="relative text-gray-600 hover:text-[#9333EA] transition-all duration-300 text-[14px] font-medium flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-purple-50/80">
                Developers
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-[#9333EA] transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </button>
            </div>
            <div className="relative group">
              <button className="relative text-gray-600 hover:text-[#9333EA] transition-all duration-300 text-[14px] font-medium flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-purple-50/80">
                Resources
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-[#9333EA] transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </button>
            </div>
            <div className="relative group">
              <button className="relative text-gray-600 hover:text-[#9333EA] transition-all duration-300 text-[14px] font-medium flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-purple-50/80">
                Company
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-[#9333EA] transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </button>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-gray-600 hover:text-[#9333EA] transition-all duration-300 text-[14px] font-medium px-3 py-2 rounded-lg hover:bg-purple-50/80">
              Log in
            </Link>
            <Link 
              href="/get-started" 
              className="bg-[#9333EA] text-white px-4 py-2 rounded-2xl font-semibold text-[13px] hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Get started for free
            </Link>
            <Link 
              href="/book-demo" 
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-2xl font-medium text-[13px] hover:border-[#9333EA] hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:text-[#9333EA] hover:shadow-lg transition-all duration-300"
            >
              Book demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2 hover:text-[#9333EA] hover:bg-purple-50 rounded-md transition-all duration-300 hover:scale-110 hover:shadow-sm relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu with Full Screen Blur Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Full Screen Blur Overlay */}
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" 
                 onClick={() => setIsMobileMenuOpen(false)}></div>
            
            {/* Mobile Menu */}
            <div className="lg:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200/30 shadow-2xl animate-in slide-in-from-top-5 relative z-45">
              {/* Close Button Inside Menu */}
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200/30">
                <span className="text-gray-900 font-semibold">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-[#9333EA] hover:bg-purple-50 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="px-4 py-6 space-y-4">
                <Link 
                  href="#use-cases" 
                  className="block text-gray-700 hover:text-[#9333EA] text-base font-medium py-3 transition-all duration-300 px-3 rounded-lg hover:bg-[#9333EA]/5 hover:shadow-sm hover:translate-x-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Use Cases
                </Link>
                <Link 
                  href="#security" 
                  className="block text-gray-700 hover:text-[#9333EA] text-base font-medium py-3 transition-all duration-300 px-3 rounded-lg hover:bg-[#9333EA]/5 hover:shadow-sm hover:translate-x-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Security Overview
                </Link>
                <button className="flex items-center justify-between w-full text-gray-700 hover:text-[#9333EA] text-base font-medium py-3 transition-all duration-300 px-3 rounded-lg hover:bg-[#9333EA]/5 hover:shadow-sm hover:translate-x-1">
                  <span>Developers</span>
                  <svg className="w-4 h-4 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="flex items-center justify-between w-full text-gray-700 hover:text-[#9333EA] text-base font-medium py-3 transition-all duration-300 px-3 rounded-lg hover:bg-[#9333EA]/5 hover:shadow-sm hover:translate-x-1">
                  <span>Resources</span>
                  <svg className="w-4 h-4 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="flex items-center justify-between w-full text-gray-700 hover:text-[#9333EA] text-base font-medium py-3 transition-all duration-300 px-3 rounded-lg hover:bg-[#9333EA]/5 hover:shadow-sm hover:translate-x-1">
                  <span>Company</span>
                  <svg className="w-4 h-4 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="pt-6 space-y-3">
                  <Link 
                    href="/login" 
                    className="block text-gray-700 hover:text-[#9333EA] text-base font-medium py-3 transition-all duration-300 px-3 rounded-lg hover:bg-[#9333EA]/5 hover:shadow-sm hover:translate-x-1 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link 
                    href="/get-started" 
                    className="block w-full bg-[#9333EA] text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get started for free
                  </Link>
                  <Link 
                    href="/book-demo" 
                    className="block w-full border border-gray-300/50 text-gray-700 bg-white/40 text-center px-4 py-3 rounded-lg font-medium hover:border-[#9333EA] hover:bg-[#9333EA]/10 hover:text-[#9333EA] hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book demo
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
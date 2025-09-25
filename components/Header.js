// components/Header.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Function to check if a link is active
  const isActive = (path) => {
    if (path.startsWith('#')) {
      return false; // Handle anchor links differently if needed
    }
    return router.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-gray-200/30 bg-white/30" style={{fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif'}}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
           <Image src="/logo.svg" alt="Company Logo" width={100} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/use-cases" className={`relative transition-all duration-300 text-[14px] font-medium group px-2 py-2 rounded-lg hover:bg-black/5 ${
              isActive('/use-cases') 
                ? 'text-[#9333EA] bg-purple-50' 
                : 'text-gray-900 hover:text-[#9333EA]'
            }`}>
              Use Cases
              <span className={`absolute bottom-1 left-2 h-0.5 bg-[#9333EA] transition-all duration-300 ${
                isActive('/use-cases') 
                  ? 'w-[calc(100%-16px)]' 
                  : 'w-0 group-hover:w-[calc(100%-16px)]'
              }`}></span>
            </Link>
            <div className="relative group">
              <button className="relative text-gray-900 hover:text-[#9333EA] transition-all duration-300 text-[14px] font-medium flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-black/5">
                Developers
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-[#9333EA] transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </button>
            </div>
            <div className="relative group">
              <button className="relative text-gray-900 hover:text-[#9333EA] transition-all duration-300 text-[14px] font-medium flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-black/5">
                Resources
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-[#9333EA] transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </button>
            </div>
            <div className="relative group">
              <button className="relative text-gray-900 hover:text-[#9333EA] transition-all duration-300 text-[14px] font-medium flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-black/5">
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
            <Link href="/Swap" className={`transition-all duration-300 text-[14px] font-medium px-3 py-2 rounded-lg hover:bg-black/5 ${
              isActive('/Swap') 
                ? 'text-[#9333EA] bg-purple-50' 
                : 'text-gray-900 hover:text-[#9333EA]'
            }`}>
              Swap
            </Link>
            <Link href="/login" className={`transition-all duration-300 text-[14px] font-medium px-3 py-2 rounded-lg hover:bg-black/5 ${
              isActive('/login') 
                ? 'text-[#9333EA] bg-purple-50' 
                : 'text-gray-900 hover:text-[#9333EA]'
            }`}>
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
              className="border border-gray-300 text-gray-900 px-4 py-2 rounded-2xl font-medium text-[13px] hover:border-[#9333EA] hover:bg-black/5 hover:text-[#9333EA] hover:shadow-lg transition-all duration-300"
            >
              Book demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900 p-2 hover:text-[#9333EA] hover:bg-black/5 rounded-md transition-all duration-300 hover:scale-110 hover:shadow-sm relative z-50"
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
            <div className="fixed inset-0 bg-gradient-to-br from-black/30 to-purple-900/20 backdrop-blur-md z-40 md:hidden" 
                 onClick={() => setIsMobileMenuOpen(false)}></div>
            
            {/* Mobile Menu */}
            <div className="lg:hidden bg-gradient-to-br from-white/95 to-purple-50/90 backdrop-blur-lg border-t border-purple-200/40 shadow-2xl animate-in slide-in-from-top-5 relative z-45 rounded-b-3xl mx-4">
              <div className="px-6 py-8 space-y-2">
                <Link 
                  href="/use-cases" 
                  className={`block text-lg font-medium py-4 transition-all duration-300 px-4 rounded-2xl hover:shadow-lg hover:translate-x-2 hover:scale-105 ${
                    isActive('/use-cases')
                      ? 'text-[#9333EA] bg-gradient-to-r from-purple-100 to-violet-100'
                      : 'text-gray-800 hover:text-[#9333EA] hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Use Cases
                </Link>
                <button className="flex items-center justify-between w-full text-gray-800 hover:text-[#9333EA] text-lg font-medium py-4 transition-all duration-300 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:shadow-lg hover:translate-x-2 hover:scale-105">
                  <span>Developers</span>
                  <svg className="w-5 h-5 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="flex items-center justify-between w-full text-gray-800 hover:text-[#9333EA] text-lg font-medium py-4 transition-all duration-300 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:shadow-lg hover:translate-x-2 hover:scale-105">
                  <span>Resources</span>
                  <svg className="w-5 h-5 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="flex items-center justify-between w-full text-gray-800 hover:text-[#9333EA] text-lg font-medium py-4 transition-all duration-300 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:shadow-lg hover:translate-x-2 hover:scale-105">
                  <span>Company</span>
                  <svg className="w-5 h-5 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="pt-8 space-y-4">
                  <Link 
                    href="/Swap" 
                    className={`block text-lg font-medium py-4 transition-all duration-300 px-4 rounded-2xl hover:shadow-lg hover:translate-x-2 hover:scale-105 text-center ${
                      isActive('/Swap')
                        ? 'text-[#9333EA] bg-gradient-to-r from-purple-100 to-violet-100'
                        : 'text-gray-800 hover:text-[#9333EA] hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Swap
                  </Link>
                  <Link 
                    href="/login" 
                    className={`block text-lg font-medium py-4 transition-all duration-300 px-4 rounded-2xl hover:shadow-lg hover:translate-x-2 hover:scale-105 text-center ${
                      isActive('/login')
                        ? 'text-[#9333EA] bg-gradient-to-r from-purple-100 to-violet-100'
                        : 'text-gray-800 hover:text-[#9333EA] hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link 
                    href="/get-started" 
                    className="block w-full bg-gradient-to-r from-[#9333EA] to-purple-600 text-white text-center px-6 py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-110 transition-all duration-300 transform hover:-translate-y-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get started for free
                  </Link>
                  <Link 
                    href="/book-demo" 
                    className="block w-full border-2 border-purple-300/60 text-gray-800 bg-gradient-to-r from-white/80 to-purple-50/60 text-center px-6 py-4 rounded-2xl font-semibold text-lg hover:border-[#9333EA] hover:from-purple-50 hover:to-violet-100 hover:text-[#9333EA] hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-2"
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
import React from 'react';
import Image from 'next/image';

const FooterSection = () => {
  const supportedTokens = [
    {
      name: "USDT",
      symbol: "₮",
      bgColor: "bg-green-500",
      textColor: "text-green-500"
    },
    {
      name: "USDC", 
      symbol: "◎",
      bgColor: "bg-blue-500",
      textColor: "text-blue-500"
    },
    {
      name: "cNGN",
      symbol: "₦",
      bgColor: "bg-green-600",
      textColor: "text-green-600"
    },
    {
      name: "BUSD",
      symbol: "◈",
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-500"
    },
    {
      name: "DAI",
      symbol: "◊",
      bgColor: "bg-orange-500",
      textColor: "text-orange-500"
    }
  ];

  const footerLinks = {
    developers: [
      "Documentation",
      "API Reference", 
      "Status Page",
      "SDKs",
      "Webhooks"
    ],
    resources: [
      "Terms of Service",
      "Privacy Policy",
      "Blog",
      "Help Center",
      "Community"
    ],
    company: [
      "About Us",
      "Contact Sales",
      "Security Overview",
      "Affiliate Program",
      "Careers"
    ]
  };

  return (
    <footer className="relative bg-white overflow-hidden" style={{fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif'}}>
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-200 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating Currency/Token Elements */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-float opacity-80 border border-gray-200">
          <Image src="/usdt.svg" alt="USDT" width={32} height={32} className="rounded-full" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-float-delayed opacity-75 border border-gray-200">
          <Image src="/usdc.svg" alt="USDC" width={40} height={40} className="rounded-full" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce opacity-70 border border-gray-200">
          <Image src="/ngn.svg" alt="Nigerian Naira" width={28} height={28} className="rounded-full" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-13 h-13 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse opacity-65 border border-gray-200">
          <Image src="/usdc.svg" alt="BUSD" width={36} height={36} className="rounded-full" />
        </div>
        <div className="absolute top-20 right-20 w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center animate-float opacity-60 border border-gray-200">
          <Image src="/ke.png" alt="DAI" width={32} height={32} className="rounded-full" />
        </div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-float-delayed opacity-70 border border-gray-200">
          <Image src="/usdc.svg" alt="USDC" width={36} height={36} className="rounded-full" />
        </div>
        <div className="absolute top-3/4 left-10 w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center animate-float opacity-55 border border-gray-200">
          <Image src="/usdt.svg" alt="USDT" width={32} height={32} className="rounded-full" />
        </div>
        <div className="absolute bottom-1/3 right-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce opacity-60 border border-gray-200">
          <Image src="/gh.png" alt="DAI" width={28} height={28} className="rounded-full" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-violet-50/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.1) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Supported Stablecoins Section */}
      <div className="relative z-10 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            We support major stablecoins such as USDT, USDC, cNGN, BUSD, and DAI across multiple chains.
          </p>
          
          {/* Token Icons */}
          <div className="flex justify-center items-center gap-8 md:gap-12">
            {supportedTokens.map((token, index) => (
              <div 
                key={token.name}
                className="relative group cursor-pointer"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <span className={`text-2xl md:text-3xl ${token.textColor} font-bold`}>
                    {token.symbol}
                  </span>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gray-700 text-sm font-medium bg-white px-2 py-1 rounded shadow-md whitespace-nowrap border border-gray-200">
                    {token.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main CTA Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight"
            style={{fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif'}}
          >
            Get started today and see how Aboki simplifies blockchain integration, 
            so you can focus on your customers while we take care of the complexity.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-[#9333EA] hover:bg-purple-700 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <span className="relative z-10">Book demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 hover:border-[#9333EA] hover:text-[#9333EA] font-medium rounded-2xl hover:shadow-lg hover:shadow-purple-500/10 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm flex items-center justify-center gap-2">
              Explore our API docs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="relative z-10 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#9333EA] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-gray-900 font-bold text-lg">Aboki</span>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Our solutions are as simple as they are powerful, making stablecoin wallets accessible for every fintech.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#9333EA] text-sm">
                  <div className="w-2 h-2 bg-[#9333EA] rounded-full"></div>
                  <span>info@Aboki.co</span>
                </div>
                <p className="text-gray-500 text-xs">
                  31 Continental Dr Suite 305 Newark,<br />
                  DE 19713 US
                </p>
              </div>
            </div>

            {/* Developers */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-6">Developers</h3>
              <ul className="space-y-3">
                {footerLinks.developers.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-[#9333EA] text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-[#9333EA] text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-[#9333EA] text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-200">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-200">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-200">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.166-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.013C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-200">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              Aboki © 2024. All Rights Reserved. Aboki LLC
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;
import React from 'react';

const TrustedBySection = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 25%, #7c3aed 50%, #8b5cf6 75%, #c084fc 100%)'
    }}>
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        {/* Curved lines overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
            <path d="M-200 100 Q400 200 800 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
            <path d="M-200 200 Q400 300 800 150" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
            <path d="M-200 300 Q400 400 800 250" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
            <path d="M-200 400 Q400 500 800 350" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
            <path d="M-200 500 Q400 600 800 450" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
          </svg>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif', letterSpacing: '-0.02em'}}>
            Powering World&apos;s Financial Future
          </h2>
          <p 
            className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{fontFamily: '"Inter", "SF Pro Text", "Helvetica Neue", system-ui, sans-serif'}}
          >
            Our B2B APIs serve remittance companies, e-commerce platforms, fintech startups,
            <br />
            and enterprises across Nigeria and beyond — enabling seamless crypto-to-fiat
            <br />
            infrastructure without the complexity
          </p>
        </div>

        {/* API Sectors Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Remittance Companies */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-green-400 text-5xl mb-3">
                💰
              </div>
              <h3 className="text-white font-semibold mb-2">Remittance APIs</h3>
              <p className="text-white/70 text-sm">Western Union alternatives, diaspora transfers</p>
            </div>

            {/* E-commerce Platforms */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-blue-400 text-5xl mb-3">
                🛒
              </div>
              <h3 className="text-white font-semibold mb-2">E-commerce APIs</h3>
              <p className="text-white/70 text-sm">Jumia, Konga, online merchants</p>
            </div>

            {/* Fintech Startups */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-purple-400 text-5xl mb-3">
                ⚡
              </div>
              <h3 className="text-white font-semibold mb-2">Fintech APIs</h3>
              <p className="text-white/70 text-sm">White-label crypto solutions</p>
            </div>

            {/* Enterprise Treasury */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-amber-400 text-5xl mb-3">
                🏢
              </div>
              <h3 className="text-white font-semibold mb-2">Treasury APIs</h3>
              <p className="text-white/70 text-sm">Automated treasury management</p>
            </div>
          </div>

          {/* Partner Companies */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-16">
              <div className="text-white/80 text-xl font-bold tracking-wide" style={{fontFamily: '"JetBrains Mono", "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>RemitCorp</div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-16">
              <div className="text-white/80 text-xl font-bold tracking-wide" style={{fontFamily: '"JetBrains Mono", "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>PayNaija</div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-16">
              <div className="text-white/80 text-xl font-bold tracking-wide" style={{fontFamily: '"JetBrains Mono", "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>TechHub Ltd</div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-16">
              <div className="text-white/80 text-xl font-bold tracking-wide" style={{fontFamily: '"JetBrains Mono", "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>SaveNaija</div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-16">
              <div className="text-white/80 text-xl font-bold tracking-wide" style={{fontFamily: '"JetBrains Mono", "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>FlexiPay</div>
            </div>
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-16">
              <div className="text-white/80 text-xl font-bold tracking-wide" style={{fontFamily: '"JetBrains Mono", "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>CryptoMart</div>
            </div>
          </div>
        </div>

        {/* API Performance Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* API Calls */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group hover:bg-gray-900/70 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-gray-400 text-2xl">📈</div>
            </div>
            <div className="mb-2">
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                API CALLS/MONTH
              </p>
            </div>
            <div className="text-white text-4xl md:text-5xl font-black mb-1" style={{fontFamily: '"Inter", system-ui, sans-serif'}}>
              2.4<span className="text-2xl">M</span>
            </div>
          </div>

          {/* Partner Revenue */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group hover:bg-gray-900/70 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-gray-400 text-2xl">💰</div>
            </div>
            <div className="mb-2">
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                PARTNER REVENUE
              </p>
            </div>
            <div className="text-white text-4xl md:text-5xl font-black mb-1" style={{fontFamily: '"Inter", system-ui, sans-serif'}}>
              $890<span className="text-2xl">K</span>
            </div>
          </div>

          {/* Active Integrations */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group hover:bg-gray-900/70 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-gray-400 text-2xl">🔗</div>
            </div>
            <div className="mb-2">
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                ACTIVE INTEGRATIONS
              </p>
            </div>
            <div className="text-white text-4xl md:text-5xl font-black mb-1" style={{fontFamily: '"Inter", system-ui, sans-serif'}}>
              156
            </div>
          </div>

          {/* Uptime */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group hover:bg-gray-900/70 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-gray-400 text-2xl">✅</div>
            </div>
            <div className="mb-2">
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                API UPTIME
              </p>
            </div>
            <div className="text-white text-4xl md:text-5xl font-black mb-1" style={{fontFamily: '"Inter", system-ui, sans-serif'}}>
              99.9<span className="text-2xl">%</span>
            </div>
          </div>
        </div>

        {/* Call-to-Action for Developers */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-200 cursor-pointer">
            <span className="mr-2">💻</span>
            Explore Our API Documentation
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-500 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-green-500 rounded-full opacity-70 animate-pulse"></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default TrustedBySection;
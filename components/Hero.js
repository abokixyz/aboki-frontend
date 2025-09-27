// components/Hero.js
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-200 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating Geometric Shapes & Currency/Stablecoin Logos */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-float opacity-80 border border-gray-200">
          <Image src="/ngn.svg" alt="Nigerian Naira" width={32} height={32} className="rounded-full" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-float-delayed opacity-75 border border-gray-200">
          <Image src="/usdc.svg" alt="USDC" width={40} height={40} className="rounded-full" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce opacity-70 border border-gray-200">
          <Image src="/usdt.svg" alt="USDT" width={28} height={28} className="rounded-full" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-13 h-13 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse opacity-65 border border-gray-200">
          <Image src="/gh.png" alt="Ghana Cedi" width={36} height={36} className="rounded-full" />
        </div>
        <div className="absolute top-20 right-20 w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center animate-float opacity-60 border border-gray-200">
          <Image src="/ke.png" alt="Kenyan Shilling" width={32} height={32} className="rounded-full" />
        </div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-float-delayed opacity-70 border border-gray-200">
          <Image src="/us.png" alt="US Dollar" width={36} height={36} className="rounded-full" />
        </div>
        <div className="absolute top-3/4 left-10 w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center animate-float opacity-55 border border-gray-200">
          <Image src="/usdc.svg" alt="Euro" width={32} height={32} className="rounded-full" />
        </div>
        <div className="absolute bottom-1/3 right-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce opacity-60 border border-gray-200">
          <Image src="/usdt.svg" alt="British Pound" width={28} height={28} className="rounded-full" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-violet-50/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.1) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-16">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-12 tracking-tight text-gray-900" style={{fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif'}}>
          FASTEST{' '}
          <span className="relative inline-block">
            <span className="text-[#9333EA] relative z-10">BRIDGE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-violet-200 blur-lg opacity-50 scale-110 animate-pulse"></div>
          </span>
          <br />
          BETWEEN{' '}
          <span className="relative inline-block">
            <span className="text-[#9333EA] relative z-10">STABLECOINS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-purple-200 blur-lg opacity-50 scale-110 animate-pulse animation-delay-1000"></div>
          </span>
          <br />
          AND{' '}
          <span className="relative inline-block">
            <span className="text-[#9333EA] relative z-10">FIAT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 blur-lg opacity-50 scale-110 animate-pulse animation-delay-2000"></div>
          </span>
          <br />
          <span className="text-gray-600">FOR BUSINESSES</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-16 leading-relaxed" style={{fontFamily: '"Inter", "SF Pro Text", "Helvetica Neue", system-ui, sans-serif'}}>
          Our API-first platform provides businesses with lightning-fast, secure infrastructure 
          to power seamless stablecoin-to-fiat transactions. Whether abstracted or fully integrated, 
          empower your customers with enterprise-grade speed and reliability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
          <Link 
            href="/get-started" 
            className="group w-full sm:w-auto bg-[#9333EA] text-white px-6 py-3 rounded-2xl font-semibold text-base hover:bg-purple-700 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
          >
            <span className="relative z-10">Get started for free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link 
            href="/book-demo" 
            className="group w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-2xl font-medium text-base hover:border-[#9333EA] hover:text-[#9333EA] hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
          >
            Book demo
          </Link>
          <Link 
href="https://docs.aboki.xyz"
className="group w-full sm:w-auto text-[#9333EA] font-medium text-base hover:text-purple-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 transform hover:-translate-y-0.5"
          >
            Explore our API docs
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Dashboard Image Section */}
        <div className="border-t border-gray-200 pt-16 mt-16">
          <div className="relative">
            {/* Background glow for dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-50/50 to-transparent rounded-3xl"></div>
            
            {/* Dashboard Image */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-purple-500/10 border border-gray-100 overflow-hidden">
              <Image 
                src="/dashboard.svg" 
                alt="Dashboard Interface showing transaction management, analytics, and API integration" 
                width={1200} 
                height={800} 
                className="w-full h-auto" 
                priority
              />
            </div>

            {/* Floating stats around dashboard */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg border border-gray-200 px-4 py-3 animate-float opacity-90">
              <div className="text-sm font-semibold text-[#9333EA]">₦2.5M</div>
              <div className="text-xs text-gray-500">Today&apos;s volume</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-gray-200 px-4 py-3 animate-float-delayed opacity-90">
              <div className="text-sm font-semibold text-green-600">99.97%</div>
              <div className="text-xs text-gray-500">Success rate</div>
            </div>
            
            <div className="absolute -bottom-4 left-1/4 bg-white rounded-2xl shadow-lg border border-gray-200 px-4 py-3 animate-bounce opacity-90">
              <div className="text-sm font-semibold text-blue-600">1.2s</div>
              <div className="text-xs text-gray-500">Avg response</div>
            </div>
          </div>

          {/* Dashboard description */}
          <p className="text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
            Real-time dashboard showing live transaction monitoring, comprehensive analytics, 
            and seamless API integration for your business operations.
          </p>
        </div>
      </div>

      {/* Custom Animations Styles + Font Loading */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
        
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

        /* Additional responsive styles */
        @media (max-width: 640px) {
          .absolute.floating-stats {
            position: relative;
            margin: 1rem auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect, useRef } from 'react';

const UseCasesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const useCases = [
    {
      id: 1,
      title: "CROSS BORDER B2B PAYMENTS",
      description: "Enable instant cross-border transactions with automatic currency conversion. Perfect for import/export businesses and international suppliers.",
      icon: "🌍",
      color: "purple",
      bgGradient: "from-purple-500 to-violet-600",
      borderColor: "border-purple-200",
      shadowColor: "shadow-purple-500/20"
    },
    {
      id: 2,
      title: "GLOBAL REMITTANCES",
      description: "Power diaspora money transfers with crypto rails. Faster, cheaper, and more reliable than traditional remittance services.",
      icon: "💸",
      color: "blue",
      bgGradient: "from-blue-500 to-cyan-600",
      borderColor: "border-blue-200",
      shadowColor: "shadow-blue-500/20"
    },
    {
      id: 3,
      title: "STABLECOIN ON/OFF RAMPS",
      description: "Seamless conversion between stablecoins and local fiat currencies. White-label solution for fintech platforms.",
      icon: "🔄",
      color: "green",
      bgGradient: "from-green-500 to-emerald-600",
      borderColor: "border-green-200",
      shadowColor: "shadow-green-500/20"
    },
    {
      id: 4,
      title: "BORDERLESS BANKING",
      description: "Multi-currency accounts with instant settlements. Serve customers across World without traditional banking barriers.",
      icon: "🏦",
      color: "indigo",
      bgGradient: "from-indigo-500 to-purple-600",
      borderColor: "border-indigo-200",
      shadowColor: "shadow-indigo-500/20"
    },
    {
      id: 5,
      title: "INVESTMENTS AND SAVINGS",
      description: "Dollar-denominated savings and investment products. Hedge against local currency volatility with stable assets.",
      icon: "📈",
      color: "rose",
      bgGradient: "from-rose-500 to-pink-600",
      borderColor: "border-rose-200",
      shadowColor: "shadow-rose-500/20"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden" 
      style={{
        fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif'
      }}
    >
      {/* Smooth Gradient Background - White to Purple */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 transition-all duration-1500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #faf7ff 20%, #f3f0ff 40%, #e9e5ff 60%, #a855f7 80%, #9333ea 100%)'
          }}
        ></div>
      </div>

      {/* Geometric Background Patterns */}
      <div className="absolute inset-0">
        {/* Subtle patterns throughout */}
        <div className={`absolute inset-0 opacity-10 transition-opacity duration-1000 delay-300 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`}>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Curved lines overlay */}
        <div className={`absolute inset-0 opacity-20 transition-all duration-1000 ${
          isVisible ? 'opacity-20' : 'opacity-0'
        }`}>
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
            <path 
              d="M-200 100 Q400 200 800 50" 
              stroke="rgba(147, 51, 234, 0.2)" 
              strokeWidth="2"
              className={`transition-all duration-1500 delay-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: isVisible ? '0' : '1000'
              }}
            />
            <path 
              d="M-200 200 Q400 300 800 150" 
              stroke="rgba(147, 51, 234, 0.2)" 
              strokeWidth="2"
              className={`transition-all duration-1500 delay-600 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: isVisible ? '0' : '1000'
              }}
            />
            <path 
              d="M-200 300 Q400 400 800 250" 
              stroke="rgba(147, 51, 234, 0.2)" 
              strokeWidth="2"
              className={`transition-all duration-1500 delay-800 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: isVisible ? '0' : '1000'
              }}
            />
            <path 
              d="M-200 400 Q400 500 800 350" 
              stroke="rgba(147, 51, 234, 0.2)" 
              strokeWidth="2"
              className={`transition-all duration-1500 delay-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: isVisible ? '0' : '1000'
              }}
            />
            <path 
              d="M-200 500 Q400 600 800 450" 
              stroke="rgba(147, 51, 234, 0.2)" 
              strokeWidth="2"
              className={`transition-all duration-1500 delay-1200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: isVisible ? '0' : '1000'
              }}
            />
          </svg>
        </div>
      </div>

      {/* Floating geometric elements */}
      <div className={`absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse transition-all duration-1000 ${
        isVisible ? 'opacity-60' : 'opacity-0'
      }`} style={{transitionDelay: '1400ms'}}></div>
      <div className={`absolute bottom-20 right-10 w-3 h-3 bg-cyan-300 rounded-full animate-ping transition-all duration-1000 ${
        isVisible ? 'opacity-40' : 'opacity-0'
      }`} style={{transitionDelay: '1600ms'}}></div>
      <div className={`absolute top-1/2 left-1/4 w-1 h-1 bg-pink-500 rounded-full animate-pulse transition-all duration-1000 ${
        isVisible ? 'opacity-70' : 'opacity-0'
      }`} style={{transitionDelay: '1800ms'}}></div>
      <div className={`absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse transition-all duration-1000 ${
        isVisible ? 'opacity-60' : 'opacity-0'
      }`} style={{transitionDelay: '2000ms'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 
            className={`text-6xl md:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-gray-900 via-purple-600 to-white bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-12'
            }`}
            style={{
              fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif',
              letterSpacing: '-0.03em',
              transitionDelay: '200ms'
            }}
          >
            USE
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-gray-900 to-white bg-clip-text text-transparent">
              CASES
            </span>
          </h2>
          <p className={`text-gray-700 text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`} style={{transitionDelay: '400ms'}}>
            Real-world applications powering World&apos;s financial infrastructure. 
            From remittances to treasury management, our APIs enable seamless 
            crypto-to-fiat solutions.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-24">
          {useCases.map((useCase, index) => {
            // Gradual transition from dark text to white text
            const textOpacity = index < 2 ? 'text-gray-900' : index === 2 ? 'text-gray-700' : 'text-white';
            const subtextOpacity = index < 2 ? 'text-gray-700' : index === 2 ? 'text-gray-600' : 'text-white/80';
            const cardStyle = index < 2 ? 'white' : index === 2 ? 'mixed' : 'glass';
            
            return (
              <div 
                key={useCase.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-16'
                }`}
                style={{transitionDelay: `${600 + index * 200}ms`}}
              >
                
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className={`flex items-center gap-4 mb-6 transition-all duration-800 ${
                    isVisible 
                      ? 'opacity-100 transform translate-x-0' 
                      : `opacity-0 transform ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                  }`} style={{transitionDelay: `${800 + index * 200}ms`}}>
                    <div className={`w-16 h-16 rounded-2xl ${
                      cardStyle === 'white' ? 'bg-purple-100 border border-purple-200 hover:bg-purple-200' : 
                      cardStyle === 'mixed' ? 'bg-purple-200/60 border border-purple-300 hover:bg-purple-200/80' :
                      'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30'
                    } flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300`}>
                      <span className="text-3xl">{useCase.icon}</span>
                    </div>
                    <div className={`${index < 2 ? 'text-gray-600' : index === 2 ? 'text-gray-500' : 'text-white/60'} text-lg font-mono`}>
                      0{useCase.id}
                    </div>
                  </div>
                  
                  <h3 
                    className={`text-4xl md:text-5xl font-black leading-tight mb-6 ${textOpacity} transition-all duration-800 ${
                      isVisible 
                        ? 'opacity-100 transform translate-x-0' 
                        : `opacity-0 transform ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                    }`}
                    style={{
                      fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif',
                      letterSpacing: '-0.02em',
                      transitionDelay: `${1000 + index * 200}ms`
                    }}
                  >
                    {useCase.title}
                  </h3>
                  
                  <p className={`${subtextOpacity} text-lg leading-relaxed max-w-lg transition-all duration-800 ${
                    isVisible 
                      ? 'opacity-100 transform translate-x-0' 
                      : `opacity-0 transform ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                  }`} style={{transitionDelay: `${1200 + index * 200}ms`}}>
                    {useCase.description}
                  </p>
                  
                  <div className={`flex items-center gap-4 pt-4 transition-all duration-800 ${
                    isVisible 
                      ? 'opacity-100 transform translate-x-0' 
                      : `opacity-0 transform ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                  }`} style={{transitionDelay: `${1400 + index * 200}ms`}}>
                    <a 
                      href="https://app.aboki.xyz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-block px-6 py-3 font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                        cardStyle === 'white' ? 'bg-[#9333EA] text-white hover:bg-purple-700 hover:shadow-purple-500/25' :
                        cardStyle === 'mixed' ? 'bg-[#7c3aed] text-white hover:bg-purple-800 hover:shadow-purple-500/30' :
                        'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30'
                      }`}
                      style={{ textDecoration: 'none', zIndex: 10, position: 'relative' }}
                    >
                      Learn More
                    </a>
                    <button className={`px-6 py-3 font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      cardStyle === 'white' ? 'border border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400' :
                      cardStyle === 'mixed' ? 'border border-purple-400 text-purple-700 hover:bg-purple-100/50 hover:border-purple-500' :
                      'border border-white/40 text-white/90 hover:text-white hover:border-white/60 hover:bg-white/10'
                    }`}>
                      View API Docs
                    </button>
                  </div>
                </div>

                {/* Visual Side - 3D Isometric Card */}
                <div className="flex-1 flex justify-center">
                  <div className={`relative group transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0 scale-100' 
                      : 'opacity-0 transform translate-y-12 scale-95'
                  }`} style={{transitionDelay: `${1000 + index * 200}ms`}}>
                    {/* Main 3D Card */}
                    <div 
                      className={`w-80 h-64 rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden ${
                        cardStyle === 'white' ? 'bg-white border border-purple-200 hover:shadow-purple-500/20' :
                        cardStyle === 'mixed' ? 'bg-white/90 border border-purple-300 hover:shadow-purple-500/25' :
                        'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30'
                      }`}
                    >
                      {/* Card Content */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className={`${cardStyle === 'glass' ? 'text-white/90' : 'text-gray-700'} font-mono text-sm`}>
                            API_v1.2
                          </div>
                          <div className={`w-3 h-3 rounded-full animate-pulse ${cardStyle === 'glass' ? 'bg-white/60' : 'bg-purple-400'}`}></div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className={`${cardStyle === 'glass' ? 'text-white/70' : 'text-gray-600'} font-mono text-xs`}>
                            {useCase.id === 1 && "POST /api/cross-border/transfer"}
                            {useCase.id === 2 && "POST /api/remittance/send"}
                            {useCase.id === 3 && "POST /api/stablecoin/convert"}
                            {useCase.id === 4 && "POST /api/banking/account"}
                            {useCase.id === 5 && "POST /api/investment/deposit"}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className={`${cardStyle === 'glass' ? 'text-white/90' : 'text-gray-800'} text-sm font-medium`}>Active</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Data Points */}
                      <div className={`absolute -top-6 -right-6 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl ${
                        cardStyle === 'white' ? 'bg-purple-100 border border-purple-200' :
                        cardStyle === 'mixed' ? 'bg-purple-200/80 border border-purple-300' :
                        'bg-white/20 backdrop-blur-sm border border-white/40'
                      }`}>
                        <span className={`text-2xl ${cardStyle === 'glass' ? 'text-white' : 'text-purple-700'}`}>{useCase.icon}</span>
                      </div>
                      
                      {/* Bottom highlight */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                        cardStyle === 'glass' 
                          ? 'bg-gradient-to-r from-transparent via-white/60 to-transparent'
                          : 'bg-gradient-to-r from-transparent via-purple-400 to-transparent'
                      }`}></div>
                    </div>

                    {/* Shadow Card */}
                    <div 
                      className={`absolute top-4 left-4 w-80 h-64 rounded-3xl -z-10 transform -rotate-3 group-hover:-rotate-6 transition-all duration-500 ${
                        cardStyle === 'glass' 
                          ? 'bg-purple-900/40 backdrop-blur-sm'
                          : 'bg-purple-200/60'
                      }`}
                    ></div>

                    {/* Background Glow */}
                    <div className={`absolute inset-0 opacity-20 blur-3xl -z-20 group-hover:opacity-30 transition-opacity duration-500 ${
                      cardStyle === 'glass' 
                        ? 'bg-white/20'
                        : 'bg-purple-300'
                    }`}></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 pt-16 border-t border-gray-300 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`} style={{transitionDelay: `${1600 + useCases.length * 200}ms`}}>
          <h3 className={`text-3xl font-bold text-gray-900 mb-6 transition-all duration-800 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`} style={{
            fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif',
            transitionDelay: `${1800 + useCases.length * 200}ms`
          }}>
            Ready to build with our APIs?
          </h3>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-800 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`} style={{transitionDelay: `${2000 + useCases.length * 200}ms`}}>
            <button 
              onClick={() => window.open('https://app.aboki.xyz', '_blank')}
              className="px-8 py-4 bg-[#9333EA] text-white font-semibold rounded-2xl hover:bg-purple-700 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              Start Building Today
            </button>
            <button className="px-8 py-4 border border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 font-medium rounded-2xl transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default UseCasesSection;
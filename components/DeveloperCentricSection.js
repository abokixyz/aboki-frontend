import React, { useState } from 'react';

const DeveloperCentricSection = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const codeSnippets = {
    javascript: `const response = await fetch("https://api.Aboki.co/v1/wallets/create", {
  method: "POST",
  headers: {
    "x-api-key": "<api-key>",
    "content-type": "application/json"
  },
  body: JSON.stringify({
    "disableAutoSweep": "OPTIONAL_BOOLEAN",
    "enableGaslessWithdraw": "OPTIONAL_BOOLEAN",
    "metadata": "OPTIONAL_METADATA",
    "name": "OPTIONAL_ADDRESS_NAME",
    "showPrivateKey": "OPTIONAL_BOOLEAN"
  })
});

const data = await response.json();`,

    python: `import requests

response = requests.post(
    "https://api.Aboki.co/v1/wallets/create",
    headers={
        "x-api-key": "<api-key>",
        "content-type": "application/json"
    },
    json={
        "disableAutoSweep": "OPTIONAL_BOOLEAN",
        "enableGaslessWithdraw": "OPTIONAL_BOOLEAN", 
        "metadata": "OPTIONAL_METADATA",
        "name": "OPTIONAL_ADDRESS_NAME",
        "showPrivateKey": "OPTIONAL_BOOLEAN"
    }
)

data = response.json()`,

    curl: `curl -X POST "https://api.Aboki.co/v1/wallets/create" \\
  -H "x-api-key: <api-key>" \\
  -H "content-type: application/json" \\
  -d '{
    "disableAutoSweep": "OPTIONAL_BOOLEAN",
    "enableGaslessWithdraw": "OPTIONAL_BOOLEAN",
    "metadata": "OPTIONAL_METADATA", 
    "name": "OPTIONAL_ADDRESS_NAME",
    "showPrivateKey": "OPTIONAL_BOOLEAN"
  }'`,

    php: `<?php
$response = wp_remote_post("https://api.Aboki.co/v1/wallets/create", [
    'headers' => [
        'x-api-key' => '<api-key>',
        'content-type' => 'application/json'
    ],
    'body' => json_encode([
        'disableAutoSweep' => 'OPTIONAL_BOOLEAN',
        'enableGaslessWithdraw' => 'OPTIONAL_BOOLEAN',
        'metadata' => 'OPTIONAL_METADATA',
        'name' => 'OPTIONAL_ADDRESS_NAME', 
        'showPrivateKey' => 'OPTIONAL_BOOLEAN'
    ])
]);

$data = json_decode(wp_remote_retrieve_body($response), true);`,

    go: `package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

payload := map[string]interface{}{
    "disableAutoSweep": "OPTIONAL_BOOLEAN",
    "enableGaslessWithdraw": "OPTIONAL_BOOLEAN",
    "metadata": "OPTIONAL_METADATA",
    "name": "OPTIONAL_ADDRESS_NAME",
    "showPrivateKey": "OPTIONAL_BOOLEAN",
}

jsonPayload, _ := json.Marshal(payload)
req, _ := http.NewRequest("POST", "https://api.Aboki.co/v1/wallets/create", 
    bytes.NewBuffer(jsonPayload))

req.Header.Set("x-api-key", "<api-key>")
req.Header.Set("content-type", "application/json")

client := &http.Client{}
response, _ := client.Do(req)`,

    java: `HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.Aboki.co/v1/wallets/create"))
    .header("x-api-key", "<api-key>")
    .header("content-type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString("""
        {
            "disableAutoSweep": "OPTIONAL_BOOLEAN",
            "enableGaslessWithdraw": "OPTIONAL_BOOLEAN", 
            "metadata": "OPTIONAL_METADATA",
            "name": "OPTIONAL_ADDRESS_NAME",
            "showPrivateKey": "OPTIONAL_BOOLEAN"
        }
        """))
    .build();

HttpResponse<String> response = HttpClient.newHttpClient()
    .send(request, HttpResponse.BodyHandlers.ofString());`
  };

  const tabs = [
    { id: 'curl', name: 'cURL' },
    { id: 'python', name: 'Python' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'php', name: 'PHP' },
    { id: 'go', name: 'Go' },
    { id: 'java', name: 'Java' }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white" style={{fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif'}}>
      {/* Enhanced Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-300 to-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-1/4 left-1/6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float opacity-80 border border-purple-200">
          <span className="text-3xl">💻</span>
        </div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float-delayed opacity-75 border border-blue-200">
          <span className="text-3xl">🚀</span>
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce opacity-70 border border-green-200">
          <span className="text-2xl">⚡</span>
        </div>
        <div className="absolute top-1/2 right-1/6 w-18 h-18 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-pulse opacity-65 border border-violet-200">
          <span className="text-3xl">🔧</span>
        </div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-transparent to-violet-50/40"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.08) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 
                className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight"
                style={{
                  fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                DEVELOPER
                <br />
                <span className="relative inline-block">
                  <span className="text-[#9333EA] relative z-10">CENTRIC</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-violet-200 blur-lg opacity-30 scale-110 animate-pulse"></div>
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg">
                Our stablecoin wallet solutions come with developer-friendly APIs that are 
                blockchain-agnostic and integrate seamlessly into your existing tech stack, 
                so you can deploy in a day, not months.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center px-6 py-3 bg-[#9333EA] hover:bg-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1 relative overflow-hidden">
                <span className="relative z-10">Explore API documentation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-[#9333EA] hover:text-[#9333EA] font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10">
                See supported stablecoins
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Code Block */}
          <div className="lg:max-w-2xl">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl">
              
              {/* Tab Header */}
              <div className="border-b border-gray-200/60 bg-gradient-to-r from-gray-50/80 to-gray-100/60 backdrop-blur-sm">
                <div className="flex overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300 relative group ${
                        activeTab === tab.id
                          ? 'text-[#9333EA] bg-white/80 border-b-2 border-[#9333EA] shadow-sm'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-white/60'
                      }`}
                      style={{fontFamily: '"Inter", system-ui, sans-serif'}}
                    >
                      <span className="relative z-10">{tab.name}</span>
                      {activeTab !== tab.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Content */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="absolute top-4 right-4 z-10">
                  <button className="text-gray-400 hover:text-cyan-300 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/60 transform hover:scale-110 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm leading-relaxed">
                    <code 
                      className="text-gray-300"
                      style={{fontFamily: '"JetBrains Mono", "SF Mono", Monaco, Consolas, monospace'}}
                    >
                      {codeSnippets[activeTab].split('\n').map((line, index) => (
                        <div key={index} className="flex hover:bg-gray-800/30 rounded transition-colors duration-200 group">
                          <span className="text-gray-500 select-none mr-4 text-right w-6 flex-shrink-0 group-hover:text-cyan-400 transition-colors duration-200">
                            {index + 1}
                          </span>
                          <span 
                            className="text-gray-300 flex-1"
                            dangerouslySetInnerHTML={{
                              __html: line
                                .replace(/"([^"]*?)"/g, '<span style="color: #34d399">"$1"</span>')
                                .replace(/\b(const|let|var|function|async|await|import|from|export|class|if|else|for|while|return|try|catch|finally|package|main)\b/g, '<span style="color: #f59e0b">$1</span>')
                                .replace(/\b(true|false|null|undefined)\b/g, '<span style="color: #ef4444">$1</span>')
                                .replace(/\/\/.*/g, '<span style="color: #6b7280">$&</span>')
                                .replace(/\b(\d+)\b/g, '<span style="color: #a78bfa">$1</span>')
                                .replace(/\{|\}/g, '<span style="color: #60a5fa">$&</span>')
                            }}
                          />
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Enhanced Footer Links */}
              <div className="border-t border-gray-200/60 bg-gradient-to-r from-gray-50/80 to-gray-100/60 backdrop-blur-sm px-6 py-4">
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <button className="text-gray-600 hover:text-[#9333EA] transition-all duration-300 flex items-center font-medium group transform hover:scale-105">
                    <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="relative">
                      Explore API documentation
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9333EA] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                  <button className="text-gray-600 hover:text-[#9333EA] transition-all duration-300 flex items-center font-medium group transform hover:scale-105">
                    <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="relative">
                      See supported stablecoins
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9333EA] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
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

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default DeveloperCentricSection;
import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const images = [
  '/images/WICCUL Direction.png',
  '/images/WICCUL Signpost.png',
  '/images/WICCUL frontage.png',
  '/images/WICCUL Building 1.png',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#1E5F74] via-[#1E5F74] to-[#2E8B57] text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#2E8B57] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 animate-fade-in-down hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <Shield className="w-4 h-4 text-[#FFFFFF]" />
              <span>Licensed Category 1 Microfinance Institution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              Building Financial
              <span className="block leading-tight animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Freedom Together</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Join WICCUL, where your financial goals meet community support.
              Experience banking built on trust, transparency, and shared prosperity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/membership"
                className="group bg-[#2E8B78] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2E8B78] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 hover-glow"
              >
                Become a Member
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1E5F74] transition-all duration-300 hover:scale-105 shadow-lg text-center"
              >
                Explore Services
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Users, value: '1400+', label: 'Members' },
                { icon: TrendingUp, value: '18.5M XAF', label: 'Assets' },
                { icon: Shield, value: '5+', label: 'Years Trust' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center group cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-8 h-8 text-[#FFFFFF]" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold group-hover:text-[#2563EB] transition-colors duration-300">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative lg:block hidden animate-slide-in-right">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative h-[500px]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Community ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E5F74]/80 via-[#1E5F74]/40 to-transparent"></div>
                  </div>
                ))}

                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="space-y-4">
                    {[
                      { icon: Shield, title: 'Secure Savings', desc: 'Protected deposits with competitive rates' },
                      { icon: TrendingUp, title: 'Quick Loans', desc: 'Fast approval with flexible terms' },
                      { icon: Users, title: 'Community First', desc: 'Member-owned and operated' }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="bg-white/20 backdrop-blur-lg rounded-xl p-4 hover:bg-white/30 transition-all duration-300 cursor-pointer animate-fade-in-up"
                          style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded-lg hover:rotate-6 transition-transform duration-300">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-sm">{item.title}</h3>
                              <p className="text-white/80 text-xs">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-[#2563EB] w-8' : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#2E8B57]/20 rounded-3xl -rotate-6 animate-float blur-sm"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full animate-fade-in">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8F9FA"/>
        </svg>
      </div>
    </section>
  );
}

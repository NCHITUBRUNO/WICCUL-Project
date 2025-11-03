import { Landmark, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
//import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E5F74] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E8B57] rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="bg-[#2E8B78] p-2 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Landmark className="w-6 h-6 text-[#FFFFFF]" />
              </div>
              <div>
                <h3 className="font-bold text-xl">WICCUL</h3>
                <p className="text-xs text-white/70">Building People and Building Communities</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted financial partner for savings, loans, and investment solutions.
              Licensed Category 1 Microfinance Institution.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  aria-label={Icon.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Membership', 'Loan Calculator', 'FAQs', 'Career'].map((link, index) => (
                <li key={link} className="animate-fade-in-up" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#2563EB] transition-all duration-300 flex items-center gap-2 group hover:translate-x-2"
                  >
                    <span className="w-0 h-0.5 bg-[#2563EB] group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {['Savings Account', 'Personal Loans', 'Business Loans', 'Education Loans', 'Investment Plans', 'Group Savings'].map((service, index) => (
                <li key={service} className="animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#2563EB] transition-all duration-300 flex items-center gap-2 group hover:translate-x-2"
                  >
                    <span className="w-0 h-0.5 bg-[#2563EB] group-hover:w-4 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80 hover:text-white transition-colors duration-300 cursor-pointer group">
                <MapPin className="w-5 h-5 text-[#FFFFFF] flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                <span>Total Nkwen, Opposite Way-Out Nkwen Market , Bamenda, Cameroon</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 cursor-pointer group">
                <Phone className="w-5 h-5 text-[#FFFFFF] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span>+237 680 829 435</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 cursor-pointer group">
                <Mail className="w-5 h-5 text-[#FFFFFF] flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span>infos@wimbumcreditunion.com</span>
              </li>
            </ul>
            {/* 
            <div className="mt-6 bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <p className="text-sm text-white/90 mb-2 font-semibold">Subscribe to Newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-2 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#2E8B78] text-[#FFFFFF] px-3 py-2 rounded-lg font-semibold hover:bg-[#1D4ED8] transition-all duration-300 hover:scale-110 text-sm"
                >
                  Join
                </button>
              </form>
            </div>
            */}
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
             Bruno Data Insights © {currentYear} Wibum Cooperative Credit Union Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/70 hover:text-[#2563EB] transition-all duration-300 hover:scale-110"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

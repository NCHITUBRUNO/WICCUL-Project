import { Shield, Zap, Users2, TrendingUp, Lock, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import emailjs from '@emailjs/browser';

const benefits = [
  {
    icon: Shield,
    title: 'Secure & Protected',
    description: 'Your deposits are safeguarded with industry-leading security measures and regulatory compliance.',
  },
  {
    icon: Zap,
    title: 'Fast Processing',
    description: 'Quick loan approvals and instant transactions to meet your urgent financial needs.',
  },
  {
    icon: Users2,
    title: 'Member Ownership',
    description: 'As a member, you\'re not just a customer—you\'re an owner with voting rights and dividends.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Returns',
    description: 'Enjoy above-market interest rates on savings and lower rates on loans.',
  },
  {
    icon: Lock,
    title: 'Financial Privacy',
    description: 'Your financial information is strictly confidential and protected at all times.',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Manage your account anytime through our digital platforms and mobile banking.',
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 cursor-pointer hover-lift animate-on-scroll ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="bg-[#2E8B78] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
        <Icon className="w-7 h-7 text-[#FFFFFF]" />
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-[#FFFFFF] transition-colors duration-300">
        {benefit.title}
      </h3>

      <p className="text-white/80 leading-relaxed">
        {benefit.description}
      </p>
    </div>
  );
}

export default function Benefits() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.2);
  const [formData] = useState({ name: '', email: '', phone: '' });
  

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#2563EB] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose WICCUL?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Experience banking that puts you first with benefits designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
        {/* Call to Action Section */}
        <div
          ref={ctaRef}
          className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 hover:bg-white/15 transition-all duration-500 animate-on-scroll ${ctaVisible ? 'visible' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Join thousands of satisfied members who have transformed their financial lives with WICCUL.
                Opening an account is simple, fast, and comes with immediate benefits.
              </p>
              <ul className="space-y-3">
                {[
                  'No minimum balance requirements',
                  'Instant loan eligibility after membership',
                  'Free financial advisory services'
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 animate-fade-in-up hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FFFFFF] flex items-center justify-center flex-shrink-0 hover:scale-125 transition-transform duration-300">
                      <span className="text-[#1E5F74] font-bold text-sm">✓</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-slide-in-right">
              <h4 className="text-2xl font-bold text-[#1E5F74] mb-6">Interested In Membership?</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <button
                    type="button"
                    onClick={() => navigate('/Contact')}
                    className="w-full bg-[#2E8B78] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#2E8B57] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover-glow flex items-center justify-center gap-2 group"
                  >
                  Contact Us
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </form>
              <p className="text-center text-sm text-[#333333]/60 mt-4">
                We'll contact you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

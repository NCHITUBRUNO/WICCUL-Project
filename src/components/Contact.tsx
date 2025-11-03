import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Cow Street Nkwen Bamenda', 'Opposite Total Petrol Station, Northwest Region', 'Cameroon'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+237 673 700 102', 'Mon - Sat: 8AM - 3:30PM'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['infos@wimbumcreditunion.com','P.O Box 626 Bamenda'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 8:00AM - 4:00PM', 'Saturday: 8:00AM - 12PM', 'Sunday: Closed'],
  },
];

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email with data:', formData);

      // CORRECTED: Using the exact variable names from your template
      const templateParams = {
        from_name: formData.name,      // Matches {{from_name}} in template
        from_email: formData.email,    // Matches {{from_email}} in template  
        phone: formData.phone,         // Matches {{phone}} in template
        subject: formData.subject,     // Matches {{subject}} in template
        message: formData.message      // Matches {{message}} in template
      };

      console.log('Template params:', templateParams);

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_1, 
        templateParams,  // Using the corrected template parameters
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      alert('✅ Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    } catch (error) {
      console.error('Detailed error:', error);
      
      if (error instanceof Error) {
        alert(`❌ Failed to send message: ${error.message}`);
      } else {
        alert('❌ Sorry, there was an error sending your message. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F9FA] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1E5F74]/5 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E5F74] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
            Have questions? Our team is ready to help you with all your financial needs, For more information & inquiries, do not hesitate to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const { ref, isVisible } = useScrollAnimation(0.1);
            return (
              <div
                key={info.title}
                ref={ref}
                className={`bg-white rounded-2xl p-8 shadow-md cursor-pointer hover-lift animate-on-scroll ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] w-14 h-14 rounded-xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E5F74] mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p
                      key={detail}
                      className="text-[#333333]/80 hover:text-[#1E5F74] transition-colors duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div
          ref={formRef}
          className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-on-scroll ${formVisible ? 'visible' : ''}`}
        >
          <div className="grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 animate-slide-in-left">Let's Build Your Financial Future</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Whether you're looking to save, invest, or secure a loan, our expert team is here
                  to guide you every step of the way. Reach out today and discover how WICCUL can
                  help you achieve your financial goals.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Phone, title: 'Quick Response', desc: 'We respond within 2 hours' },
                    { icon: Mail, title: 'Expert Support', desc: 'Professional financial advisors' }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-4 animate-slide-in-left hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <div className="w-12 h-12 rounded-full bg-[#2E8B78] flex items-center justify-center flex-shrink-0 hover:scale-110 hover:rotate-12 transition-all duration-300">
                          <Icon className="w-6 h-6 text-[#FFFFFF]" />
                        </div>
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-white/80 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-12 animate-slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none transition-all hover:shadow-md"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#333333] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none transition-all hover:shadow-md"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#333333] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none transition-all hover:shadow-md"
                      placeholder="+237 6XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none transition-all hover:shadow-md"
                  >
                    <option value="">How can we help you?</option>
                    <option value="Account Inquiry">Account Inquiry</option>
                    <option value="Loan Application">Loan Application</option>
                    <option value="Savings Account">Savings Account</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#333333] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none transition-all resize-none hover:shadow-md"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#2E8B78] text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-[#2E8B57] hover:scale-105'
                  }`}
                >
                  {isSubmitting ? '📨 Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
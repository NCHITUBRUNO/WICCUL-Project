import { Download, FileText, CheckCircle, Users, CreditCard, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Complete Application Form',
    description: 'Download and fill out our membership application form with your personal and contact information. Ensure all details are accurate and complete.',
    action: 'Download Form',
  },
  {
    number: 2,
    icon: CreditCard,
    title: 'Gather Required Documents',
    description: 'Prepare valid identification (National ID, Passport, or Driver\'s License), proof of address, and 4 passport-size photographs. View Checklist Below',
    action: 'View Checklist',
  },
  {
    number: 3,
    icon: Users,
    title: 'Submit Application',
    description: 'Visit any WICCUL branch with your completed form and documents, or email them to info@wimbumcreditunion.com. Buy required Shares and start your journey.',
    action: 'Find Branch',
  },
  {
    number: 4,
    icon: Shield,
    title: 'Receive Confirmation',
    description: 'Your application will be reviewed within one business day. Once approved, receive your membership card and account details to start enjoying benefits.',
    action: 'Track Status',
  },
];

const benefits = [
  'Fast and Accurate Services, with benefits from risk management',
  'Guaranteed security of members\' financial resources',
  'Your transactions are highly confidential, with Deposits at Will',
  'You democratically take decisions on the smooth functionning of WICCUL',
  'Our Loan interest is affordable, with free financial counselling',
  'Interest paid on members\' savings yearly, and all AGM & partake in Decision',
  'You are a shareholder of a reputable credit union affiliated to CAMCCUL',
  'Your life savings and loans are insured',
];

const requirements = [
    'Submit a photocopy of a Valid ID card',
    'Submit 4 passport size photograph',
    'Fill a membership application form',
    'Buy 35 shares at 35,000 frs',
    'Pay a Building fee of 5,000 frs ',
    'Pay a Solidarity fund of 14,000 frs',
    'Pay reimbursable stationary fee of 5,000 frs',
    'Exceptionally pay a promoters share of atleast 1 million. Such investors are given preference to earn interest.'
  ];

export default function MembershipPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.2);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Function to handle PDF download
  const handleDownloadForm = () => {
    const pdfUrl = '/downloads/membership-form.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'membership-form.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle Brochure download
  const handleDownloadBrochure = () => {
    const pdfUrl = '/downloads/wiccul-brochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'wiccul-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your Public Key (you'll need to add this)
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Add your public key here

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'infos@wimbumcreditunion.com',
        subject: `New Membership Inquiry from ${formData.name}`
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,    // Your service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_0,   // Your template ID
        templateParams
      );

      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 7000);

    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">Become a WICCUL Member</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join thousands of satisfied members and take control of your financial future today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={handleDownloadForm}
              className="group bg-[#2E8B78] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2E8B78] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
              <Download className="w-5 h-5" />
              Download Membership Form
            </button>
            <button 
              onClick={handleDownloadBrochure}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1E5F74] transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div
          ref={headerRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E5F74] mb-4">
              4 Simple Steps to Membership
            </h2>
            <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
              Membership is open to every individuals or groups that fulfill the required conditions. Join WICCUL in just four easy steps where ever you are and start your journey to financial freedom
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const { ref, isVisible } = useScrollAnimation(0.1);
              return (
                <div
                  key={step.number}
                  ref={ref}
                  className={`bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 cursor-pointer hover-lift animate-on-scroll ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] rounded-full blur-lg opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="bg-[#2E8B78] p-3 rounded-xl inline-flex items-center justify-center mb-4 hover:scale-110 hover:rotate-6 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-[#1E5F74] mb-3">{step.title}</h3>
                      <p className="text-[#333333]/80 mb-6 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mr-3" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Required Documents</h3>
            </div>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Membership Investment</h3>
            <div className="text-5xl font-bold text-[#FFFFFF] mb-2">XAF 5,000</div>
            <p className="text-white/90 text-lg mb-6">One-time membership Stationary</p>
            <p className="text-white/80 max-w-2xl mx-auto">
              This affordable one-time fee grants you access to WICCUL membership Documents, including all benefits and voting rights in our cooperative.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div
          ref={benefitsRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${benefitsVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E5F74] mb-4">
              Member Benefits
            </h2>
            <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
              Enjoy exclusive benefits designed to support your financial success. For more information & Inquiries contact our Head Office.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <p className="text-[#333333]/90 leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#1E5F74] mb-6">Ready to Join?</h3>
                <p className="text-[#333333]/80 text-lg leading-relaxed mb-6">
                  Start your membership application today and unlock a world of financial opportunities.
                  Our team is here to guide you through every step of the process.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-xl">
                    <div className="bg-[#2E8B78] p-3 rounded-lg">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1E5F74]">Download Forms</div>
                      <div className="text-sm text-[#333333]/70">Get started with our application</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-xl">
                    <div className="bg-[#2E8B57] p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1E5F74]">Learn More</div>
                      <div className="text-sm text-[#333333]/70">Read our comprehensive brochure</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6">Quick Contact</h4>
                
                {/* Success Message */}
                {showSuccess && (
                  <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-0 text-[#333333] outline-none transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-0 text-[#333333] outline-none transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-0 text-[#333333] outline-none transition-all"
                  />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-0 text-[#333333] outline-none transition-all resize-none"
                  ></textarea>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2E8B78] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#2E8B78] transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
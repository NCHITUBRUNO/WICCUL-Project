import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">Our Financial Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive financial solutions tailored to meet your personal and business needs
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
}

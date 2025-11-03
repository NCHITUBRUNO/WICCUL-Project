import About from '../components/About';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">About WICCUL</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your trusted financial partner committed to empowering communities
          </p>
        </div>
      </div>
      <About />
    </div>
  );
}

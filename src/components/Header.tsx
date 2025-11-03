import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Membership', path: '/membership' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer animate-slide-in-left">
          <img 
              src="/images/Wiccul-removebg-preview.png" 
              alt="WICCUL Logo" 
              className="w-15 h-12 object-contain filter brightness-0"
          />
            <div>
              <h1 className="font-bold text-xl text-[#1E5F74] group-hover:text-[#2E8B57] transition-colors">WICCUL</h1>
              <p className="text-xxs text-[#333333]/70">Wimbum Cooperative Credit Union Ltd</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 animate-fade-in-down">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.path}
                className={`font-medium transition-all duration-300 relative group ${
                  location.pathname === item.path ? 'text-[#1E5F74]' : 'text-[#333333] hover:text-[#1E5F74]'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#1E5F74] to-[#2E8B57] transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link
              to="/membership"
              className="bg-[#2E8B78] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#2E8B78] transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md hover-glow"
            >
              Become a Member
            </Link>
          </div>

          <button
            className="lg:hidden text-[#1E5F74] p-2 hover:bg-[#1E5F74]/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in-down">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`font-medium transition-all duration-300 py-2 hover:translate-x-2 ${
                    location.pathname === item.path ? 'text-[#1E5F74]' : 'text-[#333333] hover:text-[#1E5F74]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/membership"
                className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1D4ED8] transition-all duration-300 hover:scale-105 shadow-md mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Member Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

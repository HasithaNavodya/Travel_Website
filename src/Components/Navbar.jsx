import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white px-6 py-4  flex items-center justify-between  top-0 z-50 ">
      <div className="flex items-center gap-4">
        <img 
          src="src/assets/Logo.png" 
          alt="Lankoora" 
          className="h-12 "
        />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center text-gray-700 font-semibold">
        <a href="#tour" className="hover:text-primary-600 transition-colors ">How it works</a>
        <a href="#package" className="hover:text-primary-600 transition-colors ">Services</a>
        <a href="#contact" className="hover:text-primary-600 transition-colors ">Blogs</a>
      </div>
      
      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-2">
        <button className="btn-primary rounded-full">Book Now</button>
        <button className="btn-secondary rounded-full">Call Now</button>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="hover:text-primary-600 transition-colors duration-200 cursor-pointer"
        >
          {isMobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMobileMenu}>
          <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img 
                  src="src/assets/Logo.png" 
                  alt="Lankoora" 
                  className="h-8"
                  onError={(e) => {
                    e.target.src = "src/assets/Logo.png";
                  }}
                />
                <button 
                  onClick={closeMobileMenu}
                  className="hover:text-primary-600 transition-colors duration-200"
                >
                  <RiCloseLine size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="#tour" 
                  className="block text-gray-700 font-semibold hover:text-primary-600 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  How it works
                </a>
                <a 
                  href="#package" 
                  className="block text-gray-700 font-semibold hover:text-primary-600 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="block text-gray-700 font-semibold hover:text-primary-600 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Blogs
                </a>
                
                <div className="pt-6 border-t border-gray-200">
                  <button className="btn-primary w-full mb-3">Book Now</button>
                  <button className="btn-secondary w-full">Call Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
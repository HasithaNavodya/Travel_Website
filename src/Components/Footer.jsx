import { 
  RiFacebookFill, 
  RiInstagramLine, 
  RiYoutubeLine, 
  RiPhoneFill, 
  RiRecordMailLine, 
  RiMapPin2Fill 
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-white text-black px-6 py-16" id="contact">
      <div className="container-width">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img 
              src="src/assets/Logo.png" 
              alt="Lankoora" 
              className="h-14 mb-6"
              onError={(e) => {
                e.target.src = "src/assets/Logo.png";
              }}
            />
            <p className="text-black text-sm leading-relaxed mb-6">
              Lankora offers premium travel services in Sri Lanka, including island tours, airport transfers, safaris, and whale watching. Explore Sri Lanka with comfort and ease!
            </p>
            <div className="flex gap-4 text-xl">
              <RiFacebookFill className="hover:text-primary-400 transition-colors duration-200 cursor-pointer" />
              <RiInstagramLine className="hover:text-primary-400 transition-colors duration-200 cursor-pointer" />
              <RiYoutubeLine className="hover:text-primary-400 transition-colors duration-200 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-black hover:text-primary-400 transition-colors duration-200">How Booking Works</a></li>
              <li><a href="#" className="text-black hover:text-primary-400 transition-colors duration-200">Services</a></li>
              <li><a href="#" className="text-black hover:text-primary-400 transition-colors duration-200">Blogs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-black hover:text-primary-400 transition-colors duration-200">
                <RiPhoneFill /> <span>+94 71 283 1817</span>
              </li>
              <li className="flex items-center gap-3 text-black hover:text-primary-400 transition-colors duration-200">
                <RiRecordMailLine /> <span>info@lankoora.com</span>
              </li>
              <li className="flex items-center gap-3 text-black hover:text-primary-400 transition-colors duration-200">
                <RiMapPin2Fill /> <span>Down South, Sri Lanka.</span>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Subscribe</h4>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg w-full text-black bg-white border border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50" 
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg w-full transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

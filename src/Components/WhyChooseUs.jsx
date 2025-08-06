import { RiArrowRightLine } from "react-icons/ri";

function WhyChooseUs() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-6 py-20 bg-gradient-to-br from-gray-50 to-gray-100" id="package">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <img 
            src="src/assets/showcase.jpg" 
            alt="showcase" 
            className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full"
            // onError={(e) => {
            //   e.target.src = "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Showcase";
            // }}
          />
          <div className="absolute inset-0 bg-primary-500 bg-opacity-10 rounded-2xl"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-8">
        <h4 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h4>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <p className="text-gray-800 font-medium">24/7 Customer Support</p>
              <p className="text-gray-600 text-sm">We're here for you anytime, anywhere. Our dedicated team is ready to assist you around the clock for a seamless travel experience.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <p className="text-gray-800 font-medium">Premium Travel Experience</p>
              <p className="text-gray-600 text-sm">Travel in style and comfort with our top-notch vehicles and professional drivers who prioritize your safety and satisfaction.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <p className="text-gray-800 font-medium">Experienced and Friendly Drivers</p>
              <p className="text-gray-600 text-sm">Our drivers are not only skilled and licensed but also courteous and approachable, ensuring you have an enjoyable journey.</p>
            </div>
          </div>
        </div>
        {/* <button className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
          Book Now <RiArrowRightLine className="group-hover:translate-x-1 transition-transform duration-200" />
        </button> */}
        <button className="text-lg px-8 py-3 shadow-lg bg-blue-600 hover:bg-blue-700 text-white rounded-[50px] flex items-center justify-center space-x-2">
          <span>Book Now</span>
          <RiArrowRightLine />
        </button>
      </div>
    </section>
  );
}

export default WhyChooseUs;
function HeroSection() {
  return (
    <header className="relative py-20 text-left overflow-hidden" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="src/assets/header_bg.jpg" 
          className="w-full h-screen opacity-50 object-cover rounded-[50px]"
        />
        {/* The background gradient you commented out could also be useful for readability. Let's add it back in, but with a different direction to match the image. */}
        <div className="absolute"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <p className="text-md uppercase text-black tracking-wider font-medium mb-4 animate-slide-up">
          YOUR TRUSTED PARTNER FOR COMFORTABLE TRAVEL
        </p>
        <h1 className="text-[50px] md:text-10xl font-bold mt-4 mb-8 text-black   animate-fade-in-up delayed">
  Book Your <br />
  <span className="text-black"> Ride – Fast,</span> <br />
  <span className="text-black">Secure, and</span> <br />
  <span className="text-black">Reliable</span>
</h1>

        <div className="mt-8">
          <button className="btn-primary text-lg px-10 py-4 shadow-lg hover:bg-blue-700 bg-blue-600 rounded-[50px] gap-[5px]">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
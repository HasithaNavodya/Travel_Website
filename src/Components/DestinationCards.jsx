function DestinationCards() {
  return (
    <section className="section-padding bg-gray-50 text-center" id="about">
      <div className="container-width">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find the Perfect Ride for Your Sri Lanka Adventure</h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">Comfortable, Reliable, and Affordable Vehicles Tailored to Your Travel Needs</p>
        <div className="grid md:grid-cols-3 gap-8">
          {["mini-van.webp", "sudan.webp", "suv-jeep.webp", "kdh-van-2.webp", "kdh-van.webp", "bus.webp"].map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={`src/assets/${img}`} 
                  alt="destination" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationCards;
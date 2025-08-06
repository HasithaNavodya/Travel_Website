import { RiTreeFill, RiFlightTakeoffLine, RiCarLine, RiSailboatLine } from "react-icons/ri";

function ServicesSection() {
  const services = [
    { 
      icon: <RiTreeFill size={40} />, 
      title: "Island-Wide Tours", 
      desc: "Discover the beauty of Sri Lanka with customized travel packages for unforgettable journeys around the island.",
      image: "src/assets/mini-van.webp"
    },
    { 
      icon: <RiFlightTakeoffLine size={40} />, 
      title: "Airport Pickup & Drop", 
      desc: "Enjoy reliable and hassle-free airport transfers for a smooth start or end to your trip.",
      image: "src/assets/sudan.webp"
    },
    { 
      icon: <RiCarLine size={40} />, 
      title: "Safari Tours", 
      desc: "Dive into the wild with guided safaris featuring majestic elephants, elusive leopards, and more.",
      image: "src/assets/suv-jeep.webp"
    },
    { 
      icon: <RiSailboatLine size={40} />, 
      title: "Whale Watching", 
      desc: "Experience the thrill of watching blue whales and dolphins in their natural habitat.",
      image: "src/assets/kdh-van.webp"
    },
  ];

  return (
    <section className="section-padding bg-white text-center" id="tour">
      <div className="container-width">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Top-Rated Travel Services in Sri Lanka</h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">Explore Island Tours, Airport Transfers, Safaris, and Whale Watching</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-200 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-6 text-left">
                <div className="text-primary-500 mb-4 group-hover:text-primary-600 transition-colors duration-200">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
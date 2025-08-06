import { RiCameraLensLine, RiShipLine, RiLandscapeLine } from "react-icons/ri";

function DiscoverSection() {
  return (
    <section className="section-padding bg-white text-center">
      <div className="container-width">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Vehicle Booking Works in Sri Lanka</h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">Effortless Booking Process with Professional Drivers</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <RiCameraLensLine size={32} />,
              title: 'Book Your Ride',
              desc: 'Choose your preferred vehicle and route on our website, or reach out to us via WhatsApp, Viber, or Instagram. Whether it\'s airport transfers, day trips, or multi-day tours, we\'ve got you covered!'
            },
            {
              icon: <RiShipLine size={32} />,
              title: 'Instant Confirmation',
              desc: 'Receive a confirmation email or WhatsApp message with all the trip details. Our seamless process ensures you\'re ready to travel stress-free!'
            },
            {
              icon: <RiLandscapeLine size={32} />,
              title: 'Enjoy a Comfortable Ride',
              desc: 'Our professional and courteous driver will arrive on time at your chosen location. Sit back, relax, and explore Sri Lanka in comfort and style.'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-8  rounded-xl text-center hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
              <span className="text-primary-500 group-hover:text-primary-700 transition-colors duration-200 mb-3 inline-flex items-center justify-center rounded-full bg-gray-100 p-2">{item.icon}</span>
              <h4 className="text-xl font-bold mb-4 text-black">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiscoverSection;
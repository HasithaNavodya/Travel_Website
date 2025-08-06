function BannerStats() {
  return (
    <section className="bg-white py-16 px-6 border-t border-gray-200">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <h4 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">10+</h4>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
          <div className="group">
            <h4 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">12K</h4>
            <p className="text-gray-600 font-medium">Happy Clients</p>
          </div>
          <div className="group">
            <h4 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">4.8</h4>
            <p className="text-gray-600 font-medium">Overall Ratings</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerStats;
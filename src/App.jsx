import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import DiscoverSection from './Components/DiscoverSection';
import DestinationCards from './Components/DestinationCards';
import ServicesSection from './Components/ServicesSection';
import WhyChooseUs from './Components/WhyChooseUs';
import BannerStats from './Components/BannerStats';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <DiscoverSection />
      <DestinationCards />
      <ServicesSection />
      <WhyChooseUs />
      <BannerStats />
      <Footer />
    </div>
  );
}

export default App;

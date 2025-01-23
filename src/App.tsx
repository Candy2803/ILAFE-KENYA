import { useState } from 'react';
import { Building2, Car, Shield, Flame, Package2, ShieldAlert } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ApplicationForm from './components/ApplicationForm';
import Badges from './components/Badges'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';

const services = [
  {
    title: 'Marine Insurance',
    description: 'Expert assessment of marine-related claims and investigations',
    icon: Package2
  },
  {
    title: 'Car Insurance',
    description: 'Thorough evaluation of vehicle damage and accident claims',
    icon: Car
  },
  {
    title: 'Property Damage',
    description: 'Comprehensive property damage assessment and validation',
    icon: Building2
  },
  {
    title: 'Fire Damage',
    description: 'Specialized investigation of fire-related claims and losses',
    icon: Flame
  },
  {
    title: 'Theft Claims',
    description: 'Professional investigation of theft and burglary claims',
    icon: ShieldAlert
  },
  {
    title: 'Fraud Investigation',
    description: 'Expert fraud detection and investigation services',
    icon: Shield
  }
];

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onApplyClick={handleOpenForm} />
      <Hero onApplyClick={handleOpenForm} />
      <About />
      <Badges />
      <Services />
      <Contact />
      <ApplicationForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        services={services}
      />
      <ScrollToTop />
    </div>
  );
}

export default App;
import { Building2, Car, Shield, Flame, Package2, ShieldAlert } from 'lucide-react';

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

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive loss adjustment and fraud examination services
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <a href="#"><button className='bg-blue-500 rounded-lg w-32 h-10 mt-5 hover:bg-blue-700 hover:text-white transition'>Learn More...</button></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
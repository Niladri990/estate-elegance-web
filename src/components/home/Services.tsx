
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Key, BarChart3, Briefcase, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="pt-6">
        <div className="bg-estate-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-estate-primary">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Property Sales",
      description: "Find your dream home or sell your property for the best value with our experienced agents.",
      icon: <Home size={24} />
    },
    {
      title: "Property Rentals",
      description: "Explore a variety of rental options or let us help you find reliable tenants for your property.",
      icon: <Key size={24} />
    },
    {
      title: "Market Analysis",
      description: "Get detailed market insights and property valuations based on the latest real estate trends.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Investment Advisory",
      description: "Expert advice on real estate investments to maximize returns and build your property portfolio.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Property Management",
      description: "Comprehensive management services for property owners, ensuring hassle-free ownership.",
      icon: <Shield size={24} />
    },
    {
      title: "Legal Assistance",
      description: "Professional guidance through the legal aspects of buying, selling, or renting properties.",
      icon: <FileText size={24} />
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We offer a comprehensive range of real estate services tailored to meet your specific needs and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="text-estate-primary hover:text-estate-secondary underline underline-offset-4 font-medium"
          >
            Learn more about our services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

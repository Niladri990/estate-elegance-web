
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Key, BarChart3, Briefcase, Shield, FileText } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, features }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full border-t-4 border-t-estate-primary">
      <CardContent className="pt-6">
        <div className="bg-estate-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-estate-primary">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-estate-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ServicesPage = () => {
  const services: ServiceProps[] = [
    {
      title: "Property Sales",
      description: "Find your dream home or sell your property for the best value with our experienced agents.",
      icon: <Home size={24} />,
      features: [
        "Market analysis and property valuation",
        "Professional photography and staging advice",
        "Marketing across multiple platforms",
        "Negotiation and offer management",
        "Closing support and documentation"
      ]
    },
    {
      title: "Property Rentals",
      description: "Explore a variety of rental options or let us help you find reliable tenants for your property.",
      icon: <Key size={24} />,
      features: [
        "Tenant screening and selection",
        "Lease preparation and management",
        "Maintenance coordination",
        "Rent collection and financial reporting",
        "Property inspections"
      ]
    },
    {
      title: "Market Analysis",
      description: "Get detailed market insights and property valuations based on the latest real estate trends.",
      icon: <BarChart3 size={24} />,
      features: [
        "Comparative market analysis",
        "Investment opportunity assessment",
        "Neighborhood trend reports",
        "Property value projections",
        "Market timing recommendations"
      ]
    },
    {
      title: "Investment Advisory",
      description: "Expert advice on real estate investments to maximize returns and build your property portfolio.",
      icon: <Briefcase size={24} />,
      features: [
        "Portfolio diversification strategies",
        "ROI analysis for potential investments",
        "Tax planning and benefit optimization",
        "Risk assessment and management",
        "Long-term investment planning"
      ]
    },
    {
      title: "Property Management",
      description: "Comprehensive management services for property owners, ensuring hassle-free ownership.",
      icon: <Shield size={24} />,
      features: [
        "Full tenant management",
        "Regular maintenance and inspections",
        "24/7 emergency response",
        "Financial reporting and rent collection",
        "Legal compliance management"
      ]
    },
    {
      title: "Legal Assistance",
      description: "Professional guidance through the legal aspects of buying, selling, or renting properties.",
      icon: <FileText size={24} />,
      features: [
        "Contract review and preparation",
        "Title search and insurance",
        "Due diligence support",
        "Closing document preparation",
        "Legal compliance verification"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-estate-primary text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl">
              We offer a comprehensive range of real estate services to help you buy, sell, rent, or invest in property.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">What We Offer</h2>
              <p className="text-gray-600 max-w-3xl">
                At EstateElegance, we provide a wide range of professional real estate services designed to meet all your property needs. Our team of experts is dedicated to delivering excellent results and ensuring a smooth experience, whether you're buying, selling, renting, or investing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Process</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We follow a streamlined process to ensure the best results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center relative">
                <div className="absolute -top-3 -left-3 bg-estate-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <div className="bg-estate-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-estate-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">Consultation</h3>
                <p className="text-gray-500">
                  We meet to discuss your needs, preferences, and budget to understand your requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center relative">
                <div className="absolute -top-3 -left-3 bg-estate-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <div className="bg-estate-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-estate-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">Research</h3>
                <p className="text-gray-500">
                  We conduct thorough research and market analysis to find the best options for you.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center relative">
                <div className="absolute -top-3 -left-3 bg-estate-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <div className="bg-estate-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-estate-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">Execution</h3>
                <p className="text-gray-500">
                  We implement the agreed strategy, handling negotiations, paperwork, and logistics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center relative">
                <div className="absolute -top-3 -left-3 bg-estate-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <div className="bg-estate-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-estate-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">Completion</h3>
                <p className="text-gray-500">
                  We finalize all details and ensure a smooth closing process with ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Client Testimonials</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Here's what our clients have to say about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4 text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "EstateElegance provided exceptional service when selling my property. Their market knowledge and professional approach resulted in a quick sale at a great price. I highly recommend their services to anyone looking to buy or sell."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" 
                      alt="John Davis"
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold">John Davis</p>
                      <p className="text-sm text-gray-500">Property Seller</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4 text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "The property management services from EstateElegance have been outstanding. They handle everything from tenant screening to maintenance requests efficiently. My rental property has never been in better hands."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" 
                      alt="Lisa Thompson"
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold">Lisa Thompson</p>
                      <p className="text-sm text-gray-500">Property Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-estate-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help with your real estate needs.
            </p>
            <Button asChild className="bg-white text-estate-primary hover:bg-gray-100">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

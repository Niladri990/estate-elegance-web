
import React from 'react';

const Stats = () => {
  const stats = [
    { value: '500+', label: 'Properties Sold' },
    { value: '1000+', label: 'Happy Clients' },
    { value: '15+', label: 'Years Experience' },
    { value: '25+', label: 'Expert Agents' }
  ];

  return (
    <section className="py-16 bg-estate-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

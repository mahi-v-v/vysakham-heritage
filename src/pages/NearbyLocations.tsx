import React from 'react';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

const NearbyLocations = () => {
  const locations = [
    {
      id: 1,
      name: "Muzhappilangad Beach",
      description: "Kerala's only drive-in beach, perfect for a scenic coastal drive and water sports. This 4km stretch of golden sand offers stunning sunset views and is ideal for families.",
      distance: "45 km",
      time: "1 hour",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      mapLink: "https://maps.google.com/?q=Muzhappilangad+Beach+Kannur"
    },
    {
      id: 2,
      name: "St. Angelo Fort",
      description: "A historic Portuguese fort built in 1505, offering panoramic views of the Arabian Sea. Rich in colonial history with well-preserved architecture and beautiful coastal vistas.",
      distance: "35 km",
      time: "45 minutes",
      image: "https://images.pexels.com/photos/2816576/pexels-photo-2816576.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      mapLink: "https://maps.google.com/?q=St+Angelo+Fort+Kannur"
    },
    {
      id: 3,
      name: "Payyambalam Beach",
      description: "A serene beach with golden sands and coconut groves, perfect for relaxation and swimming. Popular among locals and tourists for its clean waters and peaceful atmosphere.",
      distance: "40 km",
      time: "50 minutes",
      image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      mapLink: "https://maps.google.com/?q=Payyambalam+Beach+Kannur"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Nearby</h1>
            <p className="text-xl">Discover the beauty of Kannur and its surroundings</p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Must-Visit Destinations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Experience the rich culture and natural beauty of Kerala's coastal region
            </p>
          </div>

          <div className="space-y-12">
            {locations.map((location, index) => (
              <div key={location.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <img 
                    src={location.image}
                    alt={location.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      {location.name}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {location.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                      <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-blue-800 dark:text-blue-200 font-medium">{location.distance}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-lg">
                      <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-200 font-medium">{location.time}</span>
                    </div>
                  </div>

                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            More to Explore
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Kannur district offers numerous other attractions including traditional Theyyam performances, 
            spice plantations, backwater cruises, and historic temples. Our family can help arrange 
            guided tours and provide local insights to make your visit unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi, I'd like to know more about local attractions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Ask About Tours
            </a>
            <a
              href="tel:+919876543210"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call for Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NearbyLocations;
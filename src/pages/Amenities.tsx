import React from 'react';
import { 
  Wifi, 
  Car, 
  Coffee, 
  Utensils, 
  Bath, 
  Tv, 
  AirVent, 
  Shirt, 
  MapPin, 
  Shield,
  Users,
  Bed
} from 'lucide-react';

const Amenities = () => {
  const amenityCategories = [
    {
      title: "Accommodation Features",
      icon: Bed,
      color: "blue",
      amenities: [
        { name: "Comfortable Beds", description: "Queen and king-size beds with quality mattresses" },
        { name: "Private Bathrooms", description: "Clean, modern bathrooms with hot water" },
        { name: "Air Conditioning", description: "Climate-controlled rooms for your comfort" },
        { name: "Free WiFi", description: "High-speed internet throughout the property" }
      ]
    },
    {
      title: "Kitchen & Dining",
      icon: Utensils,
      color: "green",
      amenities: [
        { name: "Traditional Kerala Meals", description: "Authentic home-cooked Kerala cuisine" },
        { name: "Kitchen Access", description: "Guest kitchen available for light cooking" },
        { name: "Dining Area", description: "Comfortable space for enjoying meals" },
        { name: "Tea & Coffee", description: "Complimentary tea and coffee service" }
      ]
    },
    {
      title: "Services & Convenience",
      icon: Shield,
      color: "purple",
      amenities: [
        { name: "Laundry Service", description: "Professional washing and ironing services" },
        { name: "Parking", description: "Free parking space for your vehicle" },
        { name: "Tour Assistance", description: "Help with local sightseeing arrangements" },
        { name: "24/7 Support", description: "Our family is always available to help" }
      ]
    },
    {
      title: "Entertainment & Leisure",
      icon: Tv,
      color: "red",
      amenities: [
        { name: "Television", description: "Cable TV with local and satellite channels" },
        { name: "Garden Area", description: "Beautiful garden space for relaxation" },
        { name: "Reading Corner", description: "Quiet space with local books and magazines" },
        { name: "Cultural Programs", description: "Optional traditional music and dance shows" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Amenities</h1>
            <p className="text-xl">Everything you need for a comfortable stay</p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Modern Comfort, Traditional Hospitality
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We provide all modern amenities while maintaining the authentic Kerala experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {amenityCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-colors duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.amenities.map((amenity, amenityIndex) => (
                    <div key={amenityIndex} className="flex space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {amenity.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Makes Us Special
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Beyond standard amenities, we offer unique experiences that make your stay memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Personal Attention
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our family personally ensures every guest receives individual care and attention
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Local Expertise
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get insider tips and personalized recommendations for exploring Kannur
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Coffee className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Cultural Immersion
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Experience authentic Kerala culture through food, stories, and traditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Have Questions About Our Amenities?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Contact us to learn more about our facilities and services
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi, I have questions about your amenities"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919876543210"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
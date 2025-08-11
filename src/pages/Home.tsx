import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Star, MapPin, Users } from "lucide-react";
import AvailabilityCalendar from "../components/AvailabilityCalendar";

const Home = () => {
  const { isDark } = useTheme();

  const heroImageLight =
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";
  const heroImageDark =
    "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";

  return (
    <div className="transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${isDark ? heroImageDark : heroImageLight})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up">
            Welcome to Vysakham Heritage
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in-up animation-delay-300">
            A peaceful retreat for devotees, nestled beside Sri Rajarajeshwara
            Temple.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base opacity-0 animate-fade-in-up animation-delay-600">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>Divine Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>Beside Sri Rajarajeshwara Temple</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-400" />
              <span>Family Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Plan Your Stay
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Check availability and book your perfect getaway
            </p>
          </div>

          <AvailabilityCalendar />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Family-Run Business
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experience the warmth of Kerala hospitality with our
                family-owned homestay that treats every guest like family.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Perfect Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ideally situated just 20 meters from the entrance of Sri
                Rajarajeshwara Temple, we are your perfect hub for devotion and
                discovering Kannur's rich culture.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Authentic Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Immerse yourself in a serene, spiritual atmosphere with our
                traditional Kerala hospitality, offering the perfect retreat
                after a visit to Sri Rajarajeshwara Temple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Kerala?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to reserve your stay at our warm and cozy homestay
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919847918479?text=Hi, I'm interested in booking your homestay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:+919847918479"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

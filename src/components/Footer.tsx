import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Taliparamba, Kannur, Kerala</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-sm">info@taliparambahomestay.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/nearby"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Nearby Locations
                </a>
              </li>
              <li>
                <a
                  href="/amenities"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Amenities
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Our Homestay</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience a perfect blend of devotion and comfort. Our family-run
              homestay offers a peaceful retreat for devotees, located right
              next to the sacred Sri Rajarajeshwara Temple.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Taliparamba Homestay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

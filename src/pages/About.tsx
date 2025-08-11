import React from 'react';
import { Heart, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Family</h1>
            <p className="text-xl">Three generations of Kerala hospitality</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                A Family-Run Business
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Welcome to our homestay, a cherished family business that has been welcoming guests 
                for over two decades. What started as a small initiative by our grandparents has 
                grown into a beloved destination for travelers seeking authentic Kerala experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our family takes pride in treating every guest as part of our extended family. 
                From the moment you arrive, you'll experience the warmth and hospitality that 
                Kerala is famous for. We believe in creating memories that last a lifetime.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Located in the heart of Taliparamba, our homestay offers the perfect blend of 
                traditional Kerala architecture and modern amenities, ensuring your comfort 
                while preserving the authentic cultural experience.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Our family"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hospitality</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Treating every guest with love and care, just like family
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building lasting relationships with our guests and neighbors
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quality</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Maintaining the highest standards in cleanliness and service
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Authenticity</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Offering genuine Kerala culture and traditional experiences
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Our homestay journey began in the early 2000s when our grandparents decided to 
                open their doors to travelers seeking an authentic Kerala experience. What started 
                as a simple gesture of sharing our home has evolved into a thriving family business.
              </p>
              <p>
                Over the years, we have hosted families, solo travelers, couples, and groups from 
                all over the world. Each guest has left us with beautiful memories and stories, 
                making our homestay a melting pot of cultures and experiences.
              </p>
              <p>
                Today, our second and third generations continue the tradition, bringing fresh 
                ideas while maintaining the core values of warmth, authenticity, and exceptional 
                hospitality that our grandparents established.
              </p>
              <p>
                We look forward to welcoming you to our family and creating unforgettable memories 
                together in the beautiful land of Kerala.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
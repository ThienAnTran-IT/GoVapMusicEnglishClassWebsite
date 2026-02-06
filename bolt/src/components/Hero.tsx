import { Music, GraduationCap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Inspiring Young Minds Since 2015</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn Music & English
            <span className="block text-blue-600 mt-2">With Passion & Excellence</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Comprehensive piano, guitar, and English courses designed specifically for primary and secondary students.
            Build confidence, creativity, and skills that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#programs"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Programs
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Dedicated Teachers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Music, MapPin, Phone, Mail, Youtube, Facebook, Instagram, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-2 rounded-lg">
                <Music className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Harmony Learning Center</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Nurturing young talents in music and English language since 2015. Building confidence, creativity, and excellence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-blue-400 transition-colors">Programs</a>
              </li>
              <li>
                <a href="#teachers" className="text-gray-400 hover:text-blue-400 transition-colors">Teachers</a>
              </li>
              <li>
                <a href="#fees" className="text-gray-400 hover:text-blue-400 transition-colors">Fees</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors">Gallery</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Education Avenue,<br />
                  #03-45 Learning Hub,<br />
                  Singapore 123456
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+6591234567" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +65 9123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@harmonylearning.sg" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@harmonylearning.sg
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Operating Hours</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Mon - Fri: 2pm - 9pm</div>
                  <div>Sat - Sun: 9am - 6pm</div>
                </div>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Harmony Learning Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

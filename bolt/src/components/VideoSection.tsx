import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Our Students in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch highlights from our student performances and class activities
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9" style={{ paddingBottom: '56.25%', position: 'relative' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Harmony Learning Center Student Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Follow us for more student performances and class updates
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Play className="h-5 w-5" />
                <span>Subscribe on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Music, Guitar, BookOpen, CheckCircle } from 'lucide-react';

export default function LearningPrograms() {
  const programs = [
    {
      icon: Music,
      title: 'Piano Learning',
      color: 'from-blue-500 to-blue-600',
      description: 'Master the art of piano with comprehensive lessons tailored to your skill level.',
      benefits: [
        'Learn proper hand positioning and finger techniques',
        'Read musical notation and understand music theory',
        'Practice with classical and contemporary pieces',
        'Prepare for ABRSM or Trinity examinations',
        'Develop rhythm, timing, and musical expression',
        'Perform in regular student recitals'
      ]
    },
    {
      icon: Guitar,
      title: 'Guitar Learning',
      color: 'from-teal-500 to-teal-600',
      description: 'Strum your way to success with both acoustic and electric guitar lessons.',
      benefits: [
        'Master chord progressions and strumming patterns',
        'Learn fingerstyle and picking techniques',
        'Play popular songs and musical genres',
        'Understand guitar tablature and notation',
        'Develop improvisation and soloing skills',
        'Build confidence performing with others'
      ]
    },
    {
      icon: BookOpen,
      title: 'English Learning',
      color: 'from-green-500 to-green-600',
      description: 'Build strong English language skills for academic success and communication.',
      benefits: [
        'Improve reading comprehension and vocabulary',
        'Enhance writing skills for compositions and essays',
        'Master grammar rules and sentence structures',
        'Practice speaking and presentation skills',
        'Prepare for school examinations (PSLE, O-Level)',
        'Develop critical thinking and analysis abilities'
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Learning Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive courses designed to nurture talent and build lasting skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${program.color} p-8 text-white`}>
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-white/90">{program.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">What You'll Learn:</h4>
                  <ul className="space-y-3">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

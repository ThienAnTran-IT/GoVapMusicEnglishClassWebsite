import { Award, Music, BookOpen, Star } from 'lucide-react';

export default function Teachers() {
  const teachers = [
    {
      name: 'Ms. Sarah Chen',
      role: 'Piano & Guitar Instructor',
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: [
        'ABRSM Diploma in Piano Performance',
        'Bachelor of Music (Hons) from Royal Academy',
        '10+ years teaching experience',
        'Trinity College London Certified'
      ],
      specialties: ['Classical Piano', 'Contemporary Guitar', 'Music Theory'],
      description: 'Passionate about nurturing young musicians with patience and creativity. Specializes in helping students discover their unique musical voice.',
      icon: Music
    },
    {
      name: 'Mr. David Tan',
      role: 'English Language Specialist',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: [
        'Master of Education (English Language)',
        'TESOL & CELTA Certified',
        '12+ years teaching experience',
        'Former MOE School Teacher'
      ],
      specialties: ['Creative Writing', 'PSLE/O-Level Prep', 'Public Speaking'],
      description: 'Dedicated to making English learning engaging and effective. Focuses on building confidence and critical thinking skills in every student.',
      icon: BookOpen
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Teachers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from experienced, qualified educators who are passionate about student success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {teachers.map((teacher, index) => {
            const Icon = teacher.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                        <div className="flex items-center space-x-2 text-blue-600">
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{teacher.role}</span>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{teacher.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-blue-600" />
                        Qualifications:
                      </h4>
                      <ul className="space-y-1">
                        {teacher.qualifications.map((qual, idx) => (
                          <li key={idx} className="text-sm text-gray-600 ml-7">• {qual}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {teacher.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

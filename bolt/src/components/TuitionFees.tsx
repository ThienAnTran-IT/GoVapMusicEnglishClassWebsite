import { Check, Clock, Users, Calendar } from 'lucide-react';

export default function TuitionFees() {
  const feeStructure = [
    {
      subject: 'Piano Lessons',
      levels: [
        { level: 'Primary (1-6)', individual: '$60', group: '$40', duration: '45 min' },
        { level: 'Secondary (1-4)', individual: '$70', group: '$50', duration: '60 min' }
      ],
      color: 'blue'
    },
    {
      subject: 'Guitar Lessons',
      levels: [
        { level: 'Primary (1-6)', individual: '$55', group: '$38', duration: '45 min' },
        { level: 'Secondary (1-4)', individual: '$65', group: '$45', duration: '60 min' }
      ],
      color: 'teal'
    },
    {
      subject: 'English Classes',
      levels: [
        { level: 'Primary (1-6)', individual: '$50', group: '$35', duration: '60 min' },
        { level: 'Secondary (1-4)', individual: '$60', group: '$42', duration: '90 min' }
      ],
      color: 'green'
    }
  ];

  const benefits = [
    'Free trial lesson for new students',
    'Flexible scheduling options',
    'All learning materials included',
    'Regular progress assessments',
    'Student performance opportunities'
  ];

  return (
    <section id="fees" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tuition Fees</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Affordable rates with flexible payment options
          </p>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                <th className="px-6 py-4 text-left font-semibold">Subject & Level</th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Individual</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Group (2-4)</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Duration</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.map((subject, subjectIdx) => (
                <>
                  {subject.levels.map((level, levelIdx) => (
                    <tr
                      key={`${subjectIdx}-${levelIdx}`}
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        levelIdx === 0 ? 'border-t-2 border-gray-300' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div>
                          {levelIdx === 0 && (
                            <div className="font-bold text-gray-900 mb-1">{subject.subject}</div>
                          )}
                          <div className="text-gray-600">{level.level}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-lg font-semibold text-blue-600">{level.individual}</span>
                        <span className="text-gray-500 text-sm"> /lesson</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-lg font-semibold text-teal-600">{level.group}</span>
                        <span className="text-gray-500 text-sm"> /lesson</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">{level.duration}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-10">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">What's Included</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Monthly packages available with discounted rates
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

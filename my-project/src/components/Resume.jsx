import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experienceData = [
  {
    company: 'EduSchola',
    period: '2024 - Present',
    description: 'Frontend development and UI/UX design for EduSchola platform.',
  },
  {
    company: 'Scholarly',
    period: '2024 - Present',
    description: 'Working on frontend development and user experience improvements.',
  },
  {
    company: 'NIIT Ajah & Fortesoft',
    period: 'Managing their brand',
    description: 'Handling social media and digital marketing strategies.',
  },
];

const educationData = [
  {
    school: 'Blossom Hill Schools',
    qualification: 'Primary Education',
  },
  {
    school: 'Crane Schools',
    qualification: 'Secondary Education',
  },
  {
    school: 'NIIT Ajah',
    qualification: 'Diploma in Software Engineering (Full Stack Developer)',
  },
  {
    school: 'ALX',
    qualification: 'Certificate in Back-End Engineering',
  },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  return (
    <div className='p-8 max-w-3xl mx-auto text-white text-center' id="resume">
      <h1 className='text-4xl font-bold mb-12'>Resume</h1>

      {/* Tab Buttons */}
      <div className='flex justify-center mb-8 space-x-4'>
        {['Experience', 'Education'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-lg font-semibold rounded-lg transition-all duration-300 ${
              activeTab === tab
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg text-white'
                : 'bg-gray-800 hover:bg-purple-700 text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {(activeTab === 'Experience' ? experienceData : educationData).map((item, index) => (
          <Reveal key={index}>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className='border border-purple-600 p-6 rounded-xl shadow-md bg-purple-900/30 backdrop-blur-lg flex flex-col justify-center h-40 hover-effect shake-effect'
            >
              <h2 className='text-xl font-semibold text-pink-400 mb-2'>
                {activeTab === 'Experience' ? item.company : item.school}
              </h2>
              <p className='text-white text-lg'>{activeTab === 'Experience' ? item.period : item.qualification}</p>
              {activeTab === 'Experience' && <p className='text-white mt-2'>{item.description}</p>}
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Resume;

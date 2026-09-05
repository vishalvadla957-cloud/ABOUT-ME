import React from 'react';
import { motion } from 'framer-motion';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Machine Learning',
    description:
      'Designing and developing predictive models, supervised & unsupervised algorithms, feature engineering, and robust real-world evaluation pipelines.',
  },
  {
    number: '02',
    name: 'Deep Learning',
    description:
      'Deep neural network architectures, computer vision, tensor operations, and custom model training to power intelligent automation.',
  },
  {
    number: '03',
    name: 'RAG & Vector Search',
    description:
      'Building context-aware Retrieval-Augmented Generation pipelines, vector embeddings, semantic retrieval, and document intelligence workflows.',
  },
  {
    number: '04',
    name: 'Generative AI Apps',
    description:
      'Developing practical, interactive Generative AI applications with LLM integration, prompt engineering, and intelligent agents.',
  },
  {
    number: '05',
    name: 'Data Science & Python',
    description:
      'End-to-end data manipulation, exploratory data analysis (EDA), and data engineering with NumPy, Pandas, Python, and C.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '50px' }}
          transition={{ duration: 0.8, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </motion.h2>

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-4 md:gap-12 group transition-colors duration-300 hover:bg-neutral-50/50"
            >
              {/* Number */}
              <div className="flex-shrink-0 leading-none">
                <span
                  className="font-black text-[#0C0C0C] block leading-none select-none tracking-tighter"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </span>
              </div>

              {/* Name & Description */}
              <div className="flex flex-col justify-center flex-grow max-w-2xl">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] mb-2 tracking-tight leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
      return;
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutParagraph =
    "I'm a 3rd-year B.Tech student at Anurag College of Engineering, Hyderabad, passionate about building intelligent systems using Machine Learning, Deep Learning, and Generative AI. I enjoy solving real-world problems with Python and continuously expanding my skills in AI and Data Science.";

  return (
    <section
      id="about"
      className="min-h-screen w-full relative bg-[#0C0C0C] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative 3D Images in Corners */}
      {/* 1. Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D Decorative"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* 2. Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Abstract Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* 3. Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D Decorative"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Spheres Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Center Content Container */}
      <div className="flex flex-col items-center justify-center text-center z-20 max-w-4xl mx-auto w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '50px' }}
          transition={{ duration: 0.8, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase leading-none tracking-tight mb-10 sm:mb-14 md:mb-16"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </motion.h2>

        {/* Animated Paragraph */}
        <div className="max-w-[620px] mx-auto text-[#D7E2EA] mb-10 sm:mb-12 px-4">
          <AnimatedText
            text={aboutParagraph}
            className="text-center"
          />
        </div>

        {/* Key Bio Highlights / Badges from README */}
        <FadeIn delay={0.25} y={20} className="mb-14 sm:mb-16 flex flex-wrap justify-center gap-2.5 max-w-2xl px-4">
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/90">
            🎓 B.Tech (3rd Year) • Anurag College of Engineering
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/90">
            📍 Hyderabad, Telangana, India
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/90">
            🌱 ML • Deep Learning • Gen AI
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/90">
            🎯 Goal: AI Engineer
          </span>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton onClick={handleContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;

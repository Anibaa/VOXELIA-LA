'use client';

import { COLORS, ANIMATIONS } from '@/constants/design-system';
import ContactForm from '@/components/ContactForm';
import AnimatedBackground from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';
import { PhoneIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const features = [
  {
    icon: PhoneIcon,
    gradient: `linear-gradient(135deg, ${COLORS.gradients.primary.start}, ${COLORS.gradients.primary.end})`,
    text: "24/7"
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    gradient: `linear-gradient(135deg, ${COLORS.gradients.secondary.start}, ${COLORS.gradients.secondary.end})`,
    text: "Support"
  },
  {
    icon: UserGroupIcon,
    gradient: `linear-gradient(135deg, ${COLORS.gradients.accent.start}, ${COLORS.gradients.accent.end})`,
    text: "Expert"
  }
];

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      
      <main className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
        
        {/* Content container */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-12"
        >
          {/* Header Section */}
          <motion.div
            variants={item}
            className="text-left relative order-1 md:order-none"
          >
            {/* Decorative circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full mix-blend-multiply opacity-20"
              style={{ 
                background: `radial-gradient(circle, ${COLORS.gradients.primary.start}, ${COLORS.gradients.primary.end})`,
                filter: 'blur(40px)'
              }}
            />
            
            {/* Title with gradient and animation */}
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block"
            >
              <span className="relative z-10" style={{ 
                background: `linear-gradient(135deg, ${COLORS.gradients.primary.start}, ${COLORS.gradients.secondary.end})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Bienvenue chez VOXELIA !
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full -z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={ANIMATIONS.spring.gentle}
              />
            </motion.h1>

            {/* Feature icons */}
            <motion.div 
              variants={item}
              className="flex gap-6 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  <motion.div
                    className="p-3 rounded-xl backdrop-blur-sm bg-white/80 shadow-lg mb-2"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: feature.gradient,
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-600">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Subtitle with staggered animation */}
            <motion.div
              variants={item}
              className="text-base md:text-lg text-gray-700 space-y-2 md:space-y-3"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Notre site est en cours de construction,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                nous sommes à votre écoute.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, ...ANIMATIONS.spring.bouncy }}
                className="inline-flex items-center gap-2 text-lg md:text-xl font-medium"
                style={{ color: COLORS.gradients.primary.start }}
              >
                Contactez-nous
                <motion.span
                  animate={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.2, 1.2, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  👋
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Connection lines animation */}
            <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent mb-4"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={item}
            className="relative z-10 order-2 md:order-none"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full mix-blend-multiply opacity-20"
              style={{ 
                background: `radial-gradient(circle, ${COLORS.gradients.secondary.start}, ${COLORS.gradients.secondary.end})`,
                filter: 'blur(40px)'
              }}
            />
            <ContactForm />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}

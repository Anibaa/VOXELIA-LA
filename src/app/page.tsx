'use client';

import { COLORS, ANIMATIONS } from '@/constants/design-system';
import ContactForm from '@/components/ContactForm';
import AnimatedBackground from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';
import { PhoneIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

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

const floatingAnimation = {
  animate: {
    y: [0, -4, 0],
    scale: [1, 1.005, 1],
    rotate: [0, 0.3, 0, -0.3, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

const glowAnimation = {
  animate: {
    opacity: [0.3, 0.5, 0.3],
    scale: [0.95, 1, 0.95],
    filter: [
      "blur(20px) brightness(1)",
      "blur(25px) brightness(1.1)",
      "blur(20px) brightness(1)"
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const shimmerAnimation = {
  animate: {
    background: [
      "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0) 50%)",
      "linear-gradient(45deg, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0) 100%)"
    ],
    backgroundSize: "250% 250%",
    backgroundPosition: ["-100% -100%", "200% 200%"],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

const particleAnimation = {
  animate: {
    scale: [0, 1, 0],
    opacity: [0, 0.8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

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
            
            {/* Title with advanced animation */}
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 relative flex flex-col items-center text-center w-full"
            >
              <motion.div 
                className="relative z-10 flex flex-col items-center gap-8 text-[#1a237e] w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="relative inline-block">
                  Bienvenue chez
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-[2px]"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(26, 35, 126, 0.2) 20%, rgba(26, 35, 126, 0.5) 50%, rgba(26, 35, 126, 0.2) 80%, transparent)'
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                  />
                </span>
                
                <motion.div
                  className="relative group w-full max-w-[360px] mx-auto my-2"
                  variants={floatingAnimation}
                  animate="animate"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  {/* Enhanced glow effect */}
                  <motion.div
                    className="absolute -inset-6 rounded-3xl"
                    variants={glowAnimation}
                    animate="animate"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(26, 35, 126, 0.15), rgba(255, 87, 34, 0.08))',
                      filter: 'blur(25px)'
                    }}
                  />
                  
                  {/* Logo container with enhanced glass effect */}
                  <motion.div
                    className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 flex items-center justify-center transition-all duration-700"
                    whileHover={{
                      boxShadow: [
                        "0 20px 60px rgba(26, 35, 126, 0.12)",
                        "0 25px 65px rgba(255, 87, 34, 0.12)"
                      ],
                      backdropFilter: "blur(10px)",
                      y: -3
                    }}
                  >
                    {/* Shimmer container */}
                    <motion.div
                      className="absolute inset-0 z-10"
                      variants={shimmerAnimation}
                      animate="animate"
                      style={{ backgroundSize: "250% 250%" }}
                    />
                    
                    {/* Inner shadow */}
                    <div className="absolute inset-0 rounded-2xl shadow-inner bg-gradient-to-br from-white/5 to-transparent" />
                    
                    <Image 
                      src="/logo.png" 
                      alt="Logo" 
                      width={240} 
                      height={80} 
                      className="object-contain filter drop-shadow-2xl relative z-20"
                      priority
                    />
                    
                    {/* Enhanced corner effects */}
                    <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#1a237e]/30 to-transparent" />
                    <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-[#1a237e]/30 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#ff5722]/30 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-[#ff5722]/30 to-transparent" />
                    
                    {/* Corner dots */}
                    <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-[#1a237e]/30" />
                    <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-[#1a237e]/30" />
                    <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-[#ff5722]/30" />
                    <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-[#ff5722]/30" />
                  </motion.div>
                </motion.div>
                
                {/* <motion.span 
                  className="text-[#ff5722] font-light text-2xl tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                  !
                </motion.span> */}
              </motion.div>

              {/* Enhanced background effect */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e]/5 via-transparent to-[#ff5722]/5 rounded-3xl transform rotate-2" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#1a237e]/5 via-transparent to-[#ff5722]/5 rounded-3xl transform -rotate-2" />
              </motion.div>
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

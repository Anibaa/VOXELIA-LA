export const COLORS = {
  primary: '#ee6f2c',
  secondary: '#182671',
  accent: '#2C82EE',
  
  // Gradient variations
  gradients: {
    primary: {
      start: '#ee6f2c',
      middle: '#f17f45',
      end: '#f49161'
    },
    secondary: {
      start: '#182671',
      middle: '#1e3189',
      end: '#2440a1'
    },
    accent: {
      start: '#2C82EE',
      middle: '#45A1F1',
      end: '#61BCF4'
    }
  },

  // UI Colors
  background: {
    light: '#ffffff',
    muted: '#f8f9fa',
    glass: 'rgba(255, 255, 255, 0.8)'
  },
  text: {
    primary: '#1a1a1a',
    secondary: '#4a4a4a',
    muted: '#717171'
  },
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B'
  }
} as const;

export const SHADOWS = {
  sm: '0 2px 4px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.07)',
  lg: '0 10px 15px rgba(0,0,0,0.1)',
  xl: '0 20px 25px rgba(0,0,0,0.15)',
  inner: 'inset 0 2px 4px rgba(0,0,0,0.05)',
  colored: {
    primary: '0 10px 20px rgba(238, 111, 44, 0.2)',
    secondary: '0 10px 20px rgba(24, 38, 113, 0.2)'
  }
} as const;

export const ANIMATIONS = {
  transitions: {
    fast: 'all 0.2s ease',
    medium: 'all 0.3s ease',
    slow: 'all 0.5s ease'
  },
  spring: {
    gentle: {
      type: "spring",
      stiffness: 100,
      damping: 10
    },
    bouncy: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
} as const;

export const BLUR = {
  sm: 'blur(4px)',
  md: 'blur(8px)',
  lg: 'blur(16px)',
  xl: 'blur(24px)'
} as const; 
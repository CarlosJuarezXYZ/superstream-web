export const theme = {
  colors: {
    bg: {
      primary: '#080b14',
      secondary: '#0d1117',
      tertiary: '#111827',
      card: 'rgba(255, 255, 255, 0.03)',
      cardHover: 'rgba(99, 102, 241, 0.08)',
    },
    brand: {
      purple: '#6366f1',
      purpleLight: '#818cf8',
      purpleMuted: 'rgba(99, 102, 241, 0.12)',
      violet: '#8b5cf6',
    },
    accent: {
      green: '#34d399',
      greenMuted: 'rgba(52, 211, 153, 0.1)',
      amber: '#f59e0b',
      amberMuted: 'rgba(245, 158, 11, 0.1)',
      pink: '#f472b6',
      whatsapp: '#25d366',
      whatsappDark: '#128c7e',
    },
    text: {
      primary: '#e8eaf6',
      secondary: '#94a3b8',
      muted: '#64748b',
      subtle: '#334155',
    },
    border: {
      default: 'rgba(255, 255, 255, 0.07)',
      muted: 'rgba(255, 255, 255, 0.05)',
      brand: 'rgba(99, 102, 241, 0.3)',
      brandStrong: 'rgba(99, 102, 241, 0.5)',
    },
  },
  gradients: {
    brand: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    whatsapp: 'linear-gradient(135deg, #25d366, #128c7e)',
    hero: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.18) 0%, transparent 70%)',
    text: 'linear-gradient(135deg, #fff 30%, #a5b4fc 100%)',
    price: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
  },
  fonts: {
    sans: "'Inter', sans-serif",
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '20px',
    full: '9999px',
  },
  shadows: {
    whatsapp: '0 0 32px rgba(37, 211, 102, 0.25)',
    brand: '0 0 40px rgba(99, 102, 241, 0.15)',
  },
}

export type Theme = typeof theme
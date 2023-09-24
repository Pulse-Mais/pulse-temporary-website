import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bluecape': "url('/assents/backgrounds/bluecape.svg')",
        "strongbluecape": "url('/assents/backgrounds/bluecape.svg')",
        'greencape': "url('/assents/backgrounds/greencape.svg')",
        'yellowcape': "url('/assents/backgrounds/yellowcape.svg')",
        'bigwavegreen': "url('/assents/backgrounds/bigwavegreen.svg')",
        'smallwaveblue': "url('/assents/backgrounds/smallwaveblue.svg')",
        'bluegradient': "linear-gradient(to top, #0071bd, #007cc8, #0087d2, #0093dc, #009ee6)",
        'yellowbanner': "url('/assents/backgrounds/yellowbanner.png')",
        'about': "url('/assents/backgrounds/about.jpg')",
        'aboutsmall': "url('/assents/backgrounds/aboutsmall.jpg')",
        'eventos': "url('/assents/backgrounds/eventos.jpg')",
        'eventossmall': "url('/assents/backgrounds/summitsmall.jpg')",
        'wavegreen': "url('/assents/backgrounds/wavegreen.svg')",
        'verticalgreen': "url('/assents/backgrounds/verticalgreen.svg')",
        'verticalblue': "url('/assents/backgrounds/verticalblue.svg')"
      },
      screens: {  
        'sl': '575px',
        'st': '992px',
        'xg': '1100px',
      },
      zIndex: {
        '100': '100',
      },
      boxShadow: {
        'moldure': '0 18px 19px -12px rgba(0, 0, 0, 0.20)',

      },
      backgroundColor: {
        "blue-custom": "#009EE6",
        "strongblue-custom": "#004DBC", 
        "yellow-custom": "#FFD31B",
        "green-custom": "#27C86F",
      },
      borderColor: {
        "blue-custom": "#009EE6",
        "strongblue-custom": "#004DBC", 
        "yellow-custom": "#FFD31B",
        "green-custom": "#27C86F",
      },
      textColor: {
        "blue-custom": "#009EE6",
        "strongblue-custom": "#004DBC", 
        "yellow-custom": "#FFD31B",
        "green-custom": "#27C86F",
        "black-custom": "#1B2E3A",
      },
      animation: {
        moveRight: 'moveRight 2s infinite linear',
        moveLeft: 'moveLeft 2s infinite linear'
      }
    },
  },
  plugins: [],
}
export default config

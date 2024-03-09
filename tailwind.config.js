export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: '#4C51BF', 
      secondary: '#10B981', 
    },
    textColor: {
      primary: '#4C51BF',
      secondary: '#10B981',
      white: '#FFFFFF',
    },
    backgroundColor: {
      primary: '#4C51BF', 
      secondary: '#10B981', 
      black: '#0000',
      white: '#FFFFFF',
      gray: '#F5F5F5',
      lightGray: '#F5F5F5',
      darkGray: '#4C51BF',
      blue: '#10B981',
      red_500: '#ef4444',
      red_900: '#7f1d1d',
      yellow_200: '#fef08a',
      
    
    },
    extend: {
      backgroundImage: {
        'wavy-shape': "url('./about/wavy-shape.jpg')",
        'body-card': "url('./about/img05.jpg')",
        'body-card02': "url('./about/img06.jpg')",
        'shape-liquid': "url('./hero/shape-liquidation-removebg-preview.png')",
        'shape-liquid02': "url('./hero/shape-liquidation02-removebg-preview.png')",
        'wave-shape02': "url('./contribution/wavy-shape.jpg')",
        'contact_img': "url('./contact/desk-office.jpg')",
        'contact_img02': "url('./contact/workdesk-with-envelopes-laptop.jpg')",
      }
    }
  },
  plugins: [],
}

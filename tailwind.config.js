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
    
    },
  },
  plugins: [],
}

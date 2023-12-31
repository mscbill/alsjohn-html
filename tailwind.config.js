module.exports = {
  content: ['./dist/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: 'class',
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        headline: ['Oswald']
      },
      colors: {
        mainColor: '#212f49'
      },
    },
  },
    corePlugins: {
    container: false
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwindcss-debug-screens'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '370px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    } 
  ]
}
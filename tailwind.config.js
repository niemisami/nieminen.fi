const prodConfig = process.env.NODE_ENV === 'production'
? {
  purge: {
    enabled: true,
    content: [
      '**/*.html',
    ]
  }
}
: {}

module.exports = {
  ...prodConfig,
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
}

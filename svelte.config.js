const { scss, postcss } = require('svelte-preprocess')

module.exports = {
  preprocess: [
    require('svelte-preprocess')([
      scss(),
      postcss(require('./postcss.config'))
    ])
  ]
}

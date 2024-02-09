function emojiExample () {
  const self = this
  self.named('emoji')
  // self.positionalAttributes('size')

  self.process(function (parent, target, attrs) {
      return self.createInline(parent, 'image', '', {
        target: `https://cdn.jsdelivr.net/npm/twemoji@latest/2/svg/2222.svg`,
        type: 'emoji',
        attributes: {
          alt: target,
        }
      })
  })
}

/**
 * Register the extension in the global registry
 * @see https://github.com/ggrossetie/asciidoctor-emoji/blob/main/src/asciidoctor-emoji.js#L38
 * @see https://github.com/ggrossetie/asciidoctor-emoji
 */
module.exports.register = function register (registry) {
    registry.register(function () {
      this.inlineMacro(emojiExample)
    })
    return registry
}

/**
 * Following example from:
 * @see https://docs.asciidoctor.org/asciidoctor.js/latest/extend/extensions/inline-macro-processor/
 */
module.exports = function (registry) {
  console.log('registering emoticon macro');
  registry.inlineMacro('emoticon', function () {
    console.log('Converting emoticon macro');
    var self = this
    self.process(function (parent, target) {
      var text
      if (target === 'grin') {
        text = ':D'
      } else if (target === 'wink') {
        text = ';)'
      } else {
        text = ':)'
      }
      return self.createInline(parent, 'quoted', text, {'type': 'strong'})
    })
  })
}


/**
 * Label macro
 * Converts the label macro to a Needle label.
 * @see https://storybook-components-build.appspot.com/?path=/docs/data-display-labels-semantic-labels--docs
 */
function labelInline() {
  const self = this;
  self.named('label')
  // process.exit(1);
  self.process(function (parent, target, attrs) {
    console.log(target);
    // Target will be the type of label
    // We have the following types:
    // - info
    // - warning
    // - danger
    // - success
    let color;
    if(target==="info"){
      color = "primary";
    } else {
      color = target;
    }

    const html = react.renderToString(
      <Label color={target}>
        Label
      </Label>
    )
    return self.createInline(parent, "quoted", html, {type: 'unquoted'})
  })
}


/**
 * Register the extension in the global registry
 * @see https://github.com/ggrossetie/asciidoctor-emoji/blob/main/src/asciidoctor-emoji.js#L38
 * @see https://github.com/ggrossetie/asciidoctor-emoji
 */
module.exports.register = function register(registry) {
  registry.register(function () {
    this.inlineMacro(labelInline)
  })
  return registry
}

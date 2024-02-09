/**
 * Label macro
 * Converts the label macro to a Needle label.
 * @see https://storybook-components-build.appspot.com/?path=/docs/data-display-labels-semantic-labels--docs
 * @see https://neo4j-docs-style-guide-23.surge.sh/docs-style-guide/content/labels/
 * @see https://development.neo4j.dev/docs/docs-style-guide/introduction/
 */
function labelInline() {
  const self = this;
  self.named('label')

  self.process(function (parent, target, attrs) {
    // console.log(target);
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

    const text = Array.isArray(attrs.$positional)? attrs.$positional[0] : "Label";

    const html = `<span role="status" aria-label="label" class="ndl-label n-bg-palette-${color}-bg-strong n-text-palette-neutral-text-inverse ndl-filled"><div class="ndl-label-content"><span title="Label" class="ndl-label-text">${text}</span></div></span>`
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

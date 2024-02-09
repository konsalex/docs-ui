const asciidoctor = require('asciidoctor.js')();


class CustomConverter {
  constructor () {
    this.baseConverter = asciidoctor.Html5Converter.$new()
  }

  convert (node, transform) {
    console.log(`Transform is:`)
    console.log(transform)
    console.log(node.getContent && node.getContent());
    // if(node.getContent && node.getContent()==="Label"){
    //   console.log(node);
    //   return `<p>Oh shit!</p>`
    // }
    // if (node.getNodeName() === 'label'){
    //   console.log(node)
    //   process.exit(1);
    // }
    if (node.getNodeName() === 'inline_quoted') {
      console.log(`Node name is: ${node.getNodeName()}`)
    }
    // console.log(`Node name is: ${node.getNodeName()}`)
    // if (node.getNodeName() === 'paragraph') {
    //   return `<p>Skata - ${node.getContent()}</p>`
    // }
    return this.baseConverter.convert(node, transform)
  }
}
// asciidoctor.ConverterFactory.register(new CustomConverter(), ['html5'])

const label = require('../../src/macros/label');
label.register(asciidoctor.Extensions)

// Convert AsciiDoc content
let content = 'label:success[Enterprise Edition]\n';
content += 'label[{type: "aura"}Enterprise Edition]'
let html = asciidoctor.convert(content, {safe: 'safe'});
console.log(html);

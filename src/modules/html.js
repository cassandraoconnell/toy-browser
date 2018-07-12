const dom = require('./dom');

class Parser {
    constructor(htmlInput) {
        this.input = htmlInput.toString();
        this.position = 0;
    }

    get isEndOfInput () {
        return this.position >= this.input.length;
    }

    get nextCharacter () {
        return this.input.charAt(this.position);
    }

    parseNextCharacter () {
        let character = this.nextCharacter;

        // Returns the next character or disposes of white space.
        if (character !== ' ') {
            this.position++;
            return character;
        } else {
            this.position++;
        }
    }

    startsWith () {

    }

    parseAttributes () {
        // Parse a list of name="value" pairs, separated by whitespace.
    }

    parseElement () {
        let elementTagName = this.parseTagName();
        let elementAttributes = this.parseAttributes();
        let elementChildren = this.parseNodes();

        return new Element({
            attributes: elementAttributes,
            children: elementChildren,
            tagName: elementTagName,
        });
    }

    parseNode () {
        if (this.nextCharacter === '<') {
            this.parseElement();
        } else {
            this.parseText();
        }
    }

    parseNodes () {

    }

    parseTagName () {
        let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        let lowecaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let uppercaseLetters = lowecaseLetters.map(letter => letter.toUpperCase());
        
    }

    parseText () {
        let textChildren = this.parseNodes();
        // let textData = this.parseWhile()

        return new Element({
            children: textChildren,
        })
    }


}

module.exports.parse = html => {
    let nodes = new Parser(html).parseNodes();

    if (nodes.length === 1) {
        return nodes[0];
    } else {
        return new Element({
            children: nodes,
            name: 'Root',
            tagName: 'html',
        })
    }
}
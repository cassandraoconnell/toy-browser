'use strict';

const defaultOptions = {
    children: [],
    name: "Node",
}

class Node {
    constructor(options) {
        this.options = Object.assign({}, defaultOptions, options);
        this.children = this.options.children;
        this.name = this.options.name;
        this.nodeType = this.constructor.name;
    }

    printNodeTree () {
        let generation = 1;
        let marker = '|-';
        let parseChildren = array => {
            array.forEach(child => {
                console.log(Array(generation).join('  ') + marker + child.name);
                if (child.children.length > 0) {
                    generation ++;
                    parseChildren(child.children);
                    generation --;
                }
            });
        }

        console.log(this.name);
        parseChildren(this.children);
    }
}

class Text extends Node {
    constructor(options) {
        super(options);
        this.data = this.options.data;
    }
}

class Element extends Node {
    constructor(options) {
        super(options);
        this.attributes = this.options.attributes;
        this.tagName = this.options.tagName;
    }
}


module.exports = {
    Node: Node,
    Text: Text,
    Element: Element,
}
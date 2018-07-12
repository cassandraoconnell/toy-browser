const css = require('./modules/css');
const dom = require('./modules/dom');
const html = require('./modules/html');
const layout = require('./modules/layout');
const painting = require('./modules/painting');
const style = require('./modules/style');


const node = new dom.Node({
    name: "Test Node."
});

console.log(node.name);
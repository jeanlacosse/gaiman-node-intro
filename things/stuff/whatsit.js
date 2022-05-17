let name = 'Jean-Luc'
let lName = 'lacosse'
// This will not export lName unless it is explicitly done so

let partners = require('../../pb-partners')

module.exports = function (n) {
    return partners[n];
}

// exports could be anything, variable, function, object etc.
// can export an object which as key values of multiple variables or functions etc
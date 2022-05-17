// require() is a function that imports other js files
const peanutButterPartners = require('./pb-partners.js');
// first export data from one file, then require it in the original file, and then assign it to a variable
// need to assign it to same variable as source file if I want it to work with that name in this file

const whatsit = require('./things/stuff/whatsit');

for (let partner of peanutButterPartners) {
    console.log(`eating a peanut butter and ${partner} sandwich`)
    if (partner !== 'honey') {
        console.log('hmm, not my favorite')
    }
}

/* calling the whatsit function, which is calling the array in pb-partners, 
plugging it into a function, which is being called with the argument of 1,
 returning peanutButterPartners[1]*/
console.log('whatsit', whatsit(1))

// module is node speak for 'file' in the terminal
// run in terminal --- node file-name --- file will run in the terminal
// there in no DOM in node, will not run any html or css

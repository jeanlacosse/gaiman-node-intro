// requires is a function that imports other js files
require('./pb-partners.js');



for (let partner of peanutButterPartners) {
    console.log(`eating a peanut butter and ${partner} sandwich`)
    if (partner !== 'honey') {
        console.log('hmm, not my favorite')
    }
}

// module is node speak for 'file' in the terminal
// run in terminal --- node file-name --- file will run in the terminal
// there in no DOM in node, will not run any html or css

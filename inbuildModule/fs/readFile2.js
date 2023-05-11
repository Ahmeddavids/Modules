//  reading from a file asynchronously

const fs = require('fs');

// fs.readFile(file, fileStandard, callback)
fs.readFile('./simple1.txt', "utf8", (error, data) => {
    if (error) {
        console.log("Unable to read file")
    } else{

        console.log(data)
    }
})

// best practice is to write an ELSE statement after an IF statement
//  writing to a file asynchronously

const { error } = require('console');
const fs = require('fs');

fs.writeFile("./sample2.txt", "3. Ebuka", (error) => {
    if (error) {
        console.log("Unable to write to file")
    } else{

        console.log("successfully written to file")
    }
}) 
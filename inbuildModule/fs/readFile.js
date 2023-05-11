// importing the filesystem module
const Ahmed = require( 'fs' );

// reading from a file
const readFile = Ahmed.readFileSync( './sample1.txt', "utf8" );
// const readFile = fs.readFileSync( './Data Science Project Road Map.pdf', "utf8" );
console.log( readFile )


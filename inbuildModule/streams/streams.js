// streams are used to handle large amount of data that may not fit into memory.
// straems allows data to be precessed in small chunks which makes them more memory efficiant than the traditional Input/Output operations

// Types of streams in node.js
// 1. Readable steam: used for reading data.
// 2. Writeable stream: used for writing data.
// 3. Duplex stream: used for both reading and writing of data.
// 4. Transform stream: used for transforming or modifying data as it is being read and written.

// - import the "fs" module
// - create an instance of the object extracted from the module
// - handle data from the readable stream

const fs = require('fs');

const readStream = fs.createReadStream(".././sampleText/sample1");
readStream.on('data', (chunk) => {
    console.log('Buffer content:\n', chunk)
    console.log('Buffer content:\n', chunk.toString())
});


readStream.on('end', () => {
    console.log('This is the end of the content fetched')
});

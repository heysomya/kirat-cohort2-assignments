// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const writeToFile = (file, data) => {
  fs.writeFile(file, data, { flag: 'a' }, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const data = 'Hello Somya!\n';
writeToFile('./sample.txt', data);

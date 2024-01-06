// File cleaner

// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

import { readFile, writeFile } from 'fs';

const fileCleaner = (path) => {
  readFile(path, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data = data.replace(/\s+/g, ' ');
      writeFile(path, data, (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log('Success!');
        }
      });
    }
  });
};

fileCleaner('./sample.txt');

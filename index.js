'use strict';

const fs = require('fs');

fs.readdir('./node-projects', 'utf-8', (err, files) => {
  if (err) throw err;
  fs.writeFile('./text.txt', files, err => {
    if (err) throw err;
    console.log('Zapisano!');
  })
});

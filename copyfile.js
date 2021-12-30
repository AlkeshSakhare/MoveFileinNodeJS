const fs = require('fs');
  
const filePath = 'source/temp.txt';
const filePathCopy = 'C:\\Users\\Alkesh\\demo\\destination\\temp.txt';
    
fs.copyFile(filePath, filePathCopy, (err) => {
  if (err) throw err;
    
  console.log('File Copy Successfully.');
});
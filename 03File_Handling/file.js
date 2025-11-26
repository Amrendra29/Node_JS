const file=require('fs');
// Writing to a file
//synchronous method
file.writeFileSync('./example.txt', 'Hello, this is a sample text file.');

const data = file.readFileSync('./example.txt', 'utf8');
console.log("File Content:", data);

file.appendFileSync('./example.txt', '\nThis line is appended to the file.');

console.log("Updated File Content:", file.readFileSync('./example.txt', 'utf8'));
const request = require('request');
const fs = require('fs');
const arg = process.argv.slice(2);

 
console.log(arg)
if(arg.length === 0){
    console.log('')
    return
}

request(arg[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
fs.writeFile(arg[1], body, function (err) {
    if (err){
        console.log('Error connecting!')
    };
    console.log('Saved!')
  });
  
})


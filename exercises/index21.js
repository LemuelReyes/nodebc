/* # Exercise 21

* Create a new index21.js file
* Define **age** variable and assign your age as value (number)
* Define **phone** variable and assign your phone number or similar (number)
* Define **streetName** variable and assign your street name (string)
* Define **streetNumber** variable and assign your house street number (number)
* Use console log to show the following messages:
  * First message: I'm %age% years old
  * Second message: My phone number is: %phone%
  * Third message: I live on %streetNumber% %streetName%
* Use template variables for each text 

*/

const age = 30;
const phone = 7788700463;
const streetName = '14th Ave';
const streetNumber = 7605;

const message = `
        I'm ${age} years old
        My phone number is ${phone}
        I live in ${streetNumber} ${streetName}
`;

console.log(message);
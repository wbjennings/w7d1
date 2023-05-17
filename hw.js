/*Question #1

Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array

hint: filter, includes*/

//------------------

const sentence = "I have 10 dogs, too many to name, but my favorites are named Eric and Bob.";
const doggyName = ['John', 'Bill', 'Donald', 'Mary', 'Micah', 'Eric']

function getTheDogName(sentence, doggyName) {
    return doggyName.filter(doggyName => sentence.includes(doggyName));
};

const foundName = getTheDogName(sentence, doggyName);
console.log(foundName);


//--------------------
//Write a Function using map to convert an array of number from inches to feet

const inches = [12, 24, 36, 48, 60];

function convertInches(inches) {
    return inches.map(inches => inches / 12);
}

const feet = convertInches(inches);
console.log(feet);

//--------------------------
//Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.

const tmnt = ['Leonardo', 'Donatello', 'Raphael', 'Michelangelo'];
const someArray = tmnt.map(name => (name.endsWith('o') ? `${name} is eating pizza` : `${name} is being rude`));
console.log(someArray);


//----------------------------
//Write an arrow function to find the max number in a list. Do not use the Math.max Function.
//The List will be all positive numbers

const numberList = [15, 7, 18, 25, 500, 12, 60];
const findMax = (list) => {
    let max = 0;
    list.forEach(number => {
        if (number > max) {
            max = number;
        }
    });
    return max;
};

const maxNum = findMax(numberList);
console.log(maxNum);

//---------------------------------------
/*At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell

var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
    //define state from this line on the third iteration
}
//bingo value is

//ognib value is

// i value is
*/

var bingo = "B-I-N-G-O";
var ognib = "";
for(let i = bingo.length - 1; i >= 0; i--){
    ognib += bingo[i];
    if (bingo.length - i === 3) {
        // At the end of the third iter
        // bing value is "B-I-N-GO"
        // ognib value is "O-N-I
        // i value is 
    };
};

//-----------------------------------




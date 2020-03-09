const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E.Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

console.log(inventors.filter((items) => items.startsWith("A")));

console.log(inventors.filter((items) => items.includes('n')));

function checkConsecutiveDuplication(e) {
    const a = e.split("")
    // let check = false
    return a.slice(0, a.length - 1).some((el, idx) => a[idx] === a[idx + 1])
    // return check
}
//   console.log(inventors.filter(checkConsecutiveDuplication));

console.log(inventors.filter(e => e.split("").slice(0, e.split("").length - 1).some((el, idx) => e.split("")[idx] === e.split("")[idx + 1])))

console.log(numbers.filter((items) => items % 2 == 1));

console.log(numbers.filter((items) => items > 10));

console.log(numbers.filter((items) => items % 2 == 0));

// Print out the first name of each inventor.
// expected result: first name of each name
// fiest step need to split the array to small array;

console.log(inventors.map((value) => {
    const newInventorArr = value.split(' ');
    const firstName = newInventorArr[1];
    return firstName
}));

console.log(inventors.map(function (value) { // value = "Albert Einstein"
    const namesLength = value.length; // namesLength="15"
    return namesLength; // namesLength=[15,12,...]
}));

// Print out all the inventors' names in uppercase.
//expected: "Albert Einstein" => ALBERT EINSTEIN
console.log(inventors.map((value) => {
    const upperCaseName = value.toUpperCase();
    return upperCaseName
}))

console.log(inventors.map(function (value) {
    // Print out initials of all inventors(e.g. A.E., I.N., ...)
    // need to get the first letter of first name and the first letter last name
    // need split "Albert Einstein" become ["Albert","Einstein"]
    // get the first letter of Albert(A) and the first letter of Einstein (E)
    // make string of "A.E"
    const splitInventorArr = value.split(' '); // splitInventorArr=["Albert","Einstein"]
    const letterOfFirstName = splitInventorArr[0].charAt(0); // letterOfFirstName = A
    const letterOfLastName = splitInventorArr[1].charAt(0);// letterOfLastName = E
    const initialName = `${letterOfFirstName}.${letterOfLastName}`;
    return initialName
}))
//Print out an array of every number multiplied by 100.
console.log(numbers.map(function (value){
const multipleNumber = value*100;
return multipleNumber
}))
//Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
console.log(numbers.map(function(value){
    if (value%2 === 0){
        const doubleNumber = value + value;
        return doubleNumber
    }
})) // this one wrong, please ask Bitna tmr
console.log(inventors.sort(function(a,b){
    if (a<b){
        return 
    }
}))

console.log(inventors.sort(function (a,b) {
    const letterOfFirstName = splitInventorArr[0].charAt(0); // letterOfFirstName = A
    var a = splitInventorArr[a].charAt(0);
    var b = splitInventorArr[b].charAt(0);
    if (a<b){
        return -1;
    } if (a > b) {
        return 1;
    } return 0;
    }))

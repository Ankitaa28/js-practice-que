// write a function that takes an array of numbers and return a new array with only the even nummbers
let arr =[10,15,20,25,30,35,40,45,50];
function even(arr) {
    return arr.filter(num => num%2===0);
    
}
console.log(even(arr));
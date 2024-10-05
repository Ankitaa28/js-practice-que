// create a function that display the current date and time in specific formate
function current(){
    let currentDate= new Date();
   return currentDate.toLocaleString();
}
console.log(current());
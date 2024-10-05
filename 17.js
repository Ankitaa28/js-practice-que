// remove all occurences of a specific element from an array
function remove(arr ,target){
    return arr.filter(item => item!==target);
}
let arr =[10,20,30,10,40,10,50];
let target=10;
console.log(remove(arr,target));
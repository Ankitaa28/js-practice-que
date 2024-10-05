// finnd the largest element in an array using the reduce () method
function largest(arr){
    return arr.reduce((max,current)=>{
     return   current > max ? current : max;
    })
}
let arr =[10,15,20,25,30,35,40,45,50];
console.log(largest(arr));
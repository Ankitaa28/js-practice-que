// write a function to calculate the factorial 

function fact(num){
    if(num===0 || num===1){
        return 1;
    }
    else {
        var count=1;
        for( var i =1;i<=num;i++){
          count*=i; }
        return count;
    }

}
console.log(fact(6));
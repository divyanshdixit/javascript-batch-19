// loops:

// for => used for array 
// for-in => used only for objects
// for-of => used for arrays or iterator object
// forEach => function, but work as a loop


// while , do-while

for(let i=0;i<10;i++){
console.log(i); // 0,1, 2, ...
}

// for-in:

var obj = {
    x:10,
    y:20,
    z:30
}

for(let i in obj ){
    console.log(i, obj[i]) // x, y, z, 10, 20, 30
}


// for-of => we get only values, used for array/iterable obj

var arr = [1,2,3,4,5];

for(let i=0;i<5;i++){
    console.log(i, arr[i])
}
console.log("+++++============")
for(let i of arr){
    console.log(i)
}

// forEach: it is a function, used only for printing the value, it doesn't retun any value
//  used only with array:

// callback function:  a function passed as an argument to other function called as callback functio
// 
var count = 0
const val = arr.forEach( function(item, index, arr){
    console.log(item, index, arr)
    // count = count + item;
    item  = item +  item;
    return item
} )

console.log(val);

// do-while 

// while 
var x =;

while(x>10){
    console.log('true')
    x++;
}
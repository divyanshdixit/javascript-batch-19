// redeclation:

var x = 10;

var x= 20;

console.log(x);

// same scope(global) redeclaration is not allowed
let y = 10;

// let y = 20;

{
    let z = 100;
    // let z = 90;
}


let c = 10;
console.log(c) // 10

{
    let c = 20;
    console.log(c); // 20
}

{
    let c = 30;
}


// in same scope (var and let declaration) for same variable is not allowed 
// var d = 10;
// let d = 100;

{
    var d = 10;
    let d = 100;
    console.log(d)
}

console.log(d);


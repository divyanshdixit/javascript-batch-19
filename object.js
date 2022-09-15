// objects:

// property
// methods: (actions/functions)

// object literal:

// var category = 'laptop';
var sub = 'windows';

// var category = 'human';
var sub1 = 'man';
var sub2= 'woman';

var emptyobj = {} // empty object

// key : 'value'
// rules: 
// key can not be in ' ' or in " "
// key can not be a number.

var obj1 = {
    // properties
    category : 'laptop', // string, number, boolean, null, {}, []
    subCategory: 'windows',
    // methods:
    coding: function(){ // anonymous function
        console.log('price of this category is ' + this.category);
    },
    gaming: function(){
        console.log('this laptop cna be used for gaming!');
    }
}

// accessing props and methods of an object:

// 1.) print the value of object props: (Read)

// two methods: 1=> objectName.propertyname    2=> objectName['propertyName'] => loops

console.log(obj1.category)

// 2.) change(overwrite ) the prop value: (write)

obj1.subCategory = 'macOS';
console.log(obj1);

//  3.) add new prop to the object: (Add)

obj1.price = 1000;
console.log(obj1);

// 4.) delete the props (Delete)

delete obj1.price;
console.log(obj1);

// run the methods of object:

// objectName.methodName()

// console.log(obj1.coding())

// overwrite (change) the method function defintion:
console.log(obj1.coding())
obj1.gaming = function(){
    console.log('change')
}
console.log(obj1.gaming());

// adding new method to the object:

obj1.getOrder = function(){
    console.log('get order function');
}
console.log(obj1.getOrder());

// delete the method:
delete obj1.getOrder;
console.log(obj1);


// know an object has a property or not : ObjectName.hasOwnProperty('propertyName') => return either true or false.

console.log(obj1.hasOwnProperty('coding'));


// DO NOT COPY ONE OBJECT TO ANOTHER:

var f = 10;

var x;

x = f; // 10
x = 20;

console.log(f); // 10

var obj1 = { 
    a:10
}

var obj2 = obj1;

console.log(obj2);

obj2.a = 20;

console.log(obj1); 


// example:

var calculator = {
    x:0,
    y:0,
    add: function(){
        console.log(this.x + this.y)
    }
}

console.log(calculator.add());
calculator.x = 10;


var p = {
    name : 'ggg'
}

console.log(p.name)

// string literals:

var x = "" // 0
var y= ''

// string => primitve => not mutable 

var str = "  divyansh dixit  " // 13

// to get the count of chars in string: stringName.length

console.log(str.length)


// escaping chars=> use '\' 

// "", '', \
var str1 = " this is a quote from  ' authorname' - \" voyager \" http://client\\123  ";
console.log(str1);


// use string as an obeject:
var strObj = new String('new string');

console.log(typeof str1, typeof strObj, strObj)

var compare = 'new string';

console.log(compare == strObj) // true
console.log(compare === strObj) // false
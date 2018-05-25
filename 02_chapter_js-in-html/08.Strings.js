console.log('------------------------Strings---------------');

var text = "this is letter sigma : \u03a3. "

console.log(text);

var lang = "java"
lang = lang + "script"
console.log(lang);

var age = 11;
var ageinstring = age.toString(); //

var found = true;
var foundastring = found.toString();

console.log(age);
console.log(ageinstring);
console.log('---------------------------');
console.log(found);
console.log(foundastring);

//arguments on string. -- its radix argument

var num = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));

console.log('-----------------------------string operations');

//string operations
var val1 = 10;
var val2 = true;
var val3 = null;
var val4;

console.log(String(val1));
console.log(String(val2));
console.log(String(val3));
console.log(String(val4));



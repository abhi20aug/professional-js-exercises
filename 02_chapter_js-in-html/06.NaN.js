var text1 = "10"
console.log(typeof(text1));
console.log(isNaN(text1));

//Number Operations
var num1 = Number("Hello123");
console.log(num1);

var num1a = Number("000111");
console.log(num1a);

var num1b = Number(true);
console.log(num1b);

var num1c = Number(true);
console.log(num1c);

//ParseInt Operations
var num2 = parseInt("Hello123")
console.log(num2);

var num3 = parseInt("123qwert")
console.log(num3);


// string 06.NaN.js:2:1
// false 6.NaN.js:3:1

// NaN 6.NaN.js:7:1
// 111 06.NaN.js:10:1
// 1 06.NaN.js:13:1
// 1 06.NaN.js:16:1

// NaN 06.NaN.js:20:1
// 123 06.NaN.js:23:1
// http://davidshariff.com/js-quiz/

console.log(new String("This is a string") instanceof String);
console.log([]+[]+"foo".split(''));
console.log(new Array(5));
console.log(new Array(5).toString());

var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr);

console.log("---------------------------------------");

var x = 0;
function foo() {
    console.log('foo-called'+x);
    x++;
    console.log('foo-called'+x);
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x);
console.log("---------------------------------------");

console.log("This is a string" instanceof String);
console.log("---------------------------------------");

var bar = 1,
    foo = {};
var foo = {
    bar: 2,
    baz: ++bar
};

// console.log(foo());
console.log(foo.baz);
console.log(foo.baz + foo.bar);
console.log(foo.baz + foo.bar + bar);
 
console.log("---------------------------------------");

var myArr = ['foo', 'bar', 'baz'];
console.log(myArr[2]);
myArr[2];
myArr.push['tea']
console.log(myArr);
console.log('2' in myArr);
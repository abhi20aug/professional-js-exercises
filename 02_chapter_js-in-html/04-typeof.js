//typeof example
var val1 = 10;
var val2 = "10";
var val3 = true;
var val4 = 10.0;
var val5 = new Object();
var val6 = function(){ 
            var message = "Hi!!";
        };

console.log('val1:' + typeof(val1));
console.log('val2:' + typeof(val2));
console.log('val3:' + typeof(val3));
console.log('val4:' + typeof(val4));
console.log('val5:' + typeof(val5));
console.log('val6:' + typeof(val6));


/*
val1:number
04-typeof.js:11:1
val2:string
04-typeof.js:12:1
val3:boolean
04-typeof.js:13:1
val4:number
04-typeof.js:14:1
val5:object
04-typeof.js:15:1
val6:function
04-typeof.js:16:1
*/
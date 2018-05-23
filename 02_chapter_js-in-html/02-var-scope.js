///02-var-scope.js
var fn = function(){
    var message = "inside fn";
}

fn();
//alert(message); // throws error since defined under fn


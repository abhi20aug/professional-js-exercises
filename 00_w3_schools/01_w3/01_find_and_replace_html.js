// This example uses the method to "find" an HTML element (with id="demo") 
//and changes the element content (innerHTML) to "Hello JavaScript":
function changeText() {
    var oldText = document.getElementById("demo").innerHTML;
    console.log(oldText);
    document.getElementById("demo").innerHTML="New Text";
}
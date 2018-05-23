//global variable
var fn = function () {
    msg_gl_var = "Hi!!"
    //not used or defined using var, 
    //hence it becomes global variable
};

fn();

alert(msg_gl_var);
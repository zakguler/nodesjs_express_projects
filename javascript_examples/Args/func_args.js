"use strict";

var x = function(){
    console.log(arguments);  //========> { '0': 1, '1': 2, '2': 3 }
    // console.log(arguments[2]);  //==> 3
};
x(1,2,3);

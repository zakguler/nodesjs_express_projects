"use strict";

var x = (...n) => {
    // console.log(arguments);  //========> { '0': 1, '1': 2, '2': 3 }
    // console.log(n[2]);  //=============> 3
    console.log(n);  //===================> [ 1, 2, 3 ]

};

x(1,2,3);
"use strict";

if (4 == 4){
    console.log("ok!");
} else {
    console.log("not ok!");
}

// const num = 50;
// if (num < 49){
//     console.log("not ok!");
// } else if (num > 100){
//     console.log("many");
// } else { 
//     console.log("ok!");
// }

// ternar operator
(num === 50) ? console.log("ok!") : console.log("not ok!");

// switch
const num = 50;
switch (num){
    case 49:
        console.log("not ok!");
        break;
    case 100:
        console.log("many");
        break;
    case 50:
        console.log("ok!");
        break;
    default:
        console.log("error!");
}
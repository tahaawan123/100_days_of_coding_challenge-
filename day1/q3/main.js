"use strict";
//  question 3:Name cases:store a person's name in a variable ,and then print that person's name in
// lowercase, uppercase, titlecase.
// Lowercase 
let personName = "Taha Awan";
console.log("lowercase:", personName.toLowerCase());
// UPPERCASE
console.log("uppercase:", personName.toUpperCase());
//  Titlecase
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));

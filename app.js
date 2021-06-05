//    *** *** *** Chapter # 58-to-67  ( DOM ) *** *** *** 

//  TASK # 01
// i. Get element of id “main-content” and assign them in a variable.

//  SOLUTION:

// var main_content=document.getElementById("main-content");
// console.log(main_content)

// _________________________________________________________________________________

// ii. Display all child elements of “main-content” element.

//  SOLUTION:

// console.log(main_content.childNodes)

// _________________________________________________________________________________

// iii. Get all elements of class “render” and show their innerHTML in browser.

//  SOLUTION:

// var render=document.getElementsByClassName("render").innerHTML = "Paragraph changed!";
// document.write(render);

// _________________________________________________________________________________

// iv. Fill input value whose element id first-name using javascript

//  SOLUTION:

// var first_name = document.getElementById("first-name");
// var fname = document.createTextNode("Muhammad Bariq");
// first_name.appendChild(fname);
// console.log(first_name);

// _________________________________________________________________________________

// v. Repeat part iv for id ”last-name” and “email”.

//  SOLUTION:

// var last_name = document.getElementById("last-name");
// var lname = document.createTextNode("Kamran");
// last_name.appendChild(lname);
// console.log(last_name);
// var email = document.getElementById("email");
// var emai = document.createTextNode("bariqsiddiqui109@gmail.com");
// email.appendChild(emai);
// console.log(email);

// _________________________________________________________________________________

//  TASK # 02
// use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.

//  SOLUTION:

// var form_content =document.getElementById("form-content");
// console.log(form_content.nodeType);

// _________________________________________________________________________________

// ii. Show node type of element having id “lastName” and its child node.

//  SOLUTION:

// var lastname =document.getElementById("last-name");
// console.log(lastname.nodeType);
// console.log(lastname.childNodes);

// _________________________________________________________________________________

// iii. Update child node of element having id “lastName”.

//  SOLUTION:

// var laname =document.getElementById("last-name");
// console.log(laname);

// _________________________________________________________________________________

// iv. Get First and last child of id “main-content”

//  SOLUTION:

// var maincontent =document.getElementById("main-content");
// console.log(maincontent.firstChild);
// console.log(maincontent.lastChild);

// _________________________________________________________________________________

// v. Get next and previous siblings of id “lastName”

//  SOLUTION:

// var lastname =document.getElementById("last-name");
// console.log(lastname.nextSibling);
// console.log(lastname.previousSibling);

// _________________________________________________________________________________

// vi. Get parent node and node type of element having id “email”`

//  SOLUTION:

var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);
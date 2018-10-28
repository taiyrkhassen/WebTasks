// function determ(){

// 	alert("Red is green");

// }
// var num = 1.45;
// var num1 = 2.56; 
// console.log(num); // vyvodit 
// var name = prompt("Kak zvat?"); // prosit vvesti 
// console.log("vashe imya: " + name);
// document.write("Result: ", num+num1);
function finD(){
	let s11 = parseInt(document.getElementById('s11').value);
	let s12 = parseInt(document.querySelector('#s12').value);
	let s13 = parseInt(document.querySelector('#s13').value);
	let s21 = parseInt(document.querySelector('#s21').value);
	let s22 = parseInt(document.querySelector('#s22').value);
	let s23 = parseInt(document.querySelector('#s23').value);
	let s31 = parseInt(document.querySelector('#s31').value);
	let s32 = parseInt(document.querySelector('#s32').value);
	let s33 = parseInt(document.querySelector('#s33').value);
	let det = s11*(s22*s33-s23*s32) - s12*(s21*s33-s23*s31) + s13*(s21*s32-s22*s31);
	let res = document.getElementById('result');
	res.textContent = det;
}
const button = document.querySelector('#determinant');
button.addEventListener('click', finD);  // which event we use "click" and we do when we clicked
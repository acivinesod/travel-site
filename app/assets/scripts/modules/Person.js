/* ES5 */
// function Person(fullName, favColor) {
// 	this.name = fullName;
// 	this.favoriteColor = favColor;
// 	this.greet = function(){
// 		console.log('Konstruktor  ' + this.name + ' moja boja ' + this.favoriteColor);
// 	}
// }
/* ES2015 */

class Person {
	constructor(fullName, favColor){
		this.name = fullName;
		this.favoriteColor = favColor;
	}

	greet() {
		console.log('ES2016Konstruktor  ' + this.name + ' moja boja ' + this.favoriteColor);
	}
}



// console.log("Hello from Person.js");
 
// exports.exampleProperty = "Super property of Ico";
// exports.exampleFunction = function () {
// 	alert('Tis is example');
// }

// module.exports = Person;

export default Person;
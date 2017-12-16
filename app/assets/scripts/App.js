// var $ = require('jquery');
// var Person = require('./modules/Person');

// import Person from './modules/Person';

// class Adult extends Person {
// 	payTaxes(){
// 		console.log(this.name + " now owes $0 in taxes");
// 	}
// }

// var john = new Person('John','crvena');

// john.greet();

// var jane = new Adult('Jane', 'ljučibasta');

// jane.greet();  
// jane.payTaxes();

// $('h1').remove();

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeader();
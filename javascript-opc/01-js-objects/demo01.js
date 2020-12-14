'use strict'; 
(function() {

  display('Hello World');
  
  let firstName = 'Elf';
  let lastName = 'God';

  // Objects Litrela

  let person = {
    firstName: 'Elf',
    lastName: 'God',
    age: 18,
    isAdult: function() { return person.age >= 18; }
  };
  // i can add more properties to my object after they are created
  // person.age = 29;
  // added a property and a method
  // person.isAdult = function() { return this.age >= 18; }

  // this (display) property, shows firstName in the html
  display(person.firstName);
  display(person.age);
  display(person.isAdult());

  registerUser(person); 

})();
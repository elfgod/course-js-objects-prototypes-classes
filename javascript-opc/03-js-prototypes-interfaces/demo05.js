'use strict';

(function() {
/*
    // every function has a prototype
    let myFunction = function() { }

    display(myFunction.prototype);

    // object you cant see their prototype
    let person = {firstName: 'Jim'};

    display(person.prototype);

    display(person.__proto__);
    */

    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // this adds the age property but it will go for both objects
    Person.prototype.age = 29;

    display(Person.prototype);

    let elf = new Person('elf', 'god');
    let yare = new Person('yare', 'diaz'); 
    // this will also change all ages of all objects from 29 to 19
    yare.__proto__.age = 19;

    display(elf.__proto__);
    display(yare.__proto__);

    // this will change the age of just elf
    elf.age = 77
    // add a new property to the elf Object 
    display(elf.age); // 77
    // elf has access to both values
    display(elf.__proto__.age); // 19
    // if we delete the elf.age
    // we can still see the age of elf but the prototype
    display(elf.age) // 19

    // this will check if it has the property on that Object
    display(elf.hasOwnProperty('age')); //true 

    // this will give true because they have same object instance in memory
    display(Person.protype === jim.__proto__);



})
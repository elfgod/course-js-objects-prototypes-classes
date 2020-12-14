'use strict'
(function() {

    let elf = {
        firstName: 'elf',
        lastName: 'god',
        age: 33,
        isAdult: function() { return this.age >= 21; }
    };

    display(elf.isAdult());

    let yare = {
        firstName: 'yare',
        lastName: 'diaz',
        age: 30,
        isAdult: function() { return this.age > 21; }
    };

    display(yare.isAdult());

    // constructor function
    function Person(firstName, lastName) {
        this.firstName = 'firstName';
        this.lastName = 'lastName';
        this.age = age;
        this.isAdult = function() { return this.age > 21; }
    }
    // the new word creates a new object
    let elf = new Person('jim', 'cooper');
    let yare = new Person('yare', 'diaz');

    display(person);
    display(elf.isAdult());
    display(yare.isAdult());

    // Using Object.create()
    let elf = {
        firstName: 'elf',
        lastName: 'god',
        age: 33,
    };

    let person = Object.create(
        Object.prototype,
        {
            firstName: { value: 'elf', enumerable: true, writable: true, configurable: true },
            lastName: { value:'god', enumerable; true, writable: true, configurable: true },
            age: { value: 29, enumerable: true, writable: true, configurable: true },
        }
    );

    display(person1);
    display(person2);

    



})();
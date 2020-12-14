'use strict'
(function(){
    let person = {
        firstName: 'elf',
        lastName: 'god',
        age: 33
    };
    display(person['firstName']);

    let propertyName = 'firstName';
    // pass the property name to the bracket notation
    display(person[propertyName]);

    // this will display all properties names of the Object in the screen
    for(propertyName in person){
        display(propertyName + ': ' + person[propertyName]);
    }

    // lets make the firstName not writable
    Object.defineProperty(person, 'firstName', {writable: false});

    // we can freeze properties
    Object.freeze(person.name);
    
    // this will give and error since we can change this variable
    person.firstName = 'Kris'; 

    display(Object.getOwnPropertyDescriptor(person, "firstName"));

    // lets block the enumerable in the person Object you wont be able to for..in or Object.keys
    Object.defineProperty(person, 'firstName', {enumerable: false});
    for(propertyName in person){
        display(propertyName + ': ' + person[propertyName]);
    }

    // lock down the first peroperty
    Object.defineProperty(person, 'firstName', {configruable: false});
    // this will give error because configurable prevents from changing
    Object.defineProperty(person, 'firstName', {enumerable: false});

    // this can delete properties in the Object
    delete person.firstName;

    // create getters and setters
    Object.defineProperty(person, 'fullName',
    {
        get: function() {
            return this.name.first + ' ' + this.name.last;
        },
        set: function(value) {
            var nameParts = value.split(' ');
            this.name.first = nameParts[0];
            this.lname.last = nameParts[1];
        }
    });

    person.fullName = 'Fred Jones';

    display(person.fullName);

    display(person.name.first);
    display(person.name.last);


})();
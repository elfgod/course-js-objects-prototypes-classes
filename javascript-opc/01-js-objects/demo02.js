'use strict';
(function(){
    // set Object Literals properties
    function registerUser(fName, lName){
        let person = {
            firstName: 'fName',
            lastName: 'lName'

        };
        display(person);
    }
    registerUser('elf', 'god');

    // shorthand syntax
    function registerUser(firstName, lastName){
        let person = {
            firstName,
            lastName
        };
        display(person);
    }
    registerUser('elf', 'god');

    // literal method declaration shorthand syntax
        let person1 = {
            firstName,
            lastName,
            age: 17,
            isAdult() { return this.age >= 18; }
        };
        // Object.keys()
        // display(person.isAdult());

        // this will print an array of all the properties of the Object person
        // [ firstName, lastName, age, isAdult ]
        display(Object.keys(person));

        // using the for..in to display the Object person
        // first we set the variable propertyName then we add the Object (person)
        for(let propertyName in person){
            display(propertyName);
        }

        // create a new Object from a existing one or merge the properties of two Objects
        // this will copy 1 Object

        let person2 = {

        }
        Object.assign(person2, person1);
        // person2 will have all the properties that person1 has
        display(person2);
        // this will return FALSE their properties are the same,
        // but they are not the same Object in memory
        display(person1 === person2);

        // #####################
        let healthStats = {
            height: 68,
            weight: 150
        };
        // this will add the properties of healthStats to person1 Object
        Object.assign(person1, healthStats);
        display(person1);

        // Merge function
        function mergeHealthStats(person, healthStats){
            // {} this is an empty object
            // the {} will prevent person1 of being mutate by the function
            return Object.assign({}, person, healthStats);
        }

        let mergedPerson = mergeHealthStats(person1, healthStats);

        display(mergedPerson);
})();
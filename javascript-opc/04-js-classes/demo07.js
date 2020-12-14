'use strict';
(function() {
    // classes has prototypes like functions
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            // not all the properties need to be initialized in the constructor
            this.age = 0;
        }
        static adultAge = 18;

        get fullName() {
            return this.firstName + ' ' + this.lastName;
        }
        set fullName(fullName) {
            var nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }
        isAdult() {
            return this.age >= 18;
        }
    }   

    display(Person.adultAge); // 18

    let elf = new Person('elf', 'god', 29);

    elf.fullName = 'vamp god';
    
    elf.age = 33;

    display(elf.fullName);
    display(elf.isAdult()); // true

    // the getter wont run because is set to false
    // set the getter property to enumerable
    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});

    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age);

            this._enrolledCourse = [];
        }

        static fromPerson(person) {
            return new Student(person.firstName, person.lastName, person.age);
        }

        enroll(courseId){
            this._enrolledCourses.push(courseId);
        }
        getCourses() {
            return this.fullName + "'s enrolled courses are: " +
            this._enrolledCourses.join(', ');
        }
    }

    let josue = new Student('josh', 'ghost', 29);

    josue.enroll('CS101');
    display(josue);
    display(josue.getCourses());

    let josueStudent = Student.fromPerson(josue);
    display(josueStudent);

    
})();
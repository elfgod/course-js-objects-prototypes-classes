'use strict';

(function() {

    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        Object.defineProperty(this, 'fullName', {
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            enumerable: true
        });
    }
   
    Person.prototype.age = 29;

    let elf = new Person('elf', 'god');
    let yare = new Person('yare', 'diaz'); 
    
    // pointing the prototype to a complete new Object
    Person.prototype = { age: 18 };

    let josue = new Person('josue', 'gamer');

    display(Person.prototype);
    display(elf.age); // 29
    display(yare.age); // 29
    display(josue.age); // 18

    display(elf.__proto__.) // Person { }
    display(elf.__proto__.__proto__) // Object { }
    display(elf.__proto__.__proto__.__proto__) // null

    function Student(firstName, lastName, age) {
        // calling our Person functions in Student function
        Person.call(this, firstName, lastName, age);
        this._enrolledCourses = [];

        this.enroll = function(courseId) {
            this._enrolledCourses.push(courseId);
        };

        this.getCourses = function() {
            return this.fullName + "'s enrolled courses are: " +
            this._enrolledCourses.join(', ');
        };
    }
    // create a prototype inheritance chain with this 2 lines
    // if we execute new keyword it will execute the Person function
    // Object.create just creates a new Object with Person as i's prototypes
    // set the new Object as the Student function's prototype
    // display(Student.prototype.constructor);
    Student.prototype = Object.create(Person.prototype);
    // display(Student.prototype.constructor);
    // all prototypes has a constructor property
    Student.prototype.constructor = Student;
    // Static properties
    Student.fromPerson = function(person){
        return new Student(person.firstName, person.lastName, person.age);
    }

    let elf = new Student('elf', 'god', 29);

    display(elf); // Student object with values
    display(elf.__proto__) // Student prototype Object { } empty
    display(elf.__proto__.__proto__) // Person prototype

    elf.enroll('CS205');
    elf.enroll('MA101');
    elf.enroll('PS101');

    display(elf.getCourses());


})
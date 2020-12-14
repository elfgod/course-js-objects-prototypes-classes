'use strict';
(function() {

    display(Math.PI);
    // 3.141592653
    display(Math.max(2, 42, 29));
    // 42
    display(Math.round(29.6));
    // 30

    // this creates a new Date with current time
    let date = new Date();

    let date = new Date('2050,3,25,13,1,30, 50');
    display(date.toString());
    // mon Apr 25 2050 13:01:30     GMT-0600 (Mountain Daylight Time)

    let date = new Date('2050,3,25,13,1,30, 50');

    date.setMonth(5);
    
    display(date.toString());

    display(date.getFullYear());
    display(date.getMonth()); // Zero-based
    display(date.getDate());
    display(date.getHours());
    display(date.getMinutes());
    display(date.getSeconds());
    display(date.getMilliseconds());

    display(date.getUTCFullYear());
    display(date.getUTCMonth()); // Zero-based
    display(date.getUTCDate());
    display(date.getUTCHours());
    display(date.getUTCMinutes());
    display(date.getUTCSeconds());
    display(date.getUTCMilliseconds());

    // subtract dates
    let date1 = new Date('2050,3,25,13,1,30, 50');
    let date2 = new Date('2050,3,25,13,1,30, 55');

    display(date2 - date1); // 5 milliseconds

    





    
    
})();
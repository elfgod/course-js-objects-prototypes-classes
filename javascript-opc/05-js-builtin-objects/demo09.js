'use strict';
(function(){

    function checkPasswordComplexity(password) {
        let regex = new regex('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$');

        return regex.test(password);

    }

    display(checkPasswordComplexity('weak')); // false
    display(checkPasswordComplexity('Weak1')); // false
    display(checkPasswordComplexity('Strong1')); // true

    // shorthand syntax to create regular expressions
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // exec Regex function
    // instead of returning true or false it shows what it founds

    function findAlerts(logData) {
        let regex = /ERROR:/;

        return regex.exec(logData);
    }

    let logData = 'INFO:Ok;ERROR:Something broke;';
    let result = findAlerts(logData);

    display(result);

    // arrays in js  are objects and you can add properties to array
    // arrays has input property and a input property
    display(result);
    display(result[0]);
    // regex capture groups
    display(result.index);
    display(result.input);

    // ################

    function findAlerts(logData) {
        let regex = /ERROR:*?:/;

        return regex.exec(logData);
    }

    let logData = 'INFO:Ok;ERROR(HIGH):Something broke;';
    let result = findAlerts(logData);

    display(result);

    // ################ multipe errors
    function findAlerts(logData) {
        let regex = /ERROR:*?:/g;
        
        let result = regex.exec(logData);
        while(result !== null) {
            display(result[1]);
            display(result[2]);
            display('------------------');
            result = regex.exec(logData);
        }
    }

    let logData = 'INFO:Ok;ERROR(HIGH):Something broke;ERROR(LOW):Something fishy;';
    let res = findAlerts(logData);

    display(result);


})();
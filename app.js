
var utils = {

    convertToFahrenheight: function (a) {
        "use strict";
        a = document.getElementById('temperature').value;
        a = a * 1.8;
        a = a + 32;
        var answer = document.getElementById('display');
        answer.innerHTML = a + 'F';
    },
    convertToCelcius: function (a) {
        "use strict";
        a = document.getElementById('temperature').value;
        a = a - 32.0;
        a = a * 0.55;
        var answer = document.getElementById('display');
        answer.innerHTML = a + 'C';
    }

};
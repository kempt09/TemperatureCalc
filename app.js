/**
 * Created by Christopher on 2/4/16.
 */
function convertToFahrenheight(a) {
    "use strict";
    a = document.getElementById('fahrenheight').value;
    a = a * 1.8;
    a = a + 32;
    var answer = document.getElementById('displayFahrenheight');
    answer.innerHTML = a + 'F';
}

function convertToCelcius(a) {
    "use strict";
    a = document.getElementById('celcius').value;
    a = a - 32.0;
    a = a * 0.55;
    var answer = document.getElementById('displayCelcius');
    answer.innerHTML = a + 'C';
}

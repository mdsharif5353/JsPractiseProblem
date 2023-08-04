// Write a function that takes the hour as an input parameter. 
// And it will convert those hours to minutes and return minutes.


function hoursToMinute(hours) {
    var minutes = hours * 60;
    return minutes;
}

var hoursInput = 3;
var convertedMinute = hoursToMinute(hoursInput);

console.log(convertedMinute); // Output: 180

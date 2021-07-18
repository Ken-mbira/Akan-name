function show(show, hidden) {
    document.getElementById(show).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}

//Variable assign function
var assignValues = () => {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
}

//Gender checker
var genderChecker = () => {
    if (document.getElementById("male").checked) {
        var gender = male;
    } else if (document.getElementById("female").checked) {
        var gender = female;
    }
}

//Validation functions

//month validator
var monthValidator = () => {
    if (month > 12 || month < 1) {
        alert("Please enter a valid month number!")
    }
}

//date validator
var dateValidator = () => {
    if (year >= 2021 && month >= 7 && day > 18) {
        alert("Please enter a valid date! Prior than today's date.")
    }
}

//day validator
var dayValidator = () => {
    if (year % 4 === 0 && month === 2 && day > 29 || day < 1) {
        alert("Please enter valid days for February in a leap year!")
    } else if (month === 2 && day > 28 || day < 1) {
        alert("Please enter valid days for February in a non-leap year!")
    }
}
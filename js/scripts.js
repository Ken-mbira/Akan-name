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
    if (day < 1) {
        alert("Please enter a number of days greater than 1!")
    } else if (year % 4 === 0 && month === 2 && day > 29) {
        alert("Please enter valid days for February in a leap year!")
    } else if (month === 2 && day > 28) {
        alert("Please enter valid days for February in a non-leap year!")
    } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 && day > 31) {
        alert("Please enter a valid day response!")
    } else if (month === 4 || month === 6 || month === 9 || month === 11 && day > 30) {
        alert("Please enter a valid response!")
    }

}

//Formula to determine day of birth
var dayFinder = () => {
    var centuryDigits = parseInt(year.toString.slice(0, 2));
    var yearDigits = parseInt(year.toString.slice(2, 4));
    var dayNumber = (((centuryDigits / 4) - 2 * centuryDigits - 1) + ((5 * yearDigits / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
}

//Arrays 
var arrayFinder = () => {
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["AKosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
}

//index
var indexFinder = () => {
    if (dayNumber === 0) {
        var index = 6;
    } else {
        var index = dayNumber - 1;
    }
}

//final function

var finalFunction = () => {
    if (gender = male) {
        document.getElementById("jumbotron").textContent = "Hello, " + maleNames[index];
    } else if (gender = female) {
        document.getElementById("jumbotron").textContent = "Hello, " + femaleNames[index];
    }
}

var masterFunction = () => {
    assignValues();
    genderChecker();
    dateValidator();
    dayValidator();
    dayFinder();
    arrayFinder();
    indexFinder();
    finalFunction();

}
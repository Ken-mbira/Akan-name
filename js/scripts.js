function show(show, hidden) {
    document.getElementById(show).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}


//Male names
var maleAkanNames = [Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame]

//Female names
var femaleAkanNames = [Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama]


//variable former
var year = document.getElementById("year").value;
var month = document.getElementById("month").value;
var day = document.getElementById("day").value;
var gender = document.getElementByName("gender").value;

//gender generator
function genderChecker() {
    for (let gender of gender) {
        if (gender.checked) {
            return gender.value
        }
    }
}
let genderValue = genderChecker();
console.log(genderValue);

//Month validator
var monthValidator = () => {
    if (month < 1 || month > 12) {
        return false;
    } else {
        return true;
    }
}

//Day validator
var dayValidator = () => {
    if (year % 4 === 0) {
        if (month === 2 && (day > 29 || day < 1)) { return false } else { return true }
    } else {
        if (day > 31 || day < 1) {
            return false;
        }
    }
}

//Function to determine day of birth

let dayOfWeek = Math.round((((Number(year.slice(0, 2)) / 4) - 2 * Number(year.slice(0, 2)) - 1) +
    ((5 * Number(year.slice(2, 4)) / 4)) + ((26 * (month + 1) / 10)) + day) % 7);

//validation variables
var monthValid = monthValidator();
var dayValid = dayValidator();

//Days of the week
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Generating index value
if (dayOfWeek == 0) {
    var index = 6;
} else {
    index = dayOfWeek - 1;
};
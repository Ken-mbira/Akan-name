function show(show, hidden) {
    document.getElementById(show).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}


//Master function
var masterFunction = () => {
    // assign values
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;


    // get gender
    if (document.getElementById("male").checked) {
        var gender = "male";
    } else if (document.getElementById("female").checked) {
        var gender = "female";
    }


    //date validators
    if (month > 12 || month < 1) {
        alert("Please enter a valid month number!")
    } else if (year >= 2021 && month >= 7 && day > 18) {
        alert("Please enter a valid date! Prior of today's date.")
    } else if (day < 1) {
        alert("Please enter a number of days greater than 1!")
    } else if (year % 4 === 0 && month === 2 && day > 29) {
        alert("Please enter valid days for February in a leap year!")
    } else if (year % 4 !==0 && month === 2 && day > 28) {
        alert("Please enter valid days for February in a non-leap year!")
    } else if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && day > 31) {
        alert("Please enter a valid day response!")
    } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
        alert("Please enter a valid response!")
    }


    //Day of week calculator
    var CC = parseInt(year.toString().slice(0, 2));
    var YY = parseInt(year.toString().slice(2, 4));
    var MM = parseInt(month);
    var DD = parseInt(day);
    var dayNumber = Math.round((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);

    //Arrays
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["AKosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //index geneator
    if (dayNumber === 0) {
        var index = 6;
    } else {
        var index = dayNumber;
    }

    //Final function
    if (gender == "male") {
        document.getElementById("jumbotron").innerHTML = "Hello " + maleNames[index] + ". You were born on a " + dayNames[index] + ".";
    } else if (gender == "female") {
        document.getElementsById("jumbotron").innerHTML = "Hello " + femaleNames[index] + ". You were born on a " + dayNames[index] + ".";
    }


}
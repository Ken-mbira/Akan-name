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
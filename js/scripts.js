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
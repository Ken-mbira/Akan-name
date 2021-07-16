function show(show, hidden) {
    document.getElementById(show).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}
//define init function
const init = function() {
    document.getElementById("cancel").addEventListener("click", reset);
    document.getElementById("submit", send);
}








//event listener initialize
document.addEventListener("DOMContentLoaded", init);
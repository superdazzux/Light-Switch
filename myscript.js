var nam = prompt("Please enetr your name.", "name");
var today = new Date();
var hrs = today.getHours();
document.writeln("<b>");
document.writeln("<b>");
if (hrs <= 12) {
    document.write("Good Morning " + nam + '!');
} else if (hrs <= 18) {
    document.write("Good Afternoon " + nam + '!');
} else {
    document.write("Good Evening " + nam + '!');
    document.writeln("<br/>");
}
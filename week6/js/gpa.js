function getGrades(inputSelector) {
    const string = document.querySelector(inputSelector).value;
    const gradeArray = string.split(',');
    const grades = gradeArray.map((grade) => grade.trim().toUpperCase());
    console.log(grades);
    return grades;
}
function lookupGrade(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B'){
        points = 3;
    } else if (grade === 'C'){
        points = 2;
    } else if (grade === 'D'){
        points = 1;
    } else if (grade === 'F'){
        points = 0;
    }
    return points;
}
function calculateGpa(grades) {
    const gpaGrades = grades.map((grade)=> lookupGrade(grade));
    const gpaSum = gpaGrades.reduce(function(total, item) {
        return total + item;
    });
    const gpa = gpaSum / gpaGrades.length;
    return gpa.toFixed(2);
}
function outputGpa(gpa, selector) {
    const output = document.getElementById(selector);
    output.innerText = gpa;
}
function clickHandler() {
    const grades = getGrades("#grades");
    const gpaGrades = calculateGpa(grades);
    outputGpa(gpaGrades, "output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
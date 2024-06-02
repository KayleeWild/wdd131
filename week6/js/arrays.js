//  arrays.js
// Activity 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML
// Activity 2
const grades = ['A', 'B', 'A'];
function converter(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B'){
        points = 3;
    }
    return points;
}
const gpaGrades = grades.map(converter);
// Activity  3
const gpaSum = gpaGrades.reduce(function(total, item) {
    return total + item;
});
const gpa = gpaSum / gpaGrades.length;
// Activity 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const result = fruits.filter((fruit) => fruit.length > 6);
console.log(result);
// Activity 5
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);
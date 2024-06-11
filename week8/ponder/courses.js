const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1, 
            roomNum: "STC 353", 
            enrolled: 26, 
            days: "TTh", 
            instructor: "Bro T"
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A"
        },
    ],
    changeEnrollment: function (sectionNum, addOrDrop) {
        const number = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (number >= 0) {
            if (addOrDrop == "add") {
                this.sections[number].enrolled++;
            } else if (addOrDrop == "drop") {
                this.sections[number].enrolled --;
            }
            output(this.sections);
        }        
    }
};
function setNameAndNumber(course) {
    let name = document.querySelector("#courseName");
    let code = document.querySelector("#courseCode");
    name.textContent = course.name;
    code.textContent = course.code;
}
function output(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}
setNameAndNumber(aCourse);
output(aCourse.sections);
// Event listeners:
document.querySelector("#enrollStudent")
    .addEventListener("click", () => {
        let sectionInput = document.querySelector("#sectionNumber").value;
        aCourse.changeEnrollment(parseInt(sectionInput), "add")
    });
document.querySelector("#dropStudent")
    .addEventListener("click", () => {
        let sectionInput = document.querySelector("#sectionNumber").value;
        aCourse.changeEnrollment(parseInt(sectionInput), "drop")
    });
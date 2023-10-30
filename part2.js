// Part 2: Find the Student!
/*
document.getElementById("search-btn").addEventListener("click", (event) => {
    let studentName = document.getElementById("search-name").value;
    let searchStudent = students.filter((student) => student.name.includes(studentName));
    searchStudent.sort((a, b) => a.section - b.section);
    addDataToTbody(searchStudent);
})

function removeAllChild(theParent) {
    while (theParent.hasChildNodes()) {
        theParent.removeChild(theParent.firstChild)
    }
}

function addDataToTbody(students) {
    let tbody = document.getElementsByTagName("tbody")[0];
    removeAllChild(tbody);
    if (students.length) {
        for (let i = 0; i < students.length; i++) {
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdSection = document.createElement("td");
            tdName.innerHTML = students[i].name;
            tdSection.innerHTML = students[i].section;
            tr.appendChild(tdSection);
            tr.appendChild(tdName);
            tbody.appendChild(tr);
        }
        return true;
    }
    let tr = document.createElement("tr");
    let tdErorr = document.createElement("td");
    tdErorr.innerHTML = "No students were found";
    tdErorr.colSpan = "2";
    tr.appendChild(tdErorr);
    tbody.appendChild(tr);
    return false;
}
*/

document.getElementById("search-btn").addEventListener("click", (event) => {
    let studentName = document.getElementById("search-name").value;
    let searchStudent = students.filter((student) => student.name.includes(studentName));
    searchStudent.sort((a, b) => a.section - b.section);
    let tbodyHtml = "";
    if (searchStudent.length == 0) tbodyHtml += "<tr><td colspan=2>No students were found</td></tr>";
    else searchStudent.forEach(student => { tbodyHtml += `<tr><td>${student.section}</td><td>${student.name}</td></tr>` });
    document.getElementsByTagName("tbody")[0].innerHTML = tbodyHtml;
})
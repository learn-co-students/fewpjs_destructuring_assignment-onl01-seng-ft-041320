let studentObj = {studentName: "Chris", grade: 10}

let {studentName, grade} = studentObj;

function studentHTML ([student1, student2]){
    document.body.innerHTML += `
    <div>
    <p>Student 1: ${student1}</p>
    <p>Student1 ${student2}</p>
    </div>
    `
}

let name = "Chris"
let password = "test"

let configObj = {
    method: "POST",
    headers: '',
    body: JSON.stringify({
        name,
        password
    })
}
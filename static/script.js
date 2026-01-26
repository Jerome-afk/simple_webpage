const form = document.getElementById('studentForm');
const tableBody = document.getElementById('studentTableBody');

// Get student entries from file
let students = JSON.parse(localStorage.getItem('students')) || [];

function renderTable() {
    tableBody.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.reg}</td>
            <td>${student.phone}</td>
            <td>${student.school}</td>
            <td>${student.date}</td>
            `;
        tableBody.appendChild(row);
    });
}

renderTable(); // Dispalay on page load

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const student = {
        name: document.getElementById('name').value.trim(),
        age: document.getElementById('age').value,
        reg: document.getElementById('reg').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        school: document.getElementById('school').value.trim(),
        date: new Date().toLocaleDateString()
    };

    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    renderTable();

    form.reset();
});
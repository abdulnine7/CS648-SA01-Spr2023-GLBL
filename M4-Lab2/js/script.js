// CREATE AN ARRAY OF EMPLOYEES
let employees = [];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employeeData')) {
    employees = JSON.parse(localStorage.getItem('employeeData'));
  } else {
    // If no employee data is stored in localStorage, populate the employees array with some default data
    employees = [
      ['EMP-0001', 'Abdul Sheikh', '1234', 'abdul@example.com', 'Administrative'],
      ['EMP-0002', 'Surya Kumar', '5678', 'surya@example.com', 'Marketing'],
      ['EMP-0003', 'MS Dhoni', '2468', 'msd@example.com', 'Engineering'],
      ['EMP-0004', 'Ravi Kumar', '1357', 'ravi@example.com', 'Executive'],
      ['EMP-0005', 'Sachin Tendu', '9876', 'sach@example.com', 'Sales']
    ];
    localStorage.setItem('employeeData', JSON.stringify(employees));
  }
  

// GET DOM ELEMENTS
const form = document.querySelector('#addForm');
const empTable = document.querySelector('#empTable');
const empCount = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
console.log("Building grid at load...");
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.querySelector('#id').value;
    const name = document.querySelector('#name').value;
    const extension = document.querySelector('#extension').value;
    const email = document.querySelector('#email').value;
    const department = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = [id, name, extension, email, department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {

          // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
          const rowIndex = e.target.parentNode.parentNode.rowIndex;

          // REMOVE EMPLOYEE FROM ARRAY
          employees.splice(rowIndex - 1, 1);

          // BUILD THE GRID
          buildGrid();
        }
      }

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.querySelector('tbody').remove();

    // REBUILD THE TBODY FROM SCRATCH
    const tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let i = 0; i < employees.length; i++) {
    // REBUILDING THE ROW STRUCTURE
        const tr = document.createElement('tr');
        for (let j = 0; j < employees[i].length; j++) {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(employees[i][j]));
            tr.appendChild(td);
        }
        const td = document.createElement('td');
        td.innerHTML = '<a href="#" class="delete">&times;</a>';
        tr.appendChild(td);

    // BIND THE TBODY TO THE EMPLOYEE TABLE
        tbody.appendChild(tr);
        console.log("added child to tbody," + tr.innerHTML);
    }

    empTable.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${employees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("employees", JSON.stringify(employees));

};
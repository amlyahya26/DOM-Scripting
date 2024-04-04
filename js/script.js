
/*I apologize to you, Professor Zack. I encountered a malfunction in my laptop and was unable to test the code. 
I want to be on the right path. This assignment was new information for me.*/



// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let employeesTable = document.getElementById('employees')


// SET A COUNT letIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;
function addEmployee() {
  employeeCount++;

  updateEmployeeCount();
}

// Function to update the employee count display
function updateEmployeeCount() {
  const countElement = document.getElementById('employeeCount')
  countElement.innerText = `Employees (${employeeCount})`
}


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
// PREVENT FORM SUBMISSION
e.preventDefault() })

// GET THE VALUES FROM THE TEXT BOXES
    let newEmployees = document.getElementById('employees').value
    let employeeID 
    let employeeName
    let extension
    let email
    let department

    
// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
let selectedTable = document.getElementById('employeeTable'); 
let newRow = employeesTable.insertRow()


// INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

let deleteCell = newRow.insertCell()
deleteCell.innerHTML = '<button class="btn btn-dark delete-btn">Delete</button>'

let cellID = newRow.insertCell()
let cellName = newRow.insertCell()
let extensionCell = newRow.insertCell()
let emailCell = newRow.insertCell()
let departmentCell = newRow.insertCell()


// Increment employee count
employeeCount++;
 
// APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(employeeID))
    cellName.appendChild(document.createTextNode(employeeName))
    extensionCell.appendChild(document.createTextNode(extension))
    emailCell.appendChild(document.createTextNode(email))
    departmentCell.appendChild(document.createTextNode(department))

// CREATE THE DELETE BUTTON
 const deleteButton = document.createElement('button');
 deleteButton.innerText = 'Delete';
 // Add event listener for deleting the row when the button is clicked
 deleteButton.addEventListener('click', () => {
   employeeTable.deleteRow(newRow.rowIndex)
 });
 


// RESET THE FORM
addForm.reset()
// SET FOCUS BACK TO THE ID TEXT BOX
document.getElementById('id').focus()
// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
employeeCount++;
updateEmployeeCount()

// DELETE EMPLOYEE

const employeeTable = document.getElementById('employeeTable');

function deleteEmployeeRow(event) {
  const row = event.target.closest('tr')
  if (row) {
    if (confirm('Are you sure you want to delete this employee?')) {
      employeeTable.deleteRow(row.rowIndex);
      updateEmployeeCount() 
    }
  }
}

employeeTable.addEventListener('click', deleteEmployeeRow);
function addEmployee() {
  employeeCount++; 
  updateEmployeeCount()
}

function deleteEmployee() {
  employeeCount--; 
  updateEmployeeCount()
}

// Function to update the employee count display
function updateEmployeeCount() {
  let countElement = document.getElementById('employeeCount')
  countElement.textContent = employeeCount
}
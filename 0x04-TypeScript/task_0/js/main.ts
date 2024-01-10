// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "City A",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "City B",
  };
  
  // Create an array named studentsList containing the two variables
  const studentsList: Student[] = [student1, student2];
  
  // Render a table using Vanilla JavaScript
  document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
  
    // Create table headers
    const headers = ["First Name", "Location"];
    const headerRow = document.createElement("tr");
  
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(headerText));
      headerRow.appendChild(th);
    });
  
    table.appendChild(headerRow);
  
    // Append a new row for each student
    studentsList.forEach((student) => {
      const row = document.createElement("tr");
  
      // Extract and display the first name and location
      const firstNameCell = document.createElement("td");
      firstNameCell.appendChild(document.createTextNode(student.firstName));
      row.appendChild(firstNameCell);
  
      const locationCell = document.createElement("td");
      locationCell.appendChild(document.createTextNode(student.location));
      row.appendChild(locationCell);
  
      table.appendChild(row);
    });
  
    // Append the table to the body
    document.body.appendChild(table);
});

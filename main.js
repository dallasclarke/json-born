
// Below allows us to use data from JSON file. ".." Means json file is up one level.
const fs = require('fs');
const data = fs.readFileSync('../students.json', 'utf-8');
const obj = JSON.parse(data)

// Create function that takes index as argument.
// Return the JSON obj.students with function argument in square brackets to get student index.
const getStudentByIndex = function(index) {
  return obj.students[index]
};

// Create function with name as argument.
// Loop through the obj.students in JSON.
// Check using an if statement, if name argument is equal to a name in JSON file.
// If so return the studentName.
// Return -1. NOTE: No else statement is required here. 
const getStudentByName = function(name) {
  for (const studentName of obj.students) {
    if (name === studentName.name) {
      return studentName;
    } 
  }
  return -1;
}

// Create function taking in a name as an argument.
// Loop through JSON obj.
// Check if name equals to a name in JSON obj.
// If so, add 1 to their term by using ++
// Make a variable to start changes to the JSON file.
// Then use fs.writeFileSync with the JSON file name and variable dataChange
const graduateStudent = function(name) {
  for (studentTerm of obj.students) {
    if (name === studentTerm.name) {
       studentTerm.term++
    }
  }
  const dataChange = JSON.stringify(obj)
  fs.writeFileSync('../students.json', dataChange)
}






if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}

// Write your solution in this file!
const employee = {name: "Sam", streetAddress:"Kasa"}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }
  updateEmployeeWithKeyAndValue(employee,[streetAddress],'11 Broadway')

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
  
    return obj;
  }
  destructivelyUpdateEmployeeWithKeyAndValue(employee,[streetAddress], '12 Broadway')

function deleteFromEmployeeByKey(employee, key){
    var newEmployee = delete employee.key;
    return {
        ...newEmployee,
      };
}
deleteFromEmployeeByKey(employee,name)


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.key;
    employee
}

destructivelyDeleteFromEmployeeByKey(employee, name)
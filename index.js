// Write your solution in this file!
let employee = new Object();


  function updateEmployeeWithKeyAndValue(employee, key, value) {
   employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
   }
   return employee;
    
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value;
return employee;
  }

  function deleteFromEmployeeByKey(employee, key){
    employee = {
        name: "Sam",
        streetAddress: "11 Broadway",
    }

    delete employee.name;
    return employee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key){
              delete employee.name;
         return employee;
        }
       

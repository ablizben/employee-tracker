//DEPENDENCIES
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

//CREATING DATABASE CONNECTION
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Quito18!",
    database: "employer_trackerDB"
  });
  
connection.connect(function(err) {
    if (err) throw err;
    mainMenu();
  });
  
  function mainMenu() {
    inquirer
      .prompt({
        name: "mainMenu",
        type: "list",
        message: "What would you like to do?",
        choices: [
         "View All Employees",
         "View All Employees By Department",
         "View All Employees By Manager",
         "Add Employee",
         "Update Employee Role",
         "View All Roles",
         "Exit"
        ]
      })
      .then(function(answer) {
        switch (answer.mainMenu) {
        case "View All Employees":
          viewAllEmployees();
          break;
  
        case "View All Employees By Department":
          employeesByDept();
          break;
  
        case "View All Employees By Manager":
          employeesByMan();
          break;
  
        case "Add Employee":
          addEmployee();
          break;
  
        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "View All Roles":
            viewAllRoles();
            break;

        case "Exit":
          connection.end;
          break;
        }
      });
  }
  
  function viewAllEmployees() {
      var query = ""
      connection.query(query, function(err, res) {
        console.table(res);
          mainMenu();
        });
      }
      
    function employeesByDept() {
    var query = "SELECT * FROM department"
    connection.query(query, function(err, res) {
        console.table(res);
        mainMenu();
        });
    }

    function employeesByMan() {
        var query = ""
        connection.query(query, function(err, res) {
          console.table(res);
            mainMenu();
            });
        }
    
    function addEmployee() {
        var query = ""
        connection.query(query, function(err, res) {
          console.table(res);
            mainMenu();
            });
        }

    function updateEmployeeRole() {
        var query = ""
        connection.query(query, function(err, res) {
          console.table(res);
            mainMenu();
            });
        }
    
    function viewAllRoles() {
        var query = "SELECT * FROM role"
        connection.query(query, function(err, res) {
          console.table(res);
            mainMenu();
            });
        }
            
        
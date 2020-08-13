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
    database: "employee_trackerDB"
  });
  
connection.connect(function(err) {
    if (err) throw err;
    firstQuestion();
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
         "View All Roles"
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
        }
      });
  }
  
  function viewAllEmployees() {
      var query = ""
      connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].artist);
          }
          mainMenu();
        });
      }
      
    function employeesByDept() {
    var query = ""
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].artist);
        }
        mainMenu();
        });
    }

    function employeesByMan() {
        var query = ""
        connection.query(query, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].artist);
            }
            mainMenu();
            });
        }
    
    function addEmployee() {
        var query = ""
        connection.query(query, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].artist);
            }
            mainMenu();
            });
        }

    function updateEmployeeRole() {
        var query = ""
        connection.query(query, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].artist);
            }
            mainMenu();
            });
        }
    
    function viewAllRoles() {
        var query = ""
        connection.query(query, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].artist);
            }
            mainMenu();
            });
        }
            
        
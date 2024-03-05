// Define a nested object representing a company's employees and their departments
let company = {
    name: "TechCorp",
    departments: {
        engineering: {
            manager: "Alice",
            team: ["Bob", "Charlie", "David"]
        },
        marketing: {
            manager: "Eve",
            team: ["Frank", "Grace"]
        },
        finance: {
            manager: "Hank",
            team: ["Ivy", "Jack", "Kelly"]
        }
    }
};

// Write a function to print out the employees and their managers in each department
function printEmployeesAndManagers(company) {
    for (let department in company.departments) {
        console.log(`Department: ${department}`);
        console.log(`Manager: ${company.departments[department].manager}`);
        console.log("Team:");
        company.departments[department].team.forEach(employee => console.log(employee));
        console.log("--------------------");
    }
}
//company.departments[department].team accesses the array of employees for a specific department.
//forEach is a built-in method in JavaScript for arrays. It allows you to execute a provided function once for each element in the array, in order. 


// Test the function
printEmployeesAndManagers(company);

class Employee {
    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
    }

    get getName() {
        return `Name is: ${this.name}`
    }

    set changeName(newName) {
        this.name = newName;
        return this.name
    }

    get getAge() {
        return `Age is: ${this.age}`
    }

    set changeAge(newAge) {
        this.age = newAge;
        return this.age
    }

    get employeeSalaryInfo() {
        return `Employee's salary is: ${this.salary}`
    }

    set updateEmployeeSalary(newSalary) {
        this.salary = newSalary;
        return `New salary is: ${newSalary}`
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary)
        this.lang = lang
    }

    get employeeSalaryInfo() {
        return `Programmer's salary is: ${this.salary * 3}`
    }

}


const employeeOne = new Employee('Steve', 20, 2500);
const programmerOne = new Programmer('Evan', 30, 2500, ['c++', 'js']);
const programmerTwo = new Programmer('John', 23, 500, ['php', 'js', 'c#']);

// getting employee's salary
console.log(employeeOne.employeeSalaryInfo)

// setting employee's salary to the new value
employeeOne.updateEmployeeSalary = '1000';

// getting updated salary
console.log(employeeOne.employeeSalaryInfo)


// overridden get method of programmer's salary multiplied by 3
console.log(programmerOne.employeeSalaryInfo)
console.log(programmerTwo.employeeSalaryInfo)
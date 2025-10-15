// Polymorphism merupakan kemampuan sebuah object untuk memiliki banyak bentuk
// Polymorphism biasanya terjadi pada saat kita melakukan pewarisan class (Inheritance)
// Dimana sebuah class anak bisa memiliki banyak bentuk dari class induk nya

describe ('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {}
    }

    class Manager extends Employee {

    }

    class VicePresident extends Employee {

    }

    // contoh fungsi yang menerima parameter dengan tipe Employee
    // Dimana dengan polymorphism, kita bisa mengirimkan object dari class Employee, Manager, VicePresident
    // karena ketiga class tersebut adalah turunan dari class Employee

    function sayHello(employee: Employee): void {
        console.info(`Hello ${employee.name}`);
    }

    it('Should can use polymorphism', function() {
        // Dengan polymorphism, kita bisa membuat sebuah variable dengan tipe class induk
        // Namun object yang kita masukkan bisa dari class anak nya

        // ini adalah induk class Employee
        let employee: Employee = new Employee("Saeful");
        console.info(employee);

        // ini adalah class anak Manager yang merupakan turunan dari Employee
        employee = new Manager("Rohmat");
        console.info(employee);

        // ini adalah class anak VicePresident yang merupakan turunan dari Employee, 
        // tapi extends nya dari Manager
        employee = new VicePresident("Saeful");
        console.info(employee);
    })

    it('Should can use polymorphism with function', function() {
        sayHello(new Employee("Saeful"));
        sayHello(new Manager("Rohmat"));
        sayHello(new VicePresident("Saeful"));
    })
})
describe ('Method Overriding', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name:string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            console.info(`Good day ${name}, my name is ${this.name}, I am the manager here.`);
        }
    }

    it('Should can do method overriding', function() {
        const employee: Employee = new Employee("Saeful");
        employee.sayHello("Asep");

        const manager: Manager = new Manager("Umar");
        manager.sayHello("Asep");
    })

})
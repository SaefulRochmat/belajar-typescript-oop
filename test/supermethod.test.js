describe('super method', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHello(name) {
            super.sayHello(name);
            console.info(`Good day ${name}, my name is ${this.name}, I am the manager here.`);
        }
    }
    it('Should can call super method', function () {
        const employee = new Employee("Saeful");
        employee.sayHello("Asep");
        const manager = new Manager("Umar");
        manager.sayHello("Asep");
    });
});
export {};
//# sourceMappingURL=supermethod.test.js.map
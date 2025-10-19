describe('Method Overriding', () => {
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
            console.info(`Good day ${name}, my name is ${this.name}, I am the manager here.`);
        }
    }
    it('Should can do method overriding', function () {
        const employee = new Employee("Saeful");
        employee.sayHello("Asep");
        const manager = new Manager("Umar");
        manager.sayHello("Asep");
    });
});
export {};
//# sourceMappingURL=method.overriding.test.js.map
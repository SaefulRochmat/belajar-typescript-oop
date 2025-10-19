describe('Inheritance', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    class Director extends Manager {
        constructor(name, department, budget) {
            super(name, department);
            this.budget = budget;
        }
    }
    it('Should can use inheritance', function () {
        const employee = new Employee("Saeful");
        console.info(`Employee name: ${employee.name}`);
        const manager = new Manager("Asep", "IT");
        console.info(`Manager name: ${manager.name}, department: ${manager.department}`);
        const director = new Director("Umar", "Finance", 1000000);
        console.info(`Director name: ${director.name}, department: ${director.department}, budget: ${director.budget}`);
    });
});
export {};
//# sourceMappingURL=class.inheritance.test.js.map
describe('superconstructor', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    it('Should can use superconstructor', function () {
        const employee = new Employee("Asep", "IT");
        console.info(`Employee name: ${employee.name}, department: ${employee.department}`);
    });
});
export {};
//# sourceMappingURL=superconstructor.test.js.map
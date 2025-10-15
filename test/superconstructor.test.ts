describe ('superconstructor', () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }

    it('Should can use superconstructor', function() {
        const employee: Employee = new Employee("Asep", "IT");
        console.info(`Employee name: ${employee.name}, department: ${employee.department}`); 
    })
})
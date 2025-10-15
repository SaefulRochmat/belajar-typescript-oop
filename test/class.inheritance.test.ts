describe('Inheritance', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {
        department: string;
        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }

    class Director extends Manager {
        budget: number;
        constructor(name: string, department: string, budget: number) {
            super(name, department);
            this.budget = budget;
        }
    }
    it('Should can use inheritance', function() {
        const employee: Employee = new Employee("Saeful");
        console.info(`Employee name: ${employee.name}`);

        const manager: Manager = new Manager("Asep", "IT");
        console.info(`Manager name: ${manager.name}, department: ${manager.department}`);

        const director: Director = new Director("Umar", "Finance", 1000000);
        console.info(`Director name: ${director.name}, department: ${director.department}, budget: ${director.budget}`);
    })
})
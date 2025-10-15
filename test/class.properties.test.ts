describe ('Properties', () => {
    class Customer {
        readonly id: number;
        name: string = "Guest";
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHello(name: string): string {
            return `Hello ${name}, my name is ${this.name}`;
        }
    }
    it('Should can have properties', function() {
        const customer: Customer = new Customer(1, "Epul");
        customer.age = 20;
        console.info(`Customer id: ${customer.id}, name: ${customer.name}, age: ${customer.age}`);
    })

    it('Should can call method', function() {
        const customer: Customer = new Customer(1, "Epul");
        console.info(customer.sayHello("Asep"));
    })
})
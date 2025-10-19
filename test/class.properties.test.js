describe('Properties', () => {
    class Customer {
        constructor(id, name) {
            this.name = "Guest";
            this.id = id;
            this.name = name;
        }
        sayHello(name) {
            return `Hello ${name}, my name is ${this.name}`;
        }
    }
    it('Should can have properties', function () {
        const customer = new Customer(1, "Epul");
        customer.age = 20;
        console.info(`Customer id: ${customer.id}, name: ${customer.name}, age: ${customer.age}`);
    });
    it('Should can call method', function () {
        const customer = new Customer(1, "Epul");
        console.info(customer.sayHello("Asep"));
    });
});
export {};
//# sourceMappingURL=class.properties.test.js.map
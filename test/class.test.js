describe('Class', () => {
    class Customer {
        constructor() {
            console.info("Create new customer");
        }
    }
    class Order {
    }
    it('Should can create class', function () {
        const customer = new Customer();
        const order = new Order();
    });
    it('Should can create constructor', function () {
        new Customer();
    });
});
export {};
//# sourceMappingURL=class.test.js.map
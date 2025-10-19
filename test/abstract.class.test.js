/*
    Abstract Class
    - Abstract class adalah class yang tidak bisa di instansiasi, artinya kita tidak bisa membuat object dari class tersebut
    - Abstract class biasanya digunakan sebagai class induk, dimana class turunan harus mengimplementasikan semua abstract method yang ada di class induk
    - Abstract class bisa memiliki properti dan method biasa, namun juga bisa memiliki abstract method
    - Abstract method adalah method yang tidak memiliki implementasi, sehingga harus di implementasikan di class turunan
*/
describe("Abstract Class", () => {
    class Customer {
        constructor(id) {
            this.id = id;
        }
        hello() {
            console.info(`Hello, my name is ${this.name}`);
        }
    }
    class PremiumCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}, I am a premium customer`);
        }
    }
    it('Should support abstract class', function () {
        const customer1 = new PremiumCustomer(1, "Saeful");
        customer1.hello();
        customer1.sayHello("Asep");
    });
});
export {};
//# sourceMappingURL=abstract.class.test.js.map
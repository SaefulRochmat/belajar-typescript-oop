describe('Interface Inheritance', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('Should can use interface inheritance', function () {
        const person = new Person("Saeful");
        person.sayHello("Asep");
    });
});
export {};
//# sourceMappingURL=interface.inheritance.test.js.map
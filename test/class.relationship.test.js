describe('Class Relationship', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Costumer {
        constructor(person) {
            this.person = person;
        }
    }
    it('Should can create relationship between class', function () {
        const person = new Person("Saeful");
        console.info(`Person Name: ${person.name}`);
    });
});
export {};
//# sourceMappingURL=class.relationship.test.js.map
describe('Getter & Setter', () => {
    class Category {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return "No Name";
            }
        }
        set name(value) {
            if (value !== "") {
                this._name = value;
            }
        }
    }
    it('Should can use getter & setter', function () {
        const category = new Category();
        console.info(category.name);
        category.name = "Laptop";
        console.info(category.name);
        category.name = "";
        console.info(category.name);
    });
});
export {};
//# sourceMappingURL=class.getter.setter.test.js.map
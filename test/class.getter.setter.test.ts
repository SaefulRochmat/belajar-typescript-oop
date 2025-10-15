describe('Getter & Setter', () => {
    class Category {
        _name?: string;

        get name(): string {
            if(this._name) {
                return this._name;
            } else {
                return "No Name";
            }
        }

        set name(value: string) {
            if(value !== "") {
                this._name = value;
            }
        }
    }

    it('Should can use getter & setter', function() {
        const category: Category = new Category();
        console.info(category.name);

        category.name = "Laptop";
        console.info(category.name);

        category.name = "";
        console.info(category.name);
    })
})
describe('Visibility Class', function () {
    // Visibility di typeScript ada 3, yaitu public, private, dan protected
    class Counter {
        constructor() {
            // default visibility adalah public
            // properti dengan visibility private, hanya bisa diakses dari dalam class
            // prperti dengan visibility protected, hanya bisa diakses dari dalam class dan turunannya
            this.counter = 0;
        }
        increment() {
            this.counter++;
        }
        getCounter() {
            return this.counter;
        }
    }
    class DoubleCounter extends Counter {
        increment() {
            this.counter += 2; // tidak bisa mengakses counter karena visibilitynya private, tapi bisa di akses jika visibilitynya protected
        }
    }
    it('Should can access private', function () {
        const counter = new Counter();
        // counter.counter = 100; // error, karena counter adalah private
        counter.increment(); // bisa mengakses increment karena visibilitynya public
        counter.increment(); // bisa mengakses increment karena visibilitynya public
        counter.increment(); // bisa mengakses increment karena visibilitynya public
        console.info(counter.getCounter());
    });
    it('Should can access protected', function () {
        const counter = new DoubleCounter();
        // counter.counter = 100; // error, karena counter adalah protected
        counter.increment(); // bisa mengakses increment karena visibilitynya public
        counter.increment(); // bisa mengakses increment karena visibilitynya public
        counter.increment(); // bisa mengakses increment karena visibilitynya public
        console.info(counter.getCounter());
    });
});
export {};
//# sourceMappingURL=visibility.test.js.map
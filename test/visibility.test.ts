describe ('Visibility Class', function() {
    // Visibility di typeScript ada 3, yaitu public, private, dan protected
    class Counter {
        // default visibility adalah public
        public counter: number = 0;

        // method dengan visibility private, hanya bisa diakses dari dalam class
        private increment(): void  {
            this.counter++;
        }

        // method dengan visibility protected, hanya bisa diakses dari dalam class dan turunannya
        public getCounter(): number {
            return this.counter;
        }
    }

    it('Should can access private', function() {
        // Bisa diakses dari luar class, karena visibilitynya public
        const counter: Counter = new Counter();
        // counter.increment(); // error, karena increment adalah private
        counter.counter = 10; // bisa, karena counter adalah public
        console.info(counter.getCounter());
    })
})
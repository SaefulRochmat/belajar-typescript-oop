import { MathUtils } from '../src/mathUtils';
describe ('Namespace', () => {
    it('Should can create and use namespace', function() {
        console.info(`Value of PI: ${MathUtils.PI}`);
        console.info(`Sum of 1,2,3,4,5: ${MathUtils.sum(1,2,3,4,5)}`);
    })
})
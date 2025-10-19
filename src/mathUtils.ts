export namespace MathUtils {
    export const PI = 3.14;

    export function sum(...values: number[]): number {
        let total = 0; 
        for (const value of values) {
            total += value;
        }
        return total;
    }
}
import { getColorByNumber } from '../getColorByNumber';

describe('getColorByNumber', () => {
    describe('validation', () => {
        test('throws error for null', () => {
            expect(() => getColorByNumber(null as any)).toThrow('Number cannot be null or undefined');
        });

        test('throws error for undefined', () => {
            expect(() => getColorByNumber(undefined as any)).toThrow('Number cannot be null or undefined');
        });

        test('throws error for numbers below 0', () => {
            expect(() => getColorByNumber(-1)).toThrow('Number must be between 0 and 10');
            expect(() => getColorByNumber(-5)).toThrow('Number must be between 0 and 10');
        });

        test('throws error for numbers above 10', () => {
            expect(() => getColorByNumber(11)).toThrow('Number must be between 0 and 10');
            expect(() => getColorByNumber(100)).toThrow('Number must be between 0 and 10');
        });
    });

    describe('green range (>= 8)', () => {
        test('returns green for 8', () => {
            expect(getColorByNumber(8)).toBe('green');
        });

        test('returns green for numbers above 8', () => {
            expect(getColorByNumber(10)).toBe('green');
            expect(getColorByNumber(9.5)).toBe('green');
        });

        test('returns green for 8.01', () => {
            expect(getColorByNumber(8.01)).toBe('green');
        });
    });

    describe('yellow range (5 to 7.99)', () => {
        test('returns yellow for 5', () => {
            expect(getColorByNumber(5)).toBe('yellow');
        });

        test('returns yellow for 7.99', () => {
            expect(getColorByNumber(7.99)).toBe('yellow');
        });

        test('returns yellow for middle values', () => {
            expect(getColorByNumber(6)).toBe('yellow');
            expect(getColorByNumber(7.5)).toBe('yellow');
        });
    });

    describe('red range (< 5)', () => {
        test('returns red for 4.99', () => {
            expect(getColorByNumber(4.99)).toBe('red');
        });

        test('returns red for numbers below 5', () => {
            expect(getColorByNumber(3)).toBe('red');
            expect(getColorByNumber(0)).toBe('red');
            expect(getColorByNumber(1.5)).toBe('red');
        });
    });
});

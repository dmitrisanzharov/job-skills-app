import { mainDbIteration } from '../mainDbIteration';
import dbMock1 from '../__mocks__/mainDb.mock';
import dbMock2 from '../__mocks__/mainDb.mock2';

describe('mainDbIteration()', () => {
    it('should correctly process job entries', () => {
        const { finalObj, totalJobEntries, avgYears } = mainDbIteration(dbMock1);

        // --- total entries
        expect(totalJobEntries).toBe(6);
        expect(finalObj.totalJobEntries).toBe(0);

        // --- average years
        const expectedAvg = (8 + 6 + 5 + 5 + 5 + 5) / 6;
        expect(avgYears).toBe(expectedAvg);
        expect(finalObj.avgYearsOfExperience).toBe(expectedAvg);

        // --- work mode counters
        expect(finalObj.remote).toBe(1);
        expect(finalObj.hybrid).toBe(5);
        expect(finalObj.onSite).toBe(0);

        // --- hard skills
        const tsSkill = finalObj.hardSkills.find((h) => h.mainName === 'typescript');
        const htmlSkill = finalObj.hardSkills.find((h) => h.mainName === 'html');

        expect(tsSkill).toBeDefined();
        expect(htmlSkill).toBeDefined();

        // @ts-ignore
        expect(tsSkill.count).toBe(4);

        // @ts-ignore
        expect(htmlSkill.count).toBe(2);
    });

    it('should throw an error for a new skill without secondPart variation', () => {
        expect(() => {
            mainDbIteration(dbMock2);
        }).toThrow();
    });
});

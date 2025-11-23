import { mainDbIteration } from './mainDbIteration';
import mainDb from '../mainDb.mock';





describe('mainDbIteration()', () => {

    it('should correctly process job entries', () => {

        const { finalObj, totalJobEntries, avgYears } = mainDbIteration();

        // --- total entries
        expect(totalJobEntries).toBe(6);
        expect(finalObj.totalJobEntries).toBe(0); 
        // (you never set this field — might want to fix later!)

        // --- average years
        const expectedAvg = (8 + 6 + 5 + 5 + 5 + 5) / 6;
        expect(avgYears).toBe(expectedAvg);
        expect(finalObj.avgYearsOfExperience).toBe(expectedAvg);

        // --- work mode counters
        expect(finalObj.remote).toBe(1);
        expect(finalObj.hybrid).toBe(5);
        expect(finalObj.onSite).toBe(0);

        // --- hard skills
        const tsSkill = finalObj.hardSkills.find(h => h.mainName === 'typescript');
        const htmlSkill = finalObj.hardSkills.find(h => h.mainName === 'html');

        expect(tsSkill).toBeDefined();
        expect(htmlSkill).toBeDefined();

        // Typescript appears 4 times in your DB
        // 1) 'TypeScript'
        // 2) 'typescript | typescript.js'
        // 3) 'typescript'
        // 4) 'typescript | type script'
        // @ts-ignore
        expect(tsSkill.count).toBe(4);

        // variations should be added
        // @ts-ignore
        expect(tsSkill.subNames.sort()).toEqual(
            ['typescript', 'typescript.js', 'type script'].sort()
        );

        // HTML skill counts
        // 1) 'html'
        // 2) 'html5'
        // @ts-ignore
        expect(htmlSkill.count).toBe(2);

        // @ts-ignore
        expect(htmlSkill.subNames.sort()).toEqual(
            ['html', 'html5'].sort()
        );
    });
});

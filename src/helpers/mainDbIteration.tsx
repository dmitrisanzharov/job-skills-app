import { JobEntry } from '../types';

export type HardAndSoftSkillsArray = { mainName: string; count: number; subNames: string[]; meta?: string }[];

type FinalObjType = {
    totalJobEntries: number;
    avgYearsOfExperience: number;

    bachelorDegreeFinal: number;
    mastersDegreeFinal: number;

    remote: number;
    hybrid: number;
    onSite: number;

    hardSkills: HardAndSoftSkillsArray;
    softSkills: HardAndSoftSkillsArray;
};

type FunctionReturn = {
    finalObj: FinalObjType;
    totalJobEntries: number;
    avgYears: number;
};

export function mainDbIteration(mainDb: JobEntry[], hardSkillsArr: HardAndSoftSkillsArray): FunctionReturn {
    let finalObj: FinalObjType = {
        totalJobEntries: 0,
        avgYearsOfExperience: 0,

        bachelorDegreeFinal: 0,
        mastersDegreeFinal: 0,

        remote: 0,
        hybrid: 0,
        onSite: 0,

        hardSkills: hardSkillsArr || [],
        softSkills: []
    };

    // Calculate total job entries
    const totalJobEntries = mainDb.length;

    // average years of experience
    const totalYears = mainDb
        .filter((job): job is JobEntry & { yearsOfExperience: number } => job.yearsOfExperience !== null)
        .reduce((acc, job) => acc + job.yearsOfExperience, 0);
    const avgYears = totalYears / mainDb.length;
    finalObj.avgYearsOfExperience = avgYears;

    // education counts
    let bachelorDegreeCount = 0;
    let mastersDegreeCount = 0;

    mainDb.forEach((job: JobEntry) => {
        if (job.bachelorDegree) bachelorDegreeCount++;
        if (job.mastersDegree) mastersDegreeCount++;
    });

    finalObj.bachelorDegreeFinal = bachelorDegreeCount;
    finalObj.mastersDegreeFinal = mastersDegreeCount;

    // work mode counts
    let remote = 0;
    let hybrid = 0;
    let onSite = 0;

    mainDb.forEach((job: JobEntry) => {
        if (job.workMode === 'Remote') remote++;
        else if (job.workMode === 'Hybrid') hybrid++;
        else if (job.workMode === 'On-site') onSite++;
    });

    finalObj.remote = remote;
    finalObj.hybrid = hybrid;
    finalObj.onSite = onSite;

    // Calculate hard skills
    const hardSkills: HardAndSoftSkillsArray = finalObj.hardSkills;

    mainDb.forEach((job: JobEntry, jobIndex: number) => {
        let duplicateCheckArray: string[] = [];

        job.hardSkills.forEach((skill) => {
            const firstPart = skill.split('|')[0].trim().toLowerCase();
            const secondPart = skill.split('|')[1]?.trim().toLowerCase();

            // for skill to be NEW, it must NOT be part of any existing subNames
            const foundIndex = hardSkills.findIndex((hs) =>
                hs.subNames.some((sub) => sub.toLowerCase() === firstPart.toLowerCase())
            );
            const isFoundInSubNames = foundIndex !== -1;

            if (isFoundInSubNames) {
                // what skill it found from hardSkills
                const theHardSkillItemItFound = hardSkills[foundIndex];
                duplicateCheckArray.push(theHardSkillItemItFound.mainName);

                // do NOT count if already counted for this job
                const wasSkillAlreadyCountedForThisJob = duplicateCheckArray.filter(
                    (item) => item === theHardSkillItemItFound.mainName
                ).length;

                if (wasSkillAlreadyCountedForThisJob === 1) {
                    // skill found and not yet counted for this job
                    hardSkills[foundIndex].count += 1;
                } else {
                    console.log(`Skill "${theHardSkillItemItFound.mainName}" was already counted for this job.`);
                }
            }

            // is it truly a new skill, i.e. secondPart does not exist and it is not found in any subNames
            // here I have to manually add it to finalObj.hardSkills
            if (!isFoundInSubNames && !secondPart) {
                throw new Error(
                    `Company Name: ${job.companyName}, Job Skill: ${skill}, Object: ${JSON.stringify(mainDb[jobIndex])}`
                );
            }
        });
    });

    // final returns
    return { finalObj, totalJobEntries, avgYears };
}

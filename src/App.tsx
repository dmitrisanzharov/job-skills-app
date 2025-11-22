import React from 'react';
import { JobEntry } from './types';
import mainDb from './mainDb';

// MUI
import Box from '@mui/material/Box';
import { json } from 'stream/consumers';

type HardAndSoftSkillsArray = { mainName: string; count: number; subNames: string[] }[];

type FinalObjType = {
    totalJobEntries: number;
    avgYearsOfExperience: number;

    remote: number;
    hybrid: number;
    onSite: number;

    hardSkills: HardAndSoftSkillsArray;
    softSkills: HardAndSoftSkillsArray;
};

let finalObj: FinalObjType = {
    totalJobEntries: 0,
    avgYearsOfExperience: 0,

    remote: 0,
    hybrid: 0,
    onSite: 0,

    hardSkills: [],
    softSkills: []
};

// Calculate total job entries
const totalJobEntries = mainDb.length;

// average years of experience
const totalYears = mainDb.reduce((acc, job) => acc + job.yearsOfExperience, 0);
const avgYears = totalYears / mainDb.length;
finalObj.avgYearsOfExperience = avgYears;

// work mode counts
let remote = 0;
let hybrid = 0;
let onSite = 0;

mainDb.forEach((job) => {
    if (job.workMode === 'Remote') remote++;
    else if (job.workMode === 'Hybrid') hybrid++;
    else if (job.workMode === 'On-site') onSite++;
});

finalObj.remote = remote;
finalObj.hybrid = hybrid;
finalObj.onSite = onSite;

// Calculate hard skills
const hardSkills: HardAndSoftSkillsArray = finalObj.hardSkills;

mainDb.forEach((job, jobIndex) => {
    job.hardSkills.forEach((skill) => {

        const splitTheString = skill.split('|');
        console.log("splitTheString: ", splitTheString);
        const skillLower = skill.split('|')[0].trim().toLowerCase();
        console.log("skillLower: ", skillLower);
        const secondPart = skill.split('|')[1]?.trim().toLowerCase();
        console.log("secondPart: ", secondPart);

        // for skill to be NEW, it must NOT be part of any existing subNames
        const foundIndex = hardSkills.findIndex((hs) => hs.subNames.includes(skillLower));
        console.log("foundIndex: ", foundIndex);

        if (foundIndex !== -1) {

            // skill is a duplicate, so increase the count
            hardSkills[foundIndex].count += 1;


            if (secondPart){
                hardSkills[foundIndex].subNames.push(secondPart);
            }
            

        } else if (!hardSkills[foundIndex]?.subNames) {
            hardSkills.push({
                mainName: skillLower,
                count: 1,
                subNames: [skillLower]
            });
            
        } else {
            throw new Error('new skill found: ' + skillLower + ' in job index ' + JSON.stringify(mainDb[jobIndex]));
        }
    });
});

// REACT COMPONENT

function App() {
    console.log('============================');
    console.log('finalObj', finalObj?.hardSkills);

    return (
        <Box>
            <h1>Job Skills Analysis</h1>
            <p>Total Job Entries: {totalJobEntries}</p>
            <p>Average Years of Experience: {finalObj.avgYearsOfExperience.toFixed(2)}</p>
            <ul>
                <li>Remote: {(finalObj.remote / totalJobEntries) * 100}%</li>
                <li>Hybrid: {(finalObj.hybrid / totalJobEntries) * 100}%</li>
                <li>On-site: {(finalObj.onSite / totalJobEntries) * 100}%</li>
            </ul>

            <h2>Hard skills</h2>
            <p>{JSON.stringify(finalObj.hardSkills)}</p>
        </Box>
    );
}

export default App;

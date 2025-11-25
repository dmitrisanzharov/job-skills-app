import React, { useEffect } from 'react';
// MUI
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//
import { mainDbIteration } from '../../helpers/mainDbIteration';

// skills
import { seniorFrontEndSkills } from '../../consts/seniorFrontEndSkills';
import seniorFrontEndDb from '../../databases/seniorFrontEndDb';

// for tests
import { seniorFrontEndSkills_25112025 } from '../../helpers/__mocks__/seniorFrontEnd/seniorFrontEndSkills_25112025';
import mainDbTest from '../../helpers/__mocks__/seniorFrontEnd/mainDb.mock.duplicates';

// REACT COMPONENT

function SeniorFrontEndSkills() {
    const renderCount = React.useRef(0);
    renderCount.current += 1;
    console.log('render count', renderCount.current);

    const { finalObj, totalJobEntries, avgYears } = mainDbIteration(seniorFrontEndDb, seniorFrontEndSkills);
    const hardSkillsFinal = finalObj.hardSkills.filter((hs) => hs.count > (totalJobEntries * 0.2)).sort((a, b) => b.count - a.count);

    const testIfWorkModeHasAllEntries = (finalObj.remote + finalObj.hybrid + finalObj.onSite) === totalJobEntries;

    if (renderCount.current >= 2) {
        console.log('reloaded, cause too many renders');
        window.location.reload();
    }

    useEffect(() => {
        document.title = 'Skill Analysis';
    }, []);

    if(!testIfWorkModeHasAllEntries){
        throw new Error('DMITRIs CUSTOM ERROR: Work mode entry is missing from one of the jobs OR misspelled... find it and fix it!');
    }

    return (
        <Box>
            <h1>Job Skills Analysis</h1>
            <p>Total Job Entries: {totalJobEntries}</p>
            <p>Average Years of Experience: {avgYears.toFixed(0)}</p>
            <p>Bachelor: {finalObj.bachelorDegreeFinal} | {(finalObj.bachelorDegreeFinal / totalJobEntries * 100).toFixed(0)}%</p>
            <p>Masters: {finalObj.mastersDegreeFinal} | {(finalObj.mastersDegreeFinal / totalJobEntries * 100).toFixed(0)}%</p>
            <ul>
                <li>Remote: {finalObj.remote} | {((finalObj.remote / totalJobEntries) * 100).toFixed(0)}%</li>
                <li>Hybrid: {finalObj.hybrid} | {((finalObj.hybrid / totalJobEntries) * 100).toFixed(0)}%</li>
                <li>On-site: {finalObj.onSite} | {((finalObj.onSite / totalJobEntries) * 100).toFixed(0)}%</li>
            </ul>

            {/* MAIN JSON */}
            {/* <h3>{JSON.stringify(finalObj.hardSkills, null, 2)}</h3> */}

            <h2>Hard skills {'>= 20%'}</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <strong>Skill</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Demand (%)</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Count</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {hardSkillsFinal.map((skill, index) => {
                            const skillCount = skill.count;

                            return (
                                <TableRow key={index}>
                                    <TableCell>{skill.mainName}</TableCell>
                                    <TableCell>{((skillCount / totalJobEntries) * 100).toFixed(0)}%</TableCell>
                                    <TableCell>{skillCount}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default SeniorFrontEndSkills;

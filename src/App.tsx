import React from 'react';
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
import { mainDbIteration } from './helpers/mainDbIteration';
import mainDb from './mainDb';
import mainDbMock1 from './helpers/__mocks__/mainDb.mock';

// REACT COMPONENT

function App() {
    const { finalObj, totalJobEntries, avgYears } = mainDbIteration(mainDbMock1);

    return (
        <Box>
            <h1>Job Skills Analysis</h1>
            <p>Total Job Entries: {totalJobEntries}</p>
            <p>Average Years of Experience: {avgYears.toFixed(2)}</p>
            <ul>
                <li>Remote: {((finalObj.remote / totalJobEntries) * 100).toFixed(0)}%</li>
                <li>Hybrid: {((finalObj.hybrid / totalJobEntries) * 100).toFixed(0)}%</li>
                <li>On-site: {((finalObj.onSite / totalJobEntries) * 100).toFixed(0)}%</li>
            </ul>

            {/* MAIN JSON */}
            {/* <h3>{JSON.stringify(finalObj.hardSkills, null, 2)}</h3> */}

            <h2>Hard skills</h2>
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
                        {finalObj.hardSkills.map((skill, index) => {
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

export default App;

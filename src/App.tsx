import React from 'react';
// MUI
import Box from '@mui/material/Box';
import { mainDbIteration } from './helpers/mainDbIteration';


// REACT COMPONENT

function App() {
    
    const { finalObj, totalJobEntries, avgYears } = mainDbIteration();

    return (
        <Box>
            <h1>Job Skills Analysis</h1>
            <p>Total Job Entries: {totalJobEntries}</p>
            <p>Average Years of Experience: {avgYears.toFixed(2)}</p>
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

// src/App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';

// MUI imports
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// senior front end
import SeniorFrontEndSkillsUi from './pages/SeniorFrontEnd/SeniorFrontEndSkillsUi';
import CompaniesAnalyzedSeniorFrontEnd from './pages/SeniorFrontEnd/CompaniesAnalyzedSeniorFrontEnd';


const App: React.FC = () => {

    const seniorFrontEndDeveloperSkillsLink = '/';
    const companiesAnalyzedSeniorFrontEndLink = '/senior-front-end-companies-analyzed';

    return (
        <Box>
            <h3>
                Senior FrontEnd: 
            </h3>
            <ul>
                <li>
                    <Link to={companiesAnalyzedSeniorFrontEndLink}>Senior FrontEnd Companies Analyzed</Link>
                </li>
                <li>
                    <Link to={seniorFrontEndDeveloperSkillsLink}>Senior FrontEnd Skills Analysis</Link>
                </li>
            </ul>
            <hr />

            <Routes>
                <Route path={seniorFrontEndDeveloperSkillsLink} element={<SeniorFrontEndSkillsUi />} />
                <Route path={companiesAnalyzedSeniorFrontEndLink} element={<CompaniesAnalyzedSeniorFrontEnd />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Box>
    );
};

export default App;

// src/App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SkillAnalysis from './pages/SkillAnalysis';
import NotFound from './pages/NotFound';
import CompaniesAnalyzedSeniorFrontEnd from './pages/CompaniesAnalyzedSeniorFrontEnd';
// MUI imports
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const App: React.FC = () => {
    return (
        <Box>
            <h3>
                Senior FrontEnd: 
            </h3>
            <ul>
                <li>
                    <Link to='/companies-analyzed'>Senior FrontEnd Companies Analyzed</Link>
                </li>
                <li>
                    <Link to='/'>Senior FrontEnd Skills Analysis</Link>
                </li>
            </ul>
            <hr />

            <Routes>
                <Route path='/' element={<SkillAnalysis />} />
                <Route path='/companies-analyzed' element={<CompaniesAnalyzedSeniorFrontEnd />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Box>
    );
};

export default App;

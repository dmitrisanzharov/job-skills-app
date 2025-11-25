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
import  Typography  from '@mui/material/Typography';

const App: React.FC = () => {
    return (
        <Box>
          <Typography variant="h5" gutterBottom>
            Senior FrontEnd Job Market Analysis
          </Typography>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to='/companies-analyzed'>
                        <ListItemText primary='Senior FrontEnd Companies Analyzed' />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to='/'>
                        <ListItemText primary='Senior FrontEnd Skills Analysis' />
                    </ListItemButton>
                </ListItem>
            </List>
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

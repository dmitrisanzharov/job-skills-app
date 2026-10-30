// src/App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';

// MUI imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

// senior front end
import SeniorFrontEndSkillsUi from './pages/SeniorFrontEnd/SeniorFrontEndSkillsUi';
import CompaniesAnalyzedSeniorFrontEnd from './pages/SeniorFrontEnd/CompaniesAnalyzedSeniorFrontEnd';

const App: React.FC = () => {
    const path = window.location.pathname
    const seniorFrontEndDeveloperSkillsLink = '/';
    const companiesAnalyzedSeniorFrontEndLink = '/senior-front-end-companies-analyzed';
    const fullStackDeveloper = '/full-stack-developer';

    return (
        <Box>
            {/* MUI AppBar Navbar */}
            <AppBar position='static' style={{display: path === fullStackDeveloper ? 'none' : 'block'}}>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Full Stack
                    </Typography>

                    <Button color='inherit' component={Link} to={seniorFrontEndDeveloperSkillsLink}>
                        Skills
                    </Button>

                    <Button color='inherit' component={Link} to={companiesAnalyzedSeniorFrontEndLink}>
                        Companies Analyzed
                    </Button>
                </Toolbar>
            </AppBar>

            <Divider sx={{ my: 2 }} />

            {/* Routing */}
            <Routes>
                <Route path={seniorFrontEndDeveloperSkillsLink} element={<SeniorFrontEndSkillsUi />} />
                <Route path={companiesAnalyzedSeniorFrontEndLink} element={<CompaniesAnalyzedSeniorFrontEnd />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Box>
    );
};

export default App;

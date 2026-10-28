import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CompaniesAnalyzedSeniorFrontEnd from '../SeniorFrontEnd/SeniorFrontEndSkillsUi';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

type Props = {};

const Index: React.FC = (props: Props) => {

    const fullStackSkillsLink = '/full-stack-developer';
    const fullStackCompaniesAnalyzedLink = '/full-stack-developer-companies-analyzed';


    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Full Stack Developer
                    </Typography>

                    <Button color='inherit' component={Link} to={fullStackSkillsLink}>
                        Skills
                    </Button>

                    <Button color='inherit' component={Link} to={fullStackCompaniesAnalyzedLink}>
                        Companies Analyzed
                    </Button>
                </Toolbar>
            </AppBar>
            {/* <CompaniesAnalyzedSeniorFrontEnd /> */}
        </Box>
    );
};

export default Index;

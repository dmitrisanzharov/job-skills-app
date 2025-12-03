import React, { useEffect, useState, useMemo } from 'react';
// MUI
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

//
import { mainDbIteration } from '../../helpers/mainDbIteration';
import { skillMinPercentageToFilter, skillThatIWillNotTake } from '../../consts/globalVars';
import { getColorByNumber } from '../../helpers/getColorByNumber';

// skills
import { allFrontEndHardSkills } from '../../consts/allFrontEndHardSkills';
import seniorFrontEndDb_withFullStack from '../../databases/seniorFrontEndDb_withFullStack';
import seniorFrontEndDb_noFullStack from '../../databases/seniorFrontEndDb_noFullStack';

// for tests
import { seniorFrontEndSkills_25112025 } from '../../helpers/__mocks__/seniorFrontEnd/seniorFrontEndSkills_25112025';
import mainDbTest from '../../helpers/__mocks__/seniorFrontEnd/mainDb.mock.duplicates';
import Tab from '@mui/material/Tab';
import { count } from 'console';

// REACT COMPONENT

const SeniorFrontEndSkills: React.FC = () => {
    const [showNotTakingJobs, setShowNotTakingJobs] = useState(false);

    const fieldSetStyle = { border: '1px solid #ccc', borderRadius: 2, p: 2, mb: 3 };

    const { finalObj, totalJobEntries, avgYears } = useMemo(
        () => mainDbIteration(seniorFrontEndDb_noFullStack, allFrontEndHardSkills),
        []
    );
    // console.log('🚀 ~ SeniorFrontEndSkills ~ finalObj:', finalObj);

    const jobInterviewSkillObj = {
        mainName: 'Job Interview',
        count: totalJobEntries,
        subNames: ['Job Interview'],
        mySkillLevel: 3,
        meta: 'will do later, skip for now'
    };

    const hardSkillsFinal = [jobInterviewSkillObj, ...finalObj.hardSkills]
        .filter((hs) => hs.count > totalJobEntries * skillMinPercentageToFilter)
        .filter((hs) => (showNotTakingJobs ? true : !skillThatIWillNotTake.includes(hs.mainName)))
        .sort((a, b) => b.count - a.count);

    const testIfWorkModeHasAllEntries = finalObj.remote + finalObj.hybrid + finalObj.onSite === totalJobEntries;

    useEffect(() => {
        document.title = 'Skill Analysis';
    }, []);

    if (!testIfWorkModeHasAllEntries) {
        throw new Error(
            'DMITRIs CUSTOM ERROR: Work mode entry is missing from one of the jobs OR misspelled... find it and fix it!'
        );
    }

    return (
        <Box>
            <Box sx={{ mb: 3 }}>
                <Typography variant='h4'>Senior Front End Only</Typography>
                <Typography sx={{ mb: 2 }}>
                    Total Job Entries: {totalJobEntries} | Hard skills {`>= ${skillMinPercentageToFilter * 100}%`}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Switch
                        size='small'
                        checked={showNotTakingJobs}
                        onChange={(e) => setShowNotTakingJobs(e.target.checked)}
                    />

                    <Typography variant='caption'>hide skills not taking</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
                <FormControl component='fieldset' sx={fieldSetStyle}>
                    <FormLabel component='legend'>Education & Experience</FormLabel>

                    <Typography>Average Years of Experience: {avgYears.toFixed(0)}</Typography>

                    <Typography>
                        Bachelor: {finalObj.bachelorDegreeFinal} |{' '}
                        {((finalObj.bachelorDegreeFinal / totalJobEntries) * 100).toFixed(0)}%
                    </Typography>

                    <Typography>
                        Masters: {finalObj.mastersDegreeFinal} |{' '}
                        {((finalObj.mastersDegreeFinal / totalJobEntries) * 100).toFixed(0)}%
                    </Typography>
                </FormControl>

                <FormControl component='fieldset' sx={fieldSetStyle}>
                    <FormLabel component='legend'>WorkType</FormLabel>

                    <Box component='ul' sx={{ pl: 3, m: 0 }}>
                        <Typography>
                            Remote: {finalObj.remote} | {((finalObj.remote / totalJobEntries) * 100).toFixed(0)}%
                        </Typography>

                        <Typography>
                            Hybrid: {finalObj.hybrid} | {((finalObj.hybrid / totalJobEntries) * 100).toFixed(0)}%
                        </Typography>

                        <Typography>
                            On-site: {finalObj.onSite} | {((finalObj.onSite / totalJobEntries) * 100).toFixed(0)}%
                        </Typography>
                    </Box>
                </FormControl>
            </Box>

            {/* MAIN JSON */}
            {/* <h3>{JSON.stringify(finalObj.hardSkills, null, 2)}</h3> */}

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: 100 }}>
                                <strong>My Skill Level</strong>
                            </TableCell>
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
                            const skillLevel = skill.mySkillLevel;
                            const skillLevelColor =
                                skillLevel === 0 || skillLevel ? getColorByNumber(skillLevel) : null;
                            const hasMetaInfo = !!skill.meta;

                            return (
                                <TableRow key={index}>
                                    <TableCell sx={{ backgroundColor: skillLevelColor }}>{skillLevel}</TableCell>
                                    <TableCell>
                                        {' '}
                                        {hasMetaInfo ? (
                                            <Tooltip title={skill.meta} arrow>
                                                <span>
                                                    {skill.mainName} <InfoOutlineIcon fontSize='small' />
                                                </span>
                                            </Tooltip>
                                        ) : (
                                            skill.mainName
                                        )}
                                    </TableCell>
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
};

export default SeniorFrontEndSkills;

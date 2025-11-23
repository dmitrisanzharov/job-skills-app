import React, { useEffect } from 'react';
import mainDb from '../mainDb';
import dayjs from 'dayjs';

// MUI
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {};

const CompaniesAnalyzed: React.FC<Props> = () => {
    useEffect(() => {
        document.title = 'Companies Analyzed';
    }, []);

    return (
        <Box>
            <h3>Companies Analyzed: {mainDb.length}</h3>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <strong>Date Created</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Company Name</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Job Title</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mainDb.map((job, index) => (
                            <TableRow key={index}>
                                <TableCell>{dayjs(job.dateCreated).format('DD-MMM-YYYY')}</TableCell>
                                <TableCell>{job.companyName}</TableCell>
                                <TableCell>{job.jobTitle}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default CompaniesAnalyzed;

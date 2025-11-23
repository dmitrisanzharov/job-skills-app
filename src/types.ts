export type JobEntry = {
    dateCreated: number; // epoch timestamp for 'now'
    companyName: string;
    jobTitle: string;
    workMode: 'Remote' | 'On-site' | 'Hybrid';
    yearsOfExperience: number;
    bachelorDegree: boolean;
    mastersDegree: boolean;
    hardSkills: string[];
    softSkills: string[];
};

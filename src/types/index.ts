export type JobEntry = {
    dateCreated: number; // epoch timestamp for 'now'
    companyName: string;
    jobTitle: string;
    workMode: 'Remote' | 'On-site' | 'Hybrid';
    yearsOfExperience: number | null;
    bachelorDegree: boolean;
    mastersDegree: boolean;
    compensationRange?: number | number[] | null;
    hardSkills: string[];
    softSkills: string[];
};

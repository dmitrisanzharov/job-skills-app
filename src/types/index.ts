export type JobEntry = {
    dateCreated: number; // epoch timestamp for 'now'
    companyName: string;
    jobTitle: string;
    workMode: 'Remote' | 'On-site' | 'Hybrid';
    yearsOfExperience: number | null;
    bachelorDegree: boolean; // false if NULL
    mastersDegree: boolean; // false if NULL
    compensationRange?: number | number[] | null;
    hardSkills: string[];
    softSkills: string[];
};

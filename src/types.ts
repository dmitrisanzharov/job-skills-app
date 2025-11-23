export type JobEntry = {
    dateCreated: number; // epoch timestamp for 'now'
    companyName: string;
    jobTitle: string;
    workMode: 'Remote' | 'On-site' | 'Hybrid';
    yearsOfExperience: number;
    educationRequiredString: string;
    hardSkills: string[];
    softSkills: string[];
};
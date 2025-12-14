## Explainer video on how to use the app
- https://youtu.be/eY3LVqJmZSE

## What do employers call the skill? 
- push ALL keywords into the array
- the highest 'mentioned' word becomes the 'main word'
- e.g. I call it: 'typescript', but employers might call it 'TypeScript' ... so this should be my main word in CV

## Hierarchy
Software Engineer → Senior Software Engineer → Staff Engineer → Principal Engineer → Distinguished Engineer / Architect

## Quick 'names' / jumping to a specific location in 'all skills'
 // main security
 generally I have 'main something' ... cause there are a LOT of 'testing', so I can jump to main JSON for 'testing' via: "main testing" keyword


 ## JSON extract skills prompt
 I will give you a job post, can you extract all the skills and keywords that describe skills and convert it into this JSON format that has this type: export type JobEntry = { dateCreated: number; // epoch timestamp for 'now' companyName: string; jobTitle: string; workMode: 'Remote' | 'On-site' | 'Hybrid'; yearsOfExperience: number | null; bachelorDegree: boolean; // false if NULL mastersDegree: boolean; // false if NULL compensationRange?: number | number[] | null; hardSkills: string[]; softSkills: string[]; }; ... here is an example of json:     {
        dateCreated: 1765724428000,
        companyName: 'Bounce Digital',
        jobTitle: 'Senior Software Engineer (Frontend-Leaning)',
        workMode: 'On-site',
        yearsOfExperience: null,
        bachelorDegree: null,
        mastersDegree: false,
        compensationRange: [100000, 130000],
        hardSkills: [
            'TypeScript',
            'React',
            'Frontend architecture',
            'UI patterns',
            'End-to-end development',
            'High-quality code',
            'maintainable code',
            'Product-focused development',
            'Customer-centric UX design'
        ],
        softSkills: [
            'Ownership mentality',
            'Pragmatism',
            'Bias to action',
            'Product mindset',
            'Collaboration and in-person teamwork',
            'High standards for UX and code quality',
            'Startup mentality'
        ]
    }...no need to make CONST out if, just JSON, so I can copy and paste ... is that ok? 
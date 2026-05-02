export const skillMinPercentageToFilter: number = 0.1;

// remove skills that I will not take into account
// cloud platforms = AWS covers this so remove

const skillsThatIRemovedWithExplainer: { skillName: string; reason: string }[] = [
    // temporary disabled
    // { skillName: 'Job Interview', reason: 'I will not take into account skills related to job interviews' },
    { skillName: 'ui/ux', reason: 'temporary disabled as of 9-Apr-2026, can easily BS that I have it' },
    { skillName: 'accessibility', reason: 'temporary disabled as of 9-Apr-2026, can easily BS that I have it' },
    { skillName: 'Security', reason: 'temporary disabled as of 9-Apr-2026, unlikely to be needed' },
    { skillName: 'aws', reason: 'temporary disabled as of 2-May-2026, aws too long, unlikely will need' },
    { skillName: 'monitoring tools', reason: 'can learn on the job' },

    // not taking at all
    { skillName: 'angular', reason: 'React focus' },
    { skillName: 'vue', reason: 'React focus' },
    { skillName: 'playwright', reason: 'Cypress covers this' },
    { skillName: 'vite', reason: 'Webpack focus' },
    { skillName: 'cloud platforms', reason: 'AWS covers this already' }
];

export const skillThatIWillNotTake: string[] = skillsThatIRemovedWithExplainer.map((skill) => skill.skillName);

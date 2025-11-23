import { mainDbIteration } from '../mainDbIteration';
import mainDb from '../__mocks__/mainDb.mock.duplicates'; // ⬅️ adjust this path to wherever your DB lives

describe('mainDbIteration', () => {
    it('produces the expected final object for the given mainDb', () => {
        const { finalObj, totalJobEntries, avgYears } = mainDbIteration(mainDb);

        // Sanity checks
        expect(totalJobEntries).toBe(mainDb.length);
        expect(avgYears).toBe(6);

        const expectedFinalObj = {
            totalJobEntries: 0,
            avgYearsOfExperience: 6,

            remote: 2,
            hybrid: 2,
            onSite: 0,

            hardSkills: [
                {
                    mainName: 'typescript',
                    count: 3,
                    subNames: ['TypeScript', 'typescript', 'typescript.js', 'type script']
                },
                {
                    mainName: 'html',
                    count: 3,
                    subNames: ['html', 'html5']
                },
                {
                    mainName: 'css',
                    count: 3,
                    subNames: ['css', 'css3']
                },
                {
                    mainName: 'react',
                    count: 4,
                    subNames: ['react', 'react.js', 'reactjs', 'react js']
                },
                {
                    mainName: 'angular',
                    count: 0,
                    subNames: ['angular', 'angular.js', 'angularjs', 'angular js']
                },
                {
                    mainName: 'vue',
                    count: 0,
                    subNames: ['vue', 'vue.js', 'vuejs', 'vue js']
                },
                {
                    mainName: 'node.js',
                    count: 2,
                    subNames: ['node.js', 'nodejs', 'node js', 'node']
                },
                {
                    mainName: 'react class components',
                    count: 2,
                    subNames: ['react class components', 'react class component']
                },
                {
                    mainName: 'react functional components',
                    count: 2,
                    subNames: ['react functional components', 'react functional component']
                },
                {
                    mainName: 'react hooks',
                    count: 2,
                    subNames: ['react hooks', 'react hook']
                },
                {
                    mainName: 'redux',
                    count: 0,
                    subNames: ['redux']
                },
                {
                    mainName: 'state management tools',
                    count: 2,
                    subNames: [
                        'state management tools',
                        'state management tool',
                        'State management',
                        'State management for loading/skeleton/error'
                    ]
                },
                {
                    mainName: 'SaaS experience',
                    count: 1,
                    subNames: ['SaaS experience', 'saas experience']
                },
                {
                    mainName: 'cloud platforms',
                    count: 1,
                    subNames: ['cloud platforms']
                },
                {
                    mainName: 'pixel-perfect',
                    count: 1,
                    subNames: ['pixel-perfect ui implementation', 'pixel-perfect ui']
                },
                {
                    mainName: 'subscription management',
                    count: 1,
                    subNames: ['subscription management']
                },
                {
                    mainName: 'access auditing',
                    count: 1,
                    subNames: ['access auditing']
                },
                {
                    mainName: 'fintech knowledge',
                    count: 1,
                    subNames: ['fintech knowledge']
                },
                {
                    mainName: 'javascript',
                    count: 1,
                    subNames: ['javascript']
                },
                {
                    mainName: 'next.js',
                    count: 2,
                    subNames: ['next.js']
                },
                {
                    mainName: 'rest api',
                    count: 1,
                    subNames: ['rest apis', 'rest api']
                },
                {
                    mainName: 'responsive design',
                    count: 2,
                    subNames: ['responsive design']
                },
                {
                    mainName: 'mobile first',
                    count: 1,
                    subNames: ['mobile-first development', 'mobile first development', 'mobile first']
                },
                {
                    mainName: 'jest',
                    count: 1,
                    subNames: ['jest']
                },
                {
                    mainName: 'cypress',
                    count: 1,
                    subNames: ['cypress']
                },
                {
                    mainName: 'webpack',
                    count: 1,
                    subNames: ['webpack']
                },
                {
                    mainName: 'babel',
                    count: 0,
                    subNames: ['babel']
                },
                {
                    mainName: 'graphql',
                    count: 0,
                    subNames: ['graphql']
                },
                {
                    mainName: 'docker',
                    count: 1,
                    subNames: ['docker']
                },
                {
                    mainName: 'kubernetes',
                    count: 0,
                    subNames: ['kubernetes']
                },
                {
                    mainName: 'ci/cd',
                    count: 1,
                    subNames: ['ci/cd', 'continuous integration', 'continuous deployment', 'CI/CD pipelines']
                },
                {
                    mainName: 'agile',
                    count: 1,
                    subNames: ['agile methodologies', 'agile methodology', 'agile development']
                },
                {
                    mainName: 'playwright',
                    count: 2,
                    subNames: ['playwright']
                },
                {
                    mainName: 'github copilot',
                    count: 1,
                    subNames: ['github copilot']
                },
                {
                    mainName: 'claude code',
                    count: 1,
                    subNames: ['claude code']
                },
                {
                    mainName: 'cursor',
                    count: 1,
                    subNames: ['cursor']
                },
                {
                    mainName: 'web performance',
                    count: 3,
                    subNames: ['web performance', 'performance optimization', 'Performance tooling', 'webpagetest']
                },
                {
                    mainName: 'styled components',
                    count: 1,
                    subNames: ['styled components']
                },
                {
                    mainName: 'storybook',
                    count: 2,
                    subNames: ['storybook']
                },
                {
                    mainName: 'monorepos',
                    count: 1,
                    subNames: ['monorepos']
                },
                {
                    mainName: 'design systems',
                    count: 2,
                    subNames: ['design systems']
                },
                {
                    mainName: 'accessibility',
                    count: 2,
                    subNames: ['accessibility']
                },
                {
                    mainName: 'design patterns',
                    count: 0,
                    subNames: ['design patterns']
                },
                {
                    mainName: 'testing',
                    count: 0,
                    subNames: ['testing']
                },
                {
                    mainName: 'frontend architecture',
                    count: 1,
                    subNames: ['frontend architecture']
                },
                {
                    mainName: 'git',
                    count: 2,
                    subNames: ['git']
                },
                {
                    mainName: 'jira',
                    count: 1,
                    subNames: ['jira']
                },
                {
                    mainName: 'confluence',
                    count: 1,
                    subNames: ['confluence']
                },
                {
                    mainName: 'ui/ux',
                    count: 0,
                    subNames: ['ui/ux']
                },
                {
                    mainName: 'no designer',
                    count: 1,
                    subNames: ['no designer', 'ui/ux design without ux support']
                },
                {
                    mainName: 'data-heavy interfaces',
                    count: 1,
                    subNames: ['data-heavy interfaces']
                },
                {
                    mainName: 'flutterflow',
                    count: 1,
                    subNames: ['flutterflow']
                },
                {
                    mainName: 'streamlit',
                    count: 1,
                    subNames: ['streamlit']
                },
                {
                    mainName: 'svelte',
                    count: 1,
                    subNames: ['svelte', 'sveltekit']
                },
                {
                    mainName: 'component libraries',
                    count: 1,
                    subNames: ['component libraries']
                },
                {
                    mainName: 'theming',
                    count: 1,
                    subNames: ['tokens and theming', 'tokens', 'theming']
                },
                {
                    mainName: 'figma',
                    count: 1,
                    subNames: ['figma', 'Figma to production UI']
                },
                {
                    mainName: 'animations',
                    count: 1,
                    subNames: ['animations']
                },
                {
                    mainName: 'micro-interactions',
                    count: 1,
                    subNames: ['micro-interactions']
                },
                {
                    mainName: 'framer motion',
                    count: 1,
                    subNames: ['framer motion']
                },
                {
                    mainName: 'gsap',
                    count: 1,
                    subNames: ['gsap']
                },
                {
                    mainName: 'aria',
                    count: 1,
                    subNames: ['aria']
                },
                {
                    mainName: 'keyboard support',
                    count: 1,
                    subNames: ['keyboard support']
                },
                {
                    mainName: 'color contrast standards',
                    count: 1,
                    subNames: ['color contrast standards']
                },
                {
                    mainName: 'container queries',
                    count: 1,
                    subNames: ['container queries']
                },
                {
                    mainName: 'css grid',
                    count: 1,
                    subNames: ['css grid']
                },
                {
                    mainName: 'flexbox',
                    count: 1,
                    subNames: ['flexbox']
                },
                {
                    mainName: 'css custom properties',
                    count: 1,
                    subNames: ['css custom properties']
                },
                {
                    mainName: 'tailwind',
                    count: 1,
                    subNames: ['tailwind css', 'tailwind']
                },
                {
                    mainName: 'shadcn/ui',
                    count: 1,
                    subNames: ['shadcn/ui']
                },
                {
                    mainName: 'bundle size optimization',
                    count: 1,
                    subNames: ['bundle size optimization']
                },
                {
                    mainName: 'code splitting',
                    count: 1,
                    subNames: ['code splitting']
                },
                {
                    mainName: 'hydration strategies',
                    count: 1,
                    subNames: ['hydration strategies']
                },
                {
                    mainName: 'caching strategies',
                    count: 1,
                    subNames: ['caching strategies']
                },
                {
                    mainName: 'virtualization',
                    count: 1,
                    subNames: ['virtualization']
                },
                {
                    mainName: 'react query',
                    count: 1,
                    subNames: ['react query']
                },
                {
                    mainName: 'lazy loading',
                    count: 0,
                    subNames: ['lazy loading']
                },
                {
                    mainName: 'swr',
                    count: 1,
                    subNames: ['swr']
                },
                {
                    mainName: 'digital wallets',
                    count: 1,
                    subNames: ['wallet integrations', 'WalletConnect']
                },
                {
                    mainName: 'injected providers',
                    count: 1,
                    subNames: ['injected providers']
                },
                {
                    mainName: 'on-chain data rendering',
                    count: 1,
                    subNames: ['on-chain data rendering']
                },
                {
                    mainName: 'rpc/indexer integration',
                    count: 1,
                    subNames: ['rpc/indexer integration']
                },
                {
                    mainName: 'testing best practices',
                    count: 1,
                    subNames: ['testing best practices']
                },
                {
                    mainName: 'ci checks',
                    count: 1,
                    subNames: ['ci checks']
                },
                {
                    mainName: 'documentation',
                    count: 1,
                    subNames: ['documentation']
                },
                {
                    mainName: 'ui refactoring',
                    count: 1,
                    subNames: ['ui refactoring']
                },
                {
                    mainName: 'testing library',
                    count: 1,
                    subNames: ['testing library']
                },
                {
                    mainName: 'chromatic',
                    count: 1,
                    subNames: ['chromatic']
                },
                {
                    mainName: 'visual regression testing',
                    count: 1,
                    subNames: ['visual regression testing']
                },
                {
                    mainName: 'style dictionary',
                    count: 1,
                    subNames: ['style dictionary']
                },
                {
                    mainName: 'lighthouse',
                    count: 1,
                    subNames: ['lighthouse']
                },
                {
                    mainName: 'perfetto',
                    count: 1,
                    subNames: ['perfetto']
                },
                {
                    mainName: 'sentry',
                    count: 1,
                    subNames: ['sentry']
                },
                {
                    mainName: 'datadog',
                    count: 1,
                    subNames: ['datadog']
                },
                {
                    mainName: 'new relic',
                    count: 1,
                    subNames: ['new relic']
                },
                {
                    mainName: 'i18n',
                    count: 1,
                    subNames: ['i18n']
                },
                {
                    mainName: 'rtl support',
                    count: 1,
                    subNames: ['rtl support']
                },
                {
                    mainName: 'webgl',
                    count: 1,
                    subNames: ['webgl']
                },
                {
                    mainName: 'canvas',
                    count: 1,
                    subNames: ['canvas']
                },
                {
                    mainName: 'svg',
                    count: 1,
                    subNames: ['svg']
                },
                {
                    mainName: 'monitoring tools',
                    count: 1,
                    subNames: ['monitoring tools']
                }
            ],
            softSkills: []
        };

        expect(finalObj).toStrictEqual(expectedFinalObj);
    });
});

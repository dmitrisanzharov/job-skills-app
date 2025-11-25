import { mainDbIteration } from '../mainDbIteration';
import mainDb from '../__mocks__/seniorFrontEnd/mainDb.mock.duplicates';
import { seniorFrontEndSkills_25112025 } from '../__mocks__/seniorFrontEnd/seniorFrontEndSkills_25112025';

describe('mainDbIteration', () => {
    it('produces the expected final object for the given mainDb', () => {
        const { finalObj, totalJobEntries, avgYears } = mainDbIteration(mainDb, seniorFrontEndSkills_25112025);
        // Sanity checks
        expect(totalJobEntries).toBe(mainDb.length);
        expect(avgYears).toBe(6);

        const expectedFinalObj = {
            totalJobEntries: 0,
            avgYearsOfExperience: 6,
            bachelorDegreeFinal: 0,
            mastersDegreeFinal: 0,
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
                    subNames: ['redux', 'Redux.js']
                },
                {
                    mainName: 'state management tools',
                    count: 2,
                    subNames: [
                        'state management tools',
                        'state management tool',
                        'State management',
                        'State management for loading/skeleton/error',
                        'State management systems',
                        'State management libraries'
                    ]
                },
                {
                    mainName: 'SaaS experience',
                    count: 1,
                    subNames: ['SaaS experience', 'saas experience', 'saas product development']
                },
                {
                    mainName: 'cloud platforms',
                    count: 1,
                    subNames: ['cloud platforms', 'Cloud services']
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
                    subNames: ['javascript', 'JavaScript (ES6+)']
                },
                {
                    mainName: 'next.js',
                    count: 2,
                    subNames: ['next.js']
                },
                {
                    mainName: 'rest api',
                    count: 1,
                    subNames: ['rest apis', 'rest api', 'RESTful APIs']
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
                    subNames: [
                        'ci/cd',
                        'continuous integration',
                        'continuous deployment',
                        'CI/CD pipelines',
                        'CI/CD practices'
                    ]
                },
                {
                    mainName: 'agile',
                    count: 1,
                    subNames: [
                        'agile methodologies',
                        'agile methodology',
                        'agile development',
                        'scrum',
                        'agile / scrum',
                        'Agile workflow'
                    ]
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
                    subNames: [
                        'web performance',
                        'performance optimization',
                        'Performance tooling',
                        'webpagetest',
                        'Web performance optimization',
                        'Frontend performance optimization'
                    ]
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
                    subNames: ['accessibility', 'WCAG accessibility']
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
                    subNames: ['frontend architecture', 'client-side architecture']
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
                    subNames: ['ui/ux', 'UX best practices', 'UI/UX design', 'UX understanding']
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
                },
                {
                    mainName: 'mobx',
                    count: 0,
                    subNames: ['mobx']
                },
                {
                    mainName: 'less',
                    count: 0,
                    subNames: ['less']
                },
                {
                    mainName: 'sass',
                    count: 0,
                    subNames: ['sass']
                },
                {
                    mainName: 'relational databases',
                    count: 0,
                    subNames: ['relational databases']
                },
                {
                    mainName: 'nosql databases',
                    count: 0,
                    subNames: ['nosql databases']
                },
                {
                    mainName: 'aws',
                    count: 0,
                    subNames: ['aws']
                },
                {
                    mainName: 'linux',
                    count: 0,
                    subNames: ['linux']
                },
                {
                    mainName: 'vite',
                    count: 0,
                    subNames: ['vite']
                },
                {
                    mainName: 'xstate',
                    count: 0,
                    subNames: ['xstate']
                },
                {
                    mainName: 'wagmi',
                    count: 0,
                    subNames: ['wagmi']
                },
                {
                    mainName: 'react native',
                    count: 0,
                    subNames: ['react native']
                },
                {
                    mainName: 'frontend optimization',
                    count: 0,
                    subNames: ['frontend optimization']
                },
                {
                    mainName: 'sdk development',
                    count: 0,
                    subNames: ['sdk development']
                },
                {
                    mainName: 'cross-chain dapps',
                    count: 0,
                    subNames: ['cross-chain dapps']
                },
                {
                    mainName: 'blockchain technology',
                    count: 0,
                    subNames: ['blockchain technology']
                },
                {
                    mainName: 'defi platforms',
                    count: 0,
                    subNames: ['defi platforms']
                },
                {
                    mainName: 'observability and tracing',
                    count: 0,
                    subNames: ['observability and tracing']
                },
                {
                    mainName: 'state machines',
                    count: 0,
                    subNames: ['state machines']
                },
                {
                    mainName: 'mobile, tablet, and desktop frontend development',
                    count: 0,
                    subNames: ['mobile, tablet, and desktop frontend development']
                },
                {
                    mainName: 'code quality',
                    count: 0,
                    subNames: ['code quality']
                },
                {
                    mainName: 'code maintainability',
                    count: 0,
                    subNames: ['code maintainability', 'Maintainable code']
                },
                {
                    mainName: 'css-in-js',
                    count: 0,
                    subNames: ['css-in-js']
                },
                {
                    mainName: 'zustand',
                    count: 0,
                    subNames: ['zustand']
                },
                {
                    mainName: 'recoil',
                    count: 0,
                    subNames: ['recoil']
                },
                {
                    mainName: 'asynchronous operations',
                    count: 0,
                    subNames: ['asynchronous operations']
                },
                {
                    mainName: 'frontend-backend integration',
                    count: 0,
                    subNames: ['frontend-backend integration']
                },
                {
                    mainName: 'unit testing',
                    count: 0,
                    subNames: ['unit testing']
                },
                {
                    mainName: 'integration testing',
                    count: 0,
                    subNames: ['integration testing']
                },
                {
                    mainName: 'react testing library',
                    count: 0,
                    subNames: ['react testing library', 'Component/integration testing (React Testing Library)']
                },
                {
                    mainName: 'grpc',
                    count: 0,
                    subNames: ['grpc']
                },
                {
                    mainName: 'backend technologies',
                    count: 0,
                    subNames: ['backend technologies']
                },
                {
                    mainName: 'backend databases',
                    count: 0,
                    subNames: ['backend databases']
                },
                {
                    mainName: 'modular component design',
                    count: 0,
                    subNames: ['modular component design']
                },
                {
                    mainName: 'localization',
                    count: 0,
                    subNames: ['localization']
                },
                {
                    mainName: 'build tooling',
                    count: 0,
                    subNames: ['build tooling']
                },
                {
                    mainName: 'observability',
                    count: 0,
                    subNames: ['observability']
                },
                {
                    mainName: 'code review',
                    count: 0,
                    subNames: ['code review', 'code reviews']
                },
                {
                    mainName: 'design documentation',
                    count: 0,
                    subNames: ['design documentation']
                },
                {
                    mainName: 'technical mentoring',
                    count: 0,
                    subNames: ['technical mentoring']
                },
                {
                    mainName: 'reliability best practices',
                    count: 0,
                    subNames: ['reliability best practices']
                },
                {
                    mainName: 'test-driven development',
                    count: 0,
                    subNames: ['test-driven development']
                },
                {
                    mainName: 'object-oriented programming',
                    count: 0,
                    subNames: ['object-oriented programming', 'Object-Oriented Programming (OOP)', 'OOP']
                },
                {
                    mainName: 'solid principles',
                    count: 0,
                    subNames: ['solid principles']
                },
                {
                    mainName: 'dry principles',
                    count: 0,
                    subNames: ['dry principles']
                },
                {
                    mainName: 'software design principles',
                    count: 0,
                    subNames: ['software design principles']
                },
                {
                    mainName: 'software development life cycle',
                    count: 0,
                    subNames: ['software development life cycle (sdlc)', 'software development life cycle', 'sdlc']
                },
                {
                    mainName: 'c++',
                    count: 0,
                    subNames: ['c++']
                },
                {
                    mainName: 'c#',
                    count: 0,
                    subNames: ['c#']
                },
                {
                    mainName: '.net',
                    count: 0,
                    subNames: ['.net']
                },
                {
                    mainName: 'azure devops',
                    count: 0,
                    subNames: ['azure devops']
                },
                {
                    mainName: 'backlog management',
                    count: 0,
                    subNames: ['backlog management']
                },
                {
                    mainName: 'team foundation server',
                    count: 0,
                    subNames: ['team foundation server', 'tfs']
                },
                {
                    mainName: 'activex data objects',
                    count: 0,
                    subNames: ['activex data objects', 'ado']
                },
                {
                    mainName: 'software design diagrams',
                    count: 0,
                    subNames: ['software design diagrams']
                },
                {
                    mainName: 'mathematical foundations',
                    count: 0,
                    subNames: ['mathematical foundations (geometry, trigonometry)', 'geometry', 'trigonometry']
                },
                {
                    mainName: 'infrastructure software knowledge',
                    count: 0,
                    subNames: ['infrastructure software knowledge']
                },
                {
                    mainName: 'react context',
                    count: 0,
                    subNames: ['react context']
                },
                {
                    mainName: 'react suspense',
                    count: 0,
                    subNames: ['react suspense']
                },
                {
                    mainName: 'concurrent react features',
                    count: 0,
                    subNames: ['concurrent react features']
                },
                {
                    mainName: 'tanstack query',
                    count: 0,
                    subNames: ['tanstack query']
                },
                {
                    mainName: 'graphql',
                    count: 0,
                    subNames: ['graphql', 'GraphQL (queries, mutations, caching, fragments)']
                },
                {
                    mainName: 'vitest',
                    count: 0,
                    subNames: ['vitest']
                },
                {
                    mainName: 'component testing',
                    count: 0,
                    subNames: ['component testing']
                },
                {
                    mainName: 'e2e testing',
                    count: 0,
                    subNames: ['e2e testing']
                },
                {
                    mainName: 'modern frontend patterns',
                    count: 0,
                    subNames: ['modern frontend patterns']
                },
                {
                    mainName: 'maintainable architecture',
                    count: 0,
                    subNames: ['maintainable architecture']
                },
                {
                    mainName: 'internationalization',
                    count: 0,
                    subNames: ['internationalization']
                },
                {
                    mainName: 'translation workflows',
                    count: 0,
                    subNames: ['translation workflows']
                },
                {
                    mainName: 'collaboration with designers',
                    count: 0,
                    subNames: ['collaboration with designers']
                },
                {
                    mainName: 'collaboration with product managers',
                    count: 0,
                    subNames: ['collaboration with product managers']
                },
                {
                    mainName: 'react router',
                    count: 0,
                    subNames: ['react routing', 'react router']
                },
                {
                    mainName: 'component composition',
                    count: 0,
                    subNames: ['component composition']
                },
                {
                    mainName: 'mui',
                    count: 0,
                    subNames: ['mui', 'Material UI', 'Material UI (MUI)']
                },
                {
                    mainName: 'spa development',
                    count: 0,
                    subNames: ['spa development', 'single page application']
                },
                {
                    mainName: 'reusable components',
                    count: 0,
                    subNames: ['reusable components', 'Reusable UI components']
                },
                {
                    mainName: 'object-oriented javascript',
                    count: 0,
                    subNames: ['object-oriented javascript']
                },
                {
                    mainName: 'ui testing',
                    count: 0,
                    subNames: ['ui testing']
                },
                {
                    mainName: 'selenium',
                    count: 0,
                    subNames: ['selenium']
                },
                {
                    mainName: 'front-end tooling',
                    count: 0,
                    subNames: ['front-end tooling']
                },
                {
                    mainName: 'eslint',
                    count: 0,
                    subNames: ['eslint']
                },
                {
                    mainName: 'prettier',
                    count: 0,
                    subNames: ['prettier']
                },
                {
                    mainName: 'micro frontend applications',
                    count: 0,
                    subNames: ['micro frontend applications']
                },
                {
                    mainName: 'angular 2',
                    count: 0,
                    subNames: ['angular 2', 'angular 2+', 'Angular 15']
                },
                {
                    mainName: 'web development',
                    count: 0,
                    subNames: ['web development']
                },
                {
                    mainName: 'testing frameworks',
                    count: 0,
                    subNames: ['testing frameworks']
                },
                {
                    mainName: 'test runner frameworks',
                    count: 0,
                    subNames: ['test runner frameworks']
                },
                {
                    mainName: 'grasp principles',
                    count: 0,
                    subNames: ['grasp principles']
                },
                {
                    mainName: 'cross-browser compatibility',
                    count: 0,
                    subNames: ['cross-browser compatibility']
                },
                {
                    mainName: 'npm',
                    count: 0,
                    subNames: ['npm', 'node package manager']
                },
                {
                    mainName: 'linters',
                    count: 0,
                    subNames: ['linters']
                },
                {
                    mainName: 'nx framework',
                    count: 0,
                    subNames: ['nx framework']
                },
                {
                    mainName: 'typescript ast',
                    count: 0,
                    subNames: ['typescript ast', 'typescript abstract syntax tree']
                },
                {
                    mainName: 'code modifiers',
                    count: 0,
                    subNames: ['code modifiers']
                },
                {
                    mainName: 'gitlab',
                    count: 0,
                    subNames: ['gitlab']
                },
                {
                    mainName: 'nginx',
                    count: 0,
                    subNames: ['nginx']
                }
            ],
            softSkills: []
        };

        expect(finalObj).toStrictEqual(expectedFinalObj);
    });
});

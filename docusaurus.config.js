// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Katalon docs',
  tagline: '',
  url: 'https://docs.katalon.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/logo.svg',
  organizationName: 'Katalon',
  projectName: 'Katalon Docs',
  trailingSlash: false,
  customFields: {
    // "appId": process.env.APPLICATION_ID,
    // "indexName": process.env.INDEX_NAME,
    // "apiKey": process.env.API_KEY_SEARCH,
    "appId": "5E7YZB1TD0",
    "indexName": "docs_dita",
    "apiKey": "719e4773c20547dc1c567a1ffc409f29",
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/katalon-studio/katalon-docs-dita/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
            autoCollapseCategories: true,
            hideable: true,
        },
      },
      navbar: {
        title: 'Katalon Docs',
        hideOnScroll: true,
        logo: {
          alt: 'Katalon Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'search',
            position: 'left',
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'API Docs',
            className: 'bar-items-text',
            items: [
                {
                    label: 'Katalon Studio',
                    to: 'http://api-docs.katalon.com/',
                    className: 'bar-items-text',
                },
                {
                    label: 'Katalon TestOps',
                    to: 'docs/katalon-testops/rest-api',
                    className: 'bar-items-text',
                },
            ]
          },
          {
            to: 'https://forum.katalon.com/',
            label: 'Community',
            position: 'right',
            className: 'bar-items-text',
          },
          {
            to: 'https://academy.katalon.com/?utm_source=menu&utm_medium=docs',
            label: 'Academy',
            position: 'right',
            className: 'bar-items-text',
          },
          {
            to: 'https://www.katalon.com/download/',
            label: 'Download now',
            position: 'right',
            className: 'bar-items-download',
          },
        ],
      },
      algolia: {
        // appId: process.env.APPLICATION_ID,
        // indexName: process.env.INDEX_NAME,
        // apiKey: process.env.API_KEY_SEARCH,
        appId: "5E7YZB1TD0",
        indexName: "docs_dita",
        apiKey: "719e4773c20547dc1c567a1ffc409f29",
  
        // Optional: see doc section bellow
        contextualSearch: false,

        // Optional: Algolia search parameters
        searchParameters: {
            hitsPerPage: 30,
            // page: 0,
        },

        hitsPerPage: 30,

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
        selector: 'div#',
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'PRODUCTS',
            items: [
              {
                label: 'Katalon Studio',
                to: 'https://katalon.com/katalon-studio',
              },
              {
                label: 'Katalon Recorder',
                to: 'https://katalon.com/katalon-recorder-ide',
              },
              {
                label: 'Katalon TestOps',
                to: 'https://katalon.com/testops/',
              },
              {
                label: 'Katalon TestCloud',
                to: 'https://katalon.com/testcloud',
              },
              {
                label: 'Katalon Store',
                to: 'https://store.katalon.com/',
              },
              {
                label: 'Pricing',
                to: 'https://katalon.com/pricing/',
              },
            ],
          },
          {
            title: 'SOLUTIONS',
            items: [
              {
                label: 'Web Testing',
                to: 'https://katalon.com/web-testing',
              },
              {
                label: 'API Testing',
                to: 'https://katalon.com/api-testing',
              },
              {
                label: 'Mobile Testing',
                to: 'https://katalon.com/mobile-testing',
              },
              {
                label: 'Desktop Testing',
                to: 'https://katalon.com/desktop-testing/',
              },
              {
                label: 'Integrations',
                to: 'https://katalon.com/integrations',
              },
              {
                label: 'Methodologies',
                to: 'https://katalon.com/methodologies',
              },
            ],
          },
          {
            title: 'SUPPORT',
            items: [
              {
                label: 'Help Center',
                to: 'https://katalonsupport.force.com/katalonhelpcenter/s/',
              },
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Community',
                to: 'https://forum.katalon.com/',
              },
              {
                label: 'Repository',
                to: 'https://github.com/katalon-studio/katalon-studio',
              },
              {
                label: 'Webinars',
                to: 'https://katalon.com/webinars',
              },
              {
                label: 'Training',
                to: 'https://academy.katalon.com/',
              },
            ],
          },

          {
            title: 'COMPANY',
            items: [
              {
                label: 'About Katalon',
                to: 'https://katalon.com/about-us/',
              },
              {
                label: 'Blog',
                to: 'https://katalon.com/resources-center/blog',
              },
              {
                label: 'Partners',
                to: 'https://katalon.com/partners/',
              },
              {
                label: 'Customer Stories',
                to: 'https://katalon.com/case-studies/',
              },
              {
                label: 'Careers',
                to: 'https://apply.workable.com/katalon/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Katalon LLC. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      // highlight-start
      {
        redirects: [
            {
                to: "/javadoc",
                from: [
                    "/javadoc/index.html"
                ]
            },
            {
                to: "/docs",
                from: [
                    "/katalon-studio/docs/index.html",
                    "/index.html",
                    "/display/KD/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-started/overview",
                "from": [
                    "/katalon-recorder/docs/overview.html",
                    "/display/KR/Overview/",
                    "/x/_RHR/",
                    "/x/cRtO/",
                    "/katalon-recorder/docs/overview/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-started/gui-overview",
                "from": [
                    "/katalon-recorder/docs/gui-overview.html",
                    "/display/KR/GUI+Overview/",
                    "/display/KR/GUI%20Overview/",
                    "/x/LAHR/",
                    "/katalon-recorder/docs/gui-overview/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-started/release-notes",
                "from": [
                    "/katalon-recorder/docs/release-notes.html",
                    "/display/KR/Release+Notes/",
                    "/display/KR/Release%20Notes/",
                    "/x/JwHR/",
                    "/katalon-recorder/docs/release-notes/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/production-evaluation-center/katalon-recorder-vs-selenium-ide",
                "from": [
                    "/katalon-recorder/docs/katalon-recorder-vs-selenium-ide.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/production-evaluation-center/katalon-recorder-vs-alternatives",
                "from": [
                    "/katalon-recorder/docs/katalon-recorder-vs-alternatives.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/automate-scenarios/selenese-selenium-ide-commands-reference",
                "from": [
                    "/katalon-recorder/docs/selenese-selenium-ide-commands-reference.html",
                    "/display/KR/Selenese+%28Selenium+IDE%29+Commands+Reference/",
                    "/display/KR/Selenese%20%28Selenium%20IDE%29%20Commands%20Reference/",
                    "/x/dhtO/",
                    "/katalon-recorder/docs/selenese-selenium-ide-commands-reference/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/automate-scenarios/create-your-first-automation-script",
                "from": [
                    "/katalon-recorder/docs/automate-scenarios.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/automate-scenarios/control-the-flows/handle-conditional-cases-in-your-tests",
                "from": [
                    "/katalon-recorder/docs/conditional-cases.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/automate-scenarios/control-the-flows/how-to-use-control-flow-commands-in-a-test-case",
                "from": [
                    "/katalon-recorder/docs/how-to-use-conditional-statements-in-a-test-case.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case",
                "from": [
                    "/katalon-recorder/docs/how-to-extract-and-verify-textual-patterns-in-a-test-case.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/automate-scenarios/how-to-extract-and-write-data-in-a-test-case",
                "from": [
                    "/katalon-recorder/docs/write-and-extract-data.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/automate-scenarios/back-up-data-automatically",
                "from": [
                    "/katalon-recorder/docs/auto-backup.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/automate-scenarios/global-variables",
                "from": [
                    "/katalon-recorder/docs/global-variables.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/execute-scenarios/use-the-self-healing-function",
                "from": [
                    "/katalon-recorder/docs/self-healing.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/execute-scenarios/dynamic-test-suite",
                "from": [
                    "/katalon-recorder/docs/dynamic-test-suite.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/execution-report/view-execution-reports-in-testops",
                "from": [
                    "/katalon-recorder/docs/monitor-scenario-executions.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/export-scenarios/export-automation-scripts-to-other-frameworks",
                "from": [
                    "/katalon-recorder/docs/export-test-script.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/export-scenarios/export-test-projects",
                "from": [
                    "/katalon-recorder/docs/export-test-project-to-ks.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/export-scenarios/writing-custom-script-formatter",
                "from": [
                    "/katalon-recorder/docs/writing-custom-script-formatter.html",
                    "/display/KR/Writing+Custom+Script+Formatter/",
                    "/display/KR/Writing%20Custom%20Script%20Formatter/",
                    "/x/igHR/",
                    "/katalon-recorder/docs/writing-custom-script-formatter/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/data-driven-testing.html",
                    "/katalon-recorder/docs/data-driven-execution.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/data-driven-testing/how-to-implement-data-driven-testing-in-a-test-case",
                "from": [
                    "/katalon-recorder/docs/implement-data-driven-testing-in-a-test-case.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/extend-katalon-recorder/katalon-recorder-helper-tool",
                "from": [
                    "/katalon-recorder/docs/katalon-recorder-helper-tool.html",
                    "/display/KR/Katalon+Recorder+Helper+Tool/",
                    "/display/KR/Katalon%20Recorder%20Helper%20Tool/",
                    "/x/PQTR/",
                    "/katalon-recorder/docs/katalon-recorder-helper-tool/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/extend-katalon-recorder/extension-scripts-aka-user-extensions.js-for-custom-locator-builders-and-actions",
                "from": [
                    "/katalon-recorder/docs/extension-scripts-aka-user-extensionsjs-for-custom-locator-builders-and-actions.html",
                    "/display/KR/Extension+Scripts+%28AKA+user-extensions.js%29+for+Custom+Locator+Builders+and+Actions/",
                    "/display/KR/Extension%20Scripts%20%28AKA%20user-extensions.js%29%20for%20Custom%20Locator%20Builders%20and%20Actions/",
                    "/x/9APR/",
                    "/katalon-recorder/docs/extension-scripts-aka-user-extensionsjs-for-custom-locator-builders-and-actions/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/extend-katalon-recorder/import-tests-from-selenium-ide",
                "from": [
                    "/katalon-recorder/docs/import-selenium-ide.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/extend-katalon-recorder/command-compatibility-between-selenium-ide-and-kr",
                "from": [
                    "/katalon-recorder/docs/side-kr-command-compatibility.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/help-and-resources/samples",
                "from": [
                    "/katalon-recorder/docs/samples.html",
                    "/display/KR/Samples/",
                    "/x/KQHR/",
                    "/katalon-recorder/docs/samples/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/help-and-resources/acknowledgments",
                "from": [
                    "/katalon-recorder/docs/acknowledgments.html",
                    "/display/KR/Acknowledgments/",
                    "/x/pwHR/",
                    "/katalon-recorder/docs/acknowledgments/"
                ]
            },
            {
                "to": "/docs/katalon-recorder/get-your-job-done/execute-scenarios/use-the-command-line-runner",
                "from": [
                    "/katalon-recorder/docs/command-line-runner.html"
                ]
            },
            {
                "to": "/docs/katalon-recorder/help-and-resources/faq-and-troubleshooting-instructions",
                "from": [
                    "/katalon-recorder/docs/faq-and-troubleshooting-instructions.html",
                    "/x/7gHR/",
                    "/katalon-recorder/docs/faq-and-troubleshooting-instructions/"
                ]
            },
            {
                "to": "/docs/katalon-testops/overview/testops-overview",
                "from": [
                    "/katalon-analytics/docs/overview.html",
                    "/display/KA/Overview/",
                    "/x/6RHR/",
                    "/katalon-analytics/docs/overview/",
                    "/display/KA/",
                    "/katalon-analytics/docs/TO-center-overview.html",
                    "/katalon-analytics/index.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/overview/terminology-and-formulas",
                "from": [
                    "/katalon-analytics/docs/testops-terminology.html",
                    "/katalon-analytics/docs/requirement-coverage.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/overview/navigate-through-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/testops-navigation.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/release-notes/2021",
                "from": [
                    "/katalon-analytics/docs/testops-releases-2021.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/get-started/roles-and-permissions",
                "from": [
                    "/katalon-analytics/docs/testops-roles-privileges.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/get-started/set-up-an-account",
                "from": [
                    "/katalon-analytics/docs/getting-started.html",
                    "/display/KA/Quick+Start/",
                    "/display/KA/Quick%20Start/",
                    "/x/rxxO/",
                    "/katalon-analytics/docs/getting-started/"
                ]
            },
            {
                "to": "/docs/katalon-testops/get-started/join-testops-organizations",
                "from": [
                    "/katalon-analytics/docs/kt_users_joining_org.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/get-started/create-organization-and-project",
                "from": [
                    "/katalon-analytics/docs/kt-create-org.html",
                    "/katalon-analytics/docs/manage-org.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/get-started/set-up-teams",
                "from": [
                    "/katalon-analytics/docs/setup-team.html",
                    "/katalon-analytics/docs/setup-team/"
                ]
            },
            {
                "to": "/docs/katalon-testops/get-started/manage-users",
                "from": [
                    "/katalon-analytics/docs/kt_invite_user_org.html",
                    "/katalon-analytics/docs/kt-user-role-permission.html",
                    "/display/KA/User+Management/",
                    "/display/KA/User%20Management/",
                    "/x/lQjR/",
                    "/katalon-analytics/docs/user-management/",
                    "/katalon-analytics/docs/user-management.html",
                    "/katalon-analytics/docs/setup-org-team-project/"
                ]
            },
            {
                "to": "/docs/katalon-testops/get-started/manage-user-profile",
                "from": [
                    "/katalon-analytics/docs/manage-user-profile.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/get-started/transfer-ownership",
                "from": [
                    "/katalon-analytics/docs/kt_transfer_ownership.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/overview",
                "from": [
                    "/katalon-analytics/docs/test-run-config.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/script-repository/upload-test-scripts-to-a-script-repository",
                "from": [
                    "/katalon-analytics/docs/code-repo.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/script-repository/upload-test-scripts-from-a-git-repository",
                "from": [
                    "/katalon-analytics/docs/git-test-project.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/local-test-environments/create-a-local-test-environment-with-an-agent",
                "from": [
                    "/katalon-analytics/docs/agents.html",
                    "/katalon-analytics/docs/install_kt_agent.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/local-test-environments/load-balancing-for-local-test-environments",
                "from": [
                    "/katalon-analytics/docs/load-balancing-agents.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/local-test-environments/run-multiple-test-suites-in-parallel-with-agents",
                "from": [
                    "/katalon-analytics/docs/kt_run_parallel_agent.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/local-test-environments/auto-distributed-executions",
                "from": [
                    "/katalon-analytics/docs/auto-distributed-execution.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/docker-test-environments",
                "from": [
                    "/katalon-analytics/docs/docker.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/kubernetes-test-environments",
                "from": [
                    "/katalon-analytics/docs/aws-eks.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/remote-execution/circleci-test-environments",
                "from": [
                    "/katalon-analytics/docs/circleci.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-planning/schedules/schedule-test-runs",
                "from": [
                    "/katalon-analytics/docs/create-plan.html",
                    "/katalon-analytics/docs/view-ci-plans.html",
                    "/katalon-analytics/docs/grid-testops-cloud.html",
                    "/katalon-analytics/docs/kt-remote-execution.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-planning/schedules/execute-test-runs-manually",
                "from": [
                    "/katalon-analytics/docs/kt-scheduler.html",
                    "/katalon-analytics/docs/execute-test-run.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-planning/releases",
                "from": [
                    "/katalon-analytics/docs/kt-release.html",
                    "/katalon-analytics/docs/release.html",
                    "/katalon-analytics/docs/kt-jira-release.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-planning/builds",
                "from": [
                    "/katalon-analytics/docs/kt-build.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-management/manage-test-cases",
                "from": [
                    "/katalon-analytics/docs/test-case-management.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-management/manage-test-suites",
                "from": [
                    "/katalon-analytics/docs/test-suite-management.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-management/view-bdd-test-results",
                "from": [
                    "/katalon-analytics/docs/bdd-test-results.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-management/link-test-runs-to-jira-defects",
                "from": [
                    "/katalon-analytics/docs/ka-defects.html",
                    "/katalon-analytics/docs/kt-jira-issue.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-management/link-test-cases-to-jira-requirements",
                "from": [
                    "/katalon-analytics/docs/ka-integration-jira.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/framework-integration/upload-junit-and-katalon-studio-test-results-using-katalon-report-uploader",
                "from": [
                    "/katalon-analytics/docs/project-management-import-cli.html",
                    "/display/KA/From+Command+Line/",
                    "/display/KA/From%20Command%20Line/",
                    "/x/FhbR/",
                    "/katalon-analytics/docs/project-management-import-cli/"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/framework-integration/upload-junit-and-katalon-studio-test-results-via-a-web-browser",
                "from": [
                    "/katalon-analytics/docs/testops-uploader.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-mocha",
                "from": [
                    "/katalon-analytics/docs/kt-upload-test-mocha.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-jest",
                "from": [
                    "/katalon-analytics/docs/kt-upload-test-jest.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-jasmine",
                "from": [
                    "/katalon-analytics/docs/kt-upload-test-jasmine.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-pytest",
                "from": [
                    "/katalon-analytics/docs/kt-upload-test-pytest.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/jira-integration",
                "from": [
                    "/katalon-analytics/docs/kt-jira-config.html",
                    "/katalon-analytics/docs/jira-gadgets.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/kobiton-integration",
                "from": [
                    "/katalon-analytics/docs/kt_kobiton_integration.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/slack-integration",
                "from": [
                    "/katalon-analytics/docs/slack-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/integrations/jenkins-integration",
                "from": [
                    "/katalon-analytics/docs/ka-integration-jenkins.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-maintenance/override-test-results-status",
                "from": [
                    "/katalon-analytics/docs/kt-change-result-pass-fail.html",
                    "/katalon-analytics/docs/overwrite-test-run.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/test-maintenance/compare-test-results",
                "from": [
                    "/katalon-analytics/docs/compare-test-results.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-testops-dashboard/testops-dashboard-overview",
                "from": [
                    "/katalon-analytics/docs/dashboard-overview.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-testops-dashboard/test-activities-dashboard",
                "from": [
                    "/katalon-analytics/docs/dashboard-test-activities.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-testops-dashboard/release-readiness-dashboard",
                "from": [
                    "/katalon-analytics/docs/dashboard-release-readiness.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-testops-dashboard/productivity-dashboard",
                "from": [
                    "/katalon-analytics/docs/dashboard-productivity.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-testops-dashboard/quality-dashboard",
                "from": [
                    "/katalon-analytics/docs/dashboard-quality.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-testops-dashboard/platform-coverage-dashboard",
                "from": [
                    "/katalon-analytics/docs/dashboard-platform-coverage.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-testops-dashboard/requirement-coverage-dashboard",
                "from": [
                    "/katalon-analytics/docs/dashboard-requirement-coverage.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-testops-dashboard/local-test-environment-dashboard",
                "from": [
                    "/katalon-analytics/docs/dashboard-local-test-environment.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-test-runs",
                "from": [
                    "/katalon-analytics/docs/test-runs-overview.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/filter-test-runs-list-by-build-name",
                "from": [
                    "/katalon-analytics/docs/filter-test-build-name.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-re-run-test-results",
                "from": [
                    "/katalon-analytics/docs/rerun-results.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-test-case-reports",
                "from": [
                    "/katalon-analytics/docs/view-test-cases.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/view-traceability-matrix",
                "from": [
                    "/katalon-analytics/docs/view-traceability-matrix.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/reporting/detect-abnormal-web-services",
                "from": [
                    "/katalon-analytics/docs/view-abnormal-web-services.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/visual-testing/visual-testing-overview",
                "from": [
                    "/katalon-analytics/docs/visual-testing-overview.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/settings/delete-data",
                "from": [
                    "/katalon-analytics/docs/project-management-delete.html",
                    "/display/KA/Project+and+Execution+Deletion/",
                    "/display/KA/Project%20and%20Execution%20Deletion/",
                    "/x/pwbR/",
                    "/katalon-analytics/docs/project-management-delete/"
                ]
            },
            {
                "to": "/docs/katalon-testops/settings/enabledisable-strict-domain",
                "from": [
                    "/katalon-analytics/docs/strict-domain.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/settings/ip-address-restrictions",
                "from": [
                    "/katalon-analytics/docs/ip-settings.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/settings/subdomain-configurations",
                "from": [
                    "/katalon-analytics/docs/subdomain.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/settings/single-sign-on-configurations",
                "from": [
                    "/katalon-analytics/docs/sso-settings.html",
                    "/katalon-analytics/docs/accept-sso/"
                ]
            },
            {
                "to": "/docs/katalon-testops/settings/configure-session-timeout",
                "from": [
                    "/katalon-analytics/docs/timeout-config.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/settings/notification-emails",
                "from": [
                    "/katalon-analytics/docs/kt-noti-email.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/settings/api-keys",
                "from": [
                    "/katalon-analytics/docs/ka-api-key.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/rest-api",
                "from": [
                    "/katalon-analytics/docs/rest-api.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/tutorials",
                "from": [
                    "/katalon-analytics/docs/testops-tutorials.html"
                ]
            },
            {
                "to": "/docs/katalon-testops/release-notes/2022",
                "from": [
                    "/katalon-analytics/docs/testops-releases-2022.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-studio-enterprise-per-user-license",
                "from": [
                    "/katalon-studio/docs/kse-per-user-license.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-runtime-engine-floating-license",
                "from": [
                    "/katalon-studio/docs/kre-floating-license.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/sunsetting-plan-for-node-locked-and-floating-licenses",
                "from": [
                    "/katalon-studio/docs/node-locked-floating-license-sunset-plan.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/trial-and-free-plans",
                "from": [
                    "/katalon-studio/docs/trial-free-plans.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/activate-katalon-license",
                "from": [
                    "/katalon-studio/docs/activate-license.html",
                    // "/katalon-studio/docs/katalon-studio-activation-since-70.html#activating-katalon-studio-enterprise",
                    // "/katalon-studio/docs/katalon-studio-activation-since-70.html#other-options",
                    // "/katalon-studio/docs/katalon-studio-activation-since-70.html#activating-katalon-studio-enterprise-trial-license",
                    "/katalon-studio/docs/activate-KSE.html",
                    "/katalon-studio/docs/katalon-studio-activation-since-70.html",
                    "/x/ERLR/",
                    "/katalon-studio/docs/katalon-studio-activation-since-70/",
                    "/katalon-studio/docs/katalon-studio-activation-since-57/",
                    "/katalon-studio/docs/katalon%20studio%20activation%20since%2057/",
                    "/katalon-studio/docs/katalon-studio-activation-since-57.html",
                    "/katalon-studio/docs/active-KRE.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/configure-proxy-authentication",
                "from": [
                    "/katalon-studio/docs/configure-proxy.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/view-license-details",
                "from": [
                    "/katalon-studio/docs/view-license-details.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/view-machine-id",
                "from": [
                    "/katalon-studio/docs/machine-id.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/session-termination-causes",
                "from": [
                    "/katalon-studio/docs/session-termination.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-runtime-engine-devops-sunsetting",
                "from": [
                    "/katalon-studio/docs/kre-devops-sunset.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/purchases-and-billing/purchase-katalon-licenses",
                "from": [
                    "/katalon-studio/docs/license-subscription.html",
                    "/katalon-studio/docs/license-KT.html",
                    "/katalon-studio/docs/license-po.html",
                    "/katalon-studio/docs/license-quote.html",
                    "/katalon-studio/docs/subscription-kstore.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/purchases-and-billing/upgrade-billing-plan",
                "from": [
                    "/katalon-studio/docs/upgrade-subs.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/purchases-and-billing/change-billing-information",
                "from": [
                    "/katalon-studio/docs/billing-info.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/purchases-and-billing/cancel-billing-renewal",
                "from": [
                    "/katalon-studio/docs/cancel-subs.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/licenses-management/manage-katalon-licenses",
                "from": [
                    "/katalon-studio/docs/license-management.html",
                    "/katalon-studio/docs/transfer-license.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/licenses-management/grant-katalon-licenses",
                "from": [
                    "/katalon-studio/docs/grant-katalon-licenses.html",
                    "/katalon-studio/docs/use-online-license.html",
                    "/katalon-studio/docs/online-offline-licenses.html",
                    "/katalon-studio/docs/re-offline-licenses.html",
                    "/katalon-studio/docs/how-to-create-kse-offline-license.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/licenses-management/remove-a-license",
                "from": [
                    "/katalon-studio/docs/remove-license.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/licenses-management/configure-idle-timeout",
                "from": [
                    "/katalon-studio/docs/license-idle-timeout.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/monitor-licenses/view-test-usage-and-balance-in-the-usage-dashboard",
                "from": [
                    "/katalon-analytics/docs/test-usage-balance-usage-dashboard.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/monitor-licenses/license-utilization-dashboard",
                "from": [
                    "/katalon-studio/docs/license-utilization-dashboard.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/license-administration/set-up-an-on-premises-license-server",
                "from": [
                    "/katalon-studio/docs/license-server.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testops-subscriptions/pricing-and-feature-comparisons",
                "from": [
                    "/katalon-analytics/docs/testops-packages.html",
                    "/katalon-analytics/docs/testops_subscriptions_overview.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testops-subscriptions/trial-plans",
                "from": [
                    "/katalon-analytics/docs/trial-plans.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testops-subscriptions/manage-subscriptions/subscribe-to-testops",
                "from": [
                    "/katalon-analytics/docs/testops-subscriptions.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/upgrade-subscriptions",
                "from": [
                    "/katalon-analytics/docs/upgrade-subscriptions.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testops-subscriptions/manage-subscriptions/cancel-subscriptions",
                "from": [
                    "/katalon-analytics/docs/cancel-subscriptions.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testcloud-subscriptions/pricing-and-feature-comparisons",
                "from": [
                    "/katalon-testcloud/docs/tc-subscription-plans.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/subscribe-to-testcloud",
                "from": [
                    "/katalon-testcloud/docs/subscribe-to-testcloud.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/usage-quota",
                "from": [
                    "/katalon-testcloud/docs/usage-quota-guide.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/upgrade-subscriptions",
                "from": [
                    "/katalon-testcloud/docs/tc-upgrade-subscriptions.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/cancel-subscriptions",
                "from": [
                    "/katalon-testcloud/docs/tc-cancel-subscriptions.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/license-overview",
                "from": [
                    "/katalon-studio/docs/license.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-studio-vs-katalon-studio-enterprise-features",
                "from": [
                    "/katalon-studio/docs/katalon-studio-vs-katalon-studio-enterprise.html"
                ]
            },
            {
                "to": "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/troubleshoot-activation-problems-oveview",
                "from": [
                    "/katalon-studio/docs/troubleshoot-activation-problems.html",
                    "/katalon-analytics/docs/network-config.html"
                ]
            },
            {
                "to": "/docs/katalium-server/overview",
                "from": [
                    "/katalium-server/docs/katalium-overview.html"
                ]
            },
            {
                "to": "/docs/katalium-server/get-started",
                "from": [
                    "/katalium-server/docs/katalium-user-guide.html"
                ]
            },
            {
                "to": "/docs/katalium-server/katalium-server---execute-katalon-studios-scripts-on-remote-machines",
                "from": [
                    "/katalium-server/docs/katalium-server-katalon-studio-remote-machine.html"
                ]
            },
            {
                "to": "/docs/katalium-server/webdriver-auto-update",
                "from": [
                    "/katalium-server/docs/katalium-webdriver.html"
                ]
            },
            {
                "to": "/docs/katalium-server/sessions-monitoring",
                "from": [
                    "/katalium-server/docs/view-session-details.html"
                ]
            },
            {
                "to": "/docs/katalium-server/contributing-guidelines",
                "from": [
                    "/katalium-server/docs/katalium-contributing.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/introduction-to-runtime-engine",
                "from": [
                    "/katalon-studio/docs/intro-RE.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/install-runtime-engine",
                "from": [
                    "/katalon-studio/docs/install-RE.html",
                    "/x/5QDR/",
                    "/katalon-studio/docs/katalon-studio-for-linux-console-mode/",
                    "/katalon-studio/docs/katalon%20studio%20for%20linux%20console%20mode/",
                    "/katalon-studio/docs/katalon+studio+for+linux+console+mode/",
                    "/katalon-studio/docs/activate-RE.html",
                    "/katalon-studio/docs/activate-RE/"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/export-test-results-in-junit-format",
                "from": [
                    "/katalon-studio/docs/export-test-results-in-junit-format.html",
                    "/display/KD/Export+Test+Results+in+JUnit+Format/",
                    "/display/KD/Export%20Test%20Results%20in%20JUnit%20Format/",
                    "/x/rQTR/",
                    "/katalon-studio/docs/export-test-results-in-junit-format/"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/command-syntax-command-lineconsole-mode-execution",
                "from": [
                    "/katalon-studio/docs/console-mode-execution.html",
                    "/display/KD/Console+Mode+Execution/",
                    "/display/KD/Console%20Mode%20Execution/",
                    "/x/WQAM/",
                    "/katalon-studio/docs/console-mode-execution/",
                    "/katalon-studio/tutorials/generate_command_line.html",
                    "/katalon-studio/tutorials/executing_console_mode.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/run-testcloud-with-katalon-runtime-engine",
                "from": [
                    "/katalon-studio/docs/testcloud-integration-kre.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/specify-a-path-to-android-sdk-root-folder",
                "from": [
                    "/katalon-studio/how-to-guides/how-to-specify-android-home-path.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/terminate-execution-conditionally",
                "from": [
                    "/katalon-studio/docs/terminate-execution-conditionally.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/create-dynamic-test-suite-at-runtime",
                "from": [
                    "/katalon-studio/docs/dynamic-test-suite-kre.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/docker-image",
                "from": [
                    "/katalon-studio/docs/docker.html",
                    "/display/KD/Docker/",
                    "/x/swTR/",
                    "/katalon-studio/docs/docker/"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/run-with-cloud-cis",
                "from": [
                    "/katalon-studio/docs/run-cloud-ci.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/continuous-integration-with-gitlab",
                "from": [
                    "/katalon-studio/docs/continuous_integration_gitlab.html",
                    "/katalon-studio/tutorials/continuous_integration_gitlab.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/common-configuration",
                "from": [
                    "/katalon-studio/docs/common-configuration.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/link-execution-with-testops-release-using-cli",
                "from": [
                    "/katalon-studio/docs/execution-release-cli.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/jenkins-integration-overview",
                "from": [
                    "/katalon-studio/docs/jenkins-integration-overview.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-on-docker-hosted-in-ubuntu",
                "from": [
                    "/katalon-studio/docs/jenkins-docker-ubuntu.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-pipeline-jenkinsfile-with-katalon-studio-docker-image",
                "from": [
                    "/katalon-studio/docs/jenkins-pipeline-docker.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/execute-katalon-studio-tests-with-jenkins-pipeline-script-jenkinsfile",
                "from": [
                    "/katalon-studio/docs/execute-katalon-tests-with-jenkins-pipeline-script.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/passing-scenario-tags-at-runtime-when-building-with-jenkins",
                "from": [
                    "/katalon-studio/how-to-guides/jenkins-tags-runtime.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/bamboo-add-on",
                "from": [
                    "/katalon-studio/docs/bamboo-addon.html",
                    "/katalon-studio/docs/bamboo+plugin/",
                    "/katalon-studio/docs/bamboo-plugin.html",
                    "/katalon-studio/docs/bamboo-integration/",
                    "/katalon-studio/docs/bamboo-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/azure-devops-extension",
                "from": [
                    "/katalon-studio/docs/azure-devops-extension.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/teamcity-plugin",
                "from": [
                    "/katalon-studio/docs/teamcity-plugin.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/circleci---katalon-orb",
                "from": [
                    "/katalon-studio/docs/integration-circleci.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/katalon-studio-github-action",
                "from": [
                    "/katalon-studio/docs/katalon-studio-github-action.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/google-cloud-build",
                "from": [
                    "/katalon-studio/docs/katalon-google-cloud-build.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/troubleshoot/troubleshoot-common-exception-when-executing-in-console-mode",
                "from": [
                    "/katalon-studio/docs/troubleshoot-executing-in-console-mode.html",
                    "/katalon-studio/docs/troubleshoot-globalvariable-special-character.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windowsmacos",
                "from": [
                    "/katalon-studio/docs/katalon-plugin-jenkins-window-macOS.html"
                ]
            },
            {
                "to": "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-ubuntu",
                "from": [
                    "/katalon-studio/docs/jenkins-plugin-ubuntu.html"
                ]
            },
            {
                "to": "/docs/katalium-framework/overview",
                "from": [
                    "/katalium-framework/docs/katalium-framework-overview.html"
                ]
            },
            {
                "to": "/docs/katalium-framework/get-started/in-visual-studio-code",
                "from": [
                    "/katalium-framework/docs/katalium-framework-get-started-vscode.html"
                ]
            },
            {
                "to": "/docs/katalium-framework/get-started/in-other-ides",
                "from": [
                    "/katalium-framework/docs/katalium-framework-get-started-other-ides.html"
                ]
            },
            {
                "to": "/docs/katalium-framework/create-a-test-case",
                "from": [
                    "/katalium-framework/docs/katalium-framework-create-test-case.html"
                ]
            },
            {
                "to": "/docs/katalium-framework/page-object-model",
                "from": [
                    "/katalium-framework/docs/katalium-framework-page-object-model.html"
                ]
            },
            {
                "to": "/docs/katalium-framework/create-a-test-suite",
                "from": [
                    "/katalium-framework/docs/katalium-framework-create-test-suite.html"
                ]
            },
            {
                "to": "/docs/katalium-framework/configure-browsers",
                "from": [
                    "/katalium-framework/docs/katalium-framework-custom-browser.html"
                ]
            },
            {
                "to": "/docs/katalium-framework/other-utilities",
                "from": [
                    "/katalium-framework/docs/katalium-framework-others.html"
                ]
            },
            {
                "to": "/docs/katalium-framework/real-time-monitoring-and-reporting",
                "from": [
                    "/katalium-framework/docs/katalium-framework-reports.html"
                ]
            },
            {
                "to": "/docs/katalon-store/overview",
                "from": [
                    "/katalon-store/docs/overview.html",
                    "/katalon-store/docs/overview/",
                    "/katalon-store/"
                ]
            },
            {
                "to": "/docs/katalon-store/getting-started-with-katalon-store",
                "from": [
                    "/katalon-store/docs/user/getting-started.html",
                    "/katalon-store/docs/user/getting-started/"
                ]
            },
            {
                "to": "/docs/katalon-store/access-to-katalon-store-in-katalon-studio",
                "from": [
                    "/katalon-store/docs/user/access-store-in-KS.html",
                    "/katalon-store/docs/user/access-store-in-KS/"
                ]
            },
            {
                "to": "/docs/katalon-store/katalon-api-keys-in-katalon-store",
                "from": [
                    "/katalon-store/docs/user/API-key.html",
                    "/katalon-store/docs/user/API-key/"
                ]
            },
            {
                "to": "/docs/katalon-store/essential-plugins-bundle",
                "from": [
                    "/katalon-store/docs/user/essential-plugin-bundle.html"
                ]
            },
            {
                "to": "/docs/katalon-store/submit-and-publish-plugins/submit-and-publish-a-new-plugin",
                "from": [
                    "/katalon-store/docs/publisher/submit-plugin.html",
                    "/katalon-store/docs/user/submit-plugin/"
                ]
            },
            {
                "to": "/docs/katalon-store/submit-and-publish-plugins/plugin-document-guidelines",
                "from": [
                    "/katalon-store/docs/publisher/document-guidelines.html",
                    "/katalon-store/docs/publisher/document-guidelines/"
                ]
            },
            {
                "to": "/docs/katalon-store/submit-and-publish-plugins/brand-guidelines-for-katalon-store-publishers",
                "from": [
                    "/katalon-store/docs/publisher/publisher-guidelines.html",
                    "/katalon-store/docs/user/publisher-guidelines/"
                ]
            },
            {
                "to": "/docs/katalon-store/submit-and-publish-plugins/plugin-approval-guidelines",
                "from": [
                    "/katalon-store/docs/publisher/approval-guidelines.html",
                    "/katalon-store/docs/publisher/approval-guidelines/"
                ]
            },
            {
                "to": "/docs/katalon-store/submit-and-publish-plugins/manage-published-plugins",
                "from": [
                    "/katalon-store/docs/publisher/manage-published-plugins.html",
                    "/katalon-store/docs/publisher/manage-published-plugins/"
                ]
            },
            {
                "to": "/docs/katalon-testcloud/overview",
                "from": [
                    "/katalon-testcloud/docs/testcloud-overview.html"
                ]
            },
            {
                "to": "/docs/katalon-testcloud/release-notes",
                "from": [
                    "/katalon-testcloud/docs/release-notes.html"
                ]
            },
            {
                "to": "/docs/katalon-testcloud/supported-environments",
                "from": [
                    "/katalon-testcloud/docs/testcloud-supported-environments.html"
                ]
            },
            {
                "to": "/docs/katalon-testcloud/get-started/testcloud-tunnel",
                "from": [
                    "/katalon-testcloud/docs/testcloud-tunnel.html"
                ]
            },
            {
                "to": "/docs/katalon-testcloud/get-started/integrate-testcloud-with-studio",
                "from": [
                    "/katalon-studio/docs/testcloud-integration.html",
                    "/katalon-testcloud/docs/troubleshoot-macos-workaround.html"
                ]
            },
            {
                "to": "/docs/katalon-testcloud/troubleshooting/tests-not-loading-when-executing-with-chrome-version-9394-in-windows",
                "from": [
                    "/katalon-testcloud/docs/troubleshoot-test-execution-chrome-93-94.html"
                ]
            },
            {
                "to": "/docs/katalon-testcloud/get-started/integrate-testcloud-with-testops",
                "from": [
                    "/katalon-testcloud/docs/integrate-testcloud-with-testops.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/welcome-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/overview.html",
                    "/display/KD/Overview/",
                    "/x/oArR/",
                    "/katalon-studio/docs/overview/",
                    "/katalon-studio/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/katalon-studio-overview",
                "from": [
                    "/katalon-studio/docs/katalon-studio-overview.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/release-notes/version-8.x",
                "from": [
                    "/katalon-studio/new/version-8x.html",
                    "/katalon-studio/new/all-versions.html",
                    "/katalon-studio/new/what-is-new.html",
                    "/katalon-studio/new/what-is-new/",
                    "/katalon-studio/new/",
                    "/display/KD/Release+Notes/",
                    "/display/KD/Release%20Notes/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/release-notes/version-7.x",
                "from": [
                    "/katalon-studio/new/version-70.html",
                    "/katalon-studio/new/version-72.html",
                    "/katalon-studio/new/version-72/",
                    "/katalon-studio/new/version-71/",
                    "/katalon-studio/new/version-71.html",
                    "/katalon-studio/new/version-70/",
                    "/katalon-studio/new/version-48.html",
                    "/katalon-studio/new/version-501.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/release-notes/version-6.x",
                "from": [
                    "/katalon-studio/new/version-60.html",
                    "/katalon-studio/new/version-633/",
                    "/katalon-studio/new/version-633.html",
                    "/katalon-studio/new/version-630.html",
                    "/katalon-studio/new/version-630/",
                    "/katalon-studio/new/version-622/",
                    "/katalon-studio/new/version-622.html",
                    "/katalon-studio/new/version-620/",
                    "/katalon-studio/new/version-620.html",
                    "/katalon-studio/new/version-615/",
                    "/katalon-studio/new/version-615.html",
                    "/katalon-studio/new/version-613/",
                    "/katalon-studio/new/version-613.html",
                    "/katalon-studio/new/version-612/",
                    "/katalon-studio/new/version-612.html",
                    "/katalon-studio/new/version-611/",
                    "/katalon-studio/new/version-611.html",
                    "/katalon-studio/new/version-61.html",
                    "/katalon-studio/new/version-61/",
                    "/katalon-studio/new/version-606/",
                    "/katalon-studio/new/version-606.html",
                    "/katalon-studio/new/version-605/",
                    "/katalon-studio/new/version-605.html",
                    "/katalon-studio/new/version-60/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/release-notes/supported-technologies",
                "from": [
                    "/katalon-studio/docs/product-availability-matrix.html",
                    "/katalon-studio/docs/unique-capabilities.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/release-notes/supported-environments",
                "from": [
                    "/katalon-studio/docs/supported-environments.html",
                    "/display/KD/Supported+Environments/",
                    "/display/KD/Supported%20Environments/",
                    "/x/dAAM/",
                    "/katalon-studio/docs/supported-environments/",
                    "/display/KD/System+Requirements/",
                    "/display/KD/System%20Requirements/",
                    "/x/cgAM/",
                    "/katalon-studio/docs/system-requirements/",
                    "/katalon-studio/docs/system-requirements.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/set-up-overview",
                "from": [
                    "/katalon-studio/docs/set-up-overview.html",
                    "/katalon-studio/tutorials/index.html",
                    "/katalon-studio/tutorials/quick_start.html",
                    "/katalon-studio/docs/quick_start.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/installation/installation-overview",
                "from": [
                    "/katalon-studio/docs/getting-started.html",
                    "/display/KD/Getting+Started/",
                    "/display/KD/Getting%20Started/",
                    "/display/KD/Installation+and+Setup/",
                    "/x/l4Ei/",
                    "/katalon-studio/docs/getting-started/",
                    "/display/KD/Before+You+Start/",
                    "/display/KD/Before%20You%20Start/",
                    "/x/HwAM/",
                    "/katalon-studio/docs/before-you-start/",
                    "/katalon-studio/docs/before-you-start.html",
                    "/katalon-studio/tutorials/install_setup_katalon_studio.html",
                    "/display/KD/Installation%20and%20Setup/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/installation/install-katalon-studio-on-macoswindows",
                "from": [
                    "/katalon-studio/docs/ks-installation-macOS-windows.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/installation/katalon-studio-for-linux-gui",
                "from": [
                    "/katalon-studio/docs/katalon-studio-gui-beta-for-linux.html",
                    "/display/KD/Katalon+Studio+GUI+%28beta%29+for+Linux/",
                    "/display/KD/Katalon%20Studio%20GUI%20%28beta%29%20for%20Linux/",
                    "/x/fwTR/",
                    "/katalon-studio/docs/katalon-studio-gui-beta-for-linux/",
                    "/display/KD/Linux+Support/",
                    "/display/KD/Linux-Support/",
                    "/display/KD/Linux%20Support/",
                    "/display/KD/Linux+Support/index.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/toolbars-and-views",
                "from": [
                    "/katalon-studio/docs/toolbars-and-views.html",
                    "/display/KD/Toolbars+and+Views/",
                    "/display/KD/Toolbars%20and%20Views/",
                    "/x/fgAM/",
                    "/katalon-studio/docs/toolbars-and-views/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/keyboard-shortcuts",
                "from": [
                    "/katalon-studio/docs/keyboard-shortcuts.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/configure-key-bindings",
                "from": [
                    "/katalon-studio/docs/configure-keyboard-shortcuts.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/katalon-preferences",
                "from": [
                    "/katalon-studio/docs/katalon-preferences.html",
                    "/display/KD/Katalon+Studio+Preferences/",
                    "/display/KD/Katalon%20Studio%20Preferences/",
                    "/x/NQRO/",
                    "/katalon-studio/docs/katalon-studio-preferences/",
                    "/x/YYUw/",
                    "/katalon-studio/docs/execution-preferences-version-50-and-below/",
                    "/katalon-studio/docs/execution-preferences-version-50-and-below.html",
                    "/katalon-studio/docs/katalon-studio-preferences.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/import-preferences",
                "from": [
                    "/katalon-studio/docs/import-preferences.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/proxy-preferences",
                "from": [
                    "/katalon-studio/docs/proxy-preferences.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/test-case-preferences",
                "from": [
                    "/katalon-studio/docs/test-case-preferences.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/mobile-preferences",
                "from": [
                    "/katalon-studio/docs/mobile-preferences.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/object-spy-preferences",
                "from": [
                    "/katalon-studio/docs/object-spy-preferences.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/change-katalon-studio-theme",
                "from": [
                    "/katalon-studio/docs/theme.html",
                    "/katalon-studio/docs/dark-theme.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/update-katalon-studio",
                "from": [
                    "/katalon-studio/docs/auto-updater.html",
                    "/display/KD/Auto-updater/",
                    "/x/lQPR/",
                    "/katalon-studio/docs/auto-updater/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/katalon-help",
                "from": [
                    "/katalon-studio/docs/katalon-help.html",
                    "/display/KD/Katalon+Help/",
                    "/display/KD/Katalon%20Help/",
                    "/x/sRRO/",
                    "/katalon-studio/docs/katalon-help/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/migration-from-other-tools/seleniumtestngjunit-migration-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/selenium-testng-junit-migration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/set-up-katalon-studio/migration-from-other-tools/import-selenium-ide-version-3-projects",
                "from": [
                    "/katalon-studio/docs/import-selenium-ide.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/get-started-overview",
                "from": [
                    "/katalon-studio/docs/get-started-overview.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/webui-testing/webui-create-and-run-web-ui-test-case-using-record-and-playback",
                "from": [
                    "/katalon-studio/tutorials/webui-create-test-case.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/webui-testing/webui-analyze-test-execution-logs-and-debug-the-test-case",
                "from": [
                    "/katalon-studio/tutorials/webui-analyze-test-case-execution-logs-and-resolve-errors.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/webui-testing/web-ui-plan-test-suite",
                "from": [
                    "/katalon-studio/tutorials/webui-plan-test-suite.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/webui-testing/webui-analyze-test-suite-reports-and-resolve-errors",
                "from": [
                    "/katalon-studio/tutorials/webui-view-and-analyze-test-suite-reports.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/mobile-testing/mobile-create-and-run-ios-test-case",
                "from": [
                    "/katalon-studio/tutorials/mobile-create-ios-test-case.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/mobile-testing/mobile-create-and-run-android-test-case",
                "from": [
                    "/katalon-studio/tutorials/mobile-create-android-test-case.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-projects-overview",
                "from": [
                    "/katalon-studio/docs/sample-projects.html",
                    "/display/KD/Sample+Projects/",
                    "/display/KD/Sample%20Projects/",
                    "/x/UQnR/",
                    "/katalon-studio/docs/sample-projects/",
                    "/katalon-studio/docs/sample-github-repository.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-api-tests-project",
                "from": [
                    "/katalon-studio/docs/web-service-samples.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-bdd-cucumber-tests-project",
                "from": [
                    "/katalon-studio/docs/bdd-samples.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-webui-tests-project-with-data-driven-testing-shopping-cart-sample",
                "from": [
                    "/katalon-studio/docs/shopping-cart-prj.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-webui-tests-project-healthcare-sample",
                "from": [
                    "/katalon-studio/docs/health-care-prj.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-android-mobile-tests-project",
                "from": [
                    "/katalon-studio/docs/android-sample-prj.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-ios-mobile-tests-project",
                "from": [
                    "/katalon-studio/docs/iOS-sample-prj.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/manage-test-project",
                "from": [
                    "/katalon-studio/docs/manage-test-project.html",
                    "/display/KD/Manage+Test+Project/",
                    "/display/KD/Manage%20Test%20Project/",
                    "/x/VIEw/",
                    "/katalon-studio/docs/manage-test-project/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/apiweb-service-project",
                "from": [
                    "/katalon-studio/docs/apiweb-service-project-since-v58.html",
                    "/x/MBbR/",
                    "/katalon-studio/docs/apiweb-service-project-since-v58/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/project-settings/email-settings",
                "from": [
                    "/katalon-studio/docs/emails-settings.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/libraries-management",
                "from": [
                    "/katalon-studio/docs/external-libraries.html",
                    "/display/KD/External+Libraries/",
                    "/display/KD/External%20Libraries/",
                    "/x/wQAo/",
                    "/katalon-studio/docs/external-libraries/",
                    "/katalon-studio/tutorials/import_java_library.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/create-test-case/create-a-new-test-case",
                "from": [
                    "/katalon-studio/docs/create-test-case.html",
                    "/display/KD/Script+View/",
                    "/display/KD/Script%20View/",
                    "/x/Y4Iw/",
                    "/katalon-studio/docs/script-view/",
                    "/katalon-studio/docs/script-view.html",
                    "/display/KD/Manual+View/",
                    "/display/KD/Manual%20View/",
                    "/x/9YEw/",
                    "/katalon-studio/docs/manual-view/",
                    "/katalon-studio/docs/manual-view.html",
                    "/display/KD/Test+Case+Manual+View/",
                    "/katalon-studio/tutorials/create_test_case_using_manual_mode.html",
                    "/katalon-studio/docs/create_test_case_using_manual_mode.html",
                    "/katalon-studio/tutorials/create_test_case_using_script_mode.html",
                    "/katalon-studio/docs/create_test_case_using_script_mode.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/search-test-cases",
                "from": [
                    "/katalon-studio/docs/search.html",
                    "/katalon-studio/docs/advanced-search/",
                    "/katalon-studio/docs/advanced+search/",
                    "/katalon-studio/docs/advanced%20search/",
                    "/katalon-studio/docs/advanced-search.html",
                    "/katalon-studio/docs/advanced+search.html",
                    "/katalon-studio/docs/advanced%20search.html",
                    "/katalon-studio/docs/dynamic-querying-test-suite.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/call-test-case",
                "from": [
                    "/katalon-studio/docs/call-test-case.html",
                    "/display/KD/Call+Test+Case/",
                    "/display/KD/Call%20Test%20Case/",
                    "/x/qgAM/",
                    "/katalon-studio/docs/call-test-case/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/test-fixtures-and-test-listeners-test-hooks",
                "from": [
                    "/katalon-studio/docs/fixtures-listeners.html",
                    "/x/E4C9/",
                    "/katalon-studio/docs/setupteardown-for-test-suite-and-test-case.html",
                    "/x/7zhO/",
                    "/katalon-studio/docs/test-listeners-test-hooks/",
                    "/katalon-studio/docs/test-listeners-test-hooks.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/working-with-sensitive-text",
                "from": [
                    "/katalon-studio/docs/working-with-sensitive-text.html",
                    "/display/KD/Working+with+Sensitive+Text/",
                    "/display/KD/Working%20with%20Sensitive%20Text/",
                    "/x/3wHR/",
                    "/katalon-studio/docs/working-with-sensitive-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/introduction-to-desired-capabilities",
                "from": [
                    "/katalon-studio/docs/introduction-to-desired-capabilities.html",
                    "/display/KD/Introduction+to+Desired+Capabilities/",
                    "/display/KD/Introduction%20to%20Desired%20Capabilities/",
                    "/x/ywbR/",
                    "/katalon-studio/docs/introduction-to-desired-capabilities/",
                    "/x/KAzR/",
                    "/x/SgzR/",
                    "/katalon-studio/tutorials/desired_capabilities_in_katalon.html",
                    "/katalon-studio/docs/desired_capabilities_in_katalon.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-desired-capabilities-for-webui-testing",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-settings-webui.html",
                    "/katalon-studio/docs/desired-capabilities-for-chromechrome-headless/",
                    "/katalon-studio/docs/desired-capabilities-for-chromechrome-headless.html",
                    "/x/TAzR/",
                    "/katalon-studio/docs/desired-capabilities-for-firefoxfirefox-headless/",
                    "/katalon-studio/docs/desired-capabilities-for-firefoxfirefox-headless.html",
                    "/display/KD/Desired+Capabilities+for+Internet+Explorer/",
                    "/display/KD/Desired%20Capabilities%20for%20Internet%20Explorer/",
                    "/x/TgzR/",
                    "/katalon-studio/docs/desired-capabilities-for-internet-explorer/",
                    "/katalon-studio/docs/desired-capabilities-for-internet-explorer.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-desired-capabilities-in-mobile-testing",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-settings-mobile.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-desired-capabilities-in-windows-desktop-app-testing",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-settings-windows.html",
                    "/katalon-studio/docs/windows-desired-capabilities.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-remote-server-in-desired-capabilities",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-remote-settings.html",
                    "/katalon-studio/docs/remote-desired-capabilities/",
                    "/katalon-studio/docs/remote-desired-capabilities.html",
                    "/display/KD/Remote+Desired+Capabilities/",
                    "/display/KD/Remote%20Desired%20Capabilities/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-custom-desired-capabilities",
                "from": [
                    "/katalon-studio/docs/set-custom-desired-capabilities.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/pass-desired-capabilities-at-runtime",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-at-runtime.html",
                    "/display/KD/Override+desired+capabilities+at+runtime/",
                    "/display/KD/Override%20desired%20capabilities%20at%20runtime/",
                    "/x/dwXR/",
                    "/katalon-studio/docs/override-desired-capabilities-at-runtime/",
                    "/katalon-studio/docs/override-desired-capabilities-at-runtime.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/manage-desired-capabilities",
                "from": [
                    "/katalon-studio/docs/import-export-desired-capabilities.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/start-browsers-in-private-mode",
                "from": [
                    "/katalon-studio/docs/start-browsers-in-private-mode.html",
                    "/display/KD/Start+browsers+in+private+mode/",
                    "/display/KD/Start%20browsers%20in%20private%20mode/",
                    "/x/XAbR/",
                    "/katalon-studio/docs/start-browsers-in-private-mode/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/test-different-browser-locales-in-chrome-with-desired-capabilities",
                "from": [
                    "/katalon-studio/docs/test-different-browser-locales-in-chrome-with-desired-capabilities.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/selenium-grid---execution-on-remote-machines",
                "from": [
                    "/katalon-studio/docs/selenium-grid-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/web-testing/internet-explorer-configurations",
                "from": [
                    "/katalon-studio/docs/internet-explorer-configurations.html",
                    "/display/KD/Internet+Explorer+Configurations/",
                    "/display/KD/Internet%20Explorer%20Configurations/",
                    "/x/iwEo/",
                    "/katalon-studio/docs/internet-explorer-configurations/",
                    "/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/windows-desktop-apps-testing/set-up-winappdriver",
                "from": [
                    "/katalon-studio/docs/setup-winappdriver.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/android/mobile-android-setup",
                "from": [
                    "/katalon-studio/tutorials/mobile-android-setup.html",
                    "/katalon-studio/docs/mobile-on-windows.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/android/mobile-configure-android-studio-emulator",
                "from": [
                    "/katalon-studio/docs/configure-android-studio.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-ios-setup-simulators",
                "from": [
                    "/katalon-studio/tutorials/mobile-ios-simulators-setup.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-ios-setup-real-devices",
                "from": [
                    "/katalon-studio/tutorials/mobile-ios-real-devices-setup.html",
                    "/katalon-studio/docs/mobile-on-macos.html",
                    "/katalon-studio/tutorials/mobile-ios-setup.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-install-webdriveragent-for-ios-devices",
                "from": [
                    "/katalon-studio/docs/installing-webdriveragent-for-ios-devices.html",
                    "/display/KD/Installing+WebDriverAgent+for+iOS+devices/",
                    "/display/KD/Installing%20WebDriverAgent%20for%20iOS%20devices/",
                    "/x/TwbR/",
                    "/katalon-studio/docs/installing-webdriveragent-for-ios-devices/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/test-artifacts-sharing",
                "from": [
                    "/katalon-studio/docs/import-export-test-artifact.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/set-a-new-default-jre-for-test-projects",
                "from": [
                    "/katalon-studio/how-to-guides/set-new-default-JRE.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/value-types",
                "from": [
                    "/katalon-studio/docs/value-types.html",
                    "/display/KD/Value+Types/",
                    "/display/KD/Value%20Types/",
                    "/x/6IIw/",
                    "/katalon-studio/docs/value-types/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/locators-and-object-identification",
                "from": [
                    "/katalon-studio/docs/locators_object_identification.html",
                    "/katalon-studio/tutorials/locators_object_identification.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/manage-mobile-test-objects",
                "from": [
                    "/katalon-studio/docs/manage-mobile-test-object.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/create-mobile-test-object-in-memory-at-runtime",
                "from": [
                    "/katalon-studio/docs/create-mobile-test-object-object-repo-in-runtime.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/parameterize-mobile-test-object-properties",
                "from": [
                    "/katalon-studio/docs/parameterize-mobile-test-object-properties.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/mobile-image-based-testing",
                "from": [
                    "/katalon-studio/docs/mobile-image-based-testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/an-introduction-to-katalon-mobile-recorder",
                "from": [
                    "/katalon-studio/docs/katalon_mobile_recorder_introduction.html",
                    "/katalon-studio/tutorials/katalon_mobile_recorder_introduction.html",
                    "/katalon-studio/tutorials/mobile-testing/index.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/mobile-recorder-tutorial---7.6-onwards",
                "from": [
                    "/katalon-studio/docs/mobile-recorder-tutorials.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/mobile-recorder-tutorial---before-7.6",
                "from": [
                    "/katalon-studio/docs/record-mobile-utility.html",
                    "/display/KD/Record+Mobile+Utility/",
                    "/display/KD/Record%20Mobile%20Utility/",
                    "/x/qgxO/",
                    "/katalon-studio/docs/record-mobile-utility/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/generate-test-scripts-for-a-progressive-web-app-using-mobile-recorder",
                "from": [
                    "/katalon-studio/docs/generate-test-scripts-for-progressive-web-app-using-mobile-recorder.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/tutorial-for-mobile-object-spy",
                "from": [
                    "/katalon-studio/docs/spy-mobile-utility.html",
                    "/display/KD/Spy+Mobile+Utility/",
                    "/display/KD/Spy%20Mobile%20Utility/",
                    "/x/3QBO/",
                    "/katalon-studio/docs/spy-mobile-utility/",
                    "/display/KD/Spy+Object/",
                    "/display/KD/Spy%20Object/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/spy-and-record-utilities-for-testing-an-existing-application",
                "from": [
                    "/katalon-studio/docs/mobile-spy-record-existing-apps.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/hybrid-mobile-apps-testing/hybrid-mobile-apps-testing-overview",
                "from": [
                    "/katalon-studio/docs/hybrid-app-overview.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/hybrid-mobile-apps-testing/capture-elements-in-hybrid-android-apps",
                "from": [
                    "/katalon-studio/docs/capture-elements-in-hybrid-android-apps.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/testing-mobile-apps-using-custom-cloud-devices",
                "from": [
                    "/katalon-studio/docs/mobile-testing-apps-cloud-devices.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/remote-execution-for-mobile-testing",
                "from": [
                    "/katalon-studio/docs/mobile-remote-execution.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/introduction-to-web-testing",
                "from": [
                    "/katalon-studio/docs/introduction-to-web-testing.html",
                    "/katalon-studio/tutorials/introduction-to-web-testing/",
                    "/katalon-studio/tutorials/web-testing/index.html",
                    "/katalon-studio/tutorials/introduction-to-web-testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/self-healing-tests",
                "from": [
                    "/katalon-studio/docs/self-healing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/selection-methods-for-web-tests",
                "from": [
                    "/katalon-studio/docs/web-selection-methods.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/web-locators-settings-version-5.7.1-7.6.0",
                "from": [
                    "/katalon-studio/docs/web-locators-settings-since-v571.html",
                    "/x/MwDR/",
                    "/katalon-studio/docs/web-locators-settings-since-v571/",
                    "/katalon-studio/docs/web-locators-settings-since-57.html",
                    "/display/KD/Web+Locators+Settings",
                    "/katalon-studio/docs/web-locators-settings.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/detecting-objects-with-xpath",
                "from": [
                    "/katalon-studio/docs/detect_elements_xpath.html",
                    "/katalon-studio/tutorials/detect_elements_xpath.html",
                    "/katalon-studio/docs/execute-xpath-functions.html",
                    "/display/KD/Execute+Xpath+functions/",
                    "/display/KD/Execute%20Xpath%20functions/",
                    "/x/ewzR/",
                    "/katalon-studio/docs/execute-xpath-functions/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/generating-reliable-object-selector-using-spy-web-utility",
                "from": [
                    "/katalon-studio/docs/generate_css_xpath_selector_spy_web_utility.html",
                    "/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/manage-web-test-objects",
                "from": [
                    "/katalon-studio/docs/manage-web-test-object.html",
                    "/katalon-studio/docs/manage-test-object.html",
                    "/display/KD/Manage+Test+Object/",
                    "/display/KD/Manage%20Test%20Object/",
                    "/x/HoUw/",
                    "/katalon-studio/docs/manage-test-object/",
                    "/katalon-studio/docs/manage+test+object/",
                    "/katalon-studio/docs/manage%20test%20object/",
                    "/x/ZxlO/",
                    "/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web/",
                    "/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web.html",
                    "/display/KD/Working+with+Shadow+DOM+Objects/",
                    "/display/KD/Working%20with%20Shadow%20DOM%20Objects/",
                    "/x/SBNO/",
                    "/katalon-studio/docs/working-with-shadow-dom-objects/",
                    "/katalon-studio/docs/working-with-shadow-dom-objects.html",
                    "/display/KD/Change+CSS+selector+of+an+object+at+runtime/",
                    "/display/KD/Change%20CSS%20selector%20of%20an%20object%20at%20runtime/",
                    "/x/dQXR/",
                    "/katalon-studio/docs/change-css-selector-of-an-object-at-runtime/",
                    "/katalon-studio/docs/change-css-selector-of-an-object-at-runtime.html",
                    "/display/KD/Clicking+multiple+objects+without+starting+over/",
                    "/display/KD/Clicking%20multiple%20objects%20without%20starting%20over/",
                    "/x/ZwXR/",
                    "/katalon-studio/docs/clicking-multiple-objects-without-starting-over/",
                    "/katalon-studio/docs/clicking-multiple-objects-without-starting-over.html",
                    "/display/KD/Creation+of+Test+Object+in+Object+Repository+in+Runtime/",
                    "/display/KD/Creation%20of%20Test%20Object%20in%20Object%20Repository%20in%20Runtime/",
                    "/x/SAXR/",
                    "/katalon-studio/docs/creation-of-test-object-in-object-repository-in-runtime/",
                    "/katalon-studio/docs/creation-of-test-object-in-object-repository-in-runtime.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/parameterize-web-test-objects",
                "from": [
                    "/katalon-studio/docs/parameterize-web-objects.html",
                    "/x/A4C9/",
                    "/katalon-studio/docs/parameterize-webmobile-test-object-properties/",
                    "/katalon-studio/docs/parameterize+webmobile+test+object+properties/",
                    "/katalon-studio/docs/parameterize%20webmobile%20test%20object%20properties/",
                    "/display/KD/Parameterized+a+Test+Object/",
                    "/katalon-studio/docs/parameterize-web-test-object-properties.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/automation-testing-of-shadow-dom-elements-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/shadow_dom_elements_testing.html",
                    "/katalon-studio/tutorials/shadow_dom_elements_testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/web-image-based-testing",
                "from": [
                    "/katalon-studio/docs/web-image-based-testing.html",
                    "/katalon-studio/docs/web-image-based-object-recognition.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/spy-web-utility",
                "from": [
                    "/katalon-studio/docs/spy-web-utility.html",
                    "/display/KD/Spy+Web+Utility/",
                    "/display/KD/Spy%20Web%20Utility/",
                    "/x/5BZO/",
                    "/katalon-studio/docs/spy-web-utility/",
                    "/x/jwBO/",
                    "/katalon-studio/docs/spy-web-utility-version-48-and-below/",
                    "/katalon-studio/docs/spy-web-utility-version-48-and-below.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/record-web-utility",
                "from": [
                    "/katalon-studio/docs/record-web-utility.html",
                    "/display/KD/Record+Web+Utility/",
                    "/display/KD/Record%20Web%20Utility/",
                    "/x/RwnR/",
                    "/katalon-studio/docs/record-web-utility/",
                    "/display/KD/Recording+WebUI+Test/",
                    "/display/KD/Recording%20WebUI%20Test/",
                    "/x/IA3R/",
                    "/katalon-studio/docs/recording-webui-test/",
                    "/katalon-studio/docs/recording-webui-test.html",
                    "/x/BoIw/",
                    "/katalon-studio/docs/record-web-utility-version-48-and-below/",
                    "/katalon-studio/docs/record-web-utility-version-48-and-below.html",
                    "/x/ZxhO/",
                    "/katalon-studio/docs/record-web-utility-version-50-to-54/",
                    "/katalon-studio/docs/record-web-utility-version-50-to-54.html",
                    "/katalon-studio/docs/katalon-addon-for-chrome.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/create-test-cases-using-record-and-playback",
                "from": [
                    "/katalon-studio/docs/create_test_case_using_record_playback.html",
                    "/katalon-studio/tutorials/sample_web_automation_test_project.html",
                    "/katalon-studio/tutorials/create_test_case_using_record_playback.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/how-to-use-synchronization-commands-while-recording",
                "from": [
                    "/katalon-studio/docs/synchronization_commands_recording.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/record-with-chrome-using-packed-extension",
                "from": [
                    "/katalon-studio/docs/record-web-utility-using-chrome-with-profile.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/katalon-compact-utility",
                "from": [
                    "/katalon-studio/docs/katalon-compact-utility.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/headless-browsers-execution",
                "from": [
                    "/katalon-studio/docs/headless-browsers-execution.html",
                    "/display/KD/Headless+Browsers+Execution/",
                    "/display/KD/Headless%20Browsers%20Execution/",
                    "/x/CQ-R/",
                    "/katalon-studio/docs/headless-browsers-execution/",
                    "/katalon-studio/tutorials/headless_browsers_execution.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/handle-webdrivers/terminate-webdrivers",
                "from": [
                    "/katalon-studio/docs/terminate-webdrivers.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/handle-webdrivers/upgrade-or-downgrade-webdrivers",
                "from": [
                    "/katalon-studio/docs/update-or-downgrade-webdrivers.html",
                    "/katalon-studio/docs/handle-webdrivers.html",
                    "/katalon-studio/docs/using-the-webdriver-object.html",
                    "/display/KD/Using+the+WebDriver+Object/",
                    "/display/KD/Using%20the%20WebDriver%20Object/",
                    "/x/OAXR/",
                    "/katalon-studio/docs/using-the-webdriver-object/",
                    "/display/KD/Update+or+Replace+Web+Browser+Drivers+and+Selenium/",
                    "/display/KD/Update%20or%20Replace%20Web%20Browser%20Drivers%20and%20Selenium/",
                    "/x/1xtO/",
                    "/katalon-studio/docs/update-or-replace-web-browser-drivers-and-selenium/",
                    "/katalon-studio/docs/update-or-replace-web-browser-drivers-and-selenium.html",
                    "/katalon-studio/docs/automatically-update-webdriver.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/handle-webdrivers/handle-webdrivers-with-eventfiringwebdriver",
                "from": [
                    "/katalon-studio/docs/handle-webdrivers-with-event-firing-webdriver.html",
                    "/katalon-studio/docs/webdriver-event-listeners.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-test-design/testing-web-app-on-mobile-browsers",
                "from": [
                    "/katalon-studio/docs/running_application_mobile_browsers.html",
                    "/katalon-studio/tutorials/running_application_mobile_browsers.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/introduction-to-api-testing",
                "from": [
                    "/katalon-studio/docs/introduction_api_testing.html",
                    "/katalon-studio/tutorials/api-testing/index.html",
                    "/katalon-studio/tutorials/introduction_api_testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/introduction-to-web-services-test-object",
                "from": [
                    "/katalon-studio/docs/introduction-to-web-services-test-object.html",
                    "/display/KD/Introduction+to+Web+Services+Test+Object/",
                    "/display/KD/Introduction%20to%20Web%20Services%20Test%20Object/",
                    "/x/BALR/",
                    "/katalon-studio/docs/introduction-to-web-services-test-object/",
                    "/display/KD/Web+Service/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/rest-request",
                "from": [
                    "/katalon-studio/docs/restful.html",
                    "/display/KD/RESTful/",
                    "/x/CQLR/",
                    "/katalon-studio/docs/restful/",
                    "/x/0BNO/",
                    "/katalon-studio/docs/restful-pre-54/",
                    "/katalon-studio/docs/restful-pre-54.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/soap-request",
                "from": [
                    "/katalon-studio/docs/soap.html",
                    "/display/KD/SOAP/",
                    "/x/LwLR/",
                    "/katalon-studio/docs/soap/",
                    "/x/0hNO/",
                    "/katalon-studio/docs/soap-pre-54/",
                    "/katalon-studio/docs/soap-pre-54.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/web-services-builder",
                "from": [
                    "/katalon-studio/docs/web-services-builder.html",
                    "/display/KD/Web+Services+Builder/",
                    "/display/KD/Web%20Services%20Builder/",
                    "/x/IAPR/",
                    "/katalon-studio/docs/web-services-builder/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/create-web-service-object-in-script-mode",
                "from": [
                    "/katalon-studio/docs/create_web_service_object_in_script_mode.html",
                    "/katalon-studio/docs/create_web_service_object_in_script_mode/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/create-rest-api-requests-manually",
                "from": [
                    "/katalon-studio/docs/create_rest_api_requests_manually.html",
                    "/katalon-studio/tutorials/create_rest_api_requests_manually.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/authorization",
                "from": [
                    "/katalon-studio/docs/authorization.html",
                    "/display/KD/Authorization/",
                    "/x/Ew-R/",
                    "/katalon-studio/docs/authorization/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/authorization-basic",
                "from": [
                    "/katalon-studio/docs/authorization-basic.html",
                    "/display/KD/Authorization-basic/",
                    "/katalon-studio/docs/authorization-basic/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/authorization-oauth-1.0",
                "from": [
                    "/katalon-studio/docs/authorization-oauth1.html",
                    "/display/KD/Authorization-oauth1/",
                    "/katalon-studio/docs/authorization-oauth1/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/authorization-oauth-2.0",
                "from": [
                    "/katalon-studio/docs/authorization-oauth2.html",
                    "/display/KD/Authorization-oauth2/",
                    "/katalon-studio/docs/authorization-oauth2/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/ntlm-authentication",
                "from": [
                    "/katalon-studio/docs/ntlm-authentication.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/verification-snippets",
                "from": [
                    "/katalon-studio/docs/verification-snippets.html",
                    "/display/KD/Verification+Snippets/",
                    "/display/KD/Verification%20Snippets/",
                    "/x/EwjR/",
                    "/katalon-studio/docs/verification-snippets/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/request-history",
                "from": [
                    "/katalon-studio/docs/request-history.html",
                    "/display/KD/Request+History/",
                    "/display/KD/Request%20History/",
                    "/x/3BXR/",
                    "/katalon-studio/docs/request-history/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/draft-request",
                "from": [
                    "/katalon-studio/docs/draft-request.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-rest-api-with-openapi-specification-3.0",
                "from": [
                    "/katalon-studio/docs/import-openapi30.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-restful-requests-from-swagger-2.0",
                "from": [
                    "/katalon-studio/docs/import-rest-requests-from-swagger-20.html",
                    "/display/KD/Import+REST+requests+from+Swagger+2.0/",
                    "/display/KD/Import%20REST%20requests%20from%20Swagger%202.0/",
                    "/x/8hXR/",
                    "/katalon-studio/docs/import-rest-requests-from-swagger-20/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-restful-from-postman",
                "from": [
                    "/katalon-studio/docs/import-postman.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-web-service-requests-from-soapui",
                "from": [
                    "/katalon-studio/docs/import-soapui.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-restful-requests-from-wadls",
                "from": [
                    "/katalon-studio/docs/import-wadl.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-soap-requests-from-wsdls",
                "from": [
                    "/katalon-studio/docs/import-soap-requests-from-wsdl.html",
                    "/display/KD/Import+SOAP+requests+from+WSDL/",
                    "/display/KD/Import%20SOAP%20requests%20from%20WSDL/",
                    "/x/BhbR/",
                    "/katalon-studio/docs/import-soap-requests-from-wsdl/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/handle-response-messages",
                "from": [
                    "/katalon-studio/docs/handle-response-messages.html",
                    "/display/KD/Handle+Response+Messages/",
                    "/display/KD/Handle%20Response%20Messages/",
                    "/x/BxRO/",
                    "/katalon-studio/docs/handle-response-messages/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/parameterize-a-web-service-object",
                "from": [
                    "/katalon-studio/docs/parameterize-a-web-service-object.html",
                    "/x/egLR/",
                    "/katalon-studio/docs/parameterize-a-web-service-object/",
                    "/display/KD/Parameterize+a+Web+Service+object/",
                    "/display/KD/Parameterize%20a%20Web%20Service%20object/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/create-your-first-api-test-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/create_first_api_test_katalon_studio.html",
                    "/katalon-studio/tutorials/create_first_api_test_katalon_studio",
                    "/katalon-studio/tutorials/create_first_api_test_katalon_studio.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/web-services-test-design/using-web-services-in-a-test-case",
                "from": [
                    "/katalon-studio/docs/using-web-services-in-a-test-case.html",
                    "/display/KD/Using+Web+Services+in+a+Test+Case/",
                    "/display/KD/Using%20Web%20Services%20in%20a%20Test%20Case/",
                    "/x/ARRO/",
                    "/katalon-studio/docs/using-web-services-in-a-test-case/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/introduction-to-desktop-app-testing",
                "from": [
                    "/katalon-studio/docs/introduction-desktop-app-testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/windows-spy-utility",
                "from": [
                    "/katalon-studio/docs/intro-spy-windows.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/windows-record-utility",
                "from": [
                    "/katalon-studio/docs/intro-record-windows.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/capture-windows-objects-using-the-windows-spy-utility",
                "from": [
                    "/katalon-studio/docs/windows-spy-tutorials.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/windows-record-tutorials",
                "from": [
                    "/katalon-studio/docs/windows-recorder-tutorials.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/native-windows-recorder",
                "from": [
                    "/katalon-studio/docs/windows-native-record.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-test-objects",
                "from": [
                    "/katalon-studio/docs/windows-test-objects.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/bdd-testing-framework-cucumber-integration/bdd-testing-framework-cucumber-integration",
                "from": [
                    "/katalon-studio/docs/cucumber-features-file.html",
                    "/display/KD/Cucumber+Features+File/",
                    "/display/KD/Cucumber%20Features%20File/",
                    "/x/OBLR/",
                    "/katalon-studio/docs/cucumber-features-file/",
                    "/katalon-studio/docs/running-cucumber-features-file.html",
                    "/display/KD/Running+Cucumber+Features+File/",
                    "/display/KD/Running%20Cucumber%20Features%20File/",
                    "/x/PhLR/",
                    "/katalon-studio/docs/running-cucumber-features-file/",
                    "/display/KD/Step+Definitions/",
                    "/display/KD/Step%20Definitions/",
                    "/x/OxLR/",
                    "/katalon-studio/docs/step-definitions/",
                    "/katalon-studio/docs/step-definitions.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/bdd-testing-framework-cucumber-integration/use-test-hooks-for-cucumber-framework",
                "from": [
                    "/katalon-studio/docs/cucumber-test-hook.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-accept-alert",
                "from": [
                    "/katalon-studio/docs/webui-accept-alert.html",
                    "/display/KD/%5BWebUI%5D+Accept+Alert/",
                    "/display/KD/%5BWebUI%5D%20Accept%20Alert/",
                    "/x/RYcY/",
                    "/katalon-studio/docs/webui-accept-alert/",
                    "/display/KD/Built-in+Keywords/",
                    "/x/tQTR/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-authenticate",
                "from": [
                    "/katalon-studio/docs/webui-authenticate.html",
                    "/display/KD/%5BWebUI%5D+Authenticate/",
                    "/display/KD/%5BWebUI%5D%20Authenticate/",
                    "/x/xYgY/",
                    "/katalon-studio/docs/webui-authenticate/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-back",
                "from": [
                    "/katalon-studio/docs/webui-back.html",
                    "/display/KD/%5BWebUI%5D+Back/",
                    "/display/KD/%5BWebUI%5D%20Back/",
                    "/x/yYgY/",
                    "/katalon-studio/docs/webui-back/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-check",
                "from": [
                    "/katalon-studio/docs/webui-check.html",
                    "/display/KD/%5BWebUI%5D+Check/",
                    "/display/KD/%5BWebUI%5D%20Check/",
                    "/x/EYkY/",
                    "/katalon-studio/docs/webui-check/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-click",
                "from": [
                    "/katalon-studio/docs/webui-click.html",
                    "/display/KD/%5BWebUI%5D+Click/",
                    "/display/KD/%5BWebUI%5D%20Click/",
                    "/x/MYkY/",
                    "/katalon-studio/docs/webui-click/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-click-image",
                "from": [
                    "/katalon-studio/docs/webui-click-image.html",
                    "/display/KD/%5BWebUI%5D+Click+Image/",
                    "/display/KD/%5BWebUI%5D%20Click%20Image/",
                    "/x/NIgY/",
                    "/katalon-studio/docs/webui-click-image/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-click-offset",
                "from": [
                    "/katalon-studio/docs/webui-click-offset.html",
                    "/display/KD/%5BWebUI%5D+Click+Offset/",
                    "/display/KD/%5BWebUI%5D%20Click%20Offset/",
                    "/x/eA5O/",
                    "/katalon-studio/docs/webui-click-offset/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-browser",
                "from": [
                    "/katalon-studio/docs/webui-close-browser.html",
                    "/display/KD/%5BWebUI%5D+Close+Browser/",
                    "/display/KD/%5BWebUI%5D%20Close%20Browser/",
                    "/x/zYgY/",
                    "/katalon-studio/docs/webui-close-browser/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-window-index",
                "from": [
                    "/katalon-studio/docs/webui-close-window-index.html",
                    "/display/KD/%5BWebUI%5D+Close+Window+Index/",
                    "/display/KD/%5BWebUI%5D%20Close%20Window%20Index/",
                    "/x/8ooY/",
                    "/katalon-studio/docs/webui-close-window-index/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-window-title",
                "from": [
                    "/katalon-studio/docs/webui-close-window-title.html",
                    "/display/KD/%5BWebUI%5D+Close+Window+Title/",
                    "/display/KD/%5BWebUI%5D%20Close%20Window%20Title/",
                    "/katalon-studio/docs/webui-close-window-title/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-window-url",
                "from": [
                    "/katalon-studio/docs/webui-close-window-url.html",
                    "/display/KD/%5BWebUI%5D+Close+Window+Url/",
                    "/display/KD/%5BWebUI%5D%20Close%20Window%20Url/",
                    "/x/O4sY/",
                    "/katalon-studio/docs/webui-close-window-url/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-delete-all-cookies",
                "from": [
                    "/katalon-studio/docs/webui-delete-all-cookies.html",
                    "/display/KD/%5BWebUI%5D+Delete+All+Cookies/",
                    "/display/KD/%5BWebUI%5D%20Delete%20All%20Cookies/",
                    "/x/0ogY/",
                    "/katalon-studio/docs/webui-delete-all-cookies/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-all-option",
                "from": [
                    "/katalon-studio/docs/webui-deselect-all-option.html",
                    "/display/KD/%5BWebUI%5D+Deselect+All+Option/",
                    "/display/KD/%5BWebUI%5D%20Deselect%20All%20Option/",
                    "/x/KYkY/",
                    "/katalon-studio/docs/webui-deselect-all-option/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-option-by-index",
                "from": [
                    "/katalon-studio/docs/webui-deselect-option-by-index.html",
                    "/display/KD/%5BWebUI%5D+Deselect+Option+By+Index/",
                    "/display/KD/%5BWebUI%5D%20Deselect%20Option%20By%20Index/",
                    "/x/-5EY/",
                    "/katalon-studio/docs/webui-deselect-option-by-index/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-option-by-label",
                "from": [
                    "/katalon-studio/docs/webui-deselect-option-by-label.html",
                    "/display/KD/%5BWebUI%5D+Deselect+Option+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Deselect%20Option%20By%20Label/",
                    "/x/CZIY/",
                    "/katalon-studio/docs/webui-deselect-option-by-label/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-option-by-value",
                "from": [
                    "/katalon-studio/docs/webui-deselect-option-by-value.html",
                    "/display/KD/%5BWebUI%5D+Deselect+Option+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Deselect%20Option%20By%20Value/",
                    "/x/EZIY/",
                    "/katalon-studio/docs/webui-deselect-option-by-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-dismiss-alert",
                "from": [
                    "/katalon-studio/docs/webui-dismiss-alert.html",
                    "/display/KD/%5BWebUI%5D+Dismiss+Alert/",
                    "/display/KD/%5BWebUI%5D%20Dismiss%20Alert/",
                    "/x/4YcY/",
                    "/katalon-studio/docs/webui-dismiss-alert/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-double-click",
                "from": [
                    "/katalon-studio/docs/webui-double-click.html",
                    "/display/KD/%5BWebUI%5D+Double+Click/",
                    "/display/KD/%5BWebUI%5D%20Double%20Click/",
                    "/x/OokY/",
                    "/katalon-studio/docs/webui-double-click/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-drag-and-drop-by-offset",
                "from": [
                    "/katalon-studio/docs/webui-drag-and-drop-by-offset.html",
                    "/display/KD/%5BWebUI%5D+Drag+And+Drop+By+Offset/",
                    "/display/KD/%5BWebUI%5D%20Drag%20And%20Drop%20By%20Offset/",
                    "/x/PokY/",
                    "/katalon-studio/docs/webui-drag-and-drop-by-offset/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-drag-and-drop-to-object",
                "from": [
                    "/katalon-studio/docs/webui-drag-and-drop-to-object.html",
                    "/display/KD/%5BWebUI%5D+Drag+And+Drop+To+Object/",
                    "/display/KD/%5BWebUI%5D%20Drag%20And%20Drop%20To%20Object/",
                    "/x/QokY/",
                    "/katalon-studio/docs/webui-drag-and-drop-to-object/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-enhanced-click",
                "from": [
                    "/katalon-studio/docs/webui-enhanced-click.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-execute-javascript",
                "from": [
                    "/katalon-studio/docs/webui-execute-javascript.html",
                    "/display/KD/%5BWebUI%5D+Execute+JavaScript/",
                    "/display/KD/%5BWebUI%5D%20Execute%20JavaScript/",
                    "/x/XhdO/",
                    "/katalon-studio/docs/webui-execute-javascript/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-find-web-element",
                "from": [
                    "/katalon-studio/docs/webui-find-web-element.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-find-web-elements",
                "from": [
                    "/katalon-studio/docs/webui-find-web-elements.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-focus",
                "from": [
                    "/katalon-studio/docs/webui-focus.html",
                    "/display/KD/%5BWebUI%5D+Focus/",
                    "/display/KD/%5BWebUI%5D%20Focus/",
                    "/x/RokY/",
                    "/katalon-studio/docs/webui-focus/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-forward",
                "from": [
                    "/katalon-studio/docs/webui-forward.html",
                    "/display/KD/%5BWebUI%5D+Forward/",
                    "/display/KD/%5BWebUI%5D%20Forward/",
                    "/x/2IgY/",
                    "/katalon-studio/docs/webui-forward/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-alert-text",
                "from": [
                    "/katalon-studio/docs/webui-get-alert-text.html",
                    "/display/KD/%5BWebUI%5D+Get+Alert+Text/",
                    "/display/KD/%5BWebUI%5D%20Get%20Alert%20Text/",
                    "/x/-4cY/",
                    "/katalon-studio/docs/webui-get-alert-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-all-links-on-current-page",
                "from": [
                    "/katalon-studio/docs/webui-get-all-links-on-current-page.html",
                    "/display/KD/%5BWebUI%5D+Get+All+Links+On+Current+Page/",
                    "/display/KD/%5BWebUI%5D%20Get%20All%20Links%20On%20Current%20Page/",
                    "/x/CBBO/",
                    "/katalon-studio/docs/webui-get-all-links-on-current-page/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-attribute",
                "from": [
                    "/katalon-studio/docs/webui-get-attribute.html",
                    "/display/KD/%5BWebUI%5D+Get+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Get%20Attribute/",
                    "/x/u4gY/",
                    "/katalon-studio/docs/webui-get-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-css-value",
                "from": [
                    "/katalon-studio/docs/webui-get-css-value.html",
                    "/display/KD/%5BWebUI%5D+Get+CSS+Value/",
                    "/display/KD/%5BWebUI%5D%20Get%20CSS%20Value/",
                    "/x/voYw/",
                    "/katalon-studio/docs/webui-get-css-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-element-height",
                "from": [
                    "/katalon-studio/docs/webui-get-element-height.html",
                    "/display/KD/%5BWebUI%5D+Get+Element+Height/",
                    "/display/KD/%5BWebUI%5D%20Get%20Element%20Height/",
                    "/x/WQpO/",
                    "/katalon-studio/docs/webui-get-element-height/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-element-left-position",
                "from": [
                    "/katalon-studio/docs/webui-get-element-left-position.html",
                    "/display/KD/%5BWebUI%5D+Get+Element+Left+Position/",
                    "/display/KD/%5BWebUI%5D%20Get%20Element%20Left%20Position/",
                    "/x/HwpO/",
                    "/katalon-studio/docs/webui-get-element-left-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-element-width",
                "from": [
                    "/katalon-studio/docs/webui-get-element-width.html",
                    "/display/KD/%5BWebUI%5D+Get+Element+Width/",
                    "/display/KD/%5BWebUI%5D%20Get%20Element%20Width/",
                    "/x/lApO/",
                    "/katalon-studio/docs/webui-get-element-width/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-number-of-selected-option",
                "from": [
                    "/katalon-studio/docs/webui-get-number-of-selected-option.html",
                    "/display/KD/%5BWebUI%5D+Get+Number+Of+Selected+Option/",
                    "/display/KD/%5BWebUI%5D%20Get%20Number%20Of%20Selected%20Option/",
                    "/x/GZIY/",
                    "/katalon-studio/docs/webui-get-number-of-selected-option/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-number-of-total-option",
                "from": [
                    "/katalon-studio/docs/webui-get-number-of-total-option.html",
                    "/display/KD/%5BWebUI%5D+Get+Number+Of+Total+Option/",
                    "/display/KD/%5BWebUI%5D%20Get%20Number%20Of%20Total%20Option/",
                    "/x/HZIY/",
                    "/katalon-studio/docs/webui-get-number-of-total-option/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-page-height",
                "from": [
                    "/katalon-studio/docs/webui-get-page-height.html",
                    "/display/KD/%5BWebUI%5D+Get+Page+Height/",
                    "/display/KD/%5BWebUI%5D%20Get%20Page%20Height/",
                    "/x/VYsY/",
                    "/katalon-studio/docs/webui-get-page-height/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-page-width",
                "from": [
                    "/katalon-studio/docs/webui-get-page-width.html",
                    "/display/KD/%5BWebUI%5D+Get+Page+Width/",
                    "/display/KD/%5BWebUI%5D%20Get%20Page%20Width/",
                    "/katalon-studio/docs/webui-get-page-width/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-text",
                "from": [
                    "/katalon-studio/docs/webui-get-text.html",
                    "/display/KD/%5BWebUI%5D+Get+Text/",
                    "/display/KD/%5BWebUI%5D%20Get%20Text/",
                    "/x/_okY/",
                    "/katalon-studio/docs/webui-get-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-url",
                "from": [
                    "/katalon-studio/docs/webui-get-url.html",
                    "/display/KD/%5BWebUI%5D+Get+Url/",
                    "/display/KD/%5BWebUI%5D%20Get%20Url/",
                    "/x/kIsY/",
                    "/katalon-studio/docs/webui-get-url/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-height",
                "from": [
                    "/katalon-studio/docs/webui-get-viewport-height.html",
                    "/display/KD/%5BWebUI%5D+Get+Viewport+Height/",
                    "/display/KD/%5BWebUI%5D%20Get%20Viewport%20Height/",
                    "/x/r4sY/",
                    "/katalon-studio/docs/webui-get-viewport-height/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-left-position",
                "from": [
                    "/katalon-studio/docs/webui-get-viewport-left-position.html",
                    "/display/KD/%5BWebUI%5D+Get+Viewport+Left+Position/",
                    "/display/KD/%5BWebUI%5D%20Get%20Viewport%20Left%20Position/",
                    "/x/zosY/",
                    "/katalon-studio/docs/webui-get-viewport-left-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-top-position",
                "from": [
                    "/katalon-studio/docs/webui-get-viewport-top-position.html",
                    "/display/KD/%5BWebUI%5D+Get+Viewport+Top+Position/",
                    "/display/KD/%5BWebUI%5D%20Get%20Viewport%20Top%20Position/",
                    "/x/C4wY/",
                    "/katalon-studio/docs/webui-get-viewport-top-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-width",
                "from": [
                    "/katalon-studio/docs/webui-get-viewport-width.html",
                    "/display/KD/%5BWebUI%5D+Get+Viewport+Width/",
                    "/display/KD/%5BWebUI%5D%20Get%20Viewport%20Width/",
                    "/x/KowY/",
                    "/katalon-studio/docs/webui-get-viewport-width/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-window-index",
                "from": [
                    "/katalon-studio/docs/webui-get-window-index.html",
                    "/display/KD/%5BWebUI%5D+Get+Window+Index/",
                    "/display/KD/%5BWebUI%5D%20Get%20Window%20Index/",
                    "/x/UowY/",
                    "/katalon-studio/docs/webui-get-window-index/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-window-title",
                "from": [
                    "/katalon-studio/docs/webui-get-window-title.html",
                    "/display/KD/%5BWebUI%5D+Get+Window+Title/",
                    "/display/KD/%5BWebUI%5D%20Get%20Window%20Title/",
                    "/x/dYwY/",
                    "/katalon-studio/docs/webui-get-window-title/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-maximize-window",
                "from": [
                    "/katalon-studio/docs/webui-maximize-window.html",
                    "/display/KD/%5BWebUI%5D+Maximize+Window/",
                    "/display/KD/%5BWebUI%5D%20Maximize%20Window/",
                    "/x/mowY/",
                    "/katalon-studio/docs/webui-maximize-window/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-modify-object-property",
                "from": [
                    "/katalon-studio/docs/webui-modify-object-property.html",
                    "/display/KD/%5BWebUI%5D+Modify+Object+Property/",
                    "/display/KD/%5BWebUI%5D%20Modify%20Object%20Property/",
                    "/x/q4oY/",
                    "/katalon-studio/docs/webui-modify-object-property/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-mouse-over",
                "from": [
                    "/katalon-studio/docs/webui-mouse-over.html",
                    "/display/KD/%5BWebUI%5D+Mouse+Over/",
                    "/display/KD/%5BWebUI%5D%20Mouse%20Over/",
                    "/x/S4kY/",
                    "/katalon-studio/docs/webui-mouse-over/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-mouse-over-offset",
                "from": [
                    "/katalon-studio/docs/webui-mouse-over-offset.html",
                    "/display/KD/%5BWebUI%5D+Mouse+Over+Offset/",
                    "/display/KD/%5BWebUI%5D%20Mouse%20Over%20Offset/",
                    "/x/dA9O/",
                    "/katalon-studio/docs/webui-mouse-over-offset/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-navigate-to-url",
                "from": [
                    "/katalon-studio/docs/webui-navigate-to-url.html",
                    "/display/KD/%5BWebUI%5D+Navigate+to+Url/",
                    "/display/KD/%5BWebUI%5D%20Navigate%20to%20Url/",
                    "/x/3IgY/",
                    "/katalon-studio/docs/webui-navigate-to-url/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-open-browser",
                "from": [
                    "/katalon-studio/docs/webui-open-browser.html",
                    "/display/KD/%5BWebUI%5D+Open+Browser/",
                    "/display/KD/%5BWebUI%5D%20Open%20Browser/",
                    "/x/9ogY/",
                    "/katalon-studio/docs/webui-open-browser/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-refresh",
                "from": [
                    "/katalon-studio/docs/webui-refresh.html",
                    "/display/KD/%5BWebUI%5D+Refresh/",
                    "/display/KD/%5BWebUI%5D%20Refresh/",
                    "/x/BokY/",
                    "/katalon-studio/docs/webui-refresh/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-remove-object-property",
                "from": [
                    "/katalon-studio/docs/webui-remove-object-property.html",
                    "/display/KD/%5BWebUI%5D+Remove+Object+Property/",
                    "/display/KD/%5BWebUI%5D%20Remove%20Object%20Property/",
                    "/x/wooY/",
                    "/katalon-studio/docs/webui-remove-object-property/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-right-click",
                "from": [
                    "/katalon-studio/docs/webui-right-click.html",
                    "/display/KD/%5BWebUI%5D+Right+Click/",
                    "/display/KD/%5BWebUI%5D%20Right%20Click/",
                    "/x/T4kY/",
                    "/katalon-studio/docs/webui-right-click/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-right-click-offset",
                "from": [
                    "/katalon-studio/docs/webui-right-click-offset.html",
                    "/display/KD/%5BWebUI%5D+Right+Click+Offset/",
                    "/display/KD/%5BWebUI%5D%20Right%20Click%20Offset/",
                    "/x/gg5O/",
                    "/katalon-studio/docs/webui-right-click-offset/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-scroll-to-element",
                "from": [
                    "/katalon-studio/docs/webui-scroll-to-element.html",
                    "/display/KD/%5BWebUI%5D+Scroll+To+Element/",
                    "/display/KD/%5BWebUI%5D%20Scroll%20To%20Element/",
                    "/x/U4kY/",
                    "/katalon-studio/docs/webui-scroll-to-element/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-scroll-to-position",
                "from": [
                    "/katalon-studio/docs/webui-scroll-to-position.html",
                    "/display/KD/%5BWebUI%5D+Scroll+To+Position/",
                    "/display/KD/%5BWebUI%5D%20Scroll%20To%20Position/",
                    "/x/vYwY/",
                    "/katalon-studio/docs/webui-scroll-to-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-all-option",
                "from": [
                    "/katalon-studio/docs/webui-select-all-option.html",
                    "/display/KD/%5BWebUI%5D+Select+All+Option/",
                    "/display/KD/%5BWebUI%5D%20Select%20All%20Option/",
                    "/katalon-studio/docs/webui-select-all-option/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-option-by-index",
                "from": [
                    "/katalon-studio/docs/webui-select-option-by-index.html",
                    "/display/KD/%5BWebUI%5D+Select+Option+By+Index/",
                    "/display/KD/%5BWebUI%5D%20Select%20Option%20By%20Index/",
                    "/x/JZIY/",
                    "/katalon-studio/docs/webui-select-option-by-index/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-option-by-label",
                "from": [
                    "/katalon-studio/docs/webui-select-option-by-label.html",
                    "/display/KD/%5BWebUI%5D+Select+Option+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Select%20Option%20By%20Label/",
                    "/x/KZIY/",
                    "/katalon-studio/docs/webui-select-option-by-label/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-option-by-value",
                "from": [
                    "/katalon-studio/docs/webui-select-option-by-value.html",
                    "/display/KD/%5BWebUI%5D+Select+Option+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Select%20Option%20By%20Value/",
                    "/x/LZIY/",
                    "/katalon-studio/docs/webui-select-option-by-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-send-keys",
                "from": [
                    "/katalon-studio/docs/webui-send-keys.html",
                    "/display/KD/%5BWebUI%5D+Send+Keys/",
                    "/display/KD/%5BWebUI%5D%20Send%20Keys/",
                    "/x/vIgY/",
                    "/katalon-studio/docs/webui-send-keys/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-alert-text",
                "from": [
                    "/katalon-studio/docs/webui-set-alert-text.html",
                    "/display/KD/%5BWebUI%5D+Set+Alert+Text/",
                    "/display/KD/%5BWebUI%5D%20Set%20Alert%20Text/",
                    "/x/LYgY/",
                    "/katalon-studio/docs/webui-set-alert-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-encrypted-text",
                "from": [
                    "/katalon-studio/docs/webui-set-encrypted-text.html",
                    "/display/KD/%5BWebUI%5D+Set+Encrypted+Text/",
                    "/display/KD/%5BWebUI%5D%20Set%20Encrypted%20Text/",
                    "/x/6AHR/",
                    "/katalon-studio/docs/webui-set-encrypted-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-masked-text",
                "from": [
                    "/katalon-studio/docs/webui-set-masked-text.html",
                    "/display/KD/%5BWebUI%5D+Set+Masked+Text/",
                    "/display/KD/%5BWebUI%5D%20Set%20Masked%20Text/",
                    "/x/JBBO/",
                    "/katalon-studio/docs/webui-set-masked-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-text",
                "from": [
                    "/katalon-studio/docs/webui-set-text.html",
                    "/display/KD/%5BWebUI%5D+Set+Text/",
                    "/display/KD/%5BWebUI%5D%20Set%20Text/",
                    "/x/T4cY/",
                    "/katalon-studio/docs/webui-set-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-view-port-size",
                "from": [
                    "/katalon-studio/docs/webui-set-view-port-size.html",
                    "/display/KD/%5BWebUI%5D+Set+View+Port+Size/",
                    "/display/KD/%5BWebUI%5D%20Set%20View%20Port%20Size/",
                    "/x/4YwY/",
                    "/katalon-studio/docs/webui-set-view-port-size/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-smart-wait-function",
                "from": [
                    "/katalon-studio/docs/webui-smartwait.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-submit",
                "from": [
                    "/katalon-studio/docs/webui-submit.html",
                    "/display/KD/%5BWebUI%5D+Submit/",
                    "/display/KD/%5BWebUI%5D%20Submit/",
                    "/x/EIgY/",
                    "/katalon-studio/docs/webui-submit/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-default-content",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-default-content.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Default+Content/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Default%20Content/",
                    "/x/FYgY/",
                    "/katalon-studio/docs/webui-switch-to-default-content/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-frame",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-frame.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Frame/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Frame/",
                    "/x/JYgY/",
                    "/katalon-studio/docs/webui-switch-to-frame/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-window-index",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-window-index.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Window+Index/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Window%20Index/",
                    "/x/Bo0Y/",
                    "/katalon-studio/docs/webui-switch-to-window-index/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-window-title",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-window-title.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Window+Title/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Window%20Title/",
                    "/x/LI0Y/",
                    "/katalon-studio/docs/webui-switch-to-window-title/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-window-url",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-window-url.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Window+Url/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Window%20Url/",
                    "/x/U40Y/",
                    "/katalon-studio/docs/webui-switch-to-window-url/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-area-screenshot",
                "from": [
                    "/katalon-studio/docs/webui-take-area-screenshot.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-element-screenshot",
                "from": [
                    "/katalon-studio/docs/webui-take-element-screenshot.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-full-page-screenshot",
                "from": [
                    "/katalon-studio/docs/webui-take-fullpage-screenshot.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-screenshot",
                "from": [
                    "/katalon-studio/docs/webui-take-screenshot.html",
                    "/display/KD/%5BWebUI%5D+Take+Screenshot/",
                    "/display/KD/%5BWebUI%5D%20Take%20Screenshot/",
                    "/x/2IoY/",
                    "/katalon-studio/docs/webui-take-screenshot/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-type-on-image",
                "from": [
                    "/katalon-studio/docs/webui-type-on-image.html",
                    "/display/KD/%5BWebUI%5D+Type+On+Image/",
                    "/display/KD/%5BWebUI%5D%20Type%20On%20Image/",
                    "/x/RYgY/",
                    "/katalon-studio/docs/webui-type-on-image/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-un-check",
                "from": [
                    "/katalon-studio/docs/webui-un-check.html",
                    "/display/KD/%5BWebUI%5D+Un-check/",
                    "/display/KD/%5BWebUI%5D%20Un-check/",
                    "/x/F4kY/",
                    "/katalon-studio/docs/webui-un-check/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-upload-file",
                "from": [
                    "/katalon-studio/docs/webui-upload-file.html",
                    "/display/KD/%5BWebUI%5D+Upload+File/",
                    "/display/KD/%5BWebUI%5D%20Upload%20File/",
                    "/x/gYkY/",
                    "/katalon-studio/docs/webui-upload-file/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-upload-file-by-drag-and-drop",
                "from": [
                    "/katalon-studio/docs/webui-upload-file-drag-and-drop.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-alert-not-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-alert-not-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Alert+Not+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Alert%20Not%20Present/",
                    "/x/iYgY/",
                    "/katalon-studio/docs/webui-verify-alert-not-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-alert-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-alert-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Alert+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Alert%20Present/",
                    "/x/kogY/",
                    "/katalon-studio/docs/webui-verify-alert-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-all-links-on-current-page-accessible",
                "from": [
                    "/katalon-studio/docs/webui-verify-all-links-on-current-page-accessible.html",
                    "/display/KD/%5BWebUI%5D+Verify+All+Links+On+Current+Page+Accessible/",
                    "/display/KD/%5BWebUI%5D%20Verify%20All%20Links%20On%20Current%20Page%20Accessible/",
                    "/x/ChBO/",
                    "/katalon-studio/docs/webui-verify-all-links-on-current-page-accessible/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-attribute-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Attribute+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Attribute%20Value/",
                    "/x/WIkY/",
                    "/katalon-studio/docs/webui-verify-element-attribute-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-checked",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-checked.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Checked/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Checked/",
                    "/x/HYkY/",
                    "/katalon-studio/docs/webui-verify-element-checked/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-clickable",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-clickable.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Clickable/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Clickable/",
                    "/x/W4kY/",
                    "/katalon-studio/docs/webui-verify-element-clickable/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-has-attribute",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-has-attribute.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Has+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Has%20Attribute/",
                    "/x/2okY/",
                    "/katalon-studio/docs/webui-verify-element-has-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/web-ui-verify-element-not-checked",
                "from": [
                    "/katalon-studio/docs/web-ui-verify-element-not-checked.html",
                    "/display/KD/%5BWeb+UI%5D+Verify+Element+Not+Checked/",
                    "/display/KD/%5BWeb%20UI%5D%20Verify%20Element%20Not%20Checked/",
                    "/x/I4kY/",
                    "/katalon-studio/docs/web-ui-verify-element-not-checked/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-clickable",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-clickable.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Clickable/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Clickable/",
                    "/x/3okY/",
                    "/katalon-studio/docs/webui-verify-element-not-clickable/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-has-attribute",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-has-attribute.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Has+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Has%20Attribute/",
                    "/x/DooY/",
                    "/katalon-studio/docs/webui-verify-element-not-has-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Present/",
                    "/x/FYoY/",
                    "/katalon-studio/docs/webui-verify-element-not-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-in-viewport",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-in-viewport.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Visible+In+Viewport/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Visible%20In%20Viewport/",
                    "/x/HooY/",
                    "/katalon-studio/docs/webui-verify-element-not-visible-in-viewport/",
                    "/katalon-studio/docs/webui-verify-element-not-visible-in-viewport.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-visible",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-visible.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Visible/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Visible/",
                    "/x/GooY/",
                    "/katalon-studio/docs/webui-verify-element-not-visible/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Present/",
                    "/x/MYoY/",
                    "/katalon-studio/docs/webui-verify-element-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-text",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-text.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Text/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Text/",
                    "/x/DA5O/",
                    "/katalon-studio/docs/webui-verify-element-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-visible",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-visible.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Visible/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Visible/",
                    "/x/XYoY/",
                    "/katalon-studio/docs/webui-verify-element-visible/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-in-viewport",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-in-viewport.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Visible+In+Viewport/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Visible%20In%20Viewport/",
                    "/x/7ooY/",
                    "/katalon-studio/docs/webui-verify-element-visible-in-viewport/",
                    "/katalon-studio/docs/webui-verify-element-visible-in-viewport.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-image-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-image-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Image+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Image%20Present/",
                    "/x/WIgY/",
                    "/katalon-studio/docs/webui-verify-image-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-links-accessible",
                "from": [
                    "/katalon-studio/docs/webui-verify-links-accessible.html",
                    "/display/KD/%5BWebUI%5D+Verify+Links+Accessible/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Links%20Accessible/",
                    "/x/DBBO/",
                    "/katalon-studio/docs/webui-verify-links-accessible/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-present-by-label",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-present-by-label.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Present+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Present%20By%20Label/",
                    "/x/PpIY/",
                    "/katalon-studio/docs/webui-verify-option-not-present-by-label/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-present-by-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-present-by-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Present+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Present%20By%20Value/",
                    "/x/uQdO/",
                    "/katalon-studio/docs/webui-verify-option-not-present-by-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-selected-by-index",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-index.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Selected+By+Index/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Selected%20By%20Index/",
                    "/x/XJIY/",
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-index/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-selected-by-label",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-label.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Selected+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Selected%20By%20Label/",
                    "/x/YJIY/",
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-label/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-selected-by-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Selected+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Selected%20By%20Value/",
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-present-by-label",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-present-by-label.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Present+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Present%20By%20Label/",
                    "/x/kJIY/",
                    "/katalon-studio/docs/webui-verify-option-present-by-label/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-present-by-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-present-by-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Present+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Present%20By%20Value/",
                    "/x/lJIY/",
                    "/katalon-studio/docs/webui-verify-option-present-by-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-selected-by-index",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-selected-by-index.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Selected+By+Index/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Selected%20By%20Index/",
                    "/x/mpIY/",
                    "/katalon-studio/docs/webui-verify-option-selected-by-index/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-selected-by-label",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-selected-by-label.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Selected+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Selected%20By%20Label/",
                    "/x/n5IY/",
                    "/katalon-studio/docs/webui-verify-option-selected-by-label/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-selected-by-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-selected-by-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Selected+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Selected%20By%20Value/",
                    "/x/o5IY/",
                    "/katalon-studio/docs/webui-verify-option-selected-by-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-options-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-options-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Options+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Options%20Present/",
                    "/x/xw1O/",
                    "/katalon-studio/docs/webui-verify-options-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-text-not-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-text-not-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Text+Not+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Text%20Not%20Present/",
                    "/x/SooY/",
                    "/katalon-studio/docs/webui-verify-text-not-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-text-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-text-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Text+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Text%20Present/",
                    "/x/YIoY/",
                    "/katalon-studio/docs/webui-verify-text-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-alert",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-alert.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Alert/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Alert/",
                    "/x/mYgY/",
                    "/katalon-studio/docs/webui-wait-for-alert/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-angular-load",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-angular-load.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Angular+Load/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Angular%20Load/",
                    "/x/9wxO/",
                    "/katalon-studio/docs/webui-wait-for-angular-load/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-attribute-value.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Attribute+Value/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Attribute%20Value/",
                    "/x/C4sY/",
                    "/katalon-studio/docs/webui-wait-for-element-attribute-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-clickable",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-clickable.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Clickable/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Clickable/",
                    "/x/b4sY/",
                    "/katalon-studio/docs/webui-wait-for-element-clickable/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-has-attribute",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-has-attribute.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Has+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Has%20Attribute/",
                    "/x/rYsY/",
                    "/katalon-studio/docs/webui-wait-for-element-has-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-clickable",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-not-clickable.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Clickable/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Clickable/",
                    "/x/SYwY/",
                    "/katalon-studio/docs/webui-wait-for-element-not-clickable/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-has-attribute",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-not-has-attribute.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Has+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Has%20Attribute/",
                    "/x/TYwY/",
                    "/katalon-studio/docs/webui-wait-for-element-not-has-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-present",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-not-present.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Present/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Present/",
                    "/x/cowY/",
                    "/katalon-studio/docs/webui-wait-for-element-not-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-visible",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-not-visible.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Visible/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Visible/",
                    "/x/mIwY/",
                    "/katalon-studio/docs/webui-wait-for-element-not-visible/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-present",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-present.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Present/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Present/",
                    "/x/tYcY/",
                    "/katalon-studio/docs/webui-wait-for-element-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-visible",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-visible.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Visible/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Visible/",
                    "/x/vocY/",
                    "/katalon-studio/docs/webui-wait-for-element-visible/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-image-present",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-image-present.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Image+Present/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Image%20Present/",
                    "/x/sIgY/",
                    "/katalon-studio/docs/webui-wait-for-image-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-jquery-load",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-jquery-load.html",
                    "/display/KD/%5BWebUI%5D+Wait+for+jQuery+Load/",
                    "/display/KD/%5BWebUI%5D%20Wait%20for%20jQuery%20Load/",
                    "/x/_QxO/",
                    "/katalon-studio/docs/webui-wait-for-jquery-load/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-page-load",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-page-load.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Page+Load/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Page%20Load/",
                    "/x/DYkY/",
                    "/katalon-studio/docs/webui-wait-for-page-load/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-area-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/webui-take-area-screenshot-as-checkpoint.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-element-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/webui-take-element-screenshot-as-checkpoint.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-full-page-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/webui-take-fullpage-screenshot-as-checkpoint.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/webui-take-screenshot-as-checkpoint.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-close-application",
                "from": [
                    "/katalon-studio/docs/mobile-close-application.html",
                    "/display/KD/%5BMobile%5D+Close+Application/",
                    "/display/KD/%5BMobile%5D%20Close%20Application/",
                    "/x/e40Y/",
                    "/katalon-studio/docs/mobile-close-application/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-clear-text",
                "from": [
                    "/katalon-studio/docs/mobile-clear-text.html",
                    "/display/KD/%5BMobile%5D+Clear+Text/",
                    "/display/KD/%5BMobile%5D%20Clear%20Text/",
                    "/x/TZMY/",
                    "/katalon-studio/docs/mobile-clear-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-close-notifications",
                "from": [
                    "/katalon-studio/docs/mobile-close-notifications.html",
                    "/display/KD/%5BMobile%5D+Close+Notifications/",
                    "/display/KD/%5BMobile%5D%20Close%20Notifications/",
                    "/katalon-studio/docs/mobile-close-notifications/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-check-element",
                "from": [
                    "/katalon-studio/docs/mobile-check-element.html",
                    "/display/KD/%5BMobile%5D+Check+Element/",
                    "/display/KD/%5BMobile%5D%20Check%20Element/",
                    "/x/2ocY/",
                    "/katalon-studio/docs/mobile-check-element/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-drag-and-drop",
                "from": [
                    "/katalon-studio/docs/mobile-drag-and-drop.html",
                    "/display/KD/%5BMobile%5D+Drag+And+Drop/",
                    "/display/KD/%5BMobile%5D%20Drag%20And%20Drop/",
                    "/x/L4gY/",
                    "/katalon-studio/docs/mobile-drag-and-drop/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-double-tap",
                "from": [
                    "/katalon-studio/docs/mobile-double-tap.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-execute-mobile-command",
                "from": [
                    "/katalon-studio/docs/mobile-execute-command.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-find-image-element",
                "from": [
                    "/katalon-studio/docs/mobile-find-image-element.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-find-image-elements",
                "from": [
                    "/katalon-studio/docs/mobile-find-image-elements.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-get-attribute.html",
                    "/display/KD/%5BMobile%5D+Get+Attribute/",
                    "/display/KD/%5BMobile%5D%20Get%20Attribute/",
                    "/x/_o0Y/",
                    "/katalon-studio/docs/mobile-get-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-height",
                "from": [
                    "/katalon-studio/docs/mobile-get-element-height.html",
                    "/display/KD/%5BMobile%5D+Get+Element+Height/",
                    "/display/KD/%5BMobile%5D%20Get%20Element%20Height/",
                    "/x/VogY/",
                    "/katalon-studio/docs/mobile-get-element-height/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-left-position",
                "from": [
                    "/katalon-studio/docs/mobile-get-element-left-position.html",
                    "/display/KD/%5BMobile%5D+Get+Element+Left+Position/",
                    "/display/KD/%5BMobile%5D%20Get%20Element%20Left%20Position/",
                    "/x/eY8Y/",
                    "/katalon-studio/docs/mobile-get-element-left-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-top-position",
                "from": [
                    "/katalon-studio/docs/mobile-get-element-top-position.html",
                    "/display/KD/%5BMobile%5D+Get+Element+Top+Position/",
                    "/display/KD/%5BMobile%5D%20Get%20Element%20Top%20Position/",
                    "/x/rY8Y/",
                    "/katalon-studio/docs/mobile-get-element-top-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-width",
                "from": [
                    "/katalon-studio/docs/mobile-get-element-width.html",
                    "/display/KD/%5BMobile%5D+Get+Element+Width/",
                    "/display/KD/%5BMobile%5D%20Get%20Element%20Width/",
                    "/x/e4gY/",
                    "/katalon-studio/docs/mobile-get-element-width/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-current-orientation",
                "from": [
                    "/katalon-studio/docs/mobile-get-current-orientation.html",
                    "/display/KD/%5BMobile%5D+Get+Current+Orientation/",
                    "/display/KD/%5BMobile%5D%20Get%20Current%20Orientation/",
                    "/x/KI4Y/",
                    "/katalon-studio/docs/mobile-get-current-orientation/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-height",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-height.html",
                    "/display/KD/%5BMobile%5D+Get+Device+Height/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20Height/",
                    "/x/Vo4Y/",
                    "/katalon-studio/docs/mobile-get-device-height/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-manufacturer",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-manufacturer.html",
                    "/display/KD/%5BMobile%5D+Get+Device+Manufacturer/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20Manufacturer/",
                    "/x/hI4Y/",
                    "/katalon-studio/docs/mobile-get-device-manufacturer/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-os",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-os.html",
                    "/display/KD/%5BMobile%5D+Get+Device+OS/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20OS/",
                    "/x/444Y/",
                    "/katalon-studio/docs/mobile-get-device-os/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-os-version",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-os-version.html",
                    "/display/KD/%5BMobile%5D+Get+Device+OS+Version/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20OS%20Version/",
                    "/x/FI8Y/",
                    "/katalon-studio/docs/mobile-get-device-os-version/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-width",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-width.html",
                    "/display/KD/%5BMobile%5D+Get+Device+Width/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20Width/",
                    "/x/Ro8Y/",
                    "/katalon-studio/docs/mobile-get-device-width/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-text",
                "from": [
                    "/katalon-studio/docs/mobile-get-text.html",
                    "/display/KD/%5BMobile%5D+Get+Text/",
                    "/display/KD/%5BMobile%5D%20Get%20Text/",
                    "/x/epMY/",
                    "/katalon-studio/docs/mobile-get-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-hide-keyboard",
                "from": [
                    "/katalon-studio/docs/mobile-hide-keyboard.html",
                    "/display/KD/%5BMobile%5D+Hide+Keyboard/",
                    "/display/KD/%5BMobile%5D%20Hide%20Keyboard/",
                    "/x/4o8Y/",
                    "/katalon-studio/docs/mobile-hide-keyboard/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-long-press",
                "from": [
                    "/katalon-studio/docs/mobile-long-press.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-open-notifications",
                "from": [
                    "/katalon-studio/docs/mobile-open-notifications.html",
                    "/display/KD/%5BMobile%5D+Open+Notifications/",
                    "/display/KD/%5BMobile%5D%20Open%20Notifications/",
                    "/x/m5IY/",
                    "/katalon-studio/docs/mobile-open-notifications/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-perform-touch-id",
                "from": [
                    "/katalon-studio/docs/mobile-perform-touchID.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-press-back",
                "from": [
                    "/katalon-studio/docs/mobile-press-back.html",
                    "/display/KD/%5BMobile%5D+Press+Back/",
                    "/display/KD/%5BMobile%5D%20Press%20Back/",
                    "/x/JJQY/",
                    "/katalon-studio/docs/mobile-press-back/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-press-home",
                "from": [
                    "/katalon-studio/docs/mobile-press-home.html",
                    "/display/KD/%5BMobile%5D+Press+Home/",
                    "/display/KD/%5BMobile%5D%20Press%20Home/",
                    "/x/NJQY/",
                    "/katalon-studio/docs/mobile-press-home/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-pinch-to-zoom-in-at-position",
                "from": [
                    "/katalon-studio/docs/mobile-pinch-to-zoom-in-at-position.html",
                    "/display/KD/%5BMobile%5D+Pinch+To+Zoom+In+At+Position/",
                    "/display/KD/%5BMobile%5D%20Pinch%20To%20Zoom%20In%20At%20Position/",
                    "/x/75IY/",
                    "/katalon-studio/docs/mobile-pinch-to-zoom-in-at-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-pinch-to-zoom-out-at-position",
                "from": [
                    "/katalon-studio/docs/mobile-pinch-to-zoom-out-at-position.html",
                    "/display/KD/%5BMobile%5D+Pinch+To+Zoom+Out+At+Position/",
                    "/display/KD/%5BMobile%5D%20Pinch%20To%20Zoom%20Out%20At%20Position/",
                    "/x/95IY/",
                    "/katalon-studio/docs/mobile-pinch-to-zoom-out-at-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-run-the-ios-app-in-the-background-and-wait",
                "from": [
                    "/katalon-studio/docs/mobile-run-ios-app-in-background-and-wait.html",
                    "/display/KD/%5BMobile%5D+Run+iOS+App+in+Background+and+Wait/",
                    "/display/KD/%5BMobile%5D%20Run%20iOS%20App%20in%20Background%20and%20Wait/",
                    "/x/pI0Y/",
                    "/katalon-studio/docs/mobile-run-ios-app-in-background-and-wait/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-scroll-to-text",
                "from": [
                    "/katalon-studio/docs/mobile-scroll-to-text.html",
                    "/display/KD/%5BMobile%5D+Scroll+To+Text/",
                    "/display/KD/%5BMobile%5D%20Scroll%20To%20Text/",
                    "/x/h5MY/",
                    "/katalon-studio/docs/mobile-scroll-to-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-send-keys",
                "from": [
                    "/katalon-studio/docs/mobile-send-keys.html",
                    "/display/KD/%5BMobile%5D+Send+Keys/",
                    "/display/KD/%5BMobile%5D%20Send%20Keys/",
                    "/x/kg9O/",
                    "/katalon-studio/docs/mobile-send-keys/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-select-list-item-by-index",
                "from": [
                    "/katalon-studio/docs/mobile-select-list-item-by-index.html",
                    "/display/KD/%5BMobile%5D+Select+List+Item+By+Index/",
                    "/display/KD/%5BMobile%5D%20Select%20List%20Item%20By%20Index/",
                    "/x/hogY/",
                    "/katalon-studio/docs/mobile-select-list-item-by-index/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-select-list-item-by-label",
                "from": [
                    "/katalon-studio/docs/mobile-select-list-item-by-label.html",
                    "/display/KD/%5BMobile%5D+Select+List+Item+By+Label/",
                    "/display/KD/%5BMobile%5D%20Select%20List%20Item%20By%20Label/",
                    "/x/pIgY/",
                    "/katalon-studio/docs/mobile-select-list-item-by-label/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-set-encrypted-text",
                "from": [
                    "/katalon-studio/docs/mobile-set-encrypted-text.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-set-slider-value",
                "from": [
                    "/katalon-studio/docs/mobile-set-slider-value.html",
                    "/display/KD/%5BMobile%5D+Set+Slider+Value/",
                    "/display/KD/%5BMobile%5D%20Set%20Slider%20Value/",
                    "/x/6IgY/",
                    "/katalon-studio/docs/mobile-set-slider-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-set-text",
                "from": [
                    "/katalon-studio/docs/mobile-set-text.html",
                    "/display/KD/%5BMobile%5D+Set+Text/",
                    "/display/KD/%5BMobile%5D%20Set%20Text/",
                    "/x/lZMY/",
                    "/katalon-studio/docs/mobile-set-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-landscape",
                "from": [
                    "/katalon-studio/docs/mobile-switch-to-landscape.html",
                    "/display/KD/%5BMobile%5D+Switch+To+Landscape/",
                    "/display/KD/%5BMobile%5D%20Switch%20To%20Landscape/",
                    "/x/GJAY/",
                    "/katalon-studio/docs/mobile-switch-to-landscape/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-native",
                "from": [
                    "/katalon-studio/docs/mobile-switch-to-native.html",
                    "/display/KD/%5BMobile%5D+Switch+To+Native/",
                    "/display/KD/%5BMobile%5D%20Switch%20To%20Native/",
                    "/x/T5AY/",
                    "/katalon-studio/docs/mobile-switch-to-native/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-portrait",
                "from": [
                    "/katalon-studio/docs/mobile-switch-to-portrait.html",
                    "/display/KD/%5BMobile%5D+Switch+To+Portrait/",
                    "/display/KD/%5BMobile%5D%20Switch%20To%20Portrait/",
                    "/x/h5AY/",
                    "/katalon-studio/docs/mobile-switch-to-portrait/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-web-view",
                "from": [
                    "/katalon-studio/docs/mobile-switch-to-web-view.html",
                    "/display/KD/%5BMobile%5D+Switch+To+Web+View/",
                    "/display/KD/%5BMobile%5D%20Switch%20To%20Web%20View/",
                    "/x/wJAY/",
                    "/katalon-studio/docs/mobile-switch-to-web-view/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-start-application",
                "from": [
                    "/katalon-studio/docs/mobile-start-application.html",
                    "/display/KD/%5BMobile%5D+Start+Application/",
                    "/display/KD/%5BMobile%5D%20Start%20Application/",
                    "/x/zo0Y/",
                    "/katalon-studio/docs/mobile-start-application/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-start-existing-application",
                "from": [
                    "/katalon-studio/docs/mobile-keyword-start-existing-apps.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-swipe",
                "from": [
                    "/katalon-studio/docs/mobile-swipe.html",
                    "/display/KD/%5BMobile%5D+Swipe/",
                    "/display/KD/%5BMobile%5D%20Swipe/",
                    "/x/-pIY/",
                    "/katalon-studio/docs/mobile-swipe/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-take-screenshot",
                "from": [
                    "/katalon-studio/docs/mobile-take-screenshot.html",
                    "/display/KD/%5BMobile%5D+Take+Screenshot/",
                    "/display/KD/%5BMobile%5D%20Take%20Screenshot/",
                    "/x/WpQY/",
                    "/katalon-studio/docs/mobile-take-screenshot/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-take-area-screenshot",
                "from": [
                    "/katalon-studio/docs/mobile-take-area-screenshot.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-take-element-screenshot",
                "from": [
                    "/katalon-studio/docs/mobile-take-element-screenshot.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap",
                "from": [
                    "/katalon-studio/docs/mobile-tap.html",
                    "/display/KD/%5BMobile%5D+Tap/",
                    "/display/KD/%5BMobile%5D%20Tap/",
                    "/x/LpMY/",
                    "/katalon-studio/docs/mobile-tap/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-at-position",
                "from": [
                    "/katalon-studio/docs/mobile-tap-at-position.html",
                    "/display/KD/%5BMobile%5D+Tap+At+Position/",
                    "/display/KD/%5BMobile%5D%20Tap%20At%20Position/",
                    "/x/QJMY/",
                    "/katalon-studio/docs/mobile-tap-at-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-and-hold",
                "from": [
                    "/katalon-studio/docs/mobile-tap-and-hold.html",
                    "/display/KD/%5BMobile%5D+Tap+And+Hold/",
                    "/display/KD/%5BMobile%5D%20Tap%20And%20Hold/",
                    "/x/9IgY/",
                    "/katalon-studio/docs/mobile-tap-and-hold/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-and-hold-at-position",
                "from": [
                    "/katalon-studio/docs/mobile-tap-and-hold-at-position.html",
                    "/display/KD/%5BMobile%5D+Tap+And+Hold+At+Position/",
                    "/display/KD/%5BMobile%5D%20Tap%20And%20Hold%20At%20Position/",
                    "/x/N5MY/",
                    "/katalon-studio/docs/mobile-tap-and-hold-at-position/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-on-image",
                "from": [
                    "/katalon-studio/docs/mobile-tap-image.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-toggle-airplane-mode",
                "from": [
                    "/katalon-studio/docs/mobile-toggle-airplane-mode.html",
                    "/display/KD/%5BMobile%5D+Toggle+Airplane+Mode/",
                    "/display/KD/%5BMobile%5D%20Toggle%20Airplane%20Mode/",
                    "/x/XJQY/",
                    "/katalon-studio/docs/mobile-toggle-airplane-mode/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-toggle-wifi",
                "from": [
                    "/katalon-studio/docs/mobile-toggle-wifi.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-unlock-screen",
                "from": [
                    "/katalon-studio/docs/mobile-unlock-screen.html",
                    "/display/KD/%5BMobile%5D+Unlock+Screen/",
                    "/display/KD/%5BMobile%5D%20Unlock%20Screen/",
                    "/x/_pAY/",
                    "/katalon-studio/docs/mobile-unlock-screen/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-uncheck-element",
                "from": [
                    "/katalon-studio/docs/mobile-uncheck-element.html",
                    "/display/KD/%5BMobile%5D+Uncheck+Element/",
                    "/display/KD/%5BMobile%5D%20Uncheck%20Element/",
                    "/x/BIkY/",
                    "/katalon-studio/docs/mobile-uncheck-element/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-use-fingerprint",
                "from": [
                    "/katalon-studio/docs/mobile-use-fingerprint.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-image-present",
                "from": [
                    "/katalon-studio/docs/mobile-verify-image-present.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-is-landscape",
                "from": [
                    "/katalon-studio/docs/mobile-verify-is-landscape.html",
                    "/display/KD/%5BMobile%5D+Verify+Is+Landscape/",
                    "/display/KD/%5BMobile%5D%20Verify%20Is%20Landscape/",
                    "/x/NZEY/",
                    "/katalon-studio/docs/mobile-verify-is-landscape/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-is-portrait",
                "from": [
                    "/katalon-studio/docs/mobile-verify-is-portrait.html",
                    "/display/KD/%5BMobile%5D+Verify+Is+Portrait/",
                    "/display/KD/%5BMobile%5D%20Verify%20Is%20Portrait/",
                    "/x/qYcY/",
                    "/katalon-studio/docs/mobile-verify-is-portrait/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-attribute-value.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Attribute+Value/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Attribute%20Value/",
                    "/x/YpEY/",
                    "/katalon-studio/docs/mobile-verify-element-attribute-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-checked",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-checked.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Checked/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Checked/",
                    "/x/cJEY/",
                    "/katalon-studio/docs/mobile-verify-element-checked/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-exist",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-exist.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Exist/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Exist/",
                    "/x/jZEY/",
                    "/katalon-studio/docs/mobile-verify-element-exist/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-has-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-has-attribute.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Has+Attribute/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Has%20Attribute/",
                    "/x/npEY/",
                    "/katalon-studio/docs/mobile-verify-element-has-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-checked",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-not-checked.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Not+Checked/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Checked/",
                    "/x/fpEY/",
                    "/katalon-studio/docs/mobile-verify-element-not-checked/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-exist",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-not-exist.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Not+Exist/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Exist/",
                    "/x/vZEY/",
                    "/katalon-studio/docs/mobile-verify-element-not-exist/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-has-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-not-has-attribute.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Not+Has+Attribute/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Has%20Attribute/",
                    "/x/zZEY/",
                    "/katalon-studio/docs/mobile-verify-element-not-has-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-visible",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-not-visible.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Not+Visible/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Visible/",
                    "/x/75EY/",
                    "/katalon-studio/docs/mobile-verify-element-not-visible/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-visible",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-visible.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Visible/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Visible/",
                    "/x/3ZEY/",
                    "/katalon-studio/docs/mobile-verify-element-visible/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-text",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-text.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-attribute-value.html",
                    "/display/KD/%5BMobile%5D+Wait+For+Element+Attribute+Value/",
                    "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Attribute%20Value/",
                    "/x/-ZEY/",
                    "/katalon-studio/docs/mobile-wait-for-element-attribute-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-has-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-has-attribute.html",
                    "/display/KD/%5BMobile%5D+Wait+For+Element+Has+Attribute/",
                    "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Has%20Attribute/",
                    "/x/QpIY/",
                    "/katalon-studio/docs/mobile-wait-for-element-has-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-not-has-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-not-has-attribute.html",
                    "/display/KD/%5BMobile%5D+Wait+For+Element+Not+Has+Attribute/",
                    "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Not%20Has%20Attribute/",
                    "/x/Y5IY/",
                    "/katalon-studio/docs/mobile-wait-for-element-not-has-attribute/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-present",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-present.html",
                    "/display/KD/%5BMobile%5D+Wait+For+Element+Present/",
                    "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Present/",
                    "/katalon-studio/docs/mobile-wait-for-element-present/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-not-present",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-not-present.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/visual-based-mobile-testing-keywords/mobile-take-area-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/mobile-take-area-screenshot-as-checkpoint.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/visual-based-mobile-testing-keywords/mobile-take-element-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/mobile-take-element-screenshot-as-checkpoint.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/visual-based-mobile-testing-keywords/mobile-take-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/mobile-take-screenshot-as-checkpoint.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-contains-string",
                "from": [
                    "/katalon-studio/docs/ws-contains-string.html",
                    "/display/KD/%5BWS%5D+Contains+String/",
                    "/display/KD/%5BWS%5D%20Contains%20String/",
                    "/x/M5UY/",
                    "/katalon-studio/docs/ws-contains-string/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-send-request",
                "from": [
                    "/katalon-studio/docs/ws-send-request.html",
                    "/display/KD/%5BWS%5D+Send+Request/",
                    "/display/KD/%5BWS%5D%20Send%20Request/",
                    "/x/f5QY/",
                    "/katalon-studio/docs/ws-send-request/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-element-property-value",
                "from": [
                    "/katalon-studio/docs/ws-verify-element-property-value.html",
                    "/display/KD/%5BWS%5D+Verify+Element+Property+Value/",
                    "/display/KD/%5BWS%5D%20Verify%20Element%20Property%20Value/",
                    "/x/bZQY/",
                    "/katalon-studio/docs/ws-verify-element-property-value/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-elements-count",
                "from": [
                    "/katalon-studio/docs/ws-verify-elements-count.html",
                    "/display/KD/%5BWS%5D+Verify+Elements+Count/",
                    "/display/KD/%5BWS%5D%20Verify%20Elements%20Count/",
                    "/x/pJQY/",
                    "/katalon-studio/docs/ws-verify-elements-count/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-element-text",
                "from": [
                    "/katalon-studio/docs/ws-verify-element-text.html",
                    "/display/KD/%5BWS%5D+Verify+Element+Text/",
                    "/display/KD/%5BWS%5D%20Verify%20Element%20Text/",
                    "/x/kZQY/",
                    "/katalon-studio/docs/ws-verify-element-text/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-response-status-code",
                "from": [
                    "/katalon-studio/docs/ws-verify-response-status-code.html",
                    "/display/KD/%5BWS%5D+Verify+Response+Status+Code/",
                    "/display/KD/%5BWS%5D%20Verify%20Response%20Status%20Code/",
                    "/x/DhBO/",
                    "/katalon-studio/docs/ws-verify-response-status-code/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-response-status-code-in-range",
                "from": [
                    "/katalon-studio/docs/ws-verify-response-status-code-in-range.html",
                    "/display/KD/%5BWS%5D+Verify+Response+Status+Code+In+Range/",
                    "/display/KD/%5BWS%5D%20Verify%20Response%20Status%20Code%20In%20Range/",
                    "/x/ERBO/",
                    "/katalon-studio/docs/ws-verify-response-status-code-in-range/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-get-har-file-generation",
                "from": [
                    "/katalon-studio/docs/ws-get-har-file-generation.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-set-har-file-generation",
                "from": [
                    "/katalon-studio/docs/ws-set-har-file-generation.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-clear-text",
                "from": [
                    "/katalon-studio/docs/windows-kw-clear-text.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-close-application",
                "from": [
                    "/katalon-studio/docs/windows-kw-close-app.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-click",
                "from": [
                    "/katalon-studio/docs/windows-kw-click.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-click-element-offset",
                "from": [
                    "/katalon-studio/docs/windows-kw-click-element-offset.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-double-click",
                "from": [
                    "/katalon-studio/docs/windows-kw-double-click.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-find-element",
                "from": [
                    "/katalon-studio/docs/windows-kw-findelement.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-find-elements",
                "from": [
                    "/katalon-studio/docs/windows-kw-findelements.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-attribute",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-attribute.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-element-position",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-element-position.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-element-rectangle",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-element-rect.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-text",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-text.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-driver",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-driver.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-right-click",
                "from": [
                    "/katalon-studio/docs/windows-kw-rightclick.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-right-click-element-offset",
                "from": [
                    "/katalon-studio/docs/windows-kw-rightclick-element-offset.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-set-encrypted-text",
                "from": [
                    "/katalon-studio/docs/windows-kw-set-encrypted-text.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-window",
                "from": [
                    "/katalon-studio/docs/windows-kw-switch-window.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-window-title",
                "from": [
                    "/katalon-studio/docs/windows-kw-switch-window-title.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-send-keys",
                "from": [
                    "/katalon-studio/docs/windows-kw-senkey.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-set-text",
                "from": [
                    "/katalon-studio/docs/windows-kw-set-text.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-start-application-with-title",
                "from": [
                    "/katalon-studio/docs/windows-kw-start-app-title.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-start-application",
                "from": [
                    "/katalon-studio/docs/windows-kw-start-app.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-desktop",
                "from": [
                    "/katalon-studio/docs/windows-kw-switch-desktop.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-application",
                "from": [
                    "/katalon-studio/docs/windows-kw-switch-app.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-verify-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/windows-kw-verify-element-attribute-value.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-verify-element-not-present",
                "from": [
                    "/katalon-studio/docs/windows-kw-verify-element-not-present.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-verify-element-present",
                "from": [
                    "/katalon-studio/docs/windows-kw-verify-element-present.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-wait-for-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/windows-kw-wait-element-attribute-value.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-wait-for-element-not-present",
                "from": [
                    "/katalon-studio/docs/windows-kw-wait-element-not-present.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-wait-for-element-present",
                "from": [
                    "/katalon-studio/docs/windows-kw-wait-element-present.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-file-with-tags",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-feature-file-tag.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-file",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-feature-file.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-folder-with-tags",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-feature-folder-tag.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-folder",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-feature-folder.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-with-cucumber-runner",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-cucumber-runner.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-checkpoint",
                "from": [
                    "/katalon-studio/docs/common-verify-checkpoint.html",
                    "/display/KD/%5BCommon%5D+Verify+Checkpoint/",
                    "/display/KD/%5BCommon%5D%20Verify%20Checkpoint/",
                    "/x/oIIi/",
                    "/katalon-studio/docs/common-verify-checkpoint/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-equal",
                "from": [
                    "/katalon-studio/docs/common-verify-equal.html",
                    "/display/KD/%5BCommon%5D+Verify+Equal/",
                    "/display/KD/%5BCommon%5D%20Verify%20Equal/",
                    "/x/iIkY/",
                    "/katalon-studio/docs/common-verify-equal/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-greater-than",
                "from": [
                    "/katalon-studio/docs/common-verify-greater-than.html",
                    "/display/KD/%5BCommon%5D+Verify+Greater+Than/",
                    "/display/KD/%5BCommon%5D%20Verify%20Greater%20Than/",
                    "/x/2IEi/",
                    "/katalon-studio/docs/common-verify-greater-than/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-greater-than-or-equal",
                "from": [
                    "/katalon-studio/docs/common-verify-greater-than-or-equal.html",
                    "/display/KD/%5BCommon%5D+Verify+Greater+Than+Or+Equal/",
                    "/display/KD/%5BCommon%5D%20Verify%20Greater%20Than%20Or%20Equal/",
                    "/x/4IEi/",
                    "/katalon-studio/docs/common-verify-greater-than-or-equal/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-less-than",
                "from": [
                    "/katalon-studio/docs/common-verify-less-than.html",
                    "/display/KD/%5BCommon%5D+Verify+Less+Than/",
                    "/display/KD/%5BCommon%5D%20Verify%20Less%20Than/",
                    "/x/6YEi/",
                    "/katalon-studio/docs/common-verify-less-than/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-less-than-or-equal",
                "from": [
                    "/katalon-studio/docs/common-verify-less-than-or-equal.html",
                    "/display/KD/%5BCommon%5D+Verify+Less+Than+Or+Equal/",
                    "/display/KD/%5BCommon%5D%20Verify%20Less%20Than%20Or%20Equal/",
                    "/x/84Ei/",
                    "/katalon-studio/docs/common-verify-less-than-or-equal/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-match",
                "from": [
                    "/katalon-studio/docs/common-verify-match.html",
                    "/display/KD/%5BCommon%5D+Verify+Match/",
                    "/display/KD/%5BCommon%5D%20Verify%20Match/",
                    "/x/RYIi/",
                    "/katalon-studio/docs/common-verify-match/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-not-equal",
                "from": [
                    "/katalon-studio/docs/common-verify-not-equal.html",
                    "/display/KD/%5BCommon%5D+Verify+Not+Equal/",
                    "/display/KD/%5BCommon%5D%20Verify%20Not%20Equal/",
                    "/x/-oEi/",
                    "/katalon-studio/docs/common-verify-not-equal/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-not-match",
                "from": [
                    "/katalon-studio/docs/common-verify-not-match.html",
                    "/display/KD/%5BCommon%5D+Verify+Not+Match/",
                    "/display/KD/%5BCommon%5D%20Verify%20Not%20Match/",
                    "/x/tJMY/",
                    "/katalon-studio/docs/common-verify-not-match/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/utilities-keywords/common-call-test-case",
                "from": [
                    "/katalon-studio/docs/common-call-test-case.html",
                    "/display/KD/%5BCommon%5D+Call+Test+Case/",
                    "/display/KD/%5BCommon%5D%20Call%20Test%20Case/",
                    "/x/roIi/",
                    "/katalon-studio/docs/common-call-test-case/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/utilities-keywords/common-comment",
                "from": [
                    "/katalon-studio/docs/common-comment.html",
                    "/display/KD/%5BCommon%5D+Comment/",
                    "/display/KD/%5BCommon%5D%20Comment/",
                    "/x/KIIi/",
                    "/katalon-studio/docs/common-comment/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/utilities-keywords/common-concatenate",
                "from": [
                    "/katalon-studio/docs/common-concatenate.html",
                    "/display/KD/%5BCommon%5D+Concatenate/",
                    "/display/KD/%5BCommon%5D%20Concatenate/",
                    "/x/a4Ii/",
                    "/katalon-studio/docs/common-concatenate/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/keywords/utilities-keywords/common-delay",
                "from": [
                    "/katalon-studio/docs/common-delay.html",
                    "/display/KD/%5BCommon%5D+Delay/",
                    "/display/KD/%5BCommon%5D%20Delay/",
                    "/x/XYIi/",
                    "/katalon-studio/docs/common-delay/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/execute-and-debug-a-test-case",
                "from": [
                    "/katalon-studio/docs/execute-a-test-case-or-a-test-suite.html",
                    "/display/KD/Execute+a+Test+Case+or+a+Test+Suite/",
                    "/display/KD/Execute%20a%20Test%20Case%20or%20a%20Test%20Suite/",
                    "/x/GAvR/",
                    "/katalon-studio/docs/execute-a-test-case-or-a-test-suite/",
                    "/display/KD/Execute+a+test+suite/",
                    "/katalon-studio/tutorials/executing_test_case.html",
                    "/display/KD/Execute+a+test+case/",
                    "/display/KD/Execute%20a%20test%20case/",
                    "/x/ugAM/",
                    "/katalon-studio/docs/execute-a-test-case/",
                    "/katalon-studio/docs/execute-a-test-case.html",
                    "/display/KD/Execute+test+from+specific+step/",
                    "/katalon-studio/tutorials/execute_debug_certain_steps.html",
                    "/display/KD/Debug+Automation+Test/",
                    "/display/KD/Debug%20Automation%20Test/",
                    "/x/C4Ew/",
                    "/katalon-studio/docs/debug-automation-test/",
                    "/katalon-studio/docs/debug-automation-test.html",
                    "/katalon-studio/tutorials/debugging_test_case.html",
                    "/katalon-studio/docs/debugging_test_case.html/",
                    "/katalon-studio/docs/execute_debug_certain_steps.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/data-driven-testing-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/ddt.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/types-of-variables",
                "from": [
                    "/katalon-studio/docs/variable-types.html",
                    "/display/KD/Variable+Types/",
                    "/display/KD/Variable%20Types/",
                    "/x/RoIw/",
                    "/katalon-studio/docs/variable-types/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/global-variables-and-execution-profile",
                "from": [
                    "/katalon-studio/docs/execution-profile-v54.html",
                    "/x/xAHR/",
                    "/katalon-studio/docs/execution-profile-v54/",
                    "/katalon-studio/docs/global-variables/",
                    "/katalon-studio/docs/global-variables.html",
                    "/display/KD/Create+Global+Variables+on+the+fly/",
                    "/display/KD/Create%20Global%20Variables%20on%20the%20fly/",
                    "/x/EAjR/",
                    "/katalon-studio/docs/create-global-variables-on-the-fly/",
                    "/katalon-studio/docs/create-global-variables-on-the-fly.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/test-case-variables",
                "from": [
                    "/katalon-studio/docs/test-case-variables.html",
                    "/katalon-studio/tutorials/data-driven-testing/",
                    "/katalon-studio/tutorials/data_driven_testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/run-test-case-with-an-external-data-source",
                "from": [
                    "/katalon-studio/docs/run-test-case-external-data.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/specify-iteration-names-in-data-driven-testing-reports",
                "from": [
                    "/katalon-studio/how-to-guides/specify-iteration-names.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/enhanced-variable-binding",
                "from": [
                    "/katalon-studio/docs/bind-as-string.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/manage-test-data",
                "from": [
                    "/katalon-studio/docs/manage-test-data.html",
                    "/display/KD/Manage+Test+Data/",
                    "/display/KD/Manage%20Test%20Data/",
                    "/x/W4Iw/",
                    "/katalon-studio/docs/manage-test-data/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/checkpoints",
                "from": [
                    "/katalon-studio/docs/manage-checkpoints.html",
                    "/display/KD/Manage+Checkpoints/",
                    "/display/KD/Manage%20Checkpoints/",
                    "/x/XYIw/",
                    "/katalon-studio/docs/manage-checkpoints/",
                    "/display/KD/Manage+Checkpoint/index.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/set-up-database-connection-for-data-driven-testing",
                "from": [
                    "/katalon-studio/docs/database-settings.html",
                    "/display/KD/Database+Settings/",
                    "/display/KD/Database%20Settings/",
                    "/x/tgFO/",
                    "/katalon-studio/docs/database-settings/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/data-driven-testing-with-restful-web-service-requests",
                "from": [
                    "/katalon-studio/docs/ddt-with-web-service.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/implement-data-driven-testing-with-mysql",
                "from": [
                    "/katalon-studio/how-to-guides/how-to-implement-ddt-mysql.html",
                    "/katalon-studio/tutorials/how-to-implement-ddt-mysql.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/combine-multiple-data-sources",
                "from": [
                    "/katalon-studio/docs/combine-multiple-data-sources.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/data-driven-testing-at-the-test-case-level",
                "from": [
                    "/katalon-studio/docs/ddt-at-test-case-level.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/test-suite/test-suite",
                "from": [
                    "/katalon-studio/docs/create-test-suite.html",
                    "/katalon-studio/docs/design-a-test-suite.html",
                    "/display/KD/Design+a+Test+Suite/",
                    "/display/KD/Design%20a%20Test%20Suite/",
                    "/x/mAvR/",
                    "/katalon-studio/docs/design-a-test-suite/",
                    "/katalon-studio/docs/test-suite.html/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/test-suite/test-suite-collection",
                "from": [
                    "/katalon-studio/docs/test-suite-collection.html",
                    "/display/KD/Test+Suite+Collection/",
                    "/display/KD/Test%20Suite%20Collection/",
                    "/x/NgvR/",
                    "/katalon-studio/docs/test-suite-collection/",
                    "/display/KD/Execute+a+test+suite+collection/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/test-suite/dynamic-test-suite-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/dynamic-test-suite-ks.html",
                    "/katalon-studio/docs/dynamic-test-suite.html",
                    "/katalon-studio/docs/dynamic-querying-test-suite/",
                    "/katalon-studio/docs/dynamic+querying+test+suite/",
                    "/katalon-studio/docs/dynamic%20querying%20test%20suite/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/test-suite/skip-test-cases",
                "from": [
                    "/katalon-studio/docs/skip-test-cases.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/test-suite/execute-tests-on-multiple-devices-in-parallel",
                "from": [
                    "/katalon-studio/docs/execute_tests_parallelly_multiple_devices.html",
                    "/katalon-studio/tutorials/execute_tests_parallelly_multiple_devices.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/solving-pop-up-dialog-issue-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/pop_up_dialog_issue.html",
                    "/katalon-studio/tutorials/pop_up_dialog_issue.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-iframe-issue-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handling_iframe_issue.html",
                    "/katalon-studio/tutorials/handling_iframe_issue.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/solving-wait-time-issue-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/solving_common_issue_wait_time.html",
                    "/katalon-studio/tutorials/solving_common_issue_wait_time.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-drag-and-drop-testing-for-web-applications-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/drag_drop_web_applications_katalon_studio.html",
                    "/katalon-studio/tutorials/drag_drop_web_applications_katalon_studio.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-static-and-dynamic-test-objects",
                "from": [
                    "/katalon-studio/docs/handling_static_dynamic_test_objects.html",
                    "/katalon-studio/tutorials/handling_static_dynamic_test_objects.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-alerts",
                "from": [
                    "/katalon-studio/docs/handle_alerts.html",
                    "/katalon-studio/tutorials/handle_alerts.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-textbox-checkbox-and-radio-button",
                "from": [
                    "/katalon-studio/docs/handle_textbox_checkbox_radio_button.html",
                    "/katalon-studio/tutorials/handle_textbox_checkbox_radio_button.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-file-uploads",
                "from": [
                    "/katalon-studio/docs/handle_file_uploads.html",
                    "/katalon-studio/tutorials/handle_file_uploads.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-web-tables",
                "from": [
                    "/katalon-studio/docs/handle_web_tables.html",
                    "/katalon-studio/tutorials/handle_web_tables.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-drop-down-menu",
                "from": [
                    "/katalon-studio/docs/how_handle_drop_down_menu.html",
                    "/katalon-studio/tutorials/how_handle_drop_down_menu.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-use-selenium-webdriver-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/using_selenium_webdriver_katalon_studio.html",
                    "/katalon-studio/tutorials/using_selenium_webdriver_katalon_studio.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/common-tips-for-using-xpath-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/xpath_katalon_studio_tips.html",
                    "/katalon-studio/tutorials/xpath_katalon_studio_tips.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-web-element-locators-using-katalon-studio",
                "from": [
                    "/katalon-studio/docs/web_element_locators.html",
                    "/katalon-studio/tutorials/web_element_locators.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/web-element-locators---how-to-group-elements-into-a-unique-block",
                "from": [
                    "/katalon-studio/docs/how_to_handle_web_element_block_locators.html",
                    "/katalon-studio/tutorials/how_to_handle_web_element_block_locators.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-check-element-status-in-conditional-statement",
                "from": [
                    "/katalon-studio/docs/how_to_check_element_status_in_conditional_statement.html",
                    "/katalon-studio/tutorials/how_to_check_element_status_in_conditional_statement.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/api-testing/how-to-parse-json-responses-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/parse_json_responses.html",
                    "/katalon-studio/tutorials/parse_json_responses.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/api-testing/how-to-verify-api-responses-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/verify-api-responses.html",
                    "/katalon-studio/tutorials/verify-api-responses.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/performing-pinch-to-zoom-in-action",
                "from": [
                    "/katalon-studio/docs/pinch_zoom_action_mobile_app.html",
                    "/katalon-studio/tutorials/pinch_zoom_action_mobile_app.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/how-to-perform-multi-touch-actions-in-mobile-app",
                "from": [
                    "/katalon-studio/docs/handle_multi_touch_action.html",
                    "/katalon-studio/tutorials/handle_multi_touch_action.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-alert-dialog-in-mobile-app",
                "from": [
                    "/katalon-studio/docs/handle_alert_dialog_mobile_app.html",
                    "/katalon-studio/tutorials/handle_alert_dialog_mobile_app.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-drag-and-drop-in-mobile-app",
                "from": [
                    "/katalon-studio/docs/handle_drag_drop_mobile_app.html",
                    "/katalon-studio/tutorials/handle_drag_drop_mobile_app.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/using-list-to-store-the-mobile-elements-to-validate-data",
                "from": [
                    "/katalon-studio/docs/store_mobile_elements_to_validate_data.html",
                    "/katalon-studio/tutorials/store_mobile_elements_to_validate_data.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-spinner-in-mobile-automation-testing",
                "from": [
                    "/katalon-studio/docs/handle_spinner_mobile_automation_testing.html",
                    "/katalon-studio/tutorials/handle_spinner_mobile_automation_testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-vertical-swipe-in-mobile-automation",
                "from": [
                    "/katalon-studio/docs/vertical_swipe_in_mobile_automation.html",
                    "/katalon-studio/tutorials/vertical_swipe_in_mobile_automation.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-horizontal-swipe-in-mobile-automation",
                "from": [
                    "/katalon-studio/docs/horizontal_swipe_mobile_automation.html",
                    "/katalon-studio/tutorials/horizontal_swipe_mobile_automation.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-scroll-to-element-in-mobile-automation",
                "from": [
                    "/katalon-studio/docs/scroll_element_mobile_automation.html",
                    "/katalon-studio/tutorials/scroll_element_mobile_automation.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-results-analysis/view-and-customize-execution-log",
                "from": [
                    "/katalon-studio/docs/working-with-execution-log.html",
                    "/katalon-studio/docs/working-with-execution-log/",
                    "/display/KD/View+Execution+Log/",
                    "/display/KD/View%20Execution%20Log/",
                    "/x/6ANO/",
                    "/katalon-studio/docs/view-execution-log/",
                    "/katalon-studio/tutorials/viewing_execution_logs.html",
                    "/katalon-studio/docs/view-execution-log.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-results-analysis/test-suite-and-test-suite-collection-reports",
                "from": [
                    "/katalon-studio/docs/test-suite-report.html",
                    "/display/KD/Test+Suite+Report/",
                    "/display/KD/Test%20Suite%20Report/",
                    "/x/v4IY/",
                    "/katalon-studio/docs/test-suite-report/",
                    "/display/KD/Test+Report/",
                    "/katalon-studio/tutorials/viewing_test_suite_reports.html",
                    "/katalon-studio/docs/basic-report.html",
                    "/display/KD/Test+Suite+Collection+Report/",
                    "/display/KD/Test%20Suite%20Collection%20Report/",
                    "/x/7gAM/",
                    "/katalon-studio/docs/test-suite-collection-report/",
                    "/katalon-studio/docs/test-suite-collection-report.html",
                    "/katalon-studio/docs/get-generated-reports-location-at-runtime.html",
                    "/display/KD/Get+generated+Reports+location+at+runtime/",
                    "/display/KD/Get%20generated%20Reports%20location%20at%20runtime/",
                    "/x/ewXR/",
                    "/katalon-studio/docs/get-generated-reports-location-at-runtime/",
                    "/display/KD/Video+Capturing/",
                    "/display/KD/Video%20Capturing/",
                    "/x/qRJO/",
                    "/katalon-studio/docs/video-capturing/",
                    "/katalon-studio/docs/video-capturing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-results-analysis/capture-screenshots",
                "from": [
                    "/katalon-studio/docs/capture-screenshots.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-results-analysis/record-screen-based-videos",
                "from": [
                    "/katalon-studio/docs/record-screen-based-videos.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-results-analysis/record-browser-based-videos",
                "from": [
                    "/katalon-studio/docs/record-browser-based-videos.html",
                    "/katalon-studio/docs/screenshots-videos.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/error-management/test-maintenance/test-objects-refactoring",
                "from": [
                    "/katalon-studio/docs/test-objects-refactoring.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/error-management/test-maintenance/failure-handling",
                "from": [
                    "/katalon-studio/docs/failure-handling.html",
                    "/display/KD/Failure%20Handling/",
                    "/x/qAAM/",
                    "/katalon-studio/docs/failure-handling/",
                    "/display/KD/Failure+handling/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/error-management/test-maintenance/decompile-class-file-for-debugging",
                "from": [
                    "/katalon-studio/docs/class-decompiler.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/error-management/test-maintenance/fixing-broken-web-test-objects-with-time-capsule",
                "from": [
                    "/katalon-studio/docs/time-capsule.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-common-exceptions",
                "from": [
                    "/katalon-studio/docs/troubleshooting.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/katalon-api-keys-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/katalon-apikey-70.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/testops-integration/integrate-katalon-testops-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/testops-integration.html",
                    "/katalon-studio/docs/execute_tests_periodically_on_remote_machines.html",
                    "/katalon-studio/docs/view-execution-list.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/testops-integration/upload-test-results-to-katalon-testops-from-katalon-studio",
                "from": [
                    "/katalon-studio/docs/katalon-analytics-beta-integration.html",
                    "/display/KD/Katalon+Analytics+%28Beta%29+Integration/",
                    "/display/KD/Katalon%20Analytics%20%28Beta%29%20Integration/",
                    "/x/KRhO/",
                    "/display/KA/Integration+with+Katalon+Studio/",
                    "/display/KA/Integration%20with%20Katalon%20Studio/",
                    "/katalon-analytics/docs/ka-integration-katalon-studio/",
                    "/katalon-analytics/docs/ka-integration-katalon-studio.html",
                    "/katalon-analytics/docs/view-reports/",
                    "/x/mw3R/",
                    "/katalon-analytics/docs/integration-with-katalon-studio.html",
                    "/katalon-analytics/docs/upload-reports-overview.html",
                    "/katalon-analytics/docs/project-management-import-KS.html",
                    "/katalon-analytics/docs/ks_upload_project_kt.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/testops-integration/testops-private-instance-integration",
                "from": [
                    "/katalon-studio/docs/private-instance-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/jira-integration/jira-integration",
                "from": [
                    "/katalon-studio/docs/jira-integration.html",
                    "/katalon-studio/docs/configure-jira-integration/",
                    "/katalon-studio/docs/BDD-field-jira-cloud/",
                    "/katalon-studio/docs/install-and-use-katalons-jira-add-on/",
                    "/display/KD/Install+and+Use+Katalon%27s+JIRA+add-on/",
                    "/display/KD/Install%20and%20Use%20Katalon%27s%20JIRA%20add-on/",
                    "/x/TBBO/",
                    "/katalon-studio/docs/working-with-jira/",
                    "/display/KD/Configure+JIRA+Integration/",
                    "/display/KD/Configure%20JIRA%20Integration/",
                    "/x/7oEw/",
                    "/display/KD/JIRA%20Integration/",
                    "/display/KD/Working+with+JIRA/",
                    "/display/KD/Working%20with%20JIRA/",
                    "/x/MhBO/",
                    "/katalon-studio/docs/jira-plugin-integration.html",
                    "/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/jira-integration/configure-jira-bdd-settings",
                "from": [
                    "/katalon-studio/docs/bdd-settings.html",
                    "/katalon-studio/docs/install-and-use-katalons-jira-add-on.html",
                    "/katalon-studio/docs/BDD-field-jira-cloud.html",
                    "/katalon-analytics/docs/bdd-settings.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/git-integration/git-integration",
                "from": [
                    "/katalon-studio/docs/git-integration.html",
                    "/display/KD/Git+Integration/",
                    "/display/KD/Git%20Integration/",
                    "/x/foEw/",
                    "/katalon-studio/docs/git-integration/",
                    "/katalon-studio/tutorials/git_integration_introduction/",
                    "/katalon-studio/docs/git_conflict_resolve/",
                    "/katalon-studio/tutorials/git_conflict_resolve/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/git-integration/git-integration-authentication-with-ssh-keys",
                "from": [
                    "/katalon-studio/docs/git-integration-authentication.html",
                    "/katalon-studio/docs/bitbucket-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/git-integration/using-git-submodules-to-share-test-artifacts",
                "from": [
                    "/katalon-studio/docs/git-integration-submodule.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/slack-integration",
                "from": [
                    "/katalon-studio/docs/slack-plugin-integration.html",
                    "/katalon-studio/docs/slack-integration.html",
                    "/display/KD/Slack+Integration/",
                    "/display/KD/Slack%20Integration/",
                    "/x/boUw/",
                    "/katalon-studio/docs/slack-integration/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/kobiton-integration",
                "from": [
                    "/katalon-studio/docs/integrate_with_kobiton.html",
                    "/katalon-studio/tutorials/integrate_with_kobiton.html",
                    "/katalon-studio/docs/desired-capabilities-for-kobiton-devices.html",
                    "/display/KD/Desired+Capabilities+for+Kobiton+Devices/",
                    "/display/KD/Desired%20Capabilities%20for%20Kobiton%20Devices/",
                    "/x/DQrR/",
                    "/katalon-studio/docs/desired-capabilities-for-kobiton-devices/",
                    "/katalon-studio/docs/use-additional-desired-capabilities-for-kobiton-devices.html/",
                    "/katalon-studio/docs/enable-kobiton-integration.html",
                    "/display/KD/Enable+Kobiton+Integration/",
                    "/display/KD/Enable%20Kobiton%20Integration/",
                    "/display/KD/Kobiton+Integration/",
                    "/display/KD/Kobiton%20Integration/",
                    "/x/7IEw/",
                    "/katalon-studio/docs/enable-kobiton-integration/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/sauce-labs-integration",
                "from": [
                    "/katalon-studio/docs/saucelabs-plugin.html",
                    "/katalon-studio/docs/saucelabs-integration.html",
                    "/display/KD/SauceLabs+Integration/",
                    "/display/KD/SauceLabs%20Integration/",
                    "/x/UBVO/",
                    "/katalon-studio/docs/saucelabs-integration/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/browserstack-integration",
                "from": [
                    "/katalon-studio/docs/browserstack-integration.html",
                    "/display/KD/BrowserStack+Integration/",
                    "/display/KD/BrowserStack%20Integration/",
                    "/x/mRdO/",
                    "/katalon-studio/docs/browserstack-integration/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/lambdatest-integration",
                "from": [
                    "/katalon-studio/docs/lambdatest-integration.html",
                    "/display/KD/LambdaTest+Integration/",
                    "/display/KD/LambdaTest%20Integration/",
                    "/katalon-studio/docs/lambdatest-integration/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/jmeter-integration",
                "from": [
                    "/katalon-studio/docs/jmeter-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/applitools-integration",
                "from": [
                    "/katalon-studio/docs/applitools-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/rally-integration",
                "from": [
                    "/katalon-studio/docs/rally-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/qtest-integration",
                "from": [
                    "/katalon-studio/docs/qtest-integration.html",
                    "/katalon-studio/docs/enable-qtest-integration.html",
                    "/display/KD/Enable+qTest+Integration/",
                    "/display/KD/Enable%20qTest%20Integration/",
                    "/x/m4Ew/",
                    "/katalon-studio/docs/enable-qtest-integration/",
                    "/display/KD/qTest+Integration/",
                    "/katalon-studio/docs/integrate-test-case.html",
                    "/display/KD/Integrate+test+case/",
                    "/display/KD/Integrate%20test%20case/",
                    "/x/ooEw/",
                    "/katalon-studio/docs/integrate-test-case/",
                    "/katalon-studio/docs/integrate-test-suite.html",
                    "/display/KD/Integrate+test+suite/",
                    "/display/KD/Integrate%20test%20suite/",
                    "/x/x4Ew/",
                    "/katalon-studio/docs/integrate-test-suite/",
                    "/katalon-studio/docs/upload-test-execution.html",
                    "/display/KD/Upload+test+execution/",
                    "/display/KD/Upload%20test%20execution/",
                    "/x/5YEw/",
                    "/katalon-studio/docs/upload-test-execution/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/testrail-integration",
                "from": [
                    "/katalon-studio/docs/testrail-integration.html",
                    "/katalon-studio/docs/katalon-testrail-integration.html",
                    "/katalon-studio/tutorials/katalon-testrail-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/testlink-integration",
                "from": [
                    "/katalon-studio/docs/testlink-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/app-center-integration",
                "from": [
                    "/katalon-studio/docs/app-center.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/aws-device-farm-integration",
                "from": [
                    "/katalon-studio/docs/aws-device-farm.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/integrate-aws-codebuild-with-katalon-docker-image",
                "from": [
                    "/katalon-studio/docs/aws-codebuild-docker-image-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/integration-with-azure-devops-test-plans",
                "from": [
                    "/katalon-studio/docs/azure-devops-test-plans.html",
                    "/katalon-studio/docs/azure-devops-integration.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/integration/combine-katalon-studio-with-sap-scripting-tracker-for-windows",
                "from": [
                    "/katalon-studio/docs/katalon-sap-scripting-tracker.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/integration-plugins",
                "from": [
                    "/katalon-studio/docs/integration-plugins.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/using-plugins",
                "from": [
                    "/katalon-studio/docs/kse-use-plugins.html",
                    "/katalon-studio/docs/offline-plugin.html",
                    "/katalon-studio/docs/private-plugins.html",
                    "/katalon-store/docs/user/plugin-console-installation/",
                    "/katalon-store/docs/user/plugin-console-installation.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/installing-plugin-offline",
                "from": [
                    "/katalon-studio/docs/install-plugin-offline.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/create-your-first-katalon-studio-plugin",
                "from": [
                    "/katalon-store/docs/publisher/create-plugin.html",
                    "/katalon-store/docs/publisher/create-plugin/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/debug-your-platform-plugin-using-eclipse-ide",
                "from": [
                    "/katalon-store/docs/publisher/debug-platform-plugin.html",
                    "/katalon-store/docs/publisher/debug-platform-plugin/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/develop-a-customized-report-plugin",
                "from": [
                    "/katalon-store/docs/publisher/generate-customized-report.html",
                    "/katalon-store/docs/publisher/generate-customized-report/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/generate-groovy-doc-for-a-plugin",
                "from": [
                    "/katalon-store/docs/publisher/generate-groovydoc.html",
                    "/katalon-store/docs/publisher/generate-groovydoc/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/example-plugin-build-katalon-studios-testrail-integration-plugin",
                "from": [
                    "/katalon-store/docs/publisher/example-plugin-testrail.html",
                    "/katalon-store/docs/publisher/example-plugin-testrail/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/auto-healing-smart-xpath",
                "from": [
                    "/katalon-studio/docs/auto-healing-smart-xpath.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/basic-search-for-dynamic-test-suite",
                "from": [
                    "/katalon-studio/docs/basic-search-for-dynamic-querying-test-suite.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/test-suite-collection-scheduler",
                "from": [
                    "/katalon-studio/docs/test-suite-collection-scheduler.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/test-case-management-with-tags",
                "from": [
                    "/katalon-studio/docs/test-case-management-with-tags.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/introduction-to-custom-keywords",
                "from": [
                    "/katalon-studio/docs/introduction-to-custom-keywords.html",
                    "/display/KD/Introduction+to+Custom+Keywords/",
                    "/display/KD/Introduction%20to%20Custom%20Keywords/",
                    "/x/8gAM/",
                    "/katalon-studio/docs/introduction-to-custom-keywords/",
                    "/display/KD/Define+custom+keywords/",
                    "/katalon-studio/tutorials/create_custom_keyword.html",
                    "/katalon-studio/tutorials/create-custom-keyword/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/sample-custom-keywords",
                "from": [
                    "/katalon-studio/docs/sample-custom-keywords.html",
                    "/display/KD/Sample+Custom+Keywords/",
                    "/display/KD/Sample%20Custom%20Keywords/",
                    "/x/3QHR/",
                    "/katalon-studio/docs/sample-custom-keywords/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/execute-test-in-internet-explorer-ie-mode-in-microsoft-edge",
                "from": [
                    "/katalon-studio/docs/run-test-in-edge-with-IE-mode.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/flutter-based-application-testing-with-custom-settext-keyword",
                "from": [
                    "/katalon-studio/docs/flutter-based-application-testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/importexport-keywords",
                "from": [
                    "/katalon-studio/docs/importexport-keywords.html",
                    "/x/GAfR/",
                    "/katalon-studio/docs/importexport-keywords/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/custom-keywords-refactoring",
                "from": [
                    "/katalon-studio/docs/custom-keywords-refactor.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/import-custom-keywords-classes-recursively",
                "from": [
                    "/katalon-studio/docs/import-custom-keywords-classes-recursively.html",
                    "/display/KD/Import+Custom+Keywords+classes+recursively/",
                    "/display/KD/Import%20Custom%20Keywords%20classes%20recursively/",
                    "/x/QwXR/",
                    "/katalon-studio/docs/import-custom-keywords-classes-recursively/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/mark-tests-status-for-a-custom-keyword",
                "from": [
                    "/katalon-studio/docs/mark-tests-status-for-a-custom-keyword.html",
                    "/display/KD/Mark+test%27s+status+for+a+Custom+Keyword/",
                    "/display/KD/Mark%20test%27s%20status%20for%20a%20Custom%20Keyword/",
                    "/x/xgXR/",
                    "/katalon-studio/docs/mark-tests-status-for-a-custom-keyword/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/handling-databases",
                "from": [
                    "/katalon-studio/docs/handling-databases.html",
                    "/display/KD/Handling+Databases/",
                    "/display/KD/Handling%20Databases/",
                    "/x/Nw3R/",
                    "/katalon-studio/docs/handling-databases/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/build-custom-keywords-with-settings",
                "from": [
                    "/katalon-store/docs/publisher/build-CK-settings.html",
                    "/katalon-store/docs/user/build-CK-settings/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/how-to-perform-database-testing-using-katalon-studio",
                "from": [
                    "/katalon-studio/docs/connect_db_gui_testing.html",
                    "/katalon-studio/tutorials/connect_db_gui_testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/how-to-use-a-custom-keyword-from-other-custom-keywords-and-step-definition-classes",
                "from": [
                    "/katalon-studio/docs/how-to-use-custom-keyword-in-groovy-class.html",
                    "/katalon-studio/tutorials/how-to-use-custom-keyword-in-groovy-class.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/dependencies-management-with-native-gradle-support-poc",
                "from": [
                    "/katalon-studio/docs/dependencies-management-gradle-support.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/parameterize-azure-devops-test-case-id-list-poc",
                "from": [
                    "/katalon-studio/docs/parameterize-ado-test-case-id.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/validate-json-xml-string-against-a-schema-for-api-testing-poc/ws-validate-an-xml-string-against-a-schema-poc",
                "from": [
                    "/katalon-studio/docs/ws-validate-xml-schema.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/validate-json-xml-string-against-a-schema-for-api-testing-poc/ws-validate-json-string-against-a-schema-poc",
                "from": [
                    "/katalon-studio/docs/ws-validate-json-schema.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/graphql-poc/graphql-poc",
                "from": [
                    "/katalon-studio/docs/graphql.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/api-documents",
                "from": [
                    "/katalon-studio/docs/javadoc.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/tips-and-tricks/execute-windows-commands",
                "from": [
                    "/katalon-studio/docs/execute-windows-commands.html",
                    "/display/KD/Execute+Windows+commands/",
                    "/display/KD/Execute%20Windows%20commands/",
                    "/x/QQXR/",
                    "/katalon-studio/docs/execute-windows-commands/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/tips-and-tricks/install-chrome-extensions-at-runtime",
                "from": [
                    "/katalon-studio/docs/install-chrome-extensions-at-runtime.html",
                    "/display/KD/Install+Chrome+extensions+at+runtime/",
                    "/display/KD/Install%20Chrome%20extensions%20at%20runtime/",
                    "/x/ZQXR/",
                    "/katalon-studio/docs/install-chrome-extensions-at-runtime/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/tips-and-tricks/katalon-with-winium-for-desktop-applications",
                "from": [
                    "/katalon-studio/docs/katalon-with-winium-for-desktop-applications.html",
                    "/display/KD/Katalon+with+Winium+for+Desktop+Applications/",
                    "/display/KD/Katalon%20with%20Winium%20for%20Desktop%20Applications/",
                    "/x/xAzR/",
                    "/katalon-studio/docs/katalon-with-winium-for-desktop-applications/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/tips-and-tricks/manage-androids-permission",
                "from": [
                    "/katalon-studio/docs/manage-androids-permission.html",
                    "/display/KD/Manage+Android%27s+permission/",
                    "/display/KD/Manage%20Android%27s%20permission/",
                    "/x/ggXR/",
                    "/katalon-studio/docs/manage-androids-permission/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/tips-and-tricks/optimizing-object-identification-and-tools",
                "from": [
                    "/katalon-studio/docs/optimizing-object-identification-and-tools.html",
                    "/display/KD/Optimizing+Object+Identification+and+Tools/",
                    "/display/KD/Optimizing%20Object%20Identification%20and%20Tools/",
                    "/x/fhlO/",
                    "/katalon-studio/docs/optimizing-object-identification-and-tools/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/tips-and-tricks/reduce-execution-time-in-mobile-testing",
                "from": [
                    "/katalon-studio/docs/mobile-reduce-execution-time.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/tips-and-tricks/retrieve-mobiles-session",
                "from": [
                    "/katalon-studio/docs/retrieve-mobiles-session.html",
                    "/display/KD/Retrieve+mobile%27s+session/",
                    "/display/KD/Retrieve%20mobile%27s%20session/",
                    "/x/fwXR/",
                    "/katalon-studio/docs/retrieve-mobiles-session/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/tips-and-tricks/understand-waiting-keywords",
                "from": [
                    "/katalon-studio/docs/understand-waiting-keywords.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/tips-and-tricks/using-autoit-for-authentication-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/using-autoit-for-authentication-in-katalon-studio.html",
                    "/display/KD/Using+autoIT+for+authentication+in+Katalon+Studio/",
                    "/display/KD/Using%20autoIT%20for%20authentication%20in%20Katalon%20Studio/",
                    "/x/9xxO/",
                    "/katalon-studio/docs/using-autoit-for-authentication-in-katalon-studio/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/project-settings/project-settings-overview",
                "from": [
                    "/katalon-studio/docs/execution-settings.html",
                    "/display/KD/Execution+Settings/",
                    "/display/KD/Execution%20Settings/",
                    "/x/cgFO/",
                    "/katalon-studio/docs/execution-settings/",
                    "/display/KD/Emails+Settings/",
                    "/display/KD/Emails%20Settings/",
                    "/x/tAFO/",
                    "/katalon-studio/docs/emails-settings/",
                    "/display/KD/Network+Settings/",
                    "/display/KD/Network%20Settings/",
                    "/x/gQ1O/",
                    "/katalon-studio/docs/network-settings/",
                    "/katalon-studio/docs/network-settings.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/statements-overview",
                "from": [
                    "/katalon-studio/docs/statements.html",
                    "/katalon-studio/docs/method-call-statements.html",
                    "/display/KD/Method+Call+Statements/",
                    "/display/KD/Method%20Call%20Statements/",
                    "/x/sgAM/",
                    "/katalon-studio/docs/method-call-statements/",
                    "/katalon-studio/docs/control-statements.html",
                    "/display/KD/Control+Statements/",
                    "/display/KD/Control%20Statements/",
                    "/x/rAAM/",
                    "/katalon-studio/docs/control-statements/",
                    "/katalon-studio/tutorials/common_condition_control_statements.html",
                    // "/display/KD/Control+Statements#ControlStatements-Decision-makingstatements",
                    // "/display/KD/Control+Statements#ControlStatements-Loopingstatements",
                    // "/display/KD/Control+Statements#ControlStatements-Branchingstatements",
                    // "/display/KD/Control+Statements#ControlStatements-Exceptionhandlingblock",
                    "/katalon-studio/docs/binary-statements.html",
                    "/display/KD/Binary+Statements/",
                    "/display/KD/Binary%20Statements/",
                    "/x/rgAM/",
                    "/katalon-studio/docs/binary-statements/",
                    "/katalon-studio/docs/assert-statements.html",
                    "/display/KD/Assert+Statements/",
                    "/display/KD/Assert%20Statements/",
                    "/x/sAAM/",
                    "/katalon-studio/docs/assert-statements/",
                    "/tutorials/common-validation/",
                    "/katalon-studio/tutorials/common_validation_statements_katalon_studio.html",
                    "/katalon-studio/docs/define-method.html",
                    "/display/KD/Define+Method/",
                    "/display/KD/Define%20Method/",
                    "/x/tgAM/",
                    "/katalon-studio/docs/define-method/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/test-design/mobile-test-design/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm",
                "from": [
                    "/katalon-studio/docs/testing_mobile_apps_using_katalon_studio_kobiton.html",
                    "/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/troubleshoot-web-test-execution-exceptions-overview",
                "from": [
                    "/katalon-studio/docs/troubleshoot-common-execution-exceptions-web-test.html",
                    "/display/KD/Troubleshooting+common+issues+related+to+interacting+with+an+element/",
                    "/display/KD/Troubleshooting%20common%20issues%20related%20to%20interacting%20with%20an%20element/",
                    "/x/awXR/",
                    "/katalon-studio/docs/troubleshooting-common-issues-related-to-interacting-with-an-element/",
                    "/katalon-studio/docs/troubleshooting-common-issues-related-to-interacting-with-an-element.html",
                    "/display/KD/troubleshooting+web+automated+testing/",
                    "/display/KD/troubleshooting%20web%20automated%20testing/",
                    "/katalon-studio/docs/troubleshooting-web-automated-testing/",
                    "/katalon-studio/docs/troubleshooting-web-automated-testing.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/troubleshooting-automated-mobile-testing-overview",
                "from": [
                    "/katalon-studio/docs/troubleshooting-automated-mobile-testing.html",
                    "/display/KD/Troubleshooting+automated+mobile+testing/",
                    "/display/KD/Troubleshooting%20automated%20mobile%20testing/",
                    "/x/fBdO/",
                    "/katalon-studio/docs/troubleshooting-automated-mobile-testing/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-windows-automated-testing/troubleshoot-windows-automated-testing-overview",
                "from": [
                    "/katalon-studio/docs/troubleshoot-common-execution-exceptions-windows.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/error-management/troubleshooting/known-issues-and-limitations",
                "from": [
                    "/katalon-studio/docs/known-issues-limitations.html",
                    "/x/yIMw/",
                    "/katalon-studio/docs/known-issues-limitations/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin",
                "from": [
                    "/katalon-store/docs/publisher/develop-custom-keywords.html",
                    "/katalon-store/docs/publisher/develop-custom-keywords/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/how-to-resolve-external-dependencies-for-a-plugin",
                "from": [
                    "/katalon-store/docs/publisher/resolve-external-dependencies.html",
                    "/katalon-store/docs/publisher/resolve-external-dependencies/"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/validate-json-xml-string-against-a-schema-for-api-testing-poc/validate-jsonxml-string-against-a-schema-for-api-testing-poc",
                "from": [
                    "/katalon-studio/docs/schema-validation.html"
                ]
            },
            {
                "to": "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/graphql-poc/ws-validate-graphql-request-body-against-a-graphql-schema-poc",
                "from": [
                    "/katalon-studio/docs/ws-validate-graphql-body-schema.html"
                ]
            }
        ],
      },
    // highlight-end
    ],
  ],
};

module.exports = config;

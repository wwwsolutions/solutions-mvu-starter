/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

const Model = {
  instructions: {
    title: 'Quick Start.',
    cloneInstallSnippet: [
      { lineNum: 1, line: 'git clone https://github.com/wwwsolutions/wwwsolutions-mvu-starter app-name' },
      { lineNum: 2, line: 'cd app-name' },
      { lineNum: 3, line: 'npm install' },
    ],
    runDevelopmentSnippet: [
      { lineNum: 1, line: 'npm run dev' },
    ],
    runProductionSnippet: [
      { lineNum: 1, line: 'npm run prod' },
    ],
    runProductionServerSnippet: [
      { lineNum: 1, line: 'npm run prod:serve' },
    ],
    listNpmScriptsSnippet: [
      { lineNum: 1, line: 'npm run gulp:sprites' },
      { lineNum: 2, line: 'npm run gulp:modernizr' },
      { lineNum: 3, line: 'npm run tunnel' },
      { lineNum: 4, line: 'npm run prod:debug' },
      { lineNum: 5, line: 'npm run prod:analyze' },
      { lineNum: 6, line: 'npm run prod:compress' },
      { lineNum: 7, line: 'npm run dev:debug' },
    ],
  }
};

export { Model as instructionsModel };

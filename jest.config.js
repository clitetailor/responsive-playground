// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // automock: false,
  // bail: 0,
  // browser: false,
  // cacheDirectory: "C:\\Users\\ducnh\\AppData\\Local\\Temp\\jest",
  // clearMocks: false,
  // collectCoverage: false,
  // collectCoverageFrom: undefined,
  // coverageDirectory: undefined,
  // coveragePathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],
  // coverageThreshold: undefined,
  // dependencyExtractor: undefined,
  // errorOnDeprecated: false,
  // forceCoverageMatch: [],
  // globalSetup: undefined,
  // globalTeardown: undefined,
  // globals: {},
  // maxWorkers: "50%",
  // moduleDirectories: [
  //   "node_modules"
  // ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node',
    'svelte'
  ],
  // moduleNameMapper: {},
  // modulePathIgnorePatterns: [],
  // notify: false,
  // notifyMode: "failure-change",
  // preset: undefined,
  // projects: undefined,
  // reporters: undefined,
  // resetMocks: false,
  // resetModules: false,
  // resolver: undefined,
  // restoreMocks: false,
  // rootDir: undefined,
  // roots: [
  //   "<rootDir>"
  // ],
  // runner: "jest-runner",
  // setupFiles: [],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  // snapshotSerializers: [],
  // testEnvironment: "node",
  // testEnvironmentOptions: {},
  // testLocationInResults: false,
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],
  // testPathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],
  // testRegex: [],
  // testResultsProcessor: undefined,
  // testRunner: "jasmine2",
  // testURL: "http://localhost",
  // timers: "real",
  transform: {
    '^.+\\.[tj]s$': '<rootDir>/jest.transform.js',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: require('./svelte.config').preprocess
      }
    ]
  }
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],
  // unmockedModulePathPatterns: undefined,
  // verbose: undefined,
  // watchPathIgnorePatterns: [],
  // watchman: true,
}

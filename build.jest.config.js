module.exports = {
  projects: [
    {
      displayName: 'jsdom',
      coverageDirectory: './coverage',
      collectCoverageFrom: [
        '**/src/**/*.[jt]s?(x)',
        '!**/lib/**',
        '!**/tests/build/**',
        '!**/node_modules/**',
      ],
      modulePaths: ['<rootDir>/src'],
      moduleFileExtensions: [
        'js',
        'ts',
      ],
      testEnvironment: 'jsdom',
      testMatch: [
        '**/tests/build/**/*.dom.test.ts',
      ],
      testPathIgnorePatterns: [
        '/node_modules/',
      ],
      transform: {
        '\\.ts$': ['ts-jest'],
      },
    },
    {
      displayName: 'node',
      coverageDirectory: './coverage',
      collectCoverageFrom: [
        '**/src/**/*.[jt]s?(x)',
        '!**/lib/**',
        '!**/tests/build/**',
        '!**/node_modules/**',
      ],
      modulePaths: ['<rootDir>/src'],
      moduleFileExtensions: [
        'js',
        'ts',
      ],
      testEnvironment: 'node',
      testMatch: [
        '**/tests/build/**/*.node.test.ts',
      ],
      testPathIgnorePatterns: [
        '/node_modules/',
      ],
      transform: {
        '\\.ts$': ['ts-jest'],
      },
    },
  ],
};

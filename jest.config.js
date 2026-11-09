module.exports = {
  projects: [
    {
      displayName: 'jsdom',
      coverageDirectory: './coverage',
      collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,js}',
        '!<rootDir>/src/**/*.d.ts',
      ],
      modulePaths: ['<rootDir>/src'],
      moduleFileExtensions: [
        'js',
        'ts',
      ],
      testEnvironment: 'jsdom',
      testMatch: [
        '**/tests/dev/**/*.dom.test.ts',
      ],
      testPathIgnorePatterns: [
        '/node_modules/',
      ],
      transform: {
        '^.+\\.ts$': [
          'ts-jest',
          {
            tsconfig: '<rootDir>/tsconfig.jest.json',
          },
        ],
      },
    },
    {
      displayName: 'node',
      coverageDirectory: './coverage',
      collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,js}',
        '!<rootDir>/src/**/*.d.ts',
      ],
      modulePaths: ['<rootDir>/src'],
      moduleFileExtensions: [
        'js',
        'ts',
      ],
      testEnvironment: 'node',
      testMatch: [
        '**/tests/dev/**/*.node.test.ts',
      ],
      testPathIgnorePatterns: [
        '/node_modules/',
      ],
      transform: {
        '^.+\\.ts$': [
          'ts-jest',
          {
            tsconfig: '<rootDir>/tsconfig.jest.json',
          },
        ],
      },
    },
  ],
};

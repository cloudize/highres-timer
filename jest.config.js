module.exports = {
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/src/**/*.[jt]s?(x)',
    '!**/lib/**',
    '!**/tests/**',
    '!**/node_modules/**'
  ],
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    "\\.ts$": ['ts-jest']
  }
};

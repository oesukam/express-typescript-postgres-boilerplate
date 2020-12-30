const path = require('path');

module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  collectCoverageFrom: ['src/**/*.*'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    'src/database',
    'src/config',
    'src/swagger',
    'dist',
  ],
  verbose: true,
  coverageThreshold: {
    global: {
      functions: 0,
      lines: 0,
      statements: -250,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};

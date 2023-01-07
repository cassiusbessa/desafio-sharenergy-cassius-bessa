module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  // collectCoverage: true,
  coverageProvider: 'babel',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1',
    '@main/(.*)': '<rootDir>/src/main/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
    '@factories/(.*)': '<rootDir>/src/factories/$1',
  },
};

module.exports = {
    roots: ['<rootDir>/tests'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js|jsx)',
        '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
    ],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>emptyMock.js',
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
};

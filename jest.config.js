export default {
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
  },
};

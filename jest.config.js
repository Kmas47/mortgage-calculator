module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  testMatch: ["<rootDir>/src/test/**/*.{spec,test}.{ts,js}"],
  collectCoverageFrom: ["src/**/*.{js,ts}"],
  moduleDirectories: ["node_modules"],
  preset: 'ts-jest',
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  },
};

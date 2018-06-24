module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "setupTestFrameworkScriptFile": "<rootDir>/jest.setup.js",
  "testPathIgnorePatterns": ["/node_modules/", "/.reference/", "/build/", "/scripts/"],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "globals": {
    "ts-jest": {
      "enableTsDiagnostics": true,
      "skipBabel": true,
      "tsConfigFile": "tsconfig.jest.json"
    }
  }
}
module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(./test/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'ts', 'js', 'js', 'json', 'node'],
  collectCoverage: true,
};

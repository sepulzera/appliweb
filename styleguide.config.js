// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('./package.json');

module.exports = {
  title: 'AppliWeb',
  version: version,
  components: ['./src/**/[A-Z]**/*.tsx'],
  ignore: ['./src/**/[A-Z]**/*.test.tsx'],
  styleguideDir: 'docs/code-doc',
};

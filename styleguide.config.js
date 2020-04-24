// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require('./package.json');

module.exports = {
  title: 'AppliWeb',
  version: version,
  sections: [
    {
      name: 'Components',
      components: [
        './src/components/[A-Z]**/*.tsx',
      ],
      ignore: [
        './src/components/[A-Z]**/*.test.tsx',
      ],
    },
    {
      name: 'Container',
      components: [
        './src/container/[A-Z]**/*.tsx',
      ],
      ignore: [
        './src/container/[A-Z]**/*.test.tsx',
      ],
    },
    {
      name: 'Context',
      components: [
        './src/context/[A-Z]**/*.tsx',
      ],
      ignore: [
        './src/context/[A-Z]**/*.test.tsx',
      ],
    },
    {
      name: 'Higher Order Components',
      components: [
        './src/hoc/[A-Z]**/*.tsx',
      ],
      ignore: [
        './src/hoc/[A-Z]**/*.test.tsx',
      ],
    },
  ],
  styleguideDir: `docs/${name}`,
};

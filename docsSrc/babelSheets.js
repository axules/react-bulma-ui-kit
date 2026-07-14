module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'fsharp' }],
  ],
  presets: [
    ['@babel/preset-env', {
      corejs: { version: '3.49', proposals: false },
      forceAllTransforms: false,
      modules: false,
      targets: { browsers: ['last 3 years'] },
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
      development: process.env.NODE_ENV === 'development',
    }],
  ],
};

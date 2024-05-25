module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: '3.37',
      loose: true,
      forceAllTransforms: false,
      targets: 'chrome 120'
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
    }]
  ]
};
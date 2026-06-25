module.exports = {
  plugins: [
    'babel-plugin-transform-react-remove-prop-types',
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: '3.47',
      loose: true,
      forceAllTransforms: false,
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
  ]
}
;
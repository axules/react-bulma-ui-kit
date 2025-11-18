module.exports = {
  plugins: [
    'babel-plugin-transform-react-remove-prop-types',
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: '3',
      loose: true,
      forceAllTransforms: false,
      targets: 'chrome 80, safari 12.1, ios 12.1'
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
  ]
}
;
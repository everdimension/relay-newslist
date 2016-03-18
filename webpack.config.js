import path from 'path';

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

const config = {
  entry: path.resolve(__dirname, 'js', 'app.js'),
  output: { filename: 'app.js', path: '/' },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel'
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader?parser=postcss-scss',
        ]
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  postcss: function (bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('precss')(),
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
    ];
  }
};

export default config;

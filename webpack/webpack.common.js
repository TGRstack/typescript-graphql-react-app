const Dotenv = require('dotenv-webpack');
const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin');

const paths = require('./paths')

const tsOptions = {
  context: paths._,
  configFile: path.resolve(paths._, 'tsconfig.json'),
  transpileOnly: true,
}

module.exports = {
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.csv', '.ts', '.tsx', '.js', '.json', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: paths.src._,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            }
          },
          {
            loader: 'ts-loader',
            options: tsOptions
          }
        ]
      },
      {
        test: /\.s?css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // test: /\.(png|jpg|gif)$/,
        exclude: [/\.jsx?$/, /\.tsx?$/, /\.s?css$/, /\.html$/, /\.json$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name (file) {
                if (process.env === 'development' || process.env === undefined) {
                  return '[path][name].[ext]'
                }

                return '[hash].[ext]'
              }
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new WriteFilePlugin({ log: true }),
    new Dotenv({
      path: path.join(paths._, '.env'),
      safe: true,    // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      // silent: true   // hide any errors
    })
  ],
};

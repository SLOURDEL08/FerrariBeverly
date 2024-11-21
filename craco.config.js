// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Configuration pour le JavaScript moderne
      webpackConfig.output.filename = 'static/js/[name].[contenthash:8].modern.js';
      
      webpackConfig.module.rules.push({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  esmodules: true
                },
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3
              }],
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      });

      // Optimisation des chunks
      webpackConfig.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `vendor.${packageName.replace('@', '')}`;
            },
          },
        },
      };

      return webpackConfig;
    }
  }
};
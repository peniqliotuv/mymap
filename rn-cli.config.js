const path = require('path');
const metroBundler = require('metro-bundler');

// based on https://github.com/facebook/metro-bundler/issues/1#issuecomment-333658773

const config = {
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    react: path.resolve(__dirname, 'node_modules/react')
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, '../../../platform/sdk/react-native/')
    ];
  },
  getBlacklistRE: function() {
    return metroBundler.createBlacklist([
      /USER[/\\]PATH[/\\]TOLIBRARY[/\\]node_modules[/\\]react-native[/\\].*/
    ]);
  }
};
module.exports = config;

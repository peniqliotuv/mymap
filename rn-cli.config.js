const path = require('path');
const metroBundler = require('metro-bundler');

// based on https://github.com/facebook/metro-bundler/issues/1#issuecomment-333658773
const projectRoot = path.resolve(__dirname);
const sdkRoot = path.resolve(__dirname, '../platform/sdk/react-native/');

module.exports = {
  extraNodeModules: {
    // force resolution of these modules locally
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    'react': path.resolve(__dirname, 'node_modules/react'),
  },
  getProjectRoots() {
    return [projectRoot, sdkRoot];
  },
  getBlacklistRE() {
    // ignore modules loaded from the sdk
    return metroBundler.createBlacklist([
      /cancerbase-sdk\/node_modules\/react\/.*/,
      /cancerbase-sdk\/node_modules\/react-native\/.*/,
    ]);
  },
};

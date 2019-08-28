const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withCSS = require('@zeit/next-css')
const NextWorkboxWebpackPlugin = require('next-workbox-webpack-plugin');


module.exports = withBundleAnalyzer({
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
});

module.exports = withCSS({
  cssModules: true
})

module.exports = {
  webpack: (config, {isServer, dev, buildId, config: {distDir}}) => {
    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxWebpackPlugin({
          importWorkboxFrom: 'cdn',
          distDir,
          buildId,
          swDestRoot: './static/workbox',
          swURLRoot: '/static/js'
        })
      );
    }

    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    }
  }
}
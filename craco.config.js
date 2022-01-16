const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@storages': path.resolve(__dirname, 'src/storages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@style': path.resolve(__dirname, 'src/style')
    }
  },
};
module.exports = function (api) {
  // This caches the Babel config by environment.
  api.cache.using(() => process.env.NODE_ENV);

  // api.cache(true);
  return {
    plugins: [['relay', { artifactDirectory: './__generated__' }]],
  };
};

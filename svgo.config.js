// svgo.config.js
module.exports = {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupIDs: {
              remove: true, 
              minify: true 
            }
          }
        }
      }
    ]
  };
  
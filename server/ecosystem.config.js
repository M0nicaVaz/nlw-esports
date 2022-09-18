module.exports = {
  apps: [
    {
      name: 'server',
      script: './src/server.ts',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'worker',
      script: 'worker.js',
    },
  ],
};

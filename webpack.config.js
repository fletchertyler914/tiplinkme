// const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// module.exports = async function (env, argv) {
//   const config = await createExpoWebpackConfigAsync(env, argv);
//   // Customize the config before returning it.

//   return {
//     ...config,
//     plugins: [
//       new webpack.ProvidePlugin({
//         Buffer: ['buffer', 'Buffer'],
//       }),
//     ],
//     resolve: {
//       fallback: {
//         crypto: false,
//       },
//     },
//   };
// };

const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['@solana/web3.js'],
      },
    },
    argv
  );
  return config;
};

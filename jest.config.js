module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  //   transform: {
  //     '\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
  //     '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': require.resolve(
  //       'react-native/jest/assetFileTransformer.js',
  //     ),
  //   },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native)/|react-native)',
  ],
};

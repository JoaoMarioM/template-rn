module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@utils': './src/Utils',
          '@theme': './src/Theme',
          '@hooks': './src/Hooks',
          '@assets': './src/Assets',
          '@routes': './src/Routes',
          '@screens': './src/Screens',
          '@services': './src/Services',
          '@providers': './src/Providers',
          '@components': './src/Components',
        },
      },
    ],
  ],
};

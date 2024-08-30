module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './app/components',
          '@screens': './app/screens',
          '@assets': './app/assets',
          '@utils': './app/utils',
          '@constants': './app/constants',
          '@hooks': './app/hooks',
          '@router': './app/router',
          '@styles': './app/styles',
          '@providers': './app/providers',
          '@contexts': './app/contexts',
          '@redux': './app/redux',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

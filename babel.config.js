module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "module:react-native-dotenv"
  ],
  plugins: [
    ["module-resolver", {
      "extensions": [".ios.js", ".android.js", ".js", ".json", ".ts", ".tsx"],
      "alias": {
        "@actions": "./src/actions",
        "@assets": "./src/assets",
        "@components": "./src/components",
        "@constants": "./src/constants",
        "@helpers": "./src/helpers",
        "@reducers": "./src/reducers",
        "@themes": "./src/themes",
        "@typings": "./src/typings"
      }
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
};

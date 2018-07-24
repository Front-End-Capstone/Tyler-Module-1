const path = require("path");
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./client/src"),
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [  // might need to be changed from "loaders" to "rules"
      {
        loader: ["babel-loader", "style-loader!css-loader"],
        test: [/\.js[x]?/,  /\.css$/],
        exclude: /node_modules/,
        options: {
          presets: ["react", "env"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};




// ./public/react/index.js
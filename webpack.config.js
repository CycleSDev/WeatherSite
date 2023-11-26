const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    clean: true,
  },
  devServer: {
    port: 3010,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[contenthash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new Dotenv()],
};

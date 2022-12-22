const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")

module.exports = {
  entry: `${path.resolve(__dirname, '../src')}/index.tsx`,
  module: {
    rules: [
      // 규칙
      {
        //test 항목에 정의된 정규식에 매칭되는 파일은 use 항목에 등록된 로더를 통해서 처리됨
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "/public/asset/[name].[hash:8].[ext]"
            }
          }
        ]
      },
    ],
  },
  //설정 파일에 설치한 플러그인을 임포트한 후에, plugins 속성에 임포트한 프로그인을 추가
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    //object import나 require로 간단히 특정 모듈의 별칭을 만들 수 있음
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
    // 확장자를 순서대로 해석함. 여러 파일에서 이름이 동일하지만 다른 확장자를 가진 경우, webpack은 배열의 앞에서부터 파일을 해석하고 남은 것은 해석하지 않음
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
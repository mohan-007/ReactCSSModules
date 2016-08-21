var config = {
   entry: './main.js',
   
   output: {
      path:'./',
      filename: 'index.js',
   },
   
   devServer: {
      inline: true,
      port: 8081
   },
   
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            
            query: {
               presets: ['es2015', 'react']
            }
         },
      { test: /\.css$/,exclude : /node_modules/, loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local] [hash:base64:5]&sourceMap!postcss-loader' },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: require.resolve("file-loader") + "?name=images/[name].[ext]"}
      ]
   }
}

module.exports = config;
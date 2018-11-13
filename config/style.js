exports.lessDevelop = () => ({
  use: [{
    loader: "style-loader"
  }, {
    loader: "css-loader"
  }, {
    loader: "less-loader",
    options: { javascriptEnabled: true }
  }]
});

exports.scssDevelop = () => ({
  use: [{
    loader: "style-loader"
  }, {
    loader: "css-loader"
  }, {
    loader: "sass-loader"
  }]
});

exports.lessProduct = () => {
  const config = this.lessDevelop();
  config.use.shift();
  return {
    ...config,
    fallback: "style-loader"
  };
}

exports.scssProduct = () => {
  const config = this.scssDevelop();
  config.use.shift();
  return {
    ...config,
    fallback: "style-loader"
  };
}

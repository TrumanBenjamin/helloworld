exports.index = (req, res) => {
  res.render('home', { title: 'Home', message: 'Hello World!' });
};
var IndexController = (req, res) => {
  res.render('index', { title: 'Notebook' });
};

module.exports = IndexController;

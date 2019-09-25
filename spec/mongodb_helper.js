var mongoose = require('mongoose');

beforeAll((done) => {
  mongoose.connect('mongodb://localhost/notebook_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.on('open', () => {
    done();
  });
});

afterAll((done) => {
  mongoose.connection.close(true, () => {
    done();
  })
});

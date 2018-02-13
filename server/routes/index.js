const gamesController = require('../controllers').games;
const playersController = require('../controllers').players;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Ping Pong API!!!',
  }));

  app.post('/api/players', playersController.create);
  app.get('/api/players', playersController.list);
  app.post('/api/games', gamesController.create);
};

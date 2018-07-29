const app = require('./src');
const config = require('./src/config');

app.listen(config.express.port);

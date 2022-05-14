const express = require('express');
const { server } = require('./src/config/config');
const app = express();

const categoryRoutes = require('./src/routes/category');
const invalidRoutes = require('./src/routes/404');

app.use(express.json());

app.use(categoryRoutes);
app.use(invalidRoutes);

app.listen(server.port, () => {
  console.log(`Server is running on port: ${server.port}`);
});

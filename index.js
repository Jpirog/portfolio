require('dotenv').config();
const app = require('./app')

const PORT = process.env.PORT || 8089;
const server = app.listen(PORT, () => {
  console.log(`Portfolio site active and listening on port ${PORT}`)
})

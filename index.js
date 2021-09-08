const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000
const URL = 'mongod --config /opt/homebrew/etc/mongod.conf'

const app = express()

async function start() {
  try {
    await mongoose.connect('', {
      userNewUrlParser: true,
      userFindAndModify: false,
    })
    app.listen(PORT, () => {
      console.log('Server has been started...' + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000
const URL = 'mongodb+srv://root:j!5hvm$5+-X9H9T@cluster0.mpxkg.mongodb.net/todos'

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todoRoutes)

async function start() {
  try {
    await mongoose.connect(URL, {
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

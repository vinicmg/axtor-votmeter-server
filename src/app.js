const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
    .then(() => {        
        app.listen(db.port, () => {
            console.log('Server is running on port 8081')
        })
    });
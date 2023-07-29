import express from 'express'
import routes from './routes/routes'
const app = express()
require('dotenv').config()

require('./database')

app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3030

app.listen(port, () => console.log(`Server running on port ${port}`))
const express = require('express')
const { route } = require('../route.mjs')
const app = express()

route(app)

app.listen(3000)
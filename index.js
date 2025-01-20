import express from 'express'
import { configDotenv } from 'dotenv'
configDotenv()

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/home", (req, res) => {
    res.send("Welcome to the home page!")
})

app.get("/login", (req, res) => {
  res.send("Welcome to the login page!")
  })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
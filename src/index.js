import express from 'express'
import { BotService } from './services/boot.js'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3333

app.post('/instagram', async (req, res) => {
   const { list, username, password } = req.body
   const response = await BotService(list, username, password)
   res.status(response.status).json({ "msg": response.msg })
})

app.listen(PORT, () => {
   console.log(`App is running on port ${PORT}`)
})
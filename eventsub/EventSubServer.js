import express from 'express'
import crypto from 'crypto'
import logger from '../utils/logger.js'

export default class EventSubServer {
  constructor(bot, secret) {
    this.bot = bot
    this.secret = secret
    this.app = express()

    this.app.use(express.json())
    this.app.use(express.json({
      verify: (req, res, buf) => {
        req.rawBody = buf
      }
    }))
    this.app.post('/webhook', this.handleWebhook.bind(this))
    this.app.get('/test', this.handleTest.bind(this))
  }

  start(port = 3000) {
    this.app.listen(port, () => {
      logger(`🚀 EventSub rodando na porta ${port}`)
    })
  }

  handleWebhook(req, res) {
    const type = req.headers['twitch-eventsub-message-type']

    // Challenge
    if (type === 'webhook_callback_verification') {
      return res
        .status(200)
        .type('text/plain')
        .send(req.body.challenge)
    }

    if (type === 'notification') {
      const subType = req.body.subscription.type

      if (subType === 'stream.online') {
        logger('📡 Live ON')
        this.bot.start()
      }

      if (subType === 'stream.offline') {
        logger('📡 Live OFF')
        this.bot.stop()
      }
    }

    res.sendStatus(200)
  }

  handleTest(req, res) {
    res.send("I'm Alive!")
  }
}
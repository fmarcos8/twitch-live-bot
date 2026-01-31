import tmi from 'tmi.js'
import logger from '../utils/logger.js'

export default class TwitchBot {
  #client
  #running = false

  constructor(config, partners) {
    this.config = config
    this.partners = partners
    this.greetings = new Set()
  }

  async start() {
    if (this.#running) return

    this.#client = new tmi.Client({
      options: { debug: true },
      identity: {
        username: this.config.BOT_USERNAME,
        password: this.config.BOT_OAUTH_TOKEN
      },
      channels: [this.config.CHANNEL_NAME]
    })

    await this.#client.connect()
    this.#running = true
    logger('🟢 Bot conectado')

    this.#client.on('message', this.onMessage.bind(this))
  }

  async stop() {
    if (!this.#running) return

    await this.#client.disconnect()
    this.#running = false
    logger('🔴 Bot desconectado')
  }

  onMessage(channel, tags, message, self) {
    if (self) return

    const username = tags.username.toLowerCase()

    if (this.partners.includes(username) && !this.greetings.has(username)) {
      this.#client.say(channel, `Olá olá @${username}! Obrigado pelo apoio! 🔥`)
      this.#client.say(channel, `!s2 ${username}`)
      this.greetings.add(username)
    }
  }
}
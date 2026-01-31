import TwitchBot from "./bot/TwitchBot.js"
import EventSubServer from "./eventsub/EventSubServer.js"
import config from './config/index.js'

const PARTNERS = [] // lista de streamers parceiros

const bot = new TwitchBot(config, PARTNERS)
const eventSub = new EventSubServer(bot, config.EVENTSUB_SECRET)

eventSub.start(3000)
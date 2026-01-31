import TwitchBot from "./bot/TwitchBot.js"
import EventSubServer from "./eventsub/EventSubServer.js"
import config from './config/index.js'

const PARTNERS = [
	'imorih',
	'DrarkoN_GM',
	'hieicwb',
	'zetesys',
	'paulinhorf92',
	'antaresnix',
	'joline_kistner',
	'socorrodedeus',
	'aragaos',
	'luizzakky',
	'kaori_game',
	'sadesabrina_',
	'brdokaus',
	'wellz_17',
	'fabio18_oficial',
	'yamazakii07',
	'tiiazona',
	'the_eduardo_silva',
	'stelzerplay',
	'ttv_assassinsfps'
]

const bot = new TwitchBot(config, PARTNERS)
const eventSub = new EventSubServer(bot, config.EVENTSUB_SECRET)

eventSub.start(3000)
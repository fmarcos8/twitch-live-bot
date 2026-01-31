import dotenv from 'dotenv'
dotenv.config()

const config = {
  // DB: {
  //   host: process.env.DB_HOST,
  //   database: process.env.DB_NAME,
  //   password: process.env.DB_PASSWORD,
  //   user: process.env.DB_USER,
  // },
  // USE_DB: process.env.APP_USE_DB,
  PORT: process.env.APP_PORT || 3000,
  BOT_USERNAME: process.env.APP_BOT_USERNAME,
  BOT_OAUTH_TOKEN: process.env.APP_BOT_OAUTH_TOKEN,
  CHANNEL_NAME: process.env.APP_CHANNEL_NAME,
  API_TOKEN: process.env.APP_API_TOKEN,
  TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
  TWITCH_ACCESS_TOKEN: process.env.TWITCH_ACCESS_TOKEN,
  EVENTSUB_SECRET: process.env.EVENTSUB_SECRET
}

export default config
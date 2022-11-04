import express from 'express'
const app = express()
import { ActivityType, Client, GatewayIntentBits } from 'discord.js'
import { config as dotEnvCfg } from 'dotenv'
dotEnvCfg()
import slashCommands from './src/commands/slashCommands.js'
slashCommands()
import interactionFunction from './src/controllers/Interactions.js'
(async () => {
  const port = process.env.PORT
  
  
  app.use(express.json())

    app.listen(port, () => {
      console.log(`Logged in Express!`)
    })
    
    const bot = new Client({ 
      intents:  [GatewayIntentBits.Guilds
    ] })
  
    bot.login(process.env.TOKEN_APP)
  
    bot.on('ready', () => {
      console.log(`Logged in as ${bot.user.tag}!`)
      bot.user.setPresence({
        activities: [{ name: `TODO-BOT v1.0`, type: ActivityType.Playing }],
        status: 'OLÁ',
      });
    })
    
  
    bot.on('interactionCreate', (interaction) => {
      interactionFunction(interaction)
    })
}
)();

import express from 'express'
const app = express()
import { Client, GatewayIntentBits } from 'discord.js'
import { config as dotEnvCfg } from 'dotenv'
dotEnvCfg()
import slashCommands from './src/commands/slashCommands.js'
slashCommands()
import interactionFunction from './src/controllers/Interactions.js'

(async () => {
  
  
  app.use(express.json())

    app.listen(3000, () => {
      console.log(`Logged!!`)
    })
    
    const bot = new Client({ 
      intents:  [GatewayIntentBits.Guilds
    ] })
  
    bot.login(process.env.TOKEN_APP)
  
    bot.on('ready', () => {
      console.log(`Logged in as ${bot.user.tag}!`);
    })
  
    bot.on('interactionCreate', (interaction) => {
      interactionFunction(interaction)
    })
}
)();

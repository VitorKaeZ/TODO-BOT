import { Client, GatewayIntentBits } from 'discord.js'
import { config as dotEnvCfg } from 'dotenv'
import slashCommands from './commands/slashCommands.js'
import interactionFunction from './controllers/Interactions.js'
dotEnvCfg()
slashCommands()

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